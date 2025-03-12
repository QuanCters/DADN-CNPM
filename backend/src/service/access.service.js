"use strict";

const {
  BadRequestError,
  AuthFailureError,
  ConflictRequestError,
} = require("../core/error.response");
const jwt = require("jsonwebtoken");
const {
  getUserByEmail,
  removeTokenById,
  setTokenById,
  updatePasswordById,
  insertUser,
} = require("../dbs/repositories/user.repo");

const { generateKey } = require("../authUtils/auth");

class AccessService {
  static signup = async ({ email, password, first_name, last_name }) => {
    const foundUser = await getUserByEmail(email);
    if (foundUser) {
      throw new ConflictRequestError("Error: User already registered");
    }

    const hash_password = await generateKey(password);
    const newUser = {
      email,
      password_hash: hash_password.key,
      salt: hash_password.salt,
      first_name: first_name,
      last_name: last_name,
    };

    const result = await insertUser(newUser);

    if (result) {
      return {
        status: 201,
        message: "Signup successfully",
        salt: hash_password.salt,
      };
    } else {
      throw new ConflictRequestError("Error: Can't create account");
    }
  };

  /**
   * 1 - Check email in dbs
   * 2 - match password
   * 3 - create access token
   * 4 - return data
   */
  static login = async ({ email, password }) => {
    const foundUser = await getUserByEmail(email);
    if (!foundUser) {
      throw new BadRequestError("User not found");
    }

    const hash_password = await generateKey(password, foundUser.salt);
    const matchPassword = hash_password.key === foundUser.password_hash;

    if (!matchPassword) {
      throw new AuthFailureError("Invalid password");
    }

    const token = jwt.sign(
      { userId: foundUser.id, email: foundUser.email },
      process.env.SECREC_KEY || "HCMUT"
    );

    const setToken = await setTokenById(token, foundUser.id);

    if (!setToken) {
      throw new BadRequestError("Failed to save access token");
    }

    return {
      status: 200,
      message: "Login successfully",
      access_token: token,
      userId: foundUser.id,
      salt: foundUser.salt,
    };
  };

  static logout = async ({ access_token, id }) => {
    if (!access_token) {
      throw new BadRequestError("Bad Requests");
    }

    const deleteToken = await removeTokenById(id);
    if (!deleteToken) {
      throw new BadRequestError("Failed to logout");
    }

    return {
      status: 200,
      message: "Logout Successfully",
    };
  };

  static resetPassword = async ({ email, password }) => {
    const foundUser = await getUserByEmail(email);
    if (!foundUser) {
      throw new BadRequestError("User not found");
    }

    const { key, salt } = await generateKey(password);
    const updatePassword = await updatePasswordById(key, salt, foundUser.id);
    if (!updatePassword) {
      throw new BadRequestError("Failed to update password");
    }

    return {
      status: 200,
      message: "Reset password successfully",
      salt: salt,
    };
  };
}

module.exports = AccessService;
