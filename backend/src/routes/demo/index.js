const router = require("express").Router();
const { asyncHandler } = require("../../helper/asyncHandler");
const { sendFCMMessage } = require("../../utils/FCM");

router.get(
  "/",
  asyncHandler((req, res) => {
    return res.status(200).json({ message: "OK" });
  })
);

router.post("/demo/noti", async (req, res) => {
  const body = req.body;
  if (!body.token) {
    return res.status(400).send({ error: "Token is required" });
  }
  const payload = {
    notification: {
      title: "Thông báo mới",
      body: "Cửa chính đã mở",
    },
    data: {
      type: "DOOR_OPEN",
      timestamp: Date.now().toString(),
    },
  };
  try {
    const response = await sendFCMMessage(body.token, payload);
    res.status(200).send({ message: "Notification send successfully" });
  } catch (error) {
    console.error("Error sending FCM message:", error);
    res.status(500).send({ error: "Failed to send notification" });
  }
});

module.exports = router;
