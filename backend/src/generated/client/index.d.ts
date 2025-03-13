
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model user_in_home
 * 
 */
export type user_in_home = $Result.DefaultSelection<Prisma.$user_in_homePayload>
/**
 * Model device
 * 
 */
export type device = $Result.DefaultSelection<Prisma.$devicePayload>
/**
 * Model measurement
 * 
 */
export type measurement = $Result.DefaultSelection<Prisma.$measurementPayload>
/**
 * Model schedule
 * 
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>
/**
 * Model log_event
 * 
 */
export type log_event = $Result.DefaultSelection<Prisma.$log_eventPayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>
/**
 * Model device_have_notification
 * 
 */
export type device_have_notification = $Result.DefaultSelection<Prisma.$device_have_notificationPayload>
/**
 * Model home
 * 
 */
export type home = $Result.DefaultSelection<Prisma.$homePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_in_home`: Exposes CRUD operations for the **user_in_home** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_in_homes
    * const user_in_homes = await prisma.user_in_home.findMany()
    * ```
    */
  get user_in_home(): Prisma.user_in_homeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.deviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measurement`: Exposes CRUD operations for the **measurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurement.findMany()
    * ```
    */
  get measurement(): Prisma.measurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.scheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log_event`: Exposes CRUD operations for the **log_event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_events
    * const log_events = await prisma.log_event.findMany()
    * ```
    */
  get log_event(): Prisma.log_eventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device_have_notification`: Exposes CRUD operations for the **device_have_notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Device_have_notifications
    * const device_have_notifications = await prisma.device_have_notification.findMany()
    * ```
    */
  get device_have_notification(): Prisma.device_have_notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.home`: Exposes CRUD operations for the **home** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homes
    * const homes = await prisma.home.findMany()
    * ```
    */
  get home(): Prisma.homeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    user_in_home: 'user_in_home',
    device: 'device',
    measurement: 'measurement',
    schedule: 'schedule',
    log_event: 'log_event',
    notification: 'notification',
    device_have_notification: 'device_have_notification',
    home: 'home'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "user_in_home" | "device" | "measurement" | "schedule" | "log_event" | "notification" | "device_have_notification" | "home"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      user_in_home: {
        payload: Prisma.$user_in_homePayload<ExtArgs>
        fields: Prisma.user_in_homeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_in_homeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_in_homeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>
          }
          findFirst: {
            args: Prisma.user_in_homeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_in_homeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>
          }
          findMany: {
            args: Prisma.user_in_homeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>[]
          }
          create: {
            args: Prisma.user_in_homeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>
          }
          createMany: {
            args: Prisma.user_in_homeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_in_homeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>[]
          }
          delete: {
            args: Prisma.user_in_homeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>
          }
          update: {
            args: Prisma.user_in_homeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>
          }
          deleteMany: {
            args: Prisma.user_in_homeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_in_homeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_in_homeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>[]
          }
          upsert: {
            args: Prisma.user_in_homeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_in_homePayload>
          }
          aggregate: {
            args: Prisma.User_in_homeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_in_home>
          }
          groupBy: {
            args: Prisma.user_in_homeGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_in_homeGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_in_homeCountArgs<ExtArgs>
            result: $Utils.Optional<User_in_homeCountAggregateOutputType> | number
          }
        }
      }
      device: {
        payload: Prisma.$devicePayload<ExtArgs>
        fields: Prisma.deviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findFirst: {
            args: Prisma.deviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findMany: {
            args: Prisma.deviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>[]
          }
          create: {
            args: Prisma.deviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          createMany: {
            args: Prisma.deviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.deviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>[]
          }
          delete: {
            args: Prisma.deviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          update: {
            args: Prisma.deviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          deleteMany: {
            args: Prisma.deviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.deviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>[]
          }
          upsert: {
            args: Prisma.deviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.deviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.deviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      measurement: {
        payload: Prisma.$measurementPayload<ExtArgs>
        fields: Prisma.measurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.measurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.measurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          findFirst: {
            args: Prisma.measurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.measurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          findMany: {
            args: Prisma.measurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>[]
          }
          create: {
            args: Prisma.measurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          createMany: {
            args: Prisma.measurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.measurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>[]
          }
          delete: {
            args: Prisma.measurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          update: {
            args: Prisma.measurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          deleteMany: {
            args: Prisma.measurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.measurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.measurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>[]
          }
          upsert: {
            args: Prisma.measurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$measurementPayload>
          }
          aggregate: {
            args: Prisma.MeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurement>
          }
          groupBy: {
            args: Prisma.measurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.measurementCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementCountAggregateOutputType> | number
          }
        }
      }
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>
        fields: Prisma.scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.scheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.scheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      log_event: {
        payload: Prisma.$log_eventPayload<ExtArgs>
        fields: Prisma.log_eventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.log_eventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.log_eventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>
          }
          findFirst: {
            args: Prisma.log_eventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.log_eventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>
          }
          findMany: {
            args: Prisma.log_eventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>[]
          }
          create: {
            args: Prisma.log_eventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>
          }
          createMany: {
            args: Prisma.log_eventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.log_eventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>[]
          }
          delete: {
            args: Prisma.log_eventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>
          }
          update: {
            args: Prisma.log_eventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>
          }
          deleteMany: {
            args: Prisma.log_eventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.log_eventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.log_eventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>[]
          }
          upsert: {
            args: Prisma.log_eventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_eventPayload>
          }
          aggregate: {
            args: Prisma.Log_eventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog_event>
          }
          groupBy: {
            args: Prisma.log_eventGroupByArgs<ExtArgs>
            result: $Utils.Optional<Log_eventGroupByOutputType>[]
          }
          count: {
            args: Prisma.log_eventCountArgs<ExtArgs>
            result: $Utils.Optional<Log_eventCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      device_have_notification: {
        payload: Prisma.$device_have_notificationPayload<ExtArgs>
        fields: Prisma.device_have_notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.device_have_notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.device_have_notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>
          }
          findFirst: {
            args: Prisma.device_have_notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.device_have_notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>
          }
          findMany: {
            args: Prisma.device_have_notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>[]
          }
          create: {
            args: Prisma.device_have_notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>
          }
          createMany: {
            args: Prisma.device_have_notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.device_have_notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>[]
          }
          delete: {
            args: Prisma.device_have_notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>
          }
          update: {
            args: Prisma.device_have_notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>
          }
          deleteMany: {
            args: Prisma.device_have_notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.device_have_notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.device_have_notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>[]
          }
          upsert: {
            args: Prisma.device_have_notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_have_notificationPayload>
          }
          aggregate: {
            args: Prisma.Device_have_notificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice_have_notification>
          }
          groupBy: {
            args: Prisma.device_have_notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Device_have_notificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.device_have_notificationCountArgs<ExtArgs>
            result: $Utils.Optional<Device_have_notificationCountAggregateOutputType> | number
          }
        }
      }
      home: {
        payload: Prisma.$homePayload<ExtArgs>
        fields: Prisma.homeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.homeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.homeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>
          }
          findFirst: {
            args: Prisma.homeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.homeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>
          }
          findMany: {
            args: Prisma.homeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>[]
          }
          create: {
            args: Prisma.homeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>
          }
          createMany: {
            args: Prisma.homeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.homeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>[]
          }
          delete: {
            args: Prisma.homeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>
          }
          update: {
            args: Prisma.homeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>
          }
          deleteMany: {
            args: Prisma.homeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.homeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.homeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>[]
          }
          upsert: {
            args: Prisma.homeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$homePayload>
          }
          aggregate: {
            args: Prisma.HomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHome>
          }
          groupBy: {
            args: Prisma.homeGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.homeCountArgs<ExtArgs>
            result: $Utils.Optional<HomeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    user_in_home?: user_in_homeOmit
    device?: deviceOmit
    measurement?: measurementOmit
    schedule?: scheduleOmit
    log_event?: log_eventOmit
    notification?: notificationOmit
    device_have_notification?: device_have_notificationOmit
    home?: homeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_in_home: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_in_home?: boolean | UsersCountOutputTypeCountUser_in_homeArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_in_homeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_in_homeWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    measurement: number
    schedule: number
    log_event: number
    device_have_notification: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurement?: boolean | DeviceCountOutputTypeCountMeasurementArgs
    schedule?: boolean | DeviceCountOutputTypeCountScheduleArgs
    log_event?: boolean | DeviceCountOutputTypeCountLog_eventArgs
    device_have_notification?: boolean | DeviceCountOutputTypeCountDevice_have_notificationArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountMeasurementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: measurementWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountLog_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_eventWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDevice_have_notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: device_have_notificationWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    device_have_notification: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device_have_notification?: boolean | NotificationCountOutputTypeCountDevice_have_notificationArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountDevice_have_notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: device_have_notificationWhereInput
  }


  /**
   * Count Type HomeCountOutputType
   */

  export type HomeCountOutputType = {
    device: number
    user_in_home: number
  }

  export type HomeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | HomeCountOutputTypeCountDeviceArgs
    user_in_home?: boolean | HomeCountOutputTypeCountUser_in_homeArgs
  }

  // Custom InputTypes
  /**
   * HomeCountOutputType without action
   */
  export type HomeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeCountOutputType
     */
    select?: HomeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomeCountOutputType without action
   */
  export type HomeCountOutputTypeCountDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviceWhereInput
  }

  /**
   * HomeCountOutputType without action
   */
  export type HomeCountOutputTypeCountUser_in_homeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_in_homeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    access_token: string | null
    salt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password_hash: string | null
    access_token: string | null
    salt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password_hash: number
    access_token: number
    salt: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    access_token?: true
    salt?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    access_token?: true
    salt?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password_hash?: true
    access_token?: true
    salt?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    access_token: string | null
    salt: string | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    access_token?: boolean
    salt?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_in_home?: boolean | users$user_in_homeArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    access_token?: boolean
    salt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    access_token?: boolean
    salt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password_hash?: boolean
    access_token?: boolean
    salt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "password_hash" | "access_token" | "salt" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_in_home?: boolean | users$user_in_homeArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_in_home: Prisma.$user_in_homePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password_hash: string
      access_token: string | null
      salt: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_in_home<T extends users$user_in_homeArgs<ExtArgs> = {}>(args?: Subset<T, users$user_in_homeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly access_token: FieldRef<"users", 'String'>
    readonly salt: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.user_in_home
   */
  export type users$user_in_homeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    where?: user_in_homeWhereInput
    orderBy?: user_in_homeOrderByWithRelationInput | user_in_homeOrderByWithRelationInput[]
    cursor?: user_in_homeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_in_homeScalarFieldEnum | User_in_homeScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model user_in_home
   */

  export type AggregateUser_in_home = {
    _count: User_in_homeCountAggregateOutputType | null
    _avg: User_in_homeAvgAggregateOutputType | null
    _sum: User_in_homeSumAggregateOutputType | null
    _min: User_in_homeMinAggregateOutputType | null
    _max: User_in_homeMaxAggregateOutputType | null
  }

  export type User_in_homeAvgAggregateOutputType = {
    home_id: number | null
  }

  export type User_in_homeSumAggregateOutputType = {
    home_id: number | null
  }

  export type User_in_homeMinAggregateOutputType = {
    user_email: string | null
    home_id: number | null
  }

  export type User_in_homeMaxAggregateOutputType = {
    user_email: string | null
    home_id: number | null
  }

  export type User_in_homeCountAggregateOutputType = {
    user_email: number
    home_id: number
    _all: number
  }


  export type User_in_homeAvgAggregateInputType = {
    home_id?: true
  }

  export type User_in_homeSumAggregateInputType = {
    home_id?: true
  }

  export type User_in_homeMinAggregateInputType = {
    user_email?: true
    home_id?: true
  }

  export type User_in_homeMaxAggregateInputType = {
    user_email?: true
    home_id?: true
  }

  export type User_in_homeCountAggregateInputType = {
    user_email?: true
    home_id?: true
    _all?: true
  }

  export type User_in_homeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_in_home to aggregate.
     */
    where?: user_in_homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_in_homes to fetch.
     */
    orderBy?: user_in_homeOrderByWithRelationInput | user_in_homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_in_homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_in_homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_in_homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_in_homes
    **/
    _count?: true | User_in_homeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_in_homeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_in_homeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_in_homeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_in_homeMaxAggregateInputType
  }

  export type GetUser_in_homeAggregateType<T extends User_in_homeAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_in_home]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_in_home[P]>
      : GetScalarType<T[P], AggregateUser_in_home[P]>
  }




  export type user_in_homeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_in_homeWhereInput
    orderBy?: user_in_homeOrderByWithAggregationInput | user_in_homeOrderByWithAggregationInput[]
    by: User_in_homeScalarFieldEnum[] | User_in_homeScalarFieldEnum
    having?: user_in_homeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_in_homeCountAggregateInputType | true
    _avg?: User_in_homeAvgAggregateInputType
    _sum?: User_in_homeSumAggregateInputType
    _min?: User_in_homeMinAggregateInputType
    _max?: User_in_homeMaxAggregateInputType
  }

  export type User_in_homeGroupByOutputType = {
    user_email: string
    home_id: number
    _count: User_in_homeCountAggregateOutputType | null
    _avg: User_in_homeAvgAggregateOutputType | null
    _sum: User_in_homeSumAggregateOutputType | null
    _min: User_in_homeMinAggregateOutputType | null
    _max: User_in_homeMaxAggregateOutputType | null
  }

  type GetUser_in_homeGroupByPayload<T extends user_in_homeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_in_homeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_in_homeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_in_homeGroupByOutputType[P]>
            : GetScalarType<T[P], User_in_homeGroupByOutputType[P]>
        }
      >
    >


  export type user_in_homeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_email?: boolean
    home_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_in_home"]>

  export type user_in_homeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_email?: boolean
    home_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_in_home"]>

  export type user_in_homeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_email?: boolean
    home_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_in_home"]>

  export type user_in_homeSelectScalar = {
    user_email?: boolean
    home_id?: boolean
  }

  export type user_in_homeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_email" | "home_id", ExtArgs["result"]["user_in_home"]>
  export type user_in_homeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
  }
  export type user_in_homeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
  }
  export type user_in_homeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
  }

  export type $user_in_homePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_in_home"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      home: Prisma.$homePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_email: string
      home_id: number
    }, ExtArgs["result"]["user_in_home"]>
    composites: {}
  }

  type user_in_homeGetPayload<S extends boolean | null | undefined | user_in_homeDefaultArgs> = $Result.GetResult<Prisma.$user_in_homePayload, S>

  type user_in_homeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_in_homeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_in_homeCountAggregateInputType | true
    }

  export interface user_in_homeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_in_home'], meta: { name: 'user_in_home' } }
    /**
     * Find zero or one User_in_home that matches the filter.
     * @param {user_in_homeFindUniqueArgs} args - Arguments to find a User_in_home
     * @example
     * // Get one User_in_home
     * const user_in_home = await prisma.user_in_home.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_in_homeFindUniqueArgs>(args: SelectSubset<T, user_in_homeFindUniqueArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User_in_home that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_in_homeFindUniqueOrThrowArgs} args - Arguments to find a User_in_home
     * @example
     * // Get one User_in_home
     * const user_in_home = await prisma.user_in_home.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_in_homeFindUniqueOrThrowArgs>(args: SelectSubset<T, user_in_homeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User_in_home that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_in_homeFindFirstArgs} args - Arguments to find a User_in_home
     * @example
     * // Get one User_in_home
     * const user_in_home = await prisma.user_in_home.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_in_homeFindFirstArgs>(args?: SelectSubset<T, user_in_homeFindFirstArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User_in_home that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_in_homeFindFirstOrThrowArgs} args - Arguments to find a User_in_home
     * @example
     * // Get one User_in_home
     * const user_in_home = await prisma.user_in_home.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_in_homeFindFirstOrThrowArgs>(args?: SelectSubset<T, user_in_homeFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more User_in_homes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_in_homeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_in_homes
     * const user_in_homes = await prisma.user_in_home.findMany()
     * 
     * // Get first 10 User_in_homes
     * const user_in_homes = await prisma.user_in_home.findMany({ take: 10 })
     * 
     * // Only select the `user_email`
     * const user_in_homeWithUser_emailOnly = await prisma.user_in_home.findMany({ select: { user_email: true } })
     * 
     */
    findMany<T extends user_in_homeFindManyArgs>(args?: SelectSubset<T, user_in_homeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User_in_home.
     * @param {user_in_homeCreateArgs} args - Arguments to create a User_in_home.
     * @example
     * // Create one User_in_home
     * const User_in_home = await prisma.user_in_home.create({
     *   data: {
     *     // ... data to create a User_in_home
     *   }
     * })
     * 
     */
    create<T extends user_in_homeCreateArgs>(args: SelectSubset<T, user_in_homeCreateArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many User_in_homes.
     * @param {user_in_homeCreateManyArgs} args - Arguments to create many User_in_homes.
     * @example
     * // Create many User_in_homes
     * const user_in_home = await prisma.user_in_home.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_in_homeCreateManyArgs>(args?: SelectSubset<T, user_in_homeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_in_homes and returns the data saved in the database.
     * @param {user_in_homeCreateManyAndReturnArgs} args - Arguments to create many User_in_homes.
     * @example
     * // Create many User_in_homes
     * const user_in_home = await prisma.user_in_home.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_in_homes and only return the `user_email`
     * const user_in_homeWithUser_emailOnly = await prisma.user_in_home.createManyAndReturn({
     *   select: { user_email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_in_homeCreateManyAndReturnArgs>(args?: SelectSubset<T, user_in_homeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User_in_home.
     * @param {user_in_homeDeleteArgs} args - Arguments to delete one User_in_home.
     * @example
     * // Delete one User_in_home
     * const User_in_home = await prisma.user_in_home.delete({
     *   where: {
     *     // ... filter to delete one User_in_home
     *   }
     * })
     * 
     */
    delete<T extends user_in_homeDeleteArgs>(args: SelectSubset<T, user_in_homeDeleteArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User_in_home.
     * @param {user_in_homeUpdateArgs} args - Arguments to update one User_in_home.
     * @example
     * // Update one User_in_home
     * const user_in_home = await prisma.user_in_home.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_in_homeUpdateArgs>(args: SelectSubset<T, user_in_homeUpdateArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more User_in_homes.
     * @param {user_in_homeDeleteManyArgs} args - Arguments to filter User_in_homes to delete.
     * @example
     * // Delete a few User_in_homes
     * const { count } = await prisma.user_in_home.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_in_homeDeleteManyArgs>(args?: SelectSubset<T, user_in_homeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_in_homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_in_homeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_in_homes
     * const user_in_home = await prisma.user_in_home.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_in_homeUpdateManyArgs>(args: SelectSubset<T, user_in_homeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_in_homes and returns the data updated in the database.
     * @param {user_in_homeUpdateManyAndReturnArgs} args - Arguments to update many User_in_homes.
     * @example
     * // Update many User_in_homes
     * const user_in_home = await prisma.user_in_home.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_in_homes and only return the `user_email`
     * const user_in_homeWithUser_emailOnly = await prisma.user_in_home.updateManyAndReturn({
     *   select: { user_email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_in_homeUpdateManyAndReturnArgs>(args: SelectSubset<T, user_in_homeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User_in_home.
     * @param {user_in_homeUpsertArgs} args - Arguments to update or create a User_in_home.
     * @example
     * // Update or create a User_in_home
     * const user_in_home = await prisma.user_in_home.upsert({
     *   create: {
     *     // ... data to create a User_in_home
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_in_home we want to update
     *   }
     * })
     */
    upsert<T extends user_in_homeUpsertArgs>(args: SelectSubset<T, user_in_homeUpsertArgs<ExtArgs>>): Prisma__user_in_homeClient<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of User_in_homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_in_homeCountArgs} args - Arguments to filter User_in_homes to count.
     * @example
     * // Count the number of User_in_homes
     * const count = await prisma.user_in_home.count({
     *   where: {
     *     // ... the filter for the User_in_homes we want to count
     *   }
     * })
    **/
    count<T extends user_in_homeCountArgs>(
      args?: Subset<T, user_in_homeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_in_homeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_in_home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_in_homeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_in_homeAggregateArgs>(args: Subset<T, User_in_homeAggregateArgs>): Prisma.PrismaPromise<GetUser_in_homeAggregateType<T>>

    /**
     * Group by User_in_home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_in_homeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_in_homeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_in_homeGroupByArgs['orderBy'] }
        : { orderBy?: user_in_homeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_in_homeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_in_homeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_in_home model
   */
  readonly fields: user_in_homeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_in_home.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_in_homeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    home<T extends homeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, homeDefaultArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_in_home model
   */ 
  interface user_in_homeFieldRefs {
    readonly user_email: FieldRef<"user_in_home", 'String'>
    readonly home_id: FieldRef<"user_in_home", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_in_home findUnique
   */
  export type user_in_homeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * Filter, which user_in_home to fetch.
     */
    where: user_in_homeWhereUniqueInput
  }

  /**
   * user_in_home findUniqueOrThrow
   */
  export type user_in_homeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * Filter, which user_in_home to fetch.
     */
    where: user_in_homeWhereUniqueInput
  }

  /**
   * user_in_home findFirst
   */
  export type user_in_homeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * Filter, which user_in_home to fetch.
     */
    where?: user_in_homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_in_homes to fetch.
     */
    orderBy?: user_in_homeOrderByWithRelationInput | user_in_homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_in_homes.
     */
    cursor?: user_in_homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_in_homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_in_homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_in_homes.
     */
    distinct?: User_in_homeScalarFieldEnum | User_in_homeScalarFieldEnum[]
  }

  /**
   * user_in_home findFirstOrThrow
   */
  export type user_in_homeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * Filter, which user_in_home to fetch.
     */
    where?: user_in_homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_in_homes to fetch.
     */
    orderBy?: user_in_homeOrderByWithRelationInput | user_in_homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_in_homes.
     */
    cursor?: user_in_homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_in_homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_in_homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_in_homes.
     */
    distinct?: User_in_homeScalarFieldEnum | User_in_homeScalarFieldEnum[]
  }

  /**
   * user_in_home findMany
   */
  export type user_in_homeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * Filter, which user_in_homes to fetch.
     */
    where?: user_in_homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_in_homes to fetch.
     */
    orderBy?: user_in_homeOrderByWithRelationInput | user_in_homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_in_homes.
     */
    cursor?: user_in_homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_in_homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_in_homes.
     */
    skip?: number
    distinct?: User_in_homeScalarFieldEnum | User_in_homeScalarFieldEnum[]
  }

  /**
   * user_in_home create
   */
  export type user_in_homeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * The data needed to create a user_in_home.
     */
    data: XOR<user_in_homeCreateInput, user_in_homeUncheckedCreateInput>
  }

  /**
   * user_in_home createMany
   */
  export type user_in_homeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_in_homes.
     */
    data: user_in_homeCreateManyInput | user_in_homeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_in_home createManyAndReturn
   */
  export type user_in_homeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * The data used to create many user_in_homes.
     */
    data: user_in_homeCreateManyInput | user_in_homeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_in_home update
   */
  export type user_in_homeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * The data needed to update a user_in_home.
     */
    data: XOR<user_in_homeUpdateInput, user_in_homeUncheckedUpdateInput>
    /**
     * Choose, which user_in_home to update.
     */
    where: user_in_homeWhereUniqueInput
  }

  /**
   * user_in_home updateMany
   */
  export type user_in_homeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_in_homes.
     */
    data: XOR<user_in_homeUpdateManyMutationInput, user_in_homeUncheckedUpdateManyInput>
    /**
     * Filter which user_in_homes to update
     */
    where?: user_in_homeWhereInput
    /**
     * Limit how many user_in_homes to update.
     */
    limit?: number
  }

  /**
   * user_in_home updateManyAndReturn
   */
  export type user_in_homeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * The data used to update user_in_homes.
     */
    data: XOR<user_in_homeUpdateManyMutationInput, user_in_homeUncheckedUpdateManyInput>
    /**
     * Filter which user_in_homes to update
     */
    where?: user_in_homeWhereInput
    /**
     * Limit how many user_in_homes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_in_home upsert
   */
  export type user_in_homeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * The filter to search for the user_in_home to update in case it exists.
     */
    where: user_in_homeWhereUniqueInput
    /**
     * In case the user_in_home found by the `where` argument doesn't exist, create a new user_in_home with this data.
     */
    create: XOR<user_in_homeCreateInput, user_in_homeUncheckedCreateInput>
    /**
     * In case the user_in_home was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_in_homeUpdateInput, user_in_homeUncheckedUpdateInput>
  }

  /**
   * user_in_home delete
   */
  export type user_in_homeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    /**
     * Filter which user_in_home to delete.
     */
    where: user_in_homeWhereUniqueInput
  }

  /**
   * user_in_home deleteMany
   */
  export type user_in_homeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_in_homes to delete
     */
    where?: user_in_homeWhereInput
    /**
     * Limit how many user_in_homes to delete.
     */
    limit?: number
  }

  /**
   * user_in_home without action
   */
  export type user_in_homeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
  }


  /**
   * Model device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    status: string | null
    type: string | null
    power_rating: string | null
    room_name: string | null
    password: string | null
    serial_number: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    status: string | null
    type: string | null
    power_rating: string | null
    room_name: string | null
    password: string | null
    serial_number: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    status: number
    type: number
    power_rating: number
    room_name: number
    password: number
    serial_number: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    status?: true
    type?: true
    power_rating?: true
    room_name?: true
    password?: true
    serial_number?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    status?: true
    type?: true
    power_rating?: true
    room_name?: true
    password?: true
    serial_number?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    status?: true
    type?: true
    power_rating?: true
    room_name?: true
    password?: true
    serial_number?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device to aggregate.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type deviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviceWhereInput
    orderBy?: deviceOrderByWithAggregationInput | deviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: deviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    serial_number: string
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends deviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type deviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    type?: boolean
    power_rating?: boolean
    room_name?: boolean
    password?: boolean
    serial_number?: boolean
    measurement?: boolean | device$measurementArgs<ExtArgs>
    schedule?: boolean | device$scheduleArgs<ExtArgs>
    log_event?: boolean | device$log_eventArgs<ExtArgs>
    device_have_notification?: boolean | device$device_have_notificationArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type deviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    type?: boolean
    power_rating?: boolean
    room_name?: boolean
    password?: boolean
    serial_number?: boolean
    home?: boolean | homeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type deviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    type?: boolean
    power_rating?: boolean
    room_name?: boolean
    password?: boolean
    serial_number?: boolean
    home?: boolean | homeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type deviceSelectScalar = {
    id?: boolean
    status?: boolean
    type?: boolean
    power_rating?: boolean
    room_name?: boolean
    password?: boolean
    serial_number?: boolean
  }

  export type deviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "type" | "power_rating" | "room_name" | "password" | "serial_number", ExtArgs["result"]["device"]>
  export type deviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurement?: boolean | device$measurementArgs<ExtArgs>
    schedule?: boolean | device$scheduleArgs<ExtArgs>
    log_event?: boolean | device$log_eventArgs<ExtArgs>
    device_have_notification?: boolean | device$device_have_notificationArgs<ExtArgs>
    home?: boolean | homeDefaultArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type deviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home?: boolean | homeDefaultArgs<ExtArgs>
  }
  export type deviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home?: boolean | homeDefaultArgs<ExtArgs>
  }

  export type $devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device"
    objects: {
      measurement: Prisma.$measurementPayload<ExtArgs>[]
      schedule: Prisma.$schedulePayload<ExtArgs>[]
      log_event: Prisma.$log_eventPayload<ExtArgs>[]
      device_have_notification: Prisma.$device_have_notificationPayload<ExtArgs>[]
      home: Prisma.$homePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      type: string
      power_rating: string
      room_name: string
      password: string
      serial_number: string
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type deviceGetPayload<S extends boolean | null | undefined | deviceDefaultArgs> = $Result.GetResult<Prisma.$devicePayload, S>

  type deviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface deviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device'], meta: { name: 'device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {deviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deviceFindUniqueArgs>(args: SelectSubset<T, deviceFindUniqueArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deviceFindUniqueOrThrowArgs>(args: SelectSubset<T, deviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deviceFindFirstArgs>(args?: SelectSubset<T, deviceFindFirstArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deviceFindFirstOrThrowArgs>(args?: SelectSubset<T, deviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends deviceFindManyArgs>(args?: SelectSubset<T, deviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Device.
     * @param {deviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends deviceCreateArgs>(args: SelectSubset<T, deviceCreateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Devices.
     * @param {deviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deviceCreateManyArgs>(args?: SelectSubset<T, deviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {deviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends deviceCreateManyAndReturnArgs>(args?: SelectSubset<T, deviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Device.
     * @param {deviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends deviceDeleteArgs>(args: SelectSubset<T, deviceDeleteArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Device.
     * @param {deviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deviceUpdateArgs>(args: SelectSubset<T, deviceUpdateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Devices.
     * @param {deviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deviceDeleteManyArgs>(args?: SelectSubset<T, deviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deviceUpdateManyArgs>(args: SelectSubset<T, deviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {deviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends deviceUpdateManyAndReturnArgs>(args: SelectSubset<T, deviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Device.
     * @param {deviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends deviceUpsertArgs>(args: SelectSubset<T, deviceUpsertArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends deviceCountArgs>(
      args?: Subset<T, deviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends deviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deviceGroupByArgs['orderBy'] }
        : { orderBy?: deviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, deviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device model
   */
  readonly fields: deviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    measurement<T extends device$measurementArgs<ExtArgs> = {}>(args?: Subset<T, device$measurementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    schedule<T extends device$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, device$scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    log_event<T extends device$log_eventArgs<ExtArgs> = {}>(args?: Subset<T, device$log_eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    device_have_notification<T extends device$device_have_notificationArgs<ExtArgs> = {}>(args?: Subset<T, device$device_have_notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    home<T extends homeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, homeDefaultArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the device model
   */ 
  interface deviceFieldRefs {
    readonly id: FieldRef<"device", 'Int'>
    readonly status: FieldRef<"device", 'String'>
    readonly type: FieldRef<"device", 'String'>
    readonly power_rating: FieldRef<"device", 'String'>
    readonly room_name: FieldRef<"device", 'String'>
    readonly password: FieldRef<"device", 'String'>
    readonly serial_number: FieldRef<"device", 'String'>
  }
    

  // Custom InputTypes
  /**
   * device findUnique
   */
  export type deviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findUniqueOrThrow
   */
  export type deviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findFirst
   */
  export type deviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findFirstOrThrow
   */
  export type deviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findMany
   */
  export type deviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which devices to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device create
   */
  export type deviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The data needed to create a device.
     */
    data: XOR<deviceCreateInput, deviceUncheckedCreateInput>
  }

  /**
   * device createMany
   */
  export type deviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devices.
     */
    data: deviceCreateManyInput | deviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device createManyAndReturn
   */
  export type deviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * The data used to create many devices.
     */
    data: deviceCreateManyInput | deviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * device update
   */
  export type deviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The data needed to update a device.
     */
    data: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
    /**
     * Choose, which device to update.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device updateMany
   */
  export type deviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devices.
     */
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyInput>
    /**
     * Filter which devices to update
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to update.
     */
    limit?: number
  }

  /**
   * device updateManyAndReturn
   */
  export type deviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * The data used to update devices.
     */
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyInput>
    /**
     * Filter which devices to update
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * device upsert
   */
  export type deviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The filter to search for the device to update in case it exists.
     */
    where: deviceWhereUniqueInput
    /**
     * In case the device found by the `where` argument doesn't exist, create a new device with this data.
     */
    create: XOR<deviceCreateInput, deviceUncheckedCreateInput>
    /**
     * In case the device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
  }

  /**
   * device delete
   */
  export type deviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter which device to delete.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device deleteMany
   */
  export type deviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devices to delete
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to delete.
     */
    limit?: number
  }

  /**
   * device.measurement
   */
  export type device$measurementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    where?: measurementWhereInput
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    cursor?: measurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * device.schedule
   */
  export type device$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    cursor?: scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * device.log_event
   */
  export type device$log_eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    where?: log_eventWhereInput
    orderBy?: log_eventOrderByWithRelationInput | log_eventOrderByWithRelationInput[]
    cursor?: log_eventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Log_eventScalarFieldEnum | Log_eventScalarFieldEnum[]
  }

  /**
   * device.device_have_notification
   */
  export type device$device_have_notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    where?: device_have_notificationWhereInput
    orderBy?: device_have_notificationOrderByWithRelationInput | device_have_notificationOrderByWithRelationInput[]
    cursor?: device_have_notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Device_have_notificationScalarFieldEnum | Device_have_notificationScalarFieldEnum[]
  }

  /**
   * device without action
   */
  export type deviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
  }


  /**
   * Model measurement
   */

  export type AggregateMeasurement = {
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  export type MeasurementAvgAggregateOutputType = {
    id: number | null
    consumption: number | null
    device_id: number | null
  }

  export type MeasurementSumAggregateOutputType = {
    id: number | null
    consumption: number | null
    device_id: number | null
  }

  export type MeasurementMinAggregateOutputType = {
    id: number | null
    usage_time: Date | null
    consumption: number | null
    device_id: number | null
  }

  export type MeasurementMaxAggregateOutputType = {
    id: number | null
    usage_time: Date | null
    consumption: number | null
    device_id: number | null
  }

  export type MeasurementCountAggregateOutputType = {
    id: number
    usage_time: number
    consumption: number
    device_id: number
    _all: number
  }


  export type MeasurementAvgAggregateInputType = {
    id?: true
    consumption?: true
    device_id?: true
  }

  export type MeasurementSumAggregateInputType = {
    id?: true
    consumption?: true
    device_id?: true
  }

  export type MeasurementMinAggregateInputType = {
    id?: true
    usage_time?: true
    consumption?: true
    device_id?: true
  }

  export type MeasurementMaxAggregateInputType = {
    id?: true
    usage_time?: true
    consumption?: true
    device_id?: true
  }

  export type MeasurementCountAggregateInputType = {
    id?: true
    usage_time?: true
    consumption?: true
    device_id?: true
    _all?: true
  }

  export type MeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which measurement to aggregate.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned measurements
    **/
    _count?: true | MeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementMaxAggregateInputType
  }

  export type GetMeasurementAggregateType<T extends MeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurement[P]>
      : GetScalarType<T[P], AggregateMeasurement[P]>
  }




  export type measurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: measurementWhereInput
    orderBy?: measurementOrderByWithAggregationInput | measurementOrderByWithAggregationInput[]
    by: MeasurementScalarFieldEnum[] | MeasurementScalarFieldEnum
    having?: measurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementCountAggregateInputType | true
    _avg?: MeasurementAvgAggregateInputType
    _sum?: MeasurementSumAggregateInputType
    _min?: MeasurementMinAggregateInputType
    _max?: MeasurementMaxAggregateInputType
  }

  export type MeasurementGroupByOutputType = {
    id: number
    usage_time: Date
    consumption: number | null
    device_id: number | null
    _count: MeasurementCountAggregateOutputType | null
    _avg: MeasurementAvgAggregateOutputType | null
    _sum: MeasurementSumAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  type GetMeasurementGroupByPayload<T extends measurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
        }
      >
    >


  export type measurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usage_time?: boolean
    consumption?: boolean
    device_id?: boolean
    device?: boolean | measurement$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type measurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usage_time?: boolean
    consumption?: boolean
    device_id?: boolean
    device?: boolean | measurement$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type measurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usage_time?: boolean
    consumption?: boolean
    device_id?: boolean
    device?: boolean | measurement$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type measurementSelectScalar = {
    id?: boolean
    usage_time?: boolean
    consumption?: boolean
    device_id?: boolean
  }

  export type measurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usage_time" | "consumption" | "device_id", ExtArgs["result"]["measurement"]>
  export type measurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | measurement$deviceArgs<ExtArgs>
  }
  export type measurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | measurement$deviceArgs<ExtArgs>
  }
  export type measurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | measurement$deviceArgs<ExtArgs>
  }

  export type $measurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "measurement"
    objects: {
      device: Prisma.$devicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usage_time: Date
      consumption: number | null
      device_id: number | null
    }, ExtArgs["result"]["measurement"]>
    composites: {}
  }

  type measurementGetPayload<S extends boolean | null | undefined | measurementDefaultArgs> = $Result.GetResult<Prisma.$measurementPayload, S>

  type measurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<measurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasurementCountAggregateInputType | true
    }

  export interface measurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['measurement'], meta: { name: 'measurement' } }
    /**
     * Find zero or one Measurement that matches the filter.
     * @param {measurementFindUniqueArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends measurementFindUniqueArgs>(args: SelectSubset<T, measurementFindUniqueArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Measurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {measurementFindUniqueOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends measurementFindUniqueOrThrowArgs>(args: SelectSubset<T, measurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Measurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementFindFirstArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends measurementFindFirstArgs>(args?: SelectSubset<T, measurementFindFirstArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Measurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementFindFirstOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends measurementFindFirstOrThrowArgs>(args?: SelectSubset<T, measurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurement.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementWithIdOnly = await prisma.measurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends measurementFindManyArgs>(args?: SelectSubset<T, measurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Measurement.
     * @param {measurementCreateArgs} args - Arguments to create a Measurement.
     * @example
     * // Create one Measurement
     * const Measurement = await prisma.measurement.create({
     *   data: {
     *     // ... data to create a Measurement
     *   }
     * })
     * 
     */
    create<T extends measurementCreateArgs>(args: SelectSubset<T, measurementCreateArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Measurements.
     * @param {measurementCreateManyArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends measurementCreateManyArgs>(args?: SelectSubset<T, measurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measurements and returns the data saved in the database.
     * @param {measurementCreateManyAndReturnArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends measurementCreateManyAndReturnArgs>(args?: SelectSubset<T, measurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Measurement.
     * @param {measurementDeleteArgs} args - Arguments to delete one Measurement.
     * @example
     * // Delete one Measurement
     * const Measurement = await prisma.measurement.delete({
     *   where: {
     *     // ... filter to delete one Measurement
     *   }
     * })
     * 
     */
    delete<T extends measurementDeleteArgs>(args: SelectSubset<T, measurementDeleteArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Measurement.
     * @param {measurementUpdateArgs} args - Arguments to update one Measurement.
     * @example
     * // Update one Measurement
     * const measurement = await prisma.measurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends measurementUpdateArgs>(args: SelectSubset<T, measurementUpdateArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Measurements.
     * @param {measurementDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends measurementDeleteManyArgs>(args?: SelectSubset<T, measurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends measurementUpdateManyArgs>(args: SelectSubset<T, measurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements and returns the data updated in the database.
     * @param {measurementUpdateManyAndReturnArgs} args - Arguments to update many Measurements.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends measurementUpdateManyAndReturnArgs>(args: SelectSubset<T, measurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Measurement.
     * @param {measurementUpsertArgs} args - Arguments to update or create a Measurement.
     * @example
     * // Update or create a Measurement
     * const measurement = await prisma.measurement.upsert({
     *   create: {
     *     // ... data to create a Measurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurement we want to update
     *   }
     * })
     */
    upsert<T extends measurementUpsertArgs>(args: SelectSubset<T, measurementUpsertArgs<ExtArgs>>): Prisma__measurementClient<$Result.GetResult<Prisma.$measurementPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurement.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends measurementCountArgs>(
      args?: Subset<T, measurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeasurementAggregateArgs>(args: Subset<T, MeasurementAggregateArgs>): Prisma.PrismaPromise<GetMeasurementAggregateType<T>>

    /**
     * Group by Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {measurementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends measurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: measurementGroupByArgs['orderBy'] }
        : { orderBy?: measurementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, measurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the measurement model
   */
  readonly fields: measurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for measurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__measurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends measurement$deviceArgs<ExtArgs> = {}>(args?: Subset<T, measurement$deviceArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the measurement model
   */ 
  interface measurementFieldRefs {
    readonly id: FieldRef<"measurement", 'Int'>
    readonly usage_time: FieldRef<"measurement", 'DateTime'>
    readonly consumption: FieldRef<"measurement", 'Int'>
    readonly device_id: FieldRef<"measurement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * measurement findUnique
   */
  export type measurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement findUniqueOrThrow
   */
  export type measurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement findFirst
   */
  export type measurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for measurements.
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * measurement findFirstOrThrow
   */
  export type measurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurement to fetch.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for measurements.
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * measurement findMany
   */
  export type measurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter, which measurements to fetch.
     */
    where?: measurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of measurements to fetch.
     */
    orderBy?: measurementOrderByWithRelationInput | measurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing measurements.
     */
    cursor?: measurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` measurements.
     */
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * measurement create
   */
  export type measurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * The data needed to create a measurement.
     */
    data: XOR<measurementCreateInput, measurementUncheckedCreateInput>
  }

  /**
   * measurement createMany
   */
  export type measurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many measurements.
     */
    data: measurementCreateManyInput | measurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * measurement createManyAndReturn
   */
  export type measurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * The data used to create many measurements.
     */
    data: measurementCreateManyInput | measurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * measurement update
   */
  export type measurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * The data needed to update a measurement.
     */
    data: XOR<measurementUpdateInput, measurementUncheckedUpdateInput>
    /**
     * Choose, which measurement to update.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement updateMany
   */
  export type measurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update measurements.
     */
    data: XOR<measurementUpdateManyMutationInput, measurementUncheckedUpdateManyInput>
    /**
     * Filter which measurements to update
     */
    where?: measurementWhereInput
    /**
     * Limit how many measurements to update.
     */
    limit?: number
  }

  /**
   * measurement updateManyAndReturn
   */
  export type measurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * The data used to update measurements.
     */
    data: XOR<measurementUpdateManyMutationInput, measurementUncheckedUpdateManyInput>
    /**
     * Filter which measurements to update
     */
    where?: measurementWhereInput
    /**
     * Limit how many measurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * measurement upsert
   */
  export type measurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * The filter to search for the measurement to update in case it exists.
     */
    where: measurementWhereUniqueInput
    /**
     * In case the measurement found by the `where` argument doesn't exist, create a new measurement with this data.
     */
    create: XOR<measurementCreateInput, measurementUncheckedCreateInput>
    /**
     * In case the measurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<measurementUpdateInput, measurementUncheckedUpdateInput>
  }

  /**
   * measurement delete
   */
  export type measurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
    /**
     * Filter which measurement to delete.
     */
    where: measurementWhereUniqueInput
  }

  /**
   * measurement deleteMany
   */
  export type measurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which measurements to delete
     */
    where?: measurementWhereInput
    /**
     * Limit how many measurements to delete.
     */
    limit?: number
  }

  /**
   * measurement.device
   */
  export type measurement$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    where?: deviceWhereInput
  }

  /**
   * measurement without action
   */
  export type measurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the measurement
     */
    select?: measurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the measurement
     */
    omit?: measurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: measurementInclude<ExtArgs> | null
  }


  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    device_id: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    device_id: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    device_id: number | null
    time_action: Date | null
    action: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    device_id: number | null
    time_action: Date | null
    action: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    device_id: number
    time_action: number
    action: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    device_id?: true
  }

  export type ScheduleSumAggregateInputType = {
    device_id?: true
  }

  export type ScheduleMinAggregateInputType = {
    device_id?: true
    time_action?: true
    action?: true
  }

  export type ScheduleMaxAggregateInputType = {
    device_id?: true
    time_action?: true
    action?: true
  }

  export type ScheduleCountAggregateInputType = {
    device_id?: true
    time_action?: true
    action?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    device_id: number
    time_action: Date
    action: string
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    time_action?: boolean
    action?: boolean
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    time_action?: boolean
    action?: boolean
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    time_action?: boolean
    action?: boolean
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectScalar = {
    device_id?: boolean
    time_action?: boolean
    action?: boolean
  }

  export type scheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"device_id" | "time_action" | "action", ExtArgs["result"]["schedule"]>
  export type scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }
  export type scheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }
  export type scheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedule"
    objects: {
      device: Prisma.$devicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      device_id: number
      time_action: Date
      action: string
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<Prisma.$schedulePayload, S>

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule'], meta: { name: 'schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scheduleFindUniqueArgs>(args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scheduleFindFirstArgs>(args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `device_id`
     * const scheduleWithDevice_idOnly = await prisma.schedule.findMany({ select: { device_id: true } })
     * 
     */
    findMany<T extends scheduleFindManyArgs>(args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends scheduleCreateArgs>(args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Schedules.
     * @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scheduleCreateManyArgs>(args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {scheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `device_id`
     * const scheduleWithDevice_idOnly = await prisma.schedule.createManyAndReturn({
     *   select: { device_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends scheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, scheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends scheduleDeleteArgs>(args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scheduleUpdateArgs>(args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scheduleDeleteManyArgs>(args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scheduleUpdateManyArgs>(args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {scheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `device_id`
     * const scheduleWithDevice_idOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { device_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends scheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, scheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends scheduleUpsertArgs>(args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedule model
   */
  readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends deviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, deviceDefaultArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schedule model
   */ 
  interface scheduleFieldRefs {
    readonly device_id: FieldRef<"schedule", 'Int'>
    readonly time_action: FieldRef<"schedule", 'DateTime'>
    readonly action: FieldRef<"schedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a schedule.
     */
    data: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
  }

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedule createManyAndReturn
   */
  export type scheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedule updateManyAndReturn
   */
  export type scheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
  }

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to delete.
     */
    limit?: number
  }

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
  }


  /**
   * Model log_event
   */

  export type AggregateLog_event = {
    _count: Log_eventCountAggregateOutputType | null
    _avg: Log_eventAvgAggregateOutputType | null
    _sum: Log_eventSumAggregateOutputType | null
    _min: Log_eventMinAggregateOutputType | null
    _max: Log_eventMaxAggregateOutputType | null
  }

  export type Log_eventAvgAggregateOutputType = {
    id: number | null
    device_id: number | null
  }

  export type Log_eventSumAggregateOutputType = {
    id: number | null
    device_id: number | null
  }

  export type Log_eventMinAggregateOutputType = {
    id: number | null
    time_in: Date | null
    time_out: Date | null
    action: string | null
    device_id: number | null
  }

  export type Log_eventMaxAggregateOutputType = {
    id: number | null
    time_in: Date | null
    time_out: Date | null
    action: string | null
    device_id: number | null
  }

  export type Log_eventCountAggregateOutputType = {
    id: number
    time_in: number
    time_out: number
    action: number
    device_id: number
    _all: number
  }


  export type Log_eventAvgAggregateInputType = {
    id?: true
    device_id?: true
  }

  export type Log_eventSumAggregateInputType = {
    id?: true
    device_id?: true
  }

  export type Log_eventMinAggregateInputType = {
    id?: true
    time_in?: true
    time_out?: true
    action?: true
    device_id?: true
  }

  export type Log_eventMaxAggregateInputType = {
    id?: true
    time_in?: true
    time_out?: true
    action?: true
    device_id?: true
  }

  export type Log_eventCountAggregateInputType = {
    id?: true
    time_in?: true
    time_out?: true
    action?: true
    device_id?: true
    _all?: true
  }

  export type Log_eventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_event to aggregate.
     */
    where?: log_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_events to fetch.
     */
    orderBy?: log_eventOrderByWithRelationInput | log_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: log_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned log_events
    **/
    _count?: true | Log_eventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_eventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_eventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_eventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_eventMaxAggregateInputType
  }

  export type GetLog_eventAggregateType<T extends Log_eventAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_event]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_event[P]>
      : GetScalarType<T[P], AggregateLog_event[P]>
  }




  export type log_eventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_eventWhereInput
    orderBy?: log_eventOrderByWithAggregationInput | log_eventOrderByWithAggregationInput[]
    by: Log_eventScalarFieldEnum[] | Log_eventScalarFieldEnum
    having?: log_eventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_eventCountAggregateInputType | true
    _avg?: Log_eventAvgAggregateInputType
    _sum?: Log_eventSumAggregateInputType
    _min?: Log_eventMinAggregateInputType
    _max?: Log_eventMaxAggregateInputType
  }

  export type Log_eventGroupByOutputType = {
    id: number
    time_in: Date | null
    time_out: Date | null
    action: string | null
    device_id: number | null
    _count: Log_eventCountAggregateOutputType | null
    _avg: Log_eventAvgAggregateOutputType | null
    _sum: Log_eventSumAggregateOutputType | null
    _min: Log_eventMinAggregateOutputType | null
    _max: Log_eventMaxAggregateOutputType | null
  }

  type GetLog_eventGroupByPayload<T extends log_eventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_eventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_eventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_eventGroupByOutputType[P]>
            : GetScalarType<T[P], Log_eventGroupByOutputType[P]>
        }
      >
    >


  export type log_eventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time_in?: boolean
    time_out?: boolean
    action?: boolean
    device_id?: boolean
    device?: boolean | log_event$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["log_event"]>

  export type log_eventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time_in?: boolean
    time_out?: boolean
    action?: boolean
    device_id?: boolean
    device?: boolean | log_event$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["log_event"]>

  export type log_eventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time_in?: boolean
    time_out?: boolean
    action?: boolean
    device_id?: boolean
    device?: boolean | log_event$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["log_event"]>

  export type log_eventSelectScalar = {
    id?: boolean
    time_in?: boolean
    time_out?: boolean
    action?: boolean
    device_id?: boolean
  }

  export type log_eventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time_in" | "time_out" | "action" | "device_id", ExtArgs["result"]["log_event"]>
  export type log_eventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | log_event$deviceArgs<ExtArgs>
  }
  export type log_eventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | log_event$deviceArgs<ExtArgs>
  }
  export type log_eventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | log_event$deviceArgs<ExtArgs>
  }

  export type $log_eventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log_event"
    objects: {
      device: Prisma.$devicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      time_in: Date | null
      time_out: Date | null
      action: string | null
      device_id: number | null
    }, ExtArgs["result"]["log_event"]>
    composites: {}
  }

  type log_eventGetPayload<S extends boolean | null | undefined | log_eventDefaultArgs> = $Result.GetResult<Prisma.$log_eventPayload, S>

  type log_eventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<log_eventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Log_eventCountAggregateInputType | true
    }

  export interface log_eventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log_event'], meta: { name: 'log_event' } }
    /**
     * Find zero or one Log_event that matches the filter.
     * @param {log_eventFindUniqueArgs} args - Arguments to find a Log_event
     * @example
     * // Get one Log_event
     * const log_event = await prisma.log_event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends log_eventFindUniqueArgs>(args: SelectSubset<T, log_eventFindUniqueArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Log_event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {log_eventFindUniqueOrThrowArgs} args - Arguments to find a Log_event
     * @example
     * // Get one Log_event
     * const log_event = await prisma.log_event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends log_eventFindUniqueOrThrowArgs>(args: SelectSubset<T, log_eventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Log_event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_eventFindFirstArgs} args - Arguments to find a Log_event
     * @example
     * // Get one Log_event
     * const log_event = await prisma.log_event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends log_eventFindFirstArgs>(args?: SelectSubset<T, log_eventFindFirstArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Log_event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_eventFindFirstOrThrowArgs} args - Arguments to find a Log_event
     * @example
     * // Get one Log_event
     * const log_event = await prisma.log_event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends log_eventFindFirstOrThrowArgs>(args?: SelectSubset<T, log_eventFindFirstOrThrowArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Log_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_eventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_events
     * const log_events = await prisma.log_event.findMany()
     * 
     * // Get first 10 Log_events
     * const log_events = await prisma.log_event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_eventWithIdOnly = await prisma.log_event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends log_eventFindManyArgs>(args?: SelectSubset<T, log_eventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Log_event.
     * @param {log_eventCreateArgs} args - Arguments to create a Log_event.
     * @example
     * // Create one Log_event
     * const Log_event = await prisma.log_event.create({
     *   data: {
     *     // ... data to create a Log_event
     *   }
     * })
     * 
     */
    create<T extends log_eventCreateArgs>(args: SelectSubset<T, log_eventCreateArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Log_events.
     * @param {log_eventCreateManyArgs} args - Arguments to create many Log_events.
     * @example
     * // Create many Log_events
     * const log_event = await prisma.log_event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends log_eventCreateManyArgs>(args?: SelectSubset<T, log_eventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Log_events and returns the data saved in the database.
     * @param {log_eventCreateManyAndReturnArgs} args - Arguments to create many Log_events.
     * @example
     * // Create many Log_events
     * const log_event = await prisma.log_event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Log_events and only return the `id`
     * const log_eventWithIdOnly = await prisma.log_event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends log_eventCreateManyAndReturnArgs>(args?: SelectSubset<T, log_eventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Log_event.
     * @param {log_eventDeleteArgs} args - Arguments to delete one Log_event.
     * @example
     * // Delete one Log_event
     * const Log_event = await prisma.log_event.delete({
     *   where: {
     *     // ... filter to delete one Log_event
     *   }
     * })
     * 
     */
    delete<T extends log_eventDeleteArgs>(args: SelectSubset<T, log_eventDeleteArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Log_event.
     * @param {log_eventUpdateArgs} args - Arguments to update one Log_event.
     * @example
     * // Update one Log_event
     * const log_event = await prisma.log_event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends log_eventUpdateArgs>(args: SelectSubset<T, log_eventUpdateArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Log_events.
     * @param {log_eventDeleteManyArgs} args - Arguments to filter Log_events to delete.
     * @example
     * // Delete a few Log_events
     * const { count } = await prisma.log_event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends log_eventDeleteManyArgs>(args?: SelectSubset<T, log_eventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_eventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_events
     * const log_event = await prisma.log_event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends log_eventUpdateManyArgs>(args: SelectSubset<T, log_eventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_events and returns the data updated in the database.
     * @param {log_eventUpdateManyAndReturnArgs} args - Arguments to update many Log_events.
     * @example
     * // Update many Log_events
     * const log_event = await prisma.log_event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Log_events and only return the `id`
     * const log_eventWithIdOnly = await prisma.log_event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends log_eventUpdateManyAndReturnArgs>(args: SelectSubset<T, log_eventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Log_event.
     * @param {log_eventUpsertArgs} args - Arguments to update or create a Log_event.
     * @example
     * // Update or create a Log_event
     * const log_event = await prisma.log_event.upsert({
     *   create: {
     *     // ... data to create a Log_event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_event we want to update
     *   }
     * })
     */
    upsert<T extends log_eventUpsertArgs>(args: SelectSubset<T, log_eventUpsertArgs<ExtArgs>>): Prisma__log_eventClient<$Result.GetResult<Prisma.$log_eventPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Log_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_eventCountArgs} args - Arguments to filter Log_events to count.
     * @example
     * // Count the number of Log_events
     * const count = await prisma.log_event.count({
     *   where: {
     *     // ... the filter for the Log_events we want to count
     *   }
     * })
    **/
    count<T extends log_eventCountArgs>(
      args?: Subset<T, log_eventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_eventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_eventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Log_eventAggregateArgs>(args: Subset<T, Log_eventAggregateArgs>): Prisma.PrismaPromise<GetLog_eventAggregateType<T>>

    /**
     * Group by Log_event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_eventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends log_eventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: log_eventGroupByArgs['orderBy'] }
        : { orderBy?: log_eventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, log_eventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_eventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log_event model
   */
  readonly fields: log_eventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log_event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__log_eventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends log_event$deviceArgs<ExtArgs> = {}>(args?: Subset<T, log_event$deviceArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the log_event model
   */ 
  interface log_eventFieldRefs {
    readonly id: FieldRef<"log_event", 'Int'>
    readonly time_in: FieldRef<"log_event", 'DateTime'>
    readonly time_out: FieldRef<"log_event", 'DateTime'>
    readonly action: FieldRef<"log_event", 'String'>
    readonly device_id: FieldRef<"log_event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * log_event findUnique
   */
  export type log_eventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * Filter, which log_event to fetch.
     */
    where: log_eventWhereUniqueInput
  }

  /**
   * log_event findUniqueOrThrow
   */
  export type log_eventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * Filter, which log_event to fetch.
     */
    where: log_eventWhereUniqueInput
  }

  /**
   * log_event findFirst
   */
  export type log_eventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * Filter, which log_event to fetch.
     */
    where?: log_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_events to fetch.
     */
    orderBy?: log_eventOrderByWithRelationInput | log_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_events.
     */
    cursor?: log_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_events.
     */
    distinct?: Log_eventScalarFieldEnum | Log_eventScalarFieldEnum[]
  }

  /**
   * log_event findFirstOrThrow
   */
  export type log_eventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * Filter, which log_event to fetch.
     */
    where?: log_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_events to fetch.
     */
    orderBy?: log_eventOrderByWithRelationInput | log_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_events.
     */
    cursor?: log_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_events.
     */
    distinct?: Log_eventScalarFieldEnum | Log_eventScalarFieldEnum[]
  }

  /**
   * log_event findMany
   */
  export type log_eventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * Filter, which log_events to fetch.
     */
    where?: log_eventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_events to fetch.
     */
    orderBy?: log_eventOrderByWithRelationInput | log_eventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing log_events.
     */
    cursor?: log_eventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_events.
     */
    skip?: number
    distinct?: Log_eventScalarFieldEnum | Log_eventScalarFieldEnum[]
  }

  /**
   * log_event create
   */
  export type log_eventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * The data needed to create a log_event.
     */
    data?: XOR<log_eventCreateInput, log_eventUncheckedCreateInput>
  }

  /**
   * log_event createMany
   */
  export type log_eventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many log_events.
     */
    data: log_eventCreateManyInput | log_eventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log_event createManyAndReturn
   */
  export type log_eventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * The data used to create many log_events.
     */
    data: log_eventCreateManyInput | log_eventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * log_event update
   */
  export type log_eventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * The data needed to update a log_event.
     */
    data: XOR<log_eventUpdateInput, log_eventUncheckedUpdateInput>
    /**
     * Choose, which log_event to update.
     */
    where: log_eventWhereUniqueInput
  }

  /**
   * log_event updateMany
   */
  export type log_eventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update log_events.
     */
    data: XOR<log_eventUpdateManyMutationInput, log_eventUncheckedUpdateManyInput>
    /**
     * Filter which log_events to update
     */
    where?: log_eventWhereInput
    /**
     * Limit how many log_events to update.
     */
    limit?: number
  }

  /**
   * log_event updateManyAndReturn
   */
  export type log_eventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * The data used to update log_events.
     */
    data: XOR<log_eventUpdateManyMutationInput, log_eventUncheckedUpdateManyInput>
    /**
     * Filter which log_events to update
     */
    where?: log_eventWhereInput
    /**
     * Limit how many log_events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * log_event upsert
   */
  export type log_eventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * The filter to search for the log_event to update in case it exists.
     */
    where: log_eventWhereUniqueInput
    /**
     * In case the log_event found by the `where` argument doesn't exist, create a new log_event with this data.
     */
    create: XOR<log_eventCreateInput, log_eventUncheckedCreateInput>
    /**
     * In case the log_event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<log_eventUpdateInput, log_eventUncheckedUpdateInput>
  }

  /**
   * log_event delete
   */
  export type log_eventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
    /**
     * Filter which log_event to delete.
     */
    where: log_eventWhereUniqueInput
  }

  /**
   * log_event deleteMany
   */
  export type log_eventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_events to delete
     */
    where?: log_eventWhereInput
    /**
     * Limit how many log_events to delete.
     */
    limit?: number
  }

  /**
   * log_event.device
   */
  export type log_event$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    where?: deviceWhereInput
  }

  /**
   * log_event without action
   */
  export type log_eventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_event
     */
    select?: log_eventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_event
     */
    omit?: log_eventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_eventInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    content: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    content: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    content: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    content?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    content?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    content?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    content: string | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    device_have_notification?: boolean | notification$device_have_notificationArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectScalar = {
    id?: boolean
    content?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device_have_notification?: boolean | notification$device_have_notificationArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      device_have_notification: Prisma.$device_have_notificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device_have_notification<T extends notification$device_have_notificationArgs<ExtArgs> = {}>(args?: Subset<T, notification$device_have_notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notification model
   */ 
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'Int'>
    readonly content: FieldRef<"notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data?: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification createManyAndReturn
   */
  export type notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification updateManyAndReturn
   */
  export type notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification.device_have_notification
   */
  export type notification$device_have_notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    where?: device_have_notificationWhereInput
    orderBy?: device_have_notificationOrderByWithRelationInput | device_have_notificationOrderByWithRelationInput[]
    cursor?: device_have_notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Device_have_notificationScalarFieldEnum | Device_have_notificationScalarFieldEnum[]
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Model device_have_notification
   */

  export type AggregateDevice_have_notification = {
    _count: Device_have_notificationCountAggregateOutputType | null
    _avg: Device_have_notificationAvgAggregateOutputType | null
    _sum: Device_have_notificationSumAggregateOutputType | null
    _min: Device_have_notificationMinAggregateOutputType | null
    _max: Device_have_notificationMaxAggregateOutputType | null
  }

  export type Device_have_notificationAvgAggregateOutputType = {
    notification_id: number | null
    device_id: number | null
  }

  export type Device_have_notificationSumAggregateOutputType = {
    notification_id: number | null
    device_id: number | null
  }

  export type Device_have_notificationMinAggregateOutputType = {
    notification_id: number | null
    device_id: number | null
    notification_time: Date | null
  }

  export type Device_have_notificationMaxAggregateOutputType = {
    notification_id: number | null
    device_id: number | null
    notification_time: Date | null
  }

  export type Device_have_notificationCountAggregateOutputType = {
    notification_id: number
    device_id: number
    notification_time: number
    _all: number
  }


  export type Device_have_notificationAvgAggregateInputType = {
    notification_id?: true
    device_id?: true
  }

  export type Device_have_notificationSumAggregateInputType = {
    notification_id?: true
    device_id?: true
  }

  export type Device_have_notificationMinAggregateInputType = {
    notification_id?: true
    device_id?: true
    notification_time?: true
  }

  export type Device_have_notificationMaxAggregateInputType = {
    notification_id?: true
    device_id?: true
    notification_time?: true
  }

  export type Device_have_notificationCountAggregateInputType = {
    notification_id?: true
    device_id?: true
    notification_time?: true
    _all?: true
  }

  export type Device_have_notificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_have_notification to aggregate.
     */
    where?: device_have_notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_have_notifications to fetch.
     */
    orderBy?: device_have_notificationOrderByWithRelationInput | device_have_notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: device_have_notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_have_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_have_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned device_have_notifications
    **/
    _count?: true | Device_have_notificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Device_have_notificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Device_have_notificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Device_have_notificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Device_have_notificationMaxAggregateInputType
  }

  export type GetDevice_have_notificationAggregateType<T extends Device_have_notificationAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice_have_notification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice_have_notification[P]>
      : GetScalarType<T[P], AggregateDevice_have_notification[P]>
  }




  export type device_have_notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: device_have_notificationWhereInput
    orderBy?: device_have_notificationOrderByWithAggregationInput | device_have_notificationOrderByWithAggregationInput[]
    by: Device_have_notificationScalarFieldEnum[] | Device_have_notificationScalarFieldEnum
    having?: device_have_notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Device_have_notificationCountAggregateInputType | true
    _avg?: Device_have_notificationAvgAggregateInputType
    _sum?: Device_have_notificationSumAggregateInputType
    _min?: Device_have_notificationMinAggregateInputType
    _max?: Device_have_notificationMaxAggregateInputType
  }

  export type Device_have_notificationGroupByOutputType = {
    notification_id: number
    device_id: number
    notification_time: Date | null
    _count: Device_have_notificationCountAggregateOutputType | null
    _avg: Device_have_notificationAvgAggregateOutputType | null
    _sum: Device_have_notificationSumAggregateOutputType | null
    _min: Device_have_notificationMinAggregateOutputType | null
    _max: Device_have_notificationMaxAggregateOutputType | null
  }

  type GetDevice_have_notificationGroupByPayload<T extends device_have_notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Device_have_notificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Device_have_notificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Device_have_notificationGroupByOutputType[P]>
            : GetScalarType<T[P], Device_have_notificationGroupByOutputType[P]>
        }
      >
    >


  export type device_have_notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    device_id?: boolean
    notification_time?: boolean
    notification?: boolean | notificationDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device_have_notification"]>

  export type device_have_notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    device_id?: boolean
    notification_time?: boolean
    notification?: boolean | notificationDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device_have_notification"]>

  export type device_have_notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    device_id?: boolean
    notification_time?: boolean
    notification?: boolean | notificationDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device_have_notification"]>

  export type device_have_notificationSelectScalar = {
    notification_id?: boolean
    device_id?: boolean
    notification_time?: boolean
  }

  export type device_have_notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "device_id" | "notification_time", ExtArgs["result"]["device_have_notification"]>
  export type device_have_notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | notificationDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }
  export type device_have_notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | notificationDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }
  export type device_have_notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | notificationDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }

  export type $device_have_notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device_have_notification"
    objects: {
      notification: Prisma.$notificationPayload<ExtArgs>
      device: Prisma.$devicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: number
      device_id: number
      notification_time: Date | null
    }, ExtArgs["result"]["device_have_notification"]>
    composites: {}
  }

  type device_have_notificationGetPayload<S extends boolean | null | undefined | device_have_notificationDefaultArgs> = $Result.GetResult<Prisma.$device_have_notificationPayload, S>

  type device_have_notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<device_have_notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Device_have_notificationCountAggregateInputType | true
    }

  export interface device_have_notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device_have_notification'], meta: { name: 'device_have_notification' } }
    /**
     * Find zero or one Device_have_notification that matches the filter.
     * @param {device_have_notificationFindUniqueArgs} args - Arguments to find a Device_have_notification
     * @example
     * // Get one Device_have_notification
     * const device_have_notification = await prisma.device_have_notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends device_have_notificationFindUniqueArgs>(args: SelectSubset<T, device_have_notificationFindUniqueArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Device_have_notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {device_have_notificationFindUniqueOrThrowArgs} args - Arguments to find a Device_have_notification
     * @example
     * // Get one Device_have_notification
     * const device_have_notification = await prisma.device_have_notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends device_have_notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, device_have_notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Device_have_notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_have_notificationFindFirstArgs} args - Arguments to find a Device_have_notification
     * @example
     * // Get one Device_have_notification
     * const device_have_notification = await prisma.device_have_notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends device_have_notificationFindFirstArgs>(args?: SelectSubset<T, device_have_notificationFindFirstArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Device_have_notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_have_notificationFindFirstOrThrowArgs} args - Arguments to find a Device_have_notification
     * @example
     * // Get one Device_have_notification
     * const device_have_notification = await prisma.device_have_notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends device_have_notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, device_have_notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Device_have_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_have_notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Device_have_notifications
     * const device_have_notifications = await prisma.device_have_notification.findMany()
     * 
     * // Get first 10 Device_have_notifications
     * const device_have_notifications = await prisma.device_have_notification.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const device_have_notificationWithNotification_idOnly = await prisma.device_have_notification.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends device_have_notificationFindManyArgs>(args?: SelectSubset<T, device_have_notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Device_have_notification.
     * @param {device_have_notificationCreateArgs} args - Arguments to create a Device_have_notification.
     * @example
     * // Create one Device_have_notification
     * const Device_have_notification = await prisma.device_have_notification.create({
     *   data: {
     *     // ... data to create a Device_have_notification
     *   }
     * })
     * 
     */
    create<T extends device_have_notificationCreateArgs>(args: SelectSubset<T, device_have_notificationCreateArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Device_have_notifications.
     * @param {device_have_notificationCreateManyArgs} args - Arguments to create many Device_have_notifications.
     * @example
     * // Create many Device_have_notifications
     * const device_have_notification = await prisma.device_have_notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends device_have_notificationCreateManyArgs>(args?: SelectSubset<T, device_have_notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Device_have_notifications and returns the data saved in the database.
     * @param {device_have_notificationCreateManyAndReturnArgs} args - Arguments to create many Device_have_notifications.
     * @example
     * // Create many Device_have_notifications
     * const device_have_notification = await prisma.device_have_notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Device_have_notifications and only return the `notification_id`
     * const device_have_notificationWithNotification_idOnly = await prisma.device_have_notification.createManyAndReturn({
     *   select: { notification_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends device_have_notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, device_have_notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Device_have_notification.
     * @param {device_have_notificationDeleteArgs} args - Arguments to delete one Device_have_notification.
     * @example
     * // Delete one Device_have_notification
     * const Device_have_notification = await prisma.device_have_notification.delete({
     *   where: {
     *     // ... filter to delete one Device_have_notification
     *   }
     * })
     * 
     */
    delete<T extends device_have_notificationDeleteArgs>(args: SelectSubset<T, device_have_notificationDeleteArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Device_have_notification.
     * @param {device_have_notificationUpdateArgs} args - Arguments to update one Device_have_notification.
     * @example
     * // Update one Device_have_notification
     * const device_have_notification = await prisma.device_have_notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends device_have_notificationUpdateArgs>(args: SelectSubset<T, device_have_notificationUpdateArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Device_have_notifications.
     * @param {device_have_notificationDeleteManyArgs} args - Arguments to filter Device_have_notifications to delete.
     * @example
     * // Delete a few Device_have_notifications
     * const { count } = await prisma.device_have_notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends device_have_notificationDeleteManyArgs>(args?: SelectSubset<T, device_have_notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_have_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_have_notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Device_have_notifications
     * const device_have_notification = await prisma.device_have_notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends device_have_notificationUpdateManyArgs>(args: SelectSubset<T, device_have_notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_have_notifications and returns the data updated in the database.
     * @param {device_have_notificationUpdateManyAndReturnArgs} args - Arguments to update many Device_have_notifications.
     * @example
     * // Update many Device_have_notifications
     * const device_have_notification = await prisma.device_have_notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Device_have_notifications and only return the `notification_id`
     * const device_have_notificationWithNotification_idOnly = await prisma.device_have_notification.updateManyAndReturn({
     *   select: { notification_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends device_have_notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, device_have_notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Device_have_notification.
     * @param {device_have_notificationUpsertArgs} args - Arguments to update or create a Device_have_notification.
     * @example
     * // Update or create a Device_have_notification
     * const device_have_notification = await prisma.device_have_notification.upsert({
     *   create: {
     *     // ... data to create a Device_have_notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device_have_notification we want to update
     *   }
     * })
     */
    upsert<T extends device_have_notificationUpsertArgs>(args: SelectSubset<T, device_have_notificationUpsertArgs<ExtArgs>>): Prisma__device_have_notificationClient<$Result.GetResult<Prisma.$device_have_notificationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Device_have_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_have_notificationCountArgs} args - Arguments to filter Device_have_notifications to count.
     * @example
     * // Count the number of Device_have_notifications
     * const count = await prisma.device_have_notification.count({
     *   where: {
     *     // ... the filter for the Device_have_notifications we want to count
     *   }
     * })
    **/
    count<T extends device_have_notificationCountArgs>(
      args?: Subset<T, device_have_notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Device_have_notificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device_have_notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Device_have_notificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Device_have_notificationAggregateArgs>(args: Subset<T, Device_have_notificationAggregateArgs>): Prisma.PrismaPromise<GetDevice_have_notificationAggregateType<T>>

    /**
     * Group by Device_have_notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_have_notificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends device_have_notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: device_have_notificationGroupByArgs['orderBy'] }
        : { orderBy?: device_have_notificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, device_have_notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevice_have_notificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device_have_notification model
   */
  readonly fields: device_have_notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device_have_notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__device_have_notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends notificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, notificationDefaultArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    device<T extends deviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, deviceDefaultArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the device_have_notification model
   */ 
  interface device_have_notificationFieldRefs {
    readonly notification_id: FieldRef<"device_have_notification", 'Int'>
    readonly device_id: FieldRef<"device_have_notification", 'Int'>
    readonly notification_time: FieldRef<"device_have_notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * device_have_notification findUnique
   */
  export type device_have_notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * Filter, which device_have_notification to fetch.
     */
    where: device_have_notificationWhereUniqueInput
  }

  /**
   * device_have_notification findUniqueOrThrow
   */
  export type device_have_notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * Filter, which device_have_notification to fetch.
     */
    where: device_have_notificationWhereUniqueInput
  }

  /**
   * device_have_notification findFirst
   */
  export type device_have_notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * Filter, which device_have_notification to fetch.
     */
    where?: device_have_notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_have_notifications to fetch.
     */
    orderBy?: device_have_notificationOrderByWithRelationInput | device_have_notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_have_notifications.
     */
    cursor?: device_have_notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_have_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_have_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_have_notifications.
     */
    distinct?: Device_have_notificationScalarFieldEnum | Device_have_notificationScalarFieldEnum[]
  }

  /**
   * device_have_notification findFirstOrThrow
   */
  export type device_have_notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * Filter, which device_have_notification to fetch.
     */
    where?: device_have_notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_have_notifications to fetch.
     */
    orderBy?: device_have_notificationOrderByWithRelationInput | device_have_notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_have_notifications.
     */
    cursor?: device_have_notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_have_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_have_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_have_notifications.
     */
    distinct?: Device_have_notificationScalarFieldEnum | Device_have_notificationScalarFieldEnum[]
  }

  /**
   * device_have_notification findMany
   */
  export type device_have_notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * Filter, which device_have_notifications to fetch.
     */
    where?: device_have_notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_have_notifications to fetch.
     */
    orderBy?: device_have_notificationOrderByWithRelationInput | device_have_notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing device_have_notifications.
     */
    cursor?: device_have_notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_have_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_have_notifications.
     */
    skip?: number
    distinct?: Device_have_notificationScalarFieldEnum | Device_have_notificationScalarFieldEnum[]
  }

  /**
   * device_have_notification create
   */
  export type device_have_notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a device_have_notification.
     */
    data: XOR<device_have_notificationCreateInput, device_have_notificationUncheckedCreateInput>
  }

  /**
   * device_have_notification createMany
   */
  export type device_have_notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many device_have_notifications.
     */
    data: device_have_notificationCreateManyInput | device_have_notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device_have_notification createManyAndReturn
   */
  export type device_have_notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * The data used to create many device_have_notifications.
     */
    data: device_have_notificationCreateManyInput | device_have_notificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * device_have_notification update
   */
  export type device_have_notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a device_have_notification.
     */
    data: XOR<device_have_notificationUpdateInput, device_have_notificationUncheckedUpdateInput>
    /**
     * Choose, which device_have_notification to update.
     */
    where: device_have_notificationWhereUniqueInput
  }

  /**
   * device_have_notification updateMany
   */
  export type device_have_notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update device_have_notifications.
     */
    data: XOR<device_have_notificationUpdateManyMutationInput, device_have_notificationUncheckedUpdateManyInput>
    /**
     * Filter which device_have_notifications to update
     */
    where?: device_have_notificationWhereInput
    /**
     * Limit how many device_have_notifications to update.
     */
    limit?: number
  }

  /**
   * device_have_notification updateManyAndReturn
   */
  export type device_have_notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * The data used to update device_have_notifications.
     */
    data: XOR<device_have_notificationUpdateManyMutationInput, device_have_notificationUncheckedUpdateManyInput>
    /**
     * Filter which device_have_notifications to update
     */
    where?: device_have_notificationWhereInput
    /**
     * Limit how many device_have_notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * device_have_notification upsert
   */
  export type device_have_notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the device_have_notification to update in case it exists.
     */
    where: device_have_notificationWhereUniqueInput
    /**
     * In case the device_have_notification found by the `where` argument doesn't exist, create a new device_have_notification with this data.
     */
    create: XOR<device_have_notificationCreateInput, device_have_notificationUncheckedCreateInput>
    /**
     * In case the device_have_notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<device_have_notificationUpdateInput, device_have_notificationUncheckedUpdateInput>
  }

  /**
   * device_have_notification delete
   */
  export type device_have_notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
    /**
     * Filter which device_have_notification to delete.
     */
    where: device_have_notificationWhereUniqueInput
  }

  /**
   * device_have_notification deleteMany
   */
  export type device_have_notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_have_notifications to delete
     */
    where?: device_have_notificationWhereInput
    /**
     * Limit how many device_have_notifications to delete.
     */
    limit?: number
  }

  /**
   * device_have_notification without action
   */
  export type device_have_notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_have_notification
     */
    select?: device_have_notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_have_notification
     */
    omit?: device_have_notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_have_notificationInclude<ExtArgs> | null
  }


  /**
   * Model home
   */

  export type AggregateHome = {
    _count: HomeCountAggregateOutputType | null
    _avg: HomeAvgAggregateOutputType | null
    _sum: HomeSumAggregateOutputType | null
    _min: HomeMinAggregateOutputType | null
    _max: HomeMaxAggregateOutputType | null
  }

  export type HomeAvgAggregateOutputType = {
    id: number | null
  }

  export type HomeSumAggregateOutputType = {
    id: number | null
  }

  export type HomeMinAggregateOutputType = {
    id: number | null
    serial_number: string | null
  }

  export type HomeMaxAggregateOutputType = {
    id: number | null
    serial_number: string | null
  }

  export type HomeCountAggregateOutputType = {
    id: number
    serial_number: number
    _all: number
  }


  export type HomeAvgAggregateInputType = {
    id?: true
  }

  export type HomeSumAggregateInputType = {
    id?: true
  }

  export type HomeMinAggregateInputType = {
    id?: true
    serial_number?: true
  }

  export type HomeMaxAggregateInputType = {
    id?: true
    serial_number?: true
  }

  export type HomeCountAggregateInputType = {
    id?: true
    serial_number?: true
    _all?: true
  }

  export type HomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which home to aggregate.
     */
    where?: homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned homes
    **/
    _count?: true | HomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeMaxAggregateInputType
  }

  export type GetHomeAggregateType<T extends HomeAggregateArgs> = {
        [P in keyof T & keyof AggregateHome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHome[P]>
      : GetScalarType<T[P], AggregateHome[P]>
  }




  export type homeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homeWhereInput
    orderBy?: homeOrderByWithAggregationInput | homeOrderByWithAggregationInput[]
    by: HomeScalarFieldEnum[] | HomeScalarFieldEnum
    having?: homeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCountAggregateInputType | true
    _avg?: HomeAvgAggregateInputType
    _sum?: HomeSumAggregateInputType
    _min?: HomeMinAggregateInputType
    _max?: HomeMaxAggregateInputType
  }

  export type HomeGroupByOutputType = {
    id: number
    serial_number: string
    _count: HomeCountAggregateOutputType | null
    _avg: HomeAvgAggregateOutputType | null
    _sum: HomeSumAggregateOutputType | null
    _min: HomeMinAggregateOutputType | null
    _max: HomeMaxAggregateOutputType | null
  }

  type GetHomeGroupByPayload<T extends homeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeGroupByOutputType[P]>
            : GetScalarType<T[P], HomeGroupByOutputType[P]>
        }
      >
    >


  export type homeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial_number?: boolean
    device?: boolean | home$deviceArgs<ExtArgs>
    user_in_home?: boolean | home$user_in_homeArgs<ExtArgs>
    _count?: boolean | HomeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["home"]>

  export type homeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial_number?: boolean
  }, ExtArgs["result"]["home"]>

  export type homeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial_number?: boolean
  }, ExtArgs["result"]["home"]>

  export type homeSelectScalar = {
    id?: boolean
    serial_number?: boolean
  }

  export type homeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serial_number", ExtArgs["result"]["home"]>
  export type homeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | home$deviceArgs<ExtArgs>
    user_in_home?: boolean | home$user_in_homeArgs<ExtArgs>
    _count?: boolean | HomeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type homeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type homeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $homePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "home"
    objects: {
      device: Prisma.$devicePayload<ExtArgs>[]
      user_in_home: Prisma.$user_in_homePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serial_number: string
    }, ExtArgs["result"]["home"]>
    composites: {}
  }

  type homeGetPayload<S extends boolean | null | undefined | homeDefaultArgs> = $Result.GetResult<Prisma.$homePayload, S>

  type homeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<homeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeCountAggregateInputType | true
    }

  export interface homeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['home'], meta: { name: 'home' } }
    /**
     * Find zero or one Home that matches the filter.
     * @param {homeFindUniqueArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends homeFindUniqueArgs>(args: SelectSubset<T, homeFindUniqueArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Home that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {homeFindUniqueOrThrowArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends homeFindUniqueOrThrowArgs>(args: SelectSubset<T, homeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Home that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeFindFirstArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends homeFindFirstArgs>(args?: SelectSubset<T, homeFindFirstArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Home that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeFindFirstOrThrowArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends homeFindFirstOrThrowArgs>(args?: SelectSubset<T, homeFindFirstOrThrowArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Homes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homes
     * const homes = await prisma.home.findMany()
     * 
     * // Get first 10 Homes
     * const homes = await prisma.home.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeWithIdOnly = await prisma.home.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends homeFindManyArgs>(args?: SelectSubset<T, homeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Home.
     * @param {homeCreateArgs} args - Arguments to create a Home.
     * @example
     * // Create one Home
     * const Home = await prisma.home.create({
     *   data: {
     *     // ... data to create a Home
     *   }
     * })
     * 
     */
    create<T extends homeCreateArgs>(args: SelectSubset<T, homeCreateArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Homes.
     * @param {homeCreateManyArgs} args - Arguments to create many Homes.
     * @example
     * // Create many Homes
     * const home = await prisma.home.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends homeCreateManyArgs>(args?: SelectSubset<T, homeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Homes and returns the data saved in the database.
     * @param {homeCreateManyAndReturnArgs} args - Arguments to create many Homes.
     * @example
     * // Create many Homes
     * const home = await prisma.home.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Homes and only return the `id`
     * const homeWithIdOnly = await prisma.home.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends homeCreateManyAndReturnArgs>(args?: SelectSubset<T, homeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Home.
     * @param {homeDeleteArgs} args - Arguments to delete one Home.
     * @example
     * // Delete one Home
     * const Home = await prisma.home.delete({
     *   where: {
     *     // ... filter to delete one Home
     *   }
     * })
     * 
     */
    delete<T extends homeDeleteArgs>(args: SelectSubset<T, homeDeleteArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Home.
     * @param {homeUpdateArgs} args - Arguments to update one Home.
     * @example
     * // Update one Home
     * const home = await prisma.home.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends homeUpdateArgs>(args: SelectSubset<T, homeUpdateArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Homes.
     * @param {homeDeleteManyArgs} args - Arguments to filter Homes to delete.
     * @example
     * // Delete a few Homes
     * const { count } = await prisma.home.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends homeDeleteManyArgs>(args?: SelectSubset<T, homeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homes
     * const home = await prisma.home.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends homeUpdateManyArgs>(args: SelectSubset<T, homeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homes and returns the data updated in the database.
     * @param {homeUpdateManyAndReturnArgs} args - Arguments to update many Homes.
     * @example
     * // Update many Homes
     * const home = await prisma.home.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Homes and only return the `id`
     * const homeWithIdOnly = await prisma.home.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends homeUpdateManyAndReturnArgs>(args: SelectSubset<T, homeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Home.
     * @param {homeUpsertArgs} args - Arguments to update or create a Home.
     * @example
     * // Update or create a Home
     * const home = await prisma.home.upsert({
     *   create: {
     *     // ... data to create a Home
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Home we want to update
     *   }
     * })
     */
    upsert<T extends homeUpsertArgs>(args: SelectSubset<T, homeUpsertArgs<ExtArgs>>): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeCountArgs} args - Arguments to filter Homes to count.
     * @example
     * // Count the number of Homes
     * const count = await prisma.home.count({
     *   where: {
     *     // ... the filter for the Homes we want to count
     *   }
     * })
    **/
    count<T extends homeCountArgs>(
      args?: Subset<T, homeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeAggregateArgs>(args: Subset<T, HomeAggregateArgs>): Prisma.PrismaPromise<GetHomeAggregateType<T>>

    /**
     * Group by Home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends homeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: homeGroupByArgs['orderBy'] }
        : { orderBy?: homeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, homeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the home model
   */
  readonly fields: homeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for home.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__homeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends home$deviceArgs<ExtArgs> = {}>(args?: Subset<T, home$deviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    user_in_home<T extends home$user_in_homeArgs<ExtArgs> = {}>(args?: Subset<T, home$user_in_homeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_in_homePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the home model
   */ 
  interface homeFieldRefs {
    readonly id: FieldRef<"home", 'Int'>
    readonly serial_number: FieldRef<"home", 'String'>
  }
    

  // Custom InputTypes
  /**
   * home findUnique
   */
  export type homeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * Filter, which home to fetch.
     */
    where: homeWhereUniqueInput
  }

  /**
   * home findUniqueOrThrow
   */
  export type homeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * Filter, which home to fetch.
     */
    where: homeWhereUniqueInput
  }

  /**
   * home findFirst
   */
  export type homeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * Filter, which home to fetch.
     */
    where?: homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homes.
     */
    cursor?: homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homes.
     */
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[]
  }

  /**
   * home findFirstOrThrow
   */
  export type homeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * Filter, which home to fetch.
     */
    where?: homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for homes.
     */
    cursor?: homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of homes.
     */
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[]
  }

  /**
   * home findMany
   */
  export type homeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * Filter, which homes to fetch.
     */
    where?: homeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing homes.
     */
    cursor?: homeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` homes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` homes.
     */
    skip?: number
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[]
  }

  /**
   * home create
   */
  export type homeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * The data needed to create a home.
     */
    data: XOR<homeCreateInput, homeUncheckedCreateInput>
  }

  /**
   * home createMany
   */
  export type homeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many homes.
     */
    data: homeCreateManyInput | homeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * home createManyAndReturn
   */
  export type homeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * The data used to create many homes.
     */
    data: homeCreateManyInput | homeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * home update
   */
  export type homeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * The data needed to update a home.
     */
    data: XOR<homeUpdateInput, homeUncheckedUpdateInput>
    /**
     * Choose, which home to update.
     */
    where: homeWhereUniqueInput
  }

  /**
   * home updateMany
   */
  export type homeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update homes.
     */
    data: XOR<homeUpdateManyMutationInput, homeUncheckedUpdateManyInput>
    /**
     * Filter which homes to update
     */
    where?: homeWhereInput
    /**
     * Limit how many homes to update.
     */
    limit?: number
  }

  /**
   * home updateManyAndReturn
   */
  export type homeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * The data used to update homes.
     */
    data: XOR<homeUpdateManyMutationInput, homeUncheckedUpdateManyInput>
    /**
     * Filter which homes to update
     */
    where?: homeWhereInput
    /**
     * Limit how many homes to update.
     */
    limit?: number
  }

  /**
   * home upsert
   */
  export type homeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * The filter to search for the home to update in case it exists.
     */
    where: homeWhereUniqueInput
    /**
     * In case the home found by the `where` argument doesn't exist, create a new home with this data.
     */
    create: XOR<homeCreateInput, homeUncheckedCreateInput>
    /**
     * In case the home was found with the provided `where` argument, update it with this data.
     */
    update: XOR<homeUpdateInput, homeUncheckedUpdateInput>
  }

  /**
   * home delete
   */
  export type homeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
    /**
     * Filter which home to delete.
     */
    where: homeWhereUniqueInput
  }

  /**
   * home deleteMany
   */
  export type homeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homes to delete
     */
    where?: homeWhereInput
    /**
     * Limit how many homes to delete.
     */
    limit?: number
  }

  /**
   * home.device
   */
  export type home$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    where?: deviceWhereInput
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    cursor?: deviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * home.user_in_home
   */
  export type home$user_in_homeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_in_home
     */
    select?: user_in_homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_in_home
     */
    omit?: user_in_homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_in_homeInclude<ExtArgs> | null
    where?: user_in_homeWhereInput
    orderBy?: user_in_homeOrderByWithRelationInput | user_in_homeOrderByWithRelationInput[]
    cursor?: user_in_homeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_in_homeScalarFieldEnum | User_in_homeScalarFieldEnum[]
  }

  /**
   * home without action
   */
  export type homeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the home
     */
    omit?: homeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: homeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password_hash: 'password_hash',
    access_token: 'access_token',
    salt: 'salt',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const User_in_homeScalarFieldEnum: {
    user_email: 'user_email',
    home_id: 'home_id'
  };

  export type User_in_homeScalarFieldEnum = (typeof User_in_homeScalarFieldEnum)[keyof typeof User_in_homeScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    status: 'status',
    type: 'type',
    power_rating: 'power_rating',
    room_name: 'room_name',
    password: 'password',
    serial_number: 'serial_number'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const MeasurementScalarFieldEnum: {
    id: 'id',
    usage_time: 'usage_time',
    consumption: 'consumption',
    device_id: 'device_id'
  };

  export type MeasurementScalarFieldEnum = (typeof MeasurementScalarFieldEnum)[keyof typeof MeasurementScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    device_id: 'device_id',
    time_action: 'time_action',
    action: 'action'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const Log_eventScalarFieldEnum: {
    id: 'id',
    time_in: 'time_in',
    time_out: 'time_out',
    action: 'action',
    device_id: 'device_id'
  };

  export type Log_eventScalarFieldEnum = (typeof Log_eventScalarFieldEnum)[keyof typeof Log_eventScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    content: 'content'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const Device_have_notificationScalarFieldEnum: {
    notification_id: 'notification_id',
    device_id: 'device_id',
    notification_time: 'notification_time'
  };

  export type Device_have_notificationScalarFieldEnum = (typeof Device_have_notificationScalarFieldEnum)[keyof typeof Device_have_notificationScalarFieldEnum]


  export const HomeScalarFieldEnum: {
    id: 'id',
    serial_number: 'serial_number'
  };

  export type HomeScalarFieldEnum = (typeof HomeScalarFieldEnum)[keyof typeof HomeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    access_token?: StringNullableFilter<"users"> | string | null
    salt?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    user_in_home?: User_in_homeListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    access_token?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_in_home?: user_in_homeOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    access_token?: StringNullableFilter<"users"> | string | null
    salt?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    user_in_home?: User_in_homeListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    access_token?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    access_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    salt?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type user_in_homeWhereInput = {
    AND?: user_in_homeWhereInput | user_in_homeWhereInput[]
    OR?: user_in_homeWhereInput[]
    NOT?: user_in_homeWhereInput | user_in_homeWhereInput[]
    user_email?: StringFilter<"user_in_home"> | string
    home_id?: IntFilter<"user_in_home"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    home?: XOR<HomeScalarRelationFilter, homeWhereInput>
  }

  export type user_in_homeOrderByWithRelationInput = {
    user_email?: SortOrder
    home_id?: SortOrder
    user?: usersOrderByWithRelationInput
    home?: homeOrderByWithRelationInput
  }

  export type user_in_homeWhereUniqueInput = Prisma.AtLeast<{
    user_email_home_id?: user_in_homeUser_emailHome_idCompoundUniqueInput
    AND?: user_in_homeWhereInput | user_in_homeWhereInput[]
    OR?: user_in_homeWhereInput[]
    NOT?: user_in_homeWhereInput | user_in_homeWhereInput[]
    user_email?: StringFilter<"user_in_home"> | string
    home_id?: IntFilter<"user_in_home"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    home?: XOR<HomeScalarRelationFilter, homeWhereInput>
  }, "user_email_home_id">

  export type user_in_homeOrderByWithAggregationInput = {
    user_email?: SortOrder
    home_id?: SortOrder
    _count?: user_in_homeCountOrderByAggregateInput
    _avg?: user_in_homeAvgOrderByAggregateInput
    _max?: user_in_homeMaxOrderByAggregateInput
    _min?: user_in_homeMinOrderByAggregateInput
    _sum?: user_in_homeSumOrderByAggregateInput
  }

  export type user_in_homeScalarWhereWithAggregatesInput = {
    AND?: user_in_homeScalarWhereWithAggregatesInput | user_in_homeScalarWhereWithAggregatesInput[]
    OR?: user_in_homeScalarWhereWithAggregatesInput[]
    NOT?: user_in_homeScalarWhereWithAggregatesInput | user_in_homeScalarWhereWithAggregatesInput[]
    user_email?: StringWithAggregatesFilter<"user_in_home"> | string
    home_id?: IntWithAggregatesFilter<"user_in_home"> | number
  }

  export type deviceWhereInput = {
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    id?: IntFilter<"device"> | number
    status?: StringFilter<"device"> | string
    type?: StringFilter<"device"> | string
    power_rating?: StringFilter<"device"> | string
    room_name?: StringFilter<"device"> | string
    password?: StringFilter<"device"> | string
    serial_number?: StringFilter<"device"> | string
    measurement?: MeasurementListRelationFilter
    schedule?: ScheduleListRelationFilter
    log_event?: Log_eventListRelationFilter
    device_have_notification?: Device_have_notificationListRelationFilter
    home?: XOR<HomeScalarRelationFilter, homeWhereInput>
  }

  export type deviceOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    power_rating?: SortOrder
    room_name?: SortOrder
    password?: SortOrder
    serial_number?: SortOrder
    measurement?: measurementOrderByRelationAggregateInput
    schedule?: scheduleOrderByRelationAggregateInput
    log_event?: log_eventOrderByRelationAggregateInput
    device_have_notification?: device_have_notificationOrderByRelationAggregateInput
    home?: homeOrderByWithRelationInput
  }

  export type deviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    status?: StringFilter<"device"> | string
    type?: StringFilter<"device"> | string
    power_rating?: StringFilter<"device"> | string
    room_name?: StringFilter<"device"> | string
    password?: StringFilter<"device"> | string
    serial_number?: StringFilter<"device"> | string
    measurement?: MeasurementListRelationFilter
    schedule?: ScheduleListRelationFilter
    log_event?: Log_eventListRelationFilter
    device_have_notification?: Device_have_notificationListRelationFilter
    home?: XOR<HomeScalarRelationFilter, homeWhereInput>
  }, "id">

  export type deviceOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    power_rating?: SortOrder
    room_name?: SortOrder
    password?: SortOrder
    serial_number?: SortOrder
    _count?: deviceCountOrderByAggregateInput
    _avg?: deviceAvgOrderByAggregateInput
    _max?: deviceMaxOrderByAggregateInput
    _min?: deviceMinOrderByAggregateInput
    _sum?: deviceSumOrderByAggregateInput
  }

  export type deviceScalarWhereWithAggregatesInput = {
    AND?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    OR?: deviceScalarWhereWithAggregatesInput[]
    NOT?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"device"> | number
    status?: StringWithAggregatesFilter<"device"> | string
    type?: StringWithAggregatesFilter<"device"> | string
    power_rating?: StringWithAggregatesFilter<"device"> | string
    room_name?: StringWithAggregatesFilter<"device"> | string
    password?: StringWithAggregatesFilter<"device"> | string
    serial_number?: StringWithAggregatesFilter<"device"> | string
  }

  export type measurementWhereInput = {
    AND?: measurementWhereInput | measurementWhereInput[]
    OR?: measurementWhereInput[]
    NOT?: measurementWhereInput | measurementWhereInput[]
    id?: IntFilter<"measurement"> | number
    usage_time?: DateTimeFilter<"measurement"> | Date | string
    consumption?: IntNullableFilter<"measurement"> | number | null
    device_id?: IntNullableFilter<"measurement"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, deviceWhereInput> | null
  }

  export type measurementOrderByWithRelationInput = {
    id?: SortOrder
    usage_time?: SortOrder
    consumption?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    device?: deviceOrderByWithRelationInput
  }

  export type measurementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: measurementWhereInput | measurementWhereInput[]
    OR?: measurementWhereInput[]
    NOT?: measurementWhereInput | measurementWhereInput[]
    usage_time?: DateTimeFilter<"measurement"> | Date | string
    consumption?: IntNullableFilter<"measurement"> | number | null
    device_id?: IntNullableFilter<"measurement"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, deviceWhereInput> | null
  }, "id">

  export type measurementOrderByWithAggregationInput = {
    id?: SortOrder
    usage_time?: SortOrder
    consumption?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    _count?: measurementCountOrderByAggregateInput
    _avg?: measurementAvgOrderByAggregateInput
    _max?: measurementMaxOrderByAggregateInput
    _min?: measurementMinOrderByAggregateInput
    _sum?: measurementSumOrderByAggregateInput
  }

  export type measurementScalarWhereWithAggregatesInput = {
    AND?: measurementScalarWhereWithAggregatesInput | measurementScalarWhereWithAggregatesInput[]
    OR?: measurementScalarWhereWithAggregatesInput[]
    NOT?: measurementScalarWhereWithAggregatesInput | measurementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"measurement"> | number
    usage_time?: DateTimeWithAggregatesFilter<"measurement"> | Date | string
    consumption?: IntNullableWithAggregatesFilter<"measurement"> | number | null
    device_id?: IntNullableWithAggregatesFilter<"measurement"> | number | null
  }

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    device_id?: IntFilter<"schedule"> | number
    time_action?: DateTimeFilter<"schedule"> | Date | string
    action?: StringFilter<"schedule"> | string
    device?: XOR<DeviceScalarRelationFilter, deviceWhereInput>
  }

  export type scheduleOrderByWithRelationInput = {
    device_id?: SortOrder
    time_action?: SortOrder
    action?: SortOrder
    device?: deviceOrderByWithRelationInput
  }

  export type scheduleWhereUniqueInput = Prisma.AtLeast<{
    time_action_device_id?: scheduleTime_actionDevice_idCompoundUniqueInput
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    device_id?: IntFilter<"schedule"> | number
    time_action?: DateTimeFilter<"schedule"> | Date | string
    action?: StringFilter<"schedule"> | string
    device?: XOR<DeviceScalarRelationFilter, deviceWhereInput>
  }, "time_action_device_id">

  export type scheduleOrderByWithAggregationInput = {
    device_id?: SortOrder
    time_action?: SortOrder
    action?: SortOrder
    _count?: scheduleCountOrderByAggregateInput
    _avg?: scheduleAvgOrderByAggregateInput
    _max?: scheduleMaxOrderByAggregateInput
    _min?: scheduleMinOrderByAggregateInput
    _sum?: scheduleSumOrderByAggregateInput
  }

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    OR?: scheduleScalarWhereWithAggregatesInput[]
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    device_id?: IntWithAggregatesFilter<"schedule"> | number
    time_action?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
    action?: StringWithAggregatesFilter<"schedule"> | string
  }

  export type log_eventWhereInput = {
    AND?: log_eventWhereInput | log_eventWhereInput[]
    OR?: log_eventWhereInput[]
    NOT?: log_eventWhereInput | log_eventWhereInput[]
    id?: IntFilter<"log_event"> | number
    time_in?: DateTimeNullableFilter<"log_event"> | Date | string | null
    time_out?: DateTimeNullableFilter<"log_event"> | Date | string | null
    action?: StringNullableFilter<"log_event"> | string | null
    device_id?: IntNullableFilter<"log_event"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, deviceWhereInput> | null
  }

  export type log_eventOrderByWithRelationInput = {
    id?: SortOrder
    time_in?: SortOrderInput | SortOrder
    time_out?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    device?: deviceOrderByWithRelationInput
  }

  export type log_eventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: log_eventWhereInput | log_eventWhereInput[]
    OR?: log_eventWhereInput[]
    NOT?: log_eventWhereInput | log_eventWhereInput[]
    time_in?: DateTimeNullableFilter<"log_event"> | Date | string | null
    time_out?: DateTimeNullableFilter<"log_event"> | Date | string | null
    action?: StringNullableFilter<"log_event"> | string | null
    device_id?: IntNullableFilter<"log_event"> | number | null
    device?: XOR<DeviceNullableScalarRelationFilter, deviceWhereInput> | null
  }, "id">

  export type log_eventOrderByWithAggregationInput = {
    id?: SortOrder
    time_in?: SortOrderInput | SortOrder
    time_out?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    _count?: log_eventCountOrderByAggregateInput
    _avg?: log_eventAvgOrderByAggregateInput
    _max?: log_eventMaxOrderByAggregateInput
    _min?: log_eventMinOrderByAggregateInput
    _sum?: log_eventSumOrderByAggregateInput
  }

  export type log_eventScalarWhereWithAggregatesInput = {
    AND?: log_eventScalarWhereWithAggregatesInput | log_eventScalarWhereWithAggregatesInput[]
    OR?: log_eventScalarWhereWithAggregatesInput[]
    NOT?: log_eventScalarWhereWithAggregatesInput | log_eventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"log_event"> | number
    time_in?: DateTimeNullableWithAggregatesFilter<"log_event"> | Date | string | null
    time_out?: DateTimeNullableWithAggregatesFilter<"log_event"> | Date | string | null
    action?: StringNullableWithAggregatesFilter<"log_event"> | string | null
    device_id?: IntNullableWithAggregatesFilter<"log_event"> | number | null
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: IntFilter<"notification"> | number
    content?: StringNullableFilter<"notification"> | string | null
    device_have_notification?: Device_have_notificationListRelationFilter
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    device_have_notification?: device_have_notificationOrderByRelationAggregateInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    content?: StringNullableFilter<"notification"> | string | null
    device_have_notification?: Device_have_notificationListRelationFilter
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    _count?: notificationCountOrderByAggregateInput
    _avg?: notificationAvgOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
    _sum?: notificationSumOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notification"> | number
    content?: StringNullableWithAggregatesFilter<"notification"> | string | null
  }

  export type device_have_notificationWhereInput = {
    AND?: device_have_notificationWhereInput | device_have_notificationWhereInput[]
    OR?: device_have_notificationWhereInput[]
    NOT?: device_have_notificationWhereInput | device_have_notificationWhereInput[]
    notification_id?: IntFilter<"device_have_notification"> | number
    device_id?: IntFilter<"device_have_notification"> | number
    notification_time?: DateTimeNullableFilter<"device_have_notification"> | Date | string | null
    notification?: XOR<NotificationScalarRelationFilter, notificationWhereInput>
    device?: XOR<DeviceScalarRelationFilter, deviceWhereInput>
  }

  export type device_have_notificationOrderByWithRelationInput = {
    notification_id?: SortOrder
    device_id?: SortOrder
    notification_time?: SortOrderInput | SortOrder
    notification?: notificationOrderByWithRelationInput
    device?: deviceOrderByWithRelationInput
  }

  export type device_have_notificationWhereUniqueInput = Prisma.AtLeast<{
    notification_id_device_id?: device_have_notificationNotification_idDevice_idCompoundUniqueInput
    AND?: device_have_notificationWhereInput | device_have_notificationWhereInput[]
    OR?: device_have_notificationWhereInput[]
    NOT?: device_have_notificationWhereInput | device_have_notificationWhereInput[]
    notification_id?: IntFilter<"device_have_notification"> | number
    device_id?: IntFilter<"device_have_notification"> | number
    notification_time?: DateTimeNullableFilter<"device_have_notification"> | Date | string | null
    notification?: XOR<NotificationScalarRelationFilter, notificationWhereInput>
    device?: XOR<DeviceScalarRelationFilter, deviceWhereInput>
  }, "notification_id_device_id">

  export type device_have_notificationOrderByWithAggregationInput = {
    notification_id?: SortOrder
    device_id?: SortOrder
    notification_time?: SortOrderInput | SortOrder
    _count?: device_have_notificationCountOrderByAggregateInput
    _avg?: device_have_notificationAvgOrderByAggregateInput
    _max?: device_have_notificationMaxOrderByAggregateInput
    _min?: device_have_notificationMinOrderByAggregateInput
    _sum?: device_have_notificationSumOrderByAggregateInput
  }

  export type device_have_notificationScalarWhereWithAggregatesInput = {
    AND?: device_have_notificationScalarWhereWithAggregatesInput | device_have_notificationScalarWhereWithAggregatesInput[]
    OR?: device_have_notificationScalarWhereWithAggregatesInput[]
    NOT?: device_have_notificationScalarWhereWithAggregatesInput | device_have_notificationScalarWhereWithAggregatesInput[]
    notification_id?: IntWithAggregatesFilter<"device_have_notification"> | number
    device_id?: IntWithAggregatesFilter<"device_have_notification"> | number
    notification_time?: DateTimeNullableWithAggregatesFilter<"device_have_notification"> | Date | string | null
  }

  export type homeWhereInput = {
    AND?: homeWhereInput | homeWhereInput[]
    OR?: homeWhereInput[]
    NOT?: homeWhereInput | homeWhereInput[]
    id?: IntFilter<"home"> | number
    serial_number?: StringFilter<"home"> | string
    device?: DeviceListRelationFilter
    user_in_home?: User_in_homeListRelationFilter
  }

  export type homeOrderByWithRelationInput = {
    id?: SortOrder
    serial_number?: SortOrder
    device?: deviceOrderByRelationAggregateInput
    user_in_home?: user_in_homeOrderByRelationAggregateInput
  }

  export type homeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serial_number?: string
    AND?: homeWhereInput | homeWhereInput[]
    OR?: homeWhereInput[]
    NOT?: homeWhereInput | homeWhereInput[]
    device?: DeviceListRelationFilter
    user_in_home?: User_in_homeListRelationFilter
  }, "id" | "serial_number">

  export type homeOrderByWithAggregationInput = {
    id?: SortOrder
    serial_number?: SortOrder
    _count?: homeCountOrderByAggregateInput
    _avg?: homeAvgOrderByAggregateInput
    _max?: homeMaxOrderByAggregateInput
    _min?: homeMinOrderByAggregateInput
    _sum?: homeSumOrderByAggregateInput
  }

  export type homeScalarWhereWithAggregatesInput = {
    AND?: homeScalarWhereWithAggregatesInput | homeScalarWhereWithAggregatesInput[]
    OR?: homeScalarWhereWithAggregatesInput[]
    NOT?: homeScalarWhereWithAggregatesInput | homeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"home"> | number
    serial_number?: StringWithAggregatesFilter<"home"> | string
  }

  export type usersCreateInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    access_token?: string | null
    salt?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_in_home?: user_in_homeCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    access_token?: string | null
    salt?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_in_home?: user_in_homeUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_in_home?: user_in_homeUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_in_home?: user_in_homeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    access_token?: string | null
    salt?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_in_homeCreateInput = {
    user: usersCreateNestedOneWithoutUser_in_homeInput
    home: homeCreateNestedOneWithoutUser_in_homeInput
  }

  export type user_in_homeUncheckedCreateInput = {
    user_email: string
    home_id: number
  }

  export type user_in_homeUpdateInput = {
    user?: usersUpdateOneRequiredWithoutUser_in_homeNestedInput
    home?: homeUpdateOneRequiredWithoutUser_in_homeNestedInput
  }

  export type user_in_homeUncheckedUpdateInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    home_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_in_homeCreateManyInput = {
    user_email: string
    home_id: number
  }

  export type user_in_homeUpdateManyMutationInput = {

  }

  export type user_in_homeUncheckedUpdateManyInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    home_id?: IntFieldUpdateOperationsInput | number
  }

  export type deviceCreateInput = {
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    measurement?: measurementCreateNestedManyWithoutDeviceInput
    schedule?: scheduleCreateNestedManyWithoutDeviceInput
    log_event?: log_eventCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationCreateNestedManyWithoutDeviceInput
    home: homeCreateNestedOneWithoutDeviceInput
  }

  export type deviceUncheckedCreateInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    serial_number: string
    measurement?: measurementUncheckedCreateNestedManyWithoutDeviceInput
    schedule?: scheduleUncheckedCreateNestedManyWithoutDeviceInput
    log_event?: log_eventUncheckedCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUpdateManyWithoutDeviceNestedInput
    home?: homeUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUncheckedUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUncheckedUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUncheckedUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceCreateManyInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    serial_number: string
  }

  export type deviceUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type deviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
  }

  export type measurementCreateInput = {
    usage_time: Date | string
    consumption?: number | null
    device?: deviceCreateNestedOneWithoutMeasurementInput
  }

  export type measurementUncheckedCreateInput = {
    id?: number
    usage_time: Date | string
    consumption?: number | null
    device_id?: number | null
  }

  export type measurementUpdateInput = {
    usage_time?: DateTimeFieldUpdateOperationsInput | Date | string
    consumption?: NullableIntFieldUpdateOperationsInput | number | null
    device?: deviceUpdateOneWithoutMeasurementNestedInput
  }

  export type measurementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usage_time?: DateTimeFieldUpdateOperationsInput | Date | string
    consumption?: NullableIntFieldUpdateOperationsInput | number | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type measurementCreateManyInput = {
    id?: number
    usage_time: Date | string
    consumption?: number | null
    device_id?: number | null
  }

  export type measurementUpdateManyMutationInput = {
    usage_time?: DateTimeFieldUpdateOperationsInput | Date | string
    consumption?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type measurementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usage_time?: DateTimeFieldUpdateOperationsInput | Date | string
    consumption?: NullableIntFieldUpdateOperationsInput | number | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type scheduleCreateInput = {
    time_action: Date | string
    action: string
    device: deviceCreateNestedOneWithoutScheduleInput
  }

  export type scheduleUncheckedCreateInput = {
    device_id: number
    time_action: Date | string
    action: string
  }

  export type scheduleUpdateInput = {
    time_action?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    device?: deviceUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateInput = {
    device_id?: IntFieldUpdateOperationsInput | number
    time_action?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleCreateManyInput = {
    device_id: number
    time_action: Date | string
    action: string
  }

  export type scheduleUpdateManyMutationInput = {
    time_action?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleUncheckedUpdateManyInput = {
    device_id?: IntFieldUpdateOperationsInput | number
    time_action?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type log_eventCreateInput = {
    time_in?: Date | string | null
    time_out?: Date | string | null
    action?: string | null
    device?: deviceCreateNestedOneWithoutLog_eventInput
  }

  export type log_eventUncheckedCreateInput = {
    id?: number
    time_in?: Date | string | null
    time_out?: Date | string | null
    action?: string | null
    device_id?: number | null
  }

  export type log_eventUpdateInput = {
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    device?: deviceUpdateOneWithoutLog_eventNestedInput
  }

  export type log_eventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type log_eventCreateManyInput = {
    id?: number
    time_in?: Date | string | null
    time_out?: Date | string | null
    action?: string | null
    device_id?: number | null
  }

  export type log_eventUpdateManyMutationInput = {
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type log_eventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationCreateInput = {
    content?: string | null
    device_have_notification?: device_have_notificationCreateNestedManyWithoutNotificationInput
  }

  export type notificationUncheckedCreateInput = {
    id?: number
    content?: string | null
    device_have_notification?: device_have_notificationUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type notificationUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    device_have_notification?: device_have_notificationUpdateManyWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    device_have_notification?: device_have_notificationUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type notificationCreateManyInput = {
    id?: number
    content?: string | null
  }

  export type notificationUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type device_have_notificationCreateInput = {
    notification_time?: Date | string | null
    notification: notificationCreateNestedOneWithoutDevice_have_notificationInput
    device: deviceCreateNestedOneWithoutDevice_have_notificationInput
  }

  export type device_have_notificationUncheckedCreateInput = {
    notification_id: number
    device_id: number
    notification_time?: Date | string | null
  }

  export type device_have_notificationUpdateInput = {
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUpdateOneRequiredWithoutDevice_have_notificationNestedInput
    device?: deviceUpdateOneRequiredWithoutDevice_have_notificationNestedInput
  }

  export type device_have_notificationUncheckedUpdateInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    device_id?: IntFieldUpdateOperationsInput | number
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_have_notificationCreateManyInput = {
    notification_id: number
    device_id: number
    notification_time?: Date | string | null
  }

  export type device_have_notificationUpdateManyMutationInput = {
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_have_notificationUncheckedUpdateManyInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    device_id?: IntFieldUpdateOperationsInput | number
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type homeCreateInput = {
    serial_number: string
    device?: deviceCreateNestedManyWithoutHomeInput
    user_in_home?: user_in_homeCreateNestedManyWithoutHomeInput
  }

  export type homeUncheckedCreateInput = {
    id?: number
    serial_number: string
    device?: deviceUncheckedCreateNestedManyWithoutHomeInput
    user_in_home?: user_in_homeUncheckedCreateNestedManyWithoutHomeInput
  }

  export type homeUpdateInput = {
    serial_number?: StringFieldUpdateOperationsInput | string
    device?: deviceUpdateManyWithoutHomeNestedInput
    user_in_home?: user_in_homeUpdateManyWithoutHomeNestedInput
  }

  export type homeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_number?: StringFieldUpdateOperationsInput | string
    device?: deviceUncheckedUpdateManyWithoutHomeNestedInput
    user_in_home?: user_in_homeUncheckedUpdateManyWithoutHomeNestedInput
  }

  export type homeCreateManyInput = {
    id?: number
    serial_number: string
  }

  export type homeUpdateManyMutationInput = {
    serial_number?: StringFieldUpdateOperationsInput | string
  }

  export type homeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_number?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_in_homeListRelationFilter = {
    every?: user_in_homeWhereInput
    some?: user_in_homeWhereInput
    none?: user_in_homeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_in_homeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    access_token?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    access_token?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    access_token?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type HomeScalarRelationFilter = {
    is?: homeWhereInput
    isNot?: homeWhereInput
  }

  export type user_in_homeUser_emailHome_idCompoundUniqueInput = {
    user_email: string
    home_id: number
  }

  export type user_in_homeCountOrderByAggregateInput = {
    user_email?: SortOrder
    home_id?: SortOrder
  }

  export type user_in_homeAvgOrderByAggregateInput = {
    home_id?: SortOrder
  }

  export type user_in_homeMaxOrderByAggregateInput = {
    user_email?: SortOrder
    home_id?: SortOrder
  }

  export type user_in_homeMinOrderByAggregateInput = {
    user_email?: SortOrder
    home_id?: SortOrder
  }

  export type user_in_homeSumOrderByAggregateInput = {
    home_id?: SortOrder
  }

  export type MeasurementListRelationFilter = {
    every?: measurementWhereInput
    some?: measurementWhereInput
    none?: measurementWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: scheduleWhereInput
    some?: scheduleWhereInput
    none?: scheduleWhereInput
  }

  export type Log_eventListRelationFilter = {
    every?: log_eventWhereInput
    some?: log_eventWhereInput
    none?: log_eventWhereInput
  }

  export type Device_have_notificationListRelationFilter = {
    every?: device_have_notificationWhereInput
    some?: device_have_notificationWhereInput
    none?: device_have_notificationWhereInput
  }

  export type measurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type log_eventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type device_have_notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type deviceCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    power_rating?: SortOrder
    room_name?: SortOrder
    password?: SortOrder
    serial_number?: SortOrder
  }

  export type deviceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type deviceMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    power_rating?: SortOrder
    room_name?: SortOrder
    password?: SortOrder
    serial_number?: SortOrder
  }

  export type deviceMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    power_rating?: SortOrder
    room_name?: SortOrder
    password?: SortOrder
    serial_number?: SortOrder
  }

  export type deviceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DeviceNullableScalarRelationFilter = {
    is?: deviceWhereInput | null
    isNot?: deviceWhereInput | null
  }

  export type measurementCountOrderByAggregateInput = {
    id?: SortOrder
    usage_time?: SortOrder
    consumption?: SortOrder
    device_id?: SortOrder
  }

  export type measurementAvgOrderByAggregateInput = {
    id?: SortOrder
    consumption?: SortOrder
    device_id?: SortOrder
  }

  export type measurementMaxOrderByAggregateInput = {
    id?: SortOrder
    usage_time?: SortOrder
    consumption?: SortOrder
    device_id?: SortOrder
  }

  export type measurementMinOrderByAggregateInput = {
    id?: SortOrder
    usage_time?: SortOrder
    consumption?: SortOrder
    device_id?: SortOrder
  }

  export type measurementSumOrderByAggregateInput = {
    id?: SortOrder
    consumption?: SortOrder
    device_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DeviceScalarRelationFilter = {
    is?: deviceWhereInput
    isNot?: deviceWhereInput
  }

  export type scheduleTime_actionDevice_idCompoundUniqueInput = {
    time_action: Date | string
    device_id: number
  }

  export type scheduleCountOrderByAggregateInput = {
    device_id?: SortOrder
    time_action?: SortOrder
    action?: SortOrder
  }

  export type scheduleAvgOrderByAggregateInput = {
    device_id?: SortOrder
  }

  export type scheduleMaxOrderByAggregateInput = {
    device_id?: SortOrder
    time_action?: SortOrder
    action?: SortOrder
  }

  export type scheduleMinOrderByAggregateInput = {
    device_id?: SortOrder
    time_action?: SortOrder
    action?: SortOrder
  }

  export type scheduleSumOrderByAggregateInput = {
    device_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type log_eventCountOrderByAggregateInput = {
    id?: SortOrder
    time_in?: SortOrder
    time_out?: SortOrder
    action?: SortOrder
    device_id?: SortOrder
  }

  export type log_eventAvgOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
  }

  export type log_eventMaxOrderByAggregateInput = {
    id?: SortOrder
    time_in?: SortOrder
    time_out?: SortOrder
    action?: SortOrder
    device_id?: SortOrder
  }

  export type log_eventMinOrderByAggregateInput = {
    id?: SortOrder
    time_in?: SortOrder
    time_out?: SortOrder
    action?: SortOrder
    device_id?: SortOrder
  }

  export type log_eventSumOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type notificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type notificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationScalarRelationFilter = {
    is?: notificationWhereInput
    isNot?: notificationWhereInput
  }

  export type device_have_notificationNotification_idDevice_idCompoundUniqueInput = {
    notification_id: number
    device_id: number
  }

  export type device_have_notificationCountOrderByAggregateInput = {
    notification_id?: SortOrder
    device_id?: SortOrder
    notification_time?: SortOrder
  }

  export type device_have_notificationAvgOrderByAggregateInput = {
    notification_id?: SortOrder
    device_id?: SortOrder
  }

  export type device_have_notificationMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    device_id?: SortOrder
    notification_time?: SortOrder
  }

  export type device_have_notificationMinOrderByAggregateInput = {
    notification_id?: SortOrder
    device_id?: SortOrder
    notification_time?: SortOrder
  }

  export type device_have_notificationSumOrderByAggregateInput = {
    notification_id?: SortOrder
    device_id?: SortOrder
  }

  export type DeviceListRelationFilter = {
    every?: deviceWhereInput
    some?: deviceWhereInput
    none?: deviceWhereInput
  }

  export type deviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type homeCountOrderByAggregateInput = {
    id?: SortOrder
    serial_number?: SortOrder
  }

  export type homeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type homeMaxOrderByAggregateInput = {
    id?: SortOrder
    serial_number?: SortOrder
  }

  export type homeMinOrderByAggregateInput = {
    id?: SortOrder
    serial_number?: SortOrder
  }

  export type homeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_in_homeCreateNestedManyWithoutUserInput = {
    create?: XOR<user_in_homeCreateWithoutUserInput, user_in_homeUncheckedCreateWithoutUserInput> | user_in_homeCreateWithoutUserInput[] | user_in_homeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutUserInput | user_in_homeCreateOrConnectWithoutUserInput[]
    createMany?: user_in_homeCreateManyUserInputEnvelope
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
  }

  export type user_in_homeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_in_homeCreateWithoutUserInput, user_in_homeUncheckedCreateWithoutUserInput> | user_in_homeCreateWithoutUserInput[] | user_in_homeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutUserInput | user_in_homeCreateOrConnectWithoutUserInput[]
    createMany?: user_in_homeCreateManyUserInputEnvelope
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_in_homeUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_in_homeCreateWithoutUserInput, user_in_homeUncheckedCreateWithoutUserInput> | user_in_homeCreateWithoutUserInput[] | user_in_homeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutUserInput | user_in_homeCreateOrConnectWithoutUserInput[]
    upsert?: user_in_homeUpsertWithWhereUniqueWithoutUserInput | user_in_homeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_in_homeCreateManyUserInputEnvelope
    set?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    disconnect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    delete?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    update?: user_in_homeUpdateWithWhereUniqueWithoutUserInput | user_in_homeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_in_homeUpdateManyWithWhereWithoutUserInput | user_in_homeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_in_homeScalarWhereInput | user_in_homeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_in_homeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_in_homeCreateWithoutUserInput, user_in_homeUncheckedCreateWithoutUserInput> | user_in_homeCreateWithoutUserInput[] | user_in_homeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutUserInput | user_in_homeCreateOrConnectWithoutUserInput[]
    upsert?: user_in_homeUpsertWithWhereUniqueWithoutUserInput | user_in_homeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_in_homeCreateManyUserInputEnvelope
    set?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    disconnect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    delete?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    update?: user_in_homeUpdateWithWhereUniqueWithoutUserInput | user_in_homeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_in_homeUpdateManyWithWhereWithoutUserInput | user_in_homeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_in_homeScalarWhereInput | user_in_homeScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_in_homeInput = {
    create?: XOR<usersCreateWithoutUser_in_homeInput, usersUncheckedCreateWithoutUser_in_homeInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_in_homeInput
    connect?: usersWhereUniqueInput
  }

  export type homeCreateNestedOneWithoutUser_in_homeInput = {
    create?: XOR<homeCreateWithoutUser_in_homeInput, homeUncheckedCreateWithoutUser_in_homeInput>
    connectOrCreate?: homeCreateOrConnectWithoutUser_in_homeInput
    connect?: homeWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_in_homeNestedInput = {
    create?: XOR<usersCreateWithoutUser_in_homeInput, usersUncheckedCreateWithoutUser_in_homeInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_in_homeInput
    upsert?: usersUpsertWithoutUser_in_homeInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_in_homeInput, usersUpdateWithoutUser_in_homeInput>, usersUncheckedUpdateWithoutUser_in_homeInput>
  }

  export type homeUpdateOneRequiredWithoutUser_in_homeNestedInput = {
    create?: XOR<homeCreateWithoutUser_in_homeInput, homeUncheckedCreateWithoutUser_in_homeInput>
    connectOrCreate?: homeCreateOrConnectWithoutUser_in_homeInput
    upsert?: homeUpsertWithoutUser_in_homeInput
    connect?: homeWhereUniqueInput
    update?: XOR<XOR<homeUpdateToOneWithWhereWithoutUser_in_homeInput, homeUpdateWithoutUser_in_homeInput>, homeUncheckedUpdateWithoutUser_in_homeInput>
  }

  export type measurementCreateNestedManyWithoutDeviceInput = {
    create?: XOR<measurementCreateWithoutDeviceInput, measurementUncheckedCreateWithoutDeviceInput> | measurementCreateWithoutDeviceInput[] | measurementUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDeviceInput | measurementCreateOrConnectWithoutDeviceInput[]
    createMany?: measurementCreateManyDeviceInputEnvelope
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
  }

  export type scheduleCreateNestedManyWithoutDeviceInput = {
    create?: XOR<scheduleCreateWithoutDeviceInput, scheduleUncheckedCreateWithoutDeviceInput> | scheduleCreateWithoutDeviceInput[] | scheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutDeviceInput | scheduleCreateOrConnectWithoutDeviceInput[]
    createMany?: scheduleCreateManyDeviceInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type log_eventCreateNestedManyWithoutDeviceInput = {
    create?: XOR<log_eventCreateWithoutDeviceInput, log_eventUncheckedCreateWithoutDeviceInput> | log_eventCreateWithoutDeviceInput[] | log_eventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: log_eventCreateOrConnectWithoutDeviceInput | log_eventCreateOrConnectWithoutDeviceInput[]
    createMany?: log_eventCreateManyDeviceInputEnvelope
    connect?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
  }

  export type device_have_notificationCreateNestedManyWithoutDeviceInput = {
    create?: XOR<device_have_notificationCreateWithoutDeviceInput, device_have_notificationUncheckedCreateWithoutDeviceInput> | device_have_notificationCreateWithoutDeviceInput[] | device_have_notificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutDeviceInput | device_have_notificationCreateOrConnectWithoutDeviceInput[]
    createMany?: device_have_notificationCreateManyDeviceInputEnvelope
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
  }

  export type homeCreateNestedOneWithoutDeviceInput = {
    create?: XOR<homeCreateWithoutDeviceInput, homeUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: homeCreateOrConnectWithoutDeviceInput
    connect?: homeWhereUniqueInput
  }

  export type measurementUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<measurementCreateWithoutDeviceInput, measurementUncheckedCreateWithoutDeviceInput> | measurementCreateWithoutDeviceInput[] | measurementUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDeviceInput | measurementCreateOrConnectWithoutDeviceInput[]
    createMany?: measurementCreateManyDeviceInputEnvelope
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
  }

  export type scheduleUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<scheduleCreateWithoutDeviceInput, scheduleUncheckedCreateWithoutDeviceInput> | scheduleCreateWithoutDeviceInput[] | scheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutDeviceInput | scheduleCreateOrConnectWithoutDeviceInput[]
    createMany?: scheduleCreateManyDeviceInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type log_eventUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<log_eventCreateWithoutDeviceInput, log_eventUncheckedCreateWithoutDeviceInput> | log_eventCreateWithoutDeviceInput[] | log_eventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: log_eventCreateOrConnectWithoutDeviceInput | log_eventCreateOrConnectWithoutDeviceInput[]
    createMany?: log_eventCreateManyDeviceInputEnvelope
    connect?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
  }

  export type device_have_notificationUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<device_have_notificationCreateWithoutDeviceInput, device_have_notificationUncheckedCreateWithoutDeviceInput> | device_have_notificationCreateWithoutDeviceInput[] | device_have_notificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutDeviceInput | device_have_notificationCreateOrConnectWithoutDeviceInput[]
    createMany?: device_have_notificationCreateManyDeviceInputEnvelope
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
  }

  export type measurementUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<measurementCreateWithoutDeviceInput, measurementUncheckedCreateWithoutDeviceInput> | measurementCreateWithoutDeviceInput[] | measurementUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDeviceInput | measurementCreateOrConnectWithoutDeviceInput[]
    upsert?: measurementUpsertWithWhereUniqueWithoutDeviceInput | measurementUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: measurementCreateManyDeviceInputEnvelope
    set?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    disconnect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    delete?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    update?: measurementUpdateWithWhereUniqueWithoutDeviceInput | measurementUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: measurementUpdateManyWithWhereWithoutDeviceInput | measurementUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: measurementScalarWhereInput | measurementScalarWhereInput[]
  }

  export type scheduleUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<scheduleCreateWithoutDeviceInput, scheduleUncheckedCreateWithoutDeviceInput> | scheduleCreateWithoutDeviceInput[] | scheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutDeviceInput | scheduleCreateOrConnectWithoutDeviceInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutDeviceInput | scheduleUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: scheduleCreateManyDeviceInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutDeviceInput | scheduleUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutDeviceInput | scheduleUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type log_eventUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<log_eventCreateWithoutDeviceInput, log_eventUncheckedCreateWithoutDeviceInput> | log_eventCreateWithoutDeviceInput[] | log_eventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: log_eventCreateOrConnectWithoutDeviceInput | log_eventCreateOrConnectWithoutDeviceInput[]
    upsert?: log_eventUpsertWithWhereUniqueWithoutDeviceInput | log_eventUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: log_eventCreateManyDeviceInputEnvelope
    set?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    disconnect?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    delete?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    connect?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    update?: log_eventUpdateWithWhereUniqueWithoutDeviceInput | log_eventUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: log_eventUpdateManyWithWhereWithoutDeviceInput | log_eventUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: log_eventScalarWhereInput | log_eventScalarWhereInput[]
  }

  export type device_have_notificationUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<device_have_notificationCreateWithoutDeviceInput, device_have_notificationUncheckedCreateWithoutDeviceInput> | device_have_notificationCreateWithoutDeviceInput[] | device_have_notificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutDeviceInput | device_have_notificationCreateOrConnectWithoutDeviceInput[]
    upsert?: device_have_notificationUpsertWithWhereUniqueWithoutDeviceInput | device_have_notificationUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: device_have_notificationCreateManyDeviceInputEnvelope
    set?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    disconnect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    delete?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    update?: device_have_notificationUpdateWithWhereUniqueWithoutDeviceInput | device_have_notificationUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: device_have_notificationUpdateManyWithWhereWithoutDeviceInput | device_have_notificationUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: device_have_notificationScalarWhereInput | device_have_notificationScalarWhereInput[]
  }

  export type homeUpdateOneRequiredWithoutDeviceNestedInput = {
    create?: XOR<homeCreateWithoutDeviceInput, homeUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: homeCreateOrConnectWithoutDeviceInput
    upsert?: homeUpsertWithoutDeviceInput
    connect?: homeWhereUniqueInput
    update?: XOR<XOR<homeUpdateToOneWithWhereWithoutDeviceInput, homeUpdateWithoutDeviceInput>, homeUncheckedUpdateWithoutDeviceInput>
  }

  export type measurementUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<measurementCreateWithoutDeviceInput, measurementUncheckedCreateWithoutDeviceInput> | measurementCreateWithoutDeviceInput[] | measurementUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: measurementCreateOrConnectWithoutDeviceInput | measurementCreateOrConnectWithoutDeviceInput[]
    upsert?: measurementUpsertWithWhereUniqueWithoutDeviceInput | measurementUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: measurementCreateManyDeviceInputEnvelope
    set?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    disconnect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    delete?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    connect?: measurementWhereUniqueInput | measurementWhereUniqueInput[]
    update?: measurementUpdateWithWhereUniqueWithoutDeviceInput | measurementUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: measurementUpdateManyWithWhereWithoutDeviceInput | measurementUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: measurementScalarWhereInput | measurementScalarWhereInput[]
  }

  export type scheduleUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<scheduleCreateWithoutDeviceInput, scheduleUncheckedCreateWithoutDeviceInput> | scheduleCreateWithoutDeviceInput[] | scheduleUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutDeviceInput | scheduleCreateOrConnectWithoutDeviceInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutDeviceInput | scheduleUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: scheduleCreateManyDeviceInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutDeviceInput | scheduleUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutDeviceInput | scheduleUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type log_eventUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<log_eventCreateWithoutDeviceInput, log_eventUncheckedCreateWithoutDeviceInput> | log_eventCreateWithoutDeviceInput[] | log_eventUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: log_eventCreateOrConnectWithoutDeviceInput | log_eventCreateOrConnectWithoutDeviceInput[]
    upsert?: log_eventUpsertWithWhereUniqueWithoutDeviceInput | log_eventUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: log_eventCreateManyDeviceInputEnvelope
    set?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    disconnect?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    delete?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    connect?: log_eventWhereUniqueInput | log_eventWhereUniqueInput[]
    update?: log_eventUpdateWithWhereUniqueWithoutDeviceInput | log_eventUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: log_eventUpdateManyWithWhereWithoutDeviceInput | log_eventUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: log_eventScalarWhereInput | log_eventScalarWhereInput[]
  }

  export type device_have_notificationUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<device_have_notificationCreateWithoutDeviceInput, device_have_notificationUncheckedCreateWithoutDeviceInput> | device_have_notificationCreateWithoutDeviceInput[] | device_have_notificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutDeviceInput | device_have_notificationCreateOrConnectWithoutDeviceInput[]
    upsert?: device_have_notificationUpsertWithWhereUniqueWithoutDeviceInput | device_have_notificationUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: device_have_notificationCreateManyDeviceInputEnvelope
    set?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    disconnect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    delete?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    update?: device_have_notificationUpdateWithWhereUniqueWithoutDeviceInput | device_have_notificationUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: device_have_notificationUpdateManyWithWhereWithoutDeviceInput | device_have_notificationUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: device_have_notificationScalarWhereInput | device_have_notificationScalarWhereInput[]
  }

  export type deviceCreateNestedOneWithoutMeasurementInput = {
    create?: XOR<deviceCreateWithoutMeasurementInput, deviceUncheckedCreateWithoutMeasurementInput>
    connectOrCreate?: deviceCreateOrConnectWithoutMeasurementInput
    connect?: deviceWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type deviceUpdateOneWithoutMeasurementNestedInput = {
    create?: XOR<deviceCreateWithoutMeasurementInput, deviceUncheckedCreateWithoutMeasurementInput>
    connectOrCreate?: deviceCreateOrConnectWithoutMeasurementInput
    upsert?: deviceUpsertWithoutMeasurementInput
    disconnect?: deviceWhereInput | boolean
    delete?: deviceWhereInput | boolean
    connect?: deviceWhereUniqueInput
    update?: XOR<XOR<deviceUpdateToOneWithWhereWithoutMeasurementInput, deviceUpdateWithoutMeasurementInput>, deviceUncheckedUpdateWithoutMeasurementInput>
  }

  export type deviceCreateNestedOneWithoutScheduleInput = {
    create?: XOR<deviceCreateWithoutScheduleInput, deviceUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: deviceCreateOrConnectWithoutScheduleInput
    connect?: deviceWhereUniqueInput
  }

  export type deviceUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<deviceCreateWithoutScheduleInput, deviceUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: deviceCreateOrConnectWithoutScheduleInput
    upsert?: deviceUpsertWithoutScheduleInput
    connect?: deviceWhereUniqueInput
    update?: XOR<XOR<deviceUpdateToOneWithWhereWithoutScheduleInput, deviceUpdateWithoutScheduleInput>, deviceUncheckedUpdateWithoutScheduleInput>
  }

  export type deviceCreateNestedOneWithoutLog_eventInput = {
    create?: XOR<deviceCreateWithoutLog_eventInput, deviceUncheckedCreateWithoutLog_eventInput>
    connectOrCreate?: deviceCreateOrConnectWithoutLog_eventInput
    connect?: deviceWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type deviceUpdateOneWithoutLog_eventNestedInput = {
    create?: XOR<deviceCreateWithoutLog_eventInput, deviceUncheckedCreateWithoutLog_eventInput>
    connectOrCreate?: deviceCreateOrConnectWithoutLog_eventInput
    upsert?: deviceUpsertWithoutLog_eventInput
    disconnect?: deviceWhereInput | boolean
    delete?: deviceWhereInput | boolean
    connect?: deviceWhereUniqueInput
    update?: XOR<XOR<deviceUpdateToOneWithWhereWithoutLog_eventInput, deviceUpdateWithoutLog_eventInput>, deviceUncheckedUpdateWithoutLog_eventInput>
  }

  export type device_have_notificationCreateNestedManyWithoutNotificationInput = {
    create?: XOR<device_have_notificationCreateWithoutNotificationInput, device_have_notificationUncheckedCreateWithoutNotificationInput> | device_have_notificationCreateWithoutNotificationInput[] | device_have_notificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutNotificationInput | device_have_notificationCreateOrConnectWithoutNotificationInput[]
    createMany?: device_have_notificationCreateManyNotificationInputEnvelope
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
  }

  export type device_have_notificationUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<device_have_notificationCreateWithoutNotificationInput, device_have_notificationUncheckedCreateWithoutNotificationInput> | device_have_notificationCreateWithoutNotificationInput[] | device_have_notificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutNotificationInput | device_have_notificationCreateOrConnectWithoutNotificationInput[]
    createMany?: device_have_notificationCreateManyNotificationInputEnvelope
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
  }

  export type device_have_notificationUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<device_have_notificationCreateWithoutNotificationInput, device_have_notificationUncheckedCreateWithoutNotificationInput> | device_have_notificationCreateWithoutNotificationInput[] | device_have_notificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutNotificationInput | device_have_notificationCreateOrConnectWithoutNotificationInput[]
    upsert?: device_have_notificationUpsertWithWhereUniqueWithoutNotificationInput | device_have_notificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: device_have_notificationCreateManyNotificationInputEnvelope
    set?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    disconnect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    delete?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    update?: device_have_notificationUpdateWithWhereUniqueWithoutNotificationInput | device_have_notificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: device_have_notificationUpdateManyWithWhereWithoutNotificationInput | device_have_notificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: device_have_notificationScalarWhereInput | device_have_notificationScalarWhereInput[]
  }

  export type device_have_notificationUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<device_have_notificationCreateWithoutNotificationInput, device_have_notificationUncheckedCreateWithoutNotificationInput> | device_have_notificationCreateWithoutNotificationInput[] | device_have_notificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: device_have_notificationCreateOrConnectWithoutNotificationInput | device_have_notificationCreateOrConnectWithoutNotificationInput[]
    upsert?: device_have_notificationUpsertWithWhereUniqueWithoutNotificationInput | device_have_notificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: device_have_notificationCreateManyNotificationInputEnvelope
    set?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    disconnect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    delete?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    connect?: device_have_notificationWhereUniqueInput | device_have_notificationWhereUniqueInput[]
    update?: device_have_notificationUpdateWithWhereUniqueWithoutNotificationInput | device_have_notificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: device_have_notificationUpdateManyWithWhereWithoutNotificationInput | device_have_notificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: device_have_notificationScalarWhereInput | device_have_notificationScalarWhereInput[]
  }

  export type notificationCreateNestedOneWithoutDevice_have_notificationInput = {
    create?: XOR<notificationCreateWithoutDevice_have_notificationInput, notificationUncheckedCreateWithoutDevice_have_notificationInput>
    connectOrCreate?: notificationCreateOrConnectWithoutDevice_have_notificationInput
    connect?: notificationWhereUniqueInput
  }

  export type deviceCreateNestedOneWithoutDevice_have_notificationInput = {
    create?: XOR<deviceCreateWithoutDevice_have_notificationInput, deviceUncheckedCreateWithoutDevice_have_notificationInput>
    connectOrCreate?: deviceCreateOrConnectWithoutDevice_have_notificationInput
    connect?: deviceWhereUniqueInput
  }

  export type notificationUpdateOneRequiredWithoutDevice_have_notificationNestedInput = {
    create?: XOR<notificationCreateWithoutDevice_have_notificationInput, notificationUncheckedCreateWithoutDevice_have_notificationInput>
    connectOrCreate?: notificationCreateOrConnectWithoutDevice_have_notificationInput
    upsert?: notificationUpsertWithoutDevice_have_notificationInput
    connect?: notificationWhereUniqueInput
    update?: XOR<XOR<notificationUpdateToOneWithWhereWithoutDevice_have_notificationInput, notificationUpdateWithoutDevice_have_notificationInput>, notificationUncheckedUpdateWithoutDevice_have_notificationInput>
  }

  export type deviceUpdateOneRequiredWithoutDevice_have_notificationNestedInput = {
    create?: XOR<deviceCreateWithoutDevice_have_notificationInput, deviceUncheckedCreateWithoutDevice_have_notificationInput>
    connectOrCreate?: deviceCreateOrConnectWithoutDevice_have_notificationInput
    upsert?: deviceUpsertWithoutDevice_have_notificationInput
    connect?: deviceWhereUniqueInput
    update?: XOR<XOR<deviceUpdateToOneWithWhereWithoutDevice_have_notificationInput, deviceUpdateWithoutDevice_have_notificationInput>, deviceUncheckedUpdateWithoutDevice_have_notificationInput>
  }

  export type deviceCreateNestedManyWithoutHomeInput = {
    create?: XOR<deviceCreateWithoutHomeInput, deviceUncheckedCreateWithoutHomeInput> | deviceCreateWithoutHomeInput[] | deviceUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutHomeInput | deviceCreateOrConnectWithoutHomeInput[]
    createMany?: deviceCreateManyHomeInputEnvelope
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
  }

  export type user_in_homeCreateNestedManyWithoutHomeInput = {
    create?: XOR<user_in_homeCreateWithoutHomeInput, user_in_homeUncheckedCreateWithoutHomeInput> | user_in_homeCreateWithoutHomeInput[] | user_in_homeUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutHomeInput | user_in_homeCreateOrConnectWithoutHomeInput[]
    createMany?: user_in_homeCreateManyHomeInputEnvelope
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
  }

  export type deviceUncheckedCreateNestedManyWithoutHomeInput = {
    create?: XOR<deviceCreateWithoutHomeInput, deviceUncheckedCreateWithoutHomeInput> | deviceCreateWithoutHomeInput[] | deviceUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutHomeInput | deviceCreateOrConnectWithoutHomeInput[]
    createMany?: deviceCreateManyHomeInputEnvelope
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
  }

  export type user_in_homeUncheckedCreateNestedManyWithoutHomeInput = {
    create?: XOR<user_in_homeCreateWithoutHomeInput, user_in_homeUncheckedCreateWithoutHomeInput> | user_in_homeCreateWithoutHomeInput[] | user_in_homeUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutHomeInput | user_in_homeCreateOrConnectWithoutHomeInput[]
    createMany?: user_in_homeCreateManyHomeInputEnvelope
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
  }

  export type deviceUpdateManyWithoutHomeNestedInput = {
    create?: XOR<deviceCreateWithoutHomeInput, deviceUncheckedCreateWithoutHomeInput> | deviceCreateWithoutHomeInput[] | deviceUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutHomeInput | deviceCreateOrConnectWithoutHomeInput[]
    upsert?: deviceUpsertWithWhereUniqueWithoutHomeInput | deviceUpsertWithWhereUniqueWithoutHomeInput[]
    createMany?: deviceCreateManyHomeInputEnvelope
    set?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    disconnect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    delete?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    update?: deviceUpdateWithWhereUniqueWithoutHomeInput | deviceUpdateWithWhereUniqueWithoutHomeInput[]
    updateMany?: deviceUpdateManyWithWhereWithoutHomeInput | deviceUpdateManyWithWhereWithoutHomeInput[]
    deleteMany?: deviceScalarWhereInput | deviceScalarWhereInput[]
  }

  export type user_in_homeUpdateManyWithoutHomeNestedInput = {
    create?: XOR<user_in_homeCreateWithoutHomeInput, user_in_homeUncheckedCreateWithoutHomeInput> | user_in_homeCreateWithoutHomeInput[] | user_in_homeUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutHomeInput | user_in_homeCreateOrConnectWithoutHomeInput[]
    upsert?: user_in_homeUpsertWithWhereUniqueWithoutHomeInput | user_in_homeUpsertWithWhereUniqueWithoutHomeInput[]
    createMany?: user_in_homeCreateManyHomeInputEnvelope
    set?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    disconnect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    delete?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    update?: user_in_homeUpdateWithWhereUniqueWithoutHomeInput | user_in_homeUpdateWithWhereUniqueWithoutHomeInput[]
    updateMany?: user_in_homeUpdateManyWithWhereWithoutHomeInput | user_in_homeUpdateManyWithWhereWithoutHomeInput[]
    deleteMany?: user_in_homeScalarWhereInput | user_in_homeScalarWhereInput[]
  }

  export type deviceUncheckedUpdateManyWithoutHomeNestedInput = {
    create?: XOR<deviceCreateWithoutHomeInput, deviceUncheckedCreateWithoutHomeInput> | deviceCreateWithoutHomeInput[] | deviceUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutHomeInput | deviceCreateOrConnectWithoutHomeInput[]
    upsert?: deviceUpsertWithWhereUniqueWithoutHomeInput | deviceUpsertWithWhereUniqueWithoutHomeInput[]
    createMany?: deviceCreateManyHomeInputEnvelope
    set?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    disconnect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    delete?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    update?: deviceUpdateWithWhereUniqueWithoutHomeInput | deviceUpdateWithWhereUniqueWithoutHomeInput[]
    updateMany?: deviceUpdateManyWithWhereWithoutHomeInput | deviceUpdateManyWithWhereWithoutHomeInput[]
    deleteMany?: deviceScalarWhereInput | deviceScalarWhereInput[]
  }

  export type user_in_homeUncheckedUpdateManyWithoutHomeNestedInput = {
    create?: XOR<user_in_homeCreateWithoutHomeInput, user_in_homeUncheckedCreateWithoutHomeInput> | user_in_homeCreateWithoutHomeInput[] | user_in_homeUncheckedCreateWithoutHomeInput[]
    connectOrCreate?: user_in_homeCreateOrConnectWithoutHomeInput | user_in_homeCreateOrConnectWithoutHomeInput[]
    upsert?: user_in_homeUpsertWithWhereUniqueWithoutHomeInput | user_in_homeUpsertWithWhereUniqueWithoutHomeInput[]
    createMany?: user_in_homeCreateManyHomeInputEnvelope
    set?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    disconnect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    delete?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    connect?: user_in_homeWhereUniqueInput | user_in_homeWhereUniqueInput[]
    update?: user_in_homeUpdateWithWhereUniqueWithoutHomeInput | user_in_homeUpdateWithWhereUniqueWithoutHomeInput[]
    updateMany?: user_in_homeUpdateManyWithWhereWithoutHomeInput | user_in_homeUpdateManyWithWhereWithoutHomeInput[]
    deleteMany?: user_in_homeScalarWhereInput | user_in_homeScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type user_in_homeCreateWithoutUserInput = {
    home: homeCreateNestedOneWithoutUser_in_homeInput
  }

  export type user_in_homeUncheckedCreateWithoutUserInput = {
    home_id: number
  }

  export type user_in_homeCreateOrConnectWithoutUserInput = {
    where: user_in_homeWhereUniqueInput
    create: XOR<user_in_homeCreateWithoutUserInput, user_in_homeUncheckedCreateWithoutUserInput>
  }

  export type user_in_homeCreateManyUserInputEnvelope = {
    data: user_in_homeCreateManyUserInput | user_in_homeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_in_homeUpsertWithWhereUniqueWithoutUserInput = {
    where: user_in_homeWhereUniqueInput
    update: XOR<user_in_homeUpdateWithoutUserInput, user_in_homeUncheckedUpdateWithoutUserInput>
    create: XOR<user_in_homeCreateWithoutUserInput, user_in_homeUncheckedCreateWithoutUserInput>
  }

  export type user_in_homeUpdateWithWhereUniqueWithoutUserInput = {
    where: user_in_homeWhereUniqueInput
    data: XOR<user_in_homeUpdateWithoutUserInput, user_in_homeUncheckedUpdateWithoutUserInput>
  }

  export type user_in_homeUpdateManyWithWhereWithoutUserInput = {
    where: user_in_homeScalarWhereInput
    data: XOR<user_in_homeUpdateManyMutationInput, user_in_homeUncheckedUpdateManyWithoutUserInput>
  }

  export type user_in_homeScalarWhereInput = {
    AND?: user_in_homeScalarWhereInput | user_in_homeScalarWhereInput[]
    OR?: user_in_homeScalarWhereInput[]
    NOT?: user_in_homeScalarWhereInput | user_in_homeScalarWhereInput[]
    user_email?: StringFilter<"user_in_home"> | string
    home_id?: IntFilter<"user_in_home"> | number
  }

  export type usersCreateWithoutUser_in_homeInput = {
    first_name: string
    last_name: string
    email: string
    password_hash: string
    access_token?: string | null
    salt?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUncheckedCreateWithoutUser_in_homeInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password_hash: string
    access_token?: string | null
    salt?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersCreateOrConnectWithoutUser_in_homeInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_in_homeInput, usersUncheckedCreateWithoutUser_in_homeInput>
  }

  export type homeCreateWithoutUser_in_homeInput = {
    serial_number: string
    device?: deviceCreateNestedManyWithoutHomeInput
  }

  export type homeUncheckedCreateWithoutUser_in_homeInput = {
    id?: number
    serial_number: string
    device?: deviceUncheckedCreateNestedManyWithoutHomeInput
  }

  export type homeCreateOrConnectWithoutUser_in_homeInput = {
    where: homeWhereUniqueInput
    create: XOR<homeCreateWithoutUser_in_homeInput, homeUncheckedCreateWithoutUser_in_homeInput>
  }

  export type usersUpsertWithoutUser_in_homeInput = {
    update: XOR<usersUpdateWithoutUser_in_homeInput, usersUncheckedUpdateWithoutUser_in_homeInput>
    create: XOR<usersCreateWithoutUser_in_homeInput, usersUncheckedCreateWithoutUser_in_homeInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_in_homeInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_in_homeInput, usersUncheckedUpdateWithoutUser_in_homeInput>
  }

  export type usersUpdateWithoutUser_in_homeInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutUser_in_homeInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type homeUpsertWithoutUser_in_homeInput = {
    update: XOR<homeUpdateWithoutUser_in_homeInput, homeUncheckedUpdateWithoutUser_in_homeInput>
    create: XOR<homeCreateWithoutUser_in_homeInput, homeUncheckedCreateWithoutUser_in_homeInput>
    where?: homeWhereInput
  }

  export type homeUpdateToOneWithWhereWithoutUser_in_homeInput = {
    where?: homeWhereInput
    data: XOR<homeUpdateWithoutUser_in_homeInput, homeUncheckedUpdateWithoutUser_in_homeInput>
  }

  export type homeUpdateWithoutUser_in_homeInput = {
    serial_number?: StringFieldUpdateOperationsInput | string
    device?: deviceUpdateManyWithoutHomeNestedInput
  }

  export type homeUncheckedUpdateWithoutUser_in_homeInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_number?: StringFieldUpdateOperationsInput | string
    device?: deviceUncheckedUpdateManyWithoutHomeNestedInput
  }

  export type measurementCreateWithoutDeviceInput = {
    usage_time: Date | string
    consumption?: number | null
  }

  export type measurementUncheckedCreateWithoutDeviceInput = {
    id?: number
    usage_time: Date | string
    consumption?: number | null
  }

  export type measurementCreateOrConnectWithoutDeviceInput = {
    where: measurementWhereUniqueInput
    create: XOR<measurementCreateWithoutDeviceInput, measurementUncheckedCreateWithoutDeviceInput>
  }

  export type measurementCreateManyDeviceInputEnvelope = {
    data: measurementCreateManyDeviceInput | measurementCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type scheduleCreateWithoutDeviceInput = {
    time_action: Date | string
    action: string
  }

  export type scheduleUncheckedCreateWithoutDeviceInput = {
    time_action: Date | string
    action: string
  }

  export type scheduleCreateOrConnectWithoutDeviceInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutDeviceInput, scheduleUncheckedCreateWithoutDeviceInput>
  }

  export type scheduleCreateManyDeviceInputEnvelope = {
    data: scheduleCreateManyDeviceInput | scheduleCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type log_eventCreateWithoutDeviceInput = {
    time_in?: Date | string | null
    time_out?: Date | string | null
    action?: string | null
  }

  export type log_eventUncheckedCreateWithoutDeviceInput = {
    id?: number
    time_in?: Date | string | null
    time_out?: Date | string | null
    action?: string | null
  }

  export type log_eventCreateOrConnectWithoutDeviceInput = {
    where: log_eventWhereUniqueInput
    create: XOR<log_eventCreateWithoutDeviceInput, log_eventUncheckedCreateWithoutDeviceInput>
  }

  export type log_eventCreateManyDeviceInputEnvelope = {
    data: log_eventCreateManyDeviceInput | log_eventCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type device_have_notificationCreateWithoutDeviceInput = {
    notification_time?: Date | string | null
    notification: notificationCreateNestedOneWithoutDevice_have_notificationInput
  }

  export type device_have_notificationUncheckedCreateWithoutDeviceInput = {
    notification_id: number
    notification_time?: Date | string | null
  }

  export type device_have_notificationCreateOrConnectWithoutDeviceInput = {
    where: device_have_notificationWhereUniqueInput
    create: XOR<device_have_notificationCreateWithoutDeviceInput, device_have_notificationUncheckedCreateWithoutDeviceInput>
  }

  export type device_have_notificationCreateManyDeviceInputEnvelope = {
    data: device_have_notificationCreateManyDeviceInput | device_have_notificationCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type homeCreateWithoutDeviceInput = {
    serial_number: string
    user_in_home?: user_in_homeCreateNestedManyWithoutHomeInput
  }

  export type homeUncheckedCreateWithoutDeviceInput = {
    id?: number
    serial_number: string
    user_in_home?: user_in_homeUncheckedCreateNestedManyWithoutHomeInput
  }

  export type homeCreateOrConnectWithoutDeviceInput = {
    where: homeWhereUniqueInput
    create: XOR<homeCreateWithoutDeviceInput, homeUncheckedCreateWithoutDeviceInput>
  }

  export type measurementUpsertWithWhereUniqueWithoutDeviceInput = {
    where: measurementWhereUniqueInput
    update: XOR<measurementUpdateWithoutDeviceInput, measurementUncheckedUpdateWithoutDeviceInput>
    create: XOR<measurementCreateWithoutDeviceInput, measurementUncheckedCreateWithoutDeviceInput>
  }

  export type measurementUpdateWithWhereUniqueWithoutDeviceInput = {
    where: measurementWhereUniqueInput
    data: XOR<measurementUpdateWithoutDeviceInput, measurementUncheckedUpdateWithoutDeviceInput>
  }

  export type measurementUpdateManyWithWhereWithoutDeviceInput = {
    where: measurementScalarWhereInput
    data: XOR<measurementUpdateManyMutationInput, measurementUncheckedUpdateManyWithoutDeviceInput>
  }

  export type measurementScalarWhereInput = {
    AND?: measurementScalarWhereInput | measurementScalarWhereInput[]
    OR?: measurementScalarWhereInput[]
    NOT?: measurementScalarWhereInput | measurementScalarWhereInput[]
    id?: IntFilter<"measurement"> | number
    usage_time?: DateTimeFilter<"measurement"> | Date | string
    consumption?: IntNullableFilter<"measurement"> | number | null
    device_id?: IntNullableFilter<"measurement"> | number | null
  }

  export type scheduleUpsertWithWhereUniqueWithoutDeviceInput = {
    where: scheduleWhereUniqueInput
    update: XOR<scheduleUpdateWithoutDeviceInput, scheduleUncheckedUpdateWithoutDeviceInput>
    create: XOR<scheduleCreateWithoutDeviceInput, scheduleUncheckedCreateWithoutDeviceInput>
  }

  export type scheduleUpdateWithWhereUniqueWithoutDeviceInput = {
    where: scheduleWhereUniqueInput
    data: XOR<scheduleUpdateWithoutDeviceInput, scheduleUncheckedUpdateWithoutDeviceInput>
  }

  export type scheduleUpdateManyWithWhereWithoutDeviceInput = {
    where: scheduleScalarWhereInput
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyWithoutDeviceInput>
  }

  export type scheduleScalarWhereInput = {
    AND?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
    OR?: scheduleScalarWhereInput[]
    NOT?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
    device_id?: IntFilter<"schedule"> | number
    time_action?: DateTimeFilter<"schedule"> | Date | string
    action?: StringFilter<"schedule"> | string
  }

  export type log_eventUpsertWithWhereUniqueWithoutDeviceInput = {
    where: log_eventWhereUniqueInput
    update: XOR<log_eventUpdateWithoutDeviceInput, log_eventUncheckedUpdateWithoutDeviceInput>
    create: XOR<log_eventCreateWithoutDeviceInput, log_eventUncheckedCreateWithoutDeviceInput>
  }

  export type log_eventUpdateWithWhereUniqueWithoutDeviceInput = {
    where: log_eventWhereUniqueInput
    data: XOR<log_eventUpdateWithoutDeviceInput, log_eventUncheckedUpdateWithoutDeviceInput>
  }

  export type log_eventUpdateManyWithWhereWithoutDeviceInput = {
    where: log_eventScalarWhereInput
    data: XOR<log_eventUpdateManyMutationInput, log_eventUncheckedUpdateManyWithoutDeviceInput>
  }

  export type log_eventScalarWhereInput = {
    AND?: log_eventScalarWhereInput | log_eventScalarWhereInput[]
    OR?: log_eventScalarWhereInput[]
    NOT?: log_eventScalarWhereInput | log_eventScalarWhereInput[]
    id?: IntFilter<"log_event"> | number
    time_in?: DateTimeNullableFilter<"log_event"> | Date | string | null
    time_out?: DateTimeNullableFilter<"log_event"> | Date | string | null
    action?: StringNullableFilter<"log_event"> | string | null
    device_id?: IntNullableFilter<"log_event"> | number | null
  }

  export type device_have_notificationUpsertWithWhereUniqueWithoutDeviceInput = {
    where: device_have_notificationWhereUniqueInput
    update: XOR<device_have_notificationUpdateWithoutDeviceInput, device_have_notificationUncheckedUpdateWithoutDeviceInput>
    create: XOR<device_have_notificationCreateWithoutDeviceInput, device_have_notificationUncheckedCreateWithoutDeviceInput>
  }

  export type device_have_notificationUpdateWithWhereUniqueWithoutDeviceInput = {
    where: device_have_notificationWhereUniqueInput
    data: XOR<device_have_notificationUpdateWithoutDeviceInput, device_have_notificationUncheckedUpdateWithoutDeviceInput>
  }

  export type device_have_notificationUpdateManyWithWhereWithoutDeviceInput = {
    where: device_have_notificationScalarWhereInput
    data: XOR<device_have_notificationUpdateManyMutationInput, device_have_notificationUncheckedUpdateManyWithoutDeviceInput>
  }

  export type device_have_notificationScalarWhereInput = {
    AND?: device_have_notificationScalarWhereInput | device_have_notificationScalarWhereInput[]
    OR?: device_have_notificationScalarWhereInput[]
    NOT?: device_have_notificationScalarWhereInput | device_have_notificationScalarWhereInput[]
    notification_id?: IntFilter<"device_have_notification"> | number
    device_id?: IntFilter<"device_have_notification"> | number
    notification_time?: DateTimeNullableFilter<"device_have_notification"> | Date | string | null
  }

  export type homeUpsertWithoutDeviceInput = {
    update: XOR<homeUpdateWithoutDeviceInput, homeUncheckedUpdateWithoutDeviceInput>
    create: XOR<homeCreateWithoutDeviceInput, homeUncheckedCreateWithoutDeviceInput>
    where?: homeWhereInput
  }

  export type homeUpdateToOneWithWhereWithoutDeviceInput = {
    where?: homeWhereInput
    data: XOR<homeUpdateWithoutDeviceInput, homeUncheckedUpdateWithoutDeviceInput>
  }

  export type homeUpdateWithoutDeviceInput = {
    serial_number?: StringFieldUpdateOperationsInput | string
    user_in_home?: user_in_homeUpdateManyWithoutHomeNestedInput
  }

  export type homeUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial_number?: StringFieldUpdateOperationsInput | string
    user_in_home?: user_in_homeUncheckedUpdateManyWithoutHomeNestedInput
  }

  export type deviceCreateWithoutMeasurementInput = {
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    schedule?: scheduleCreateNestedManyWithoutDeviceInput
    log_event?: log_eventCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationCreateNestedManyWithoutDeviceInput
    home: homeCreateNestedOneWithoutDeviceInput
  }

  export type deviceUncheckedCreateWithoutMeasurementInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    serial_number: string
    schedule?: scheduleUncheckedCreateNestedManyWithoutDeviceInput
    log_event?: log_eventUncheckedCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceCreateOrConnectWithoutMeasurementInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutMeasurementInput, deviceUncheckedCreateWithoutMeasurementInput>
  }

  export type deviceUpsertWithoutMeasurementInput = {
    update: XOR<deviceUpdateWithoutMeasurementInput, deviceUncheckedUpdateWithoutMeasurementInput>
    create: XOR<deviceCreateWithoutMeasurementInput, deviceUncheckedCreateWithoutMeasurementInput>
    where?: deviceWhereInput
  }

  export type deviceUpdateToOneWithWhereWithoutMeasurementInput = {
    where?: deviceWhereInput
    data: XOR<deviceUpdateWithoutMeasurementInput, deviceUncheckedUpdateWithoutMeasurementInput>
  }

  export type deviceUpdateWithoutMeasurementInput = {
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    schedule?: scheduleUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUpdateManyWithoutDeviceNestedInput
    home?: homeUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateWithoutMeasurementInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    schedule?: scheduleUncheckedUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUncheckedUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceCreateWithoutScheduleInput = {
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    measurement?: measurementCreateNestedManyWithoutDeviceInput
    log_event?: log_eventCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationCreateNestedManyWithoutDeviceInput
    home: homeCreateNestedOneWithoutDeviceInput
  }

  export type deviceUncheckedCreateWithoutScheduleInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    serial_number: string
    measurement?: measurementUncheckedCreateNestedManyWithoutDeviceInput
    log_event?: log_eventUncheckedCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceCreateOrConnectWithoutScheduleInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutScheduleInput, deviceUncheckedCreateWithoutScheduleInput>
  }

  export type deviceUpsertWithoutScheduleInput = {
    update: XOR<deviceUpdateWithoutScheduleInput, deviceUncheckedUpdateWithoutScheduleInput>
    create: XOR<deviceCreateWithoutScheduleInput, deviceUncheckedCreateWithoutScheduleInput>
    where?: deviceWhereInput
  }

  export type deviceUpdateToOneWithWhereWithoutScheduleInput = {
    where?: deviceWhereInput
    data: XOR<deviceUpdateWithoutScheduleInput, deviceUncheckedUpdateWithoutScheduleInput>
  }

  export type deviceUpdateWithoutScheduleInput = {
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUpdateManyWithoutDeviceNestedInput
    home?: homeUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUncheckedUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUncheckedUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceCreateWithoutLog_eventInput = {
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    measurement?: measurementCreateNestedManyWithoutDeviceInput
    schedule?: scheduleCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationCreateNestedManyWithoutDeviceInput
    home: homeCreateNestedOneWithoutDeviceInput
  }

  export type deviceUncheckedCreateWithoutLog_eventInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    serial_number: string
    measurement?: measurementUncheckedCreateNestedManyWithoutDeviceInput
    schedule?: scheduleUncheckedCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceCreateOrConnectWithoutLog_eventInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutLog_eventInput, deviceUncheckedCreateWithoutLog_eventInput>
  }

  export type deviceUpsertWithoutLog_eventInput = {
    update: XOR<deviceUpdateWithoutLog_eventInput, deviceUncheckedUpdateWithoutLog_eventInput>
    create: XOR<deviceCreateWithoutLog_eventInput, deviceUncheckedCreateWithoutLog_eventInput>
    where?: deviceWhereInput
  }

  export type deviceUpdateToOneWithWhereWithoutLog_eventInput = {
    where?: deviceWhereInput
    data: XOR<deviceUpdateWithoutLog_eventInput, deviceUncheckedUpdateWithoutLog_eventInput>
  }

  export type deviceUpdateWithoutLog_eventInput = {
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUpdateManyWithoutDeviceNestedInput
    home?: homeUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateWithoutLog_eventInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUncheckedUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUncheckedUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type device_have_notificationCreateWithoutNotificationInput = {
    notification_time?: Date | string | null
    device: deviceCreateNestedOneWithoutDevice_have_notificationInput
  }

  export type device_have_notificationUncheckedCreateWithoutNotificationInput = {
    device_id: number
    notification_time?: Date | string | null
  }

  export type device_have_notificationCreateOrConnectWithoutNotificationInput = {
    where: device_have_notificationWhereUniqueInput
    create: XOR<device_have_notificationCreateWithoutNotificationInput, device_have_notificationUncheckedCreateWithoutNotificationInput>
  }

  export type device_have_notificationCreateManyNotificationInputEnvelope = {
    data: device_have_notificationCreateManyNotificationInput | device_have_notificationCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type device_have_notificationUpsertWithWhereUniqueWithoutNotificationInput = {
    where: device_have_notificationWhereUniqueInput
    update: XOR<device_have_notificationUpdateWithoutNotificationInput, device_have_notificationUncheckedUpdateWithoutNotificationInput>
    create: XOR<device_have_notificationCreateWithoutNotificationInput, device_have_notificationUncheckedCreateWithoutNotificationInput>
  }

  export type device_have_notificationUpdateWithWhereUniqueWithoutNotificationInput = {
    where: device_have_notificationWhereUniqueInput
    data: XOR<device_have_notificationUpdateWithoutNotificationInput, device_have_notificationUncheckedUpdateWithoutNotificationInput>
  }

  export type device_have_notificationUpdateManyWithWhereWithoutNotificationInput = {
    where: device_have_notificationScalarWhereInput
    data: XOR<device_have_notificationUpdateManyMutationInput, device_have_notificationUncheckedUpdateManyWithoutNotificationInput>
  }

  export type notificationCreateWithoutDevice_have_notificationInput = {
    content?: string | null
  }

  export type notificationUncheckedCreateWithoutDevice_have_notificationInput = {
    id?: number
    content?: string | null
  }

  export type notificationCreateOrConnectWithoutDevice_have_notificationInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutDevice_have_notificationInput, notificationUncheckedCreateWithoutDevice_have_notificationInput>
  }

  export type deviceCreateWithoutDevice_have_notificationInput = {
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    measurement?: measurementCreateNestedManyWithoutDeviceInput
    schedule?: scheduleCreateNestedManyWithoutDeviceInput
    log_event?: log_eventCreateNestedManyWithoutDeviceInput
    home: homeCreateNestedOneWithoutDeviceInput
  }

  export type deviceUncheckedCreateWithoutDevice_have_notificationInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    serial_number: string
    measurement?: measurementUncheckedCreateNestedManyWithoutDeviceInput
    schedule?: scheduleUncheckedCreateNestedManyWithoutDeviceInput
    log_event?: log_eventUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceCreateOrConnectWithoutDevice_have_notificationInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutDevice_have_notificationInput, deviceUncheckedCreateWithoutDevice_have_notificationInput>
  }

  export type notificationUpsertWithoutDevice_have_notificationInput = {
    update: XOR<notificationUpdateWithoutDevice_have_notificationInput, notificationUncheckedUpdateWithoutDevice_have_notificationInput>
    create: XOR<notificationCreateWithoutDevice_have_notificationInput, notificationUncheckedCreateWithoutDevice_have_notificationInput>
    where?: notificationWhereInput
  }

  export type notificationUpdateToOneWithWhereWithoutDevice_have_notificationInput = {
    where?: notificationWhereInput
    data: XOR<notificationUpdateWithoutDevice_have_notificationInput, notificationUncheckedUpdateWithoutDevice_have_notificationInput>
  }

  export type notificationUpdateWithoutDevice_have_notificationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationUncheckedUpdateWithoutDevice_have_notificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type deviceUpsertWithoutDevice_have_notificationInput = {
    update: XOR<deviceUpdateWithoutDevice_have_notificationInput, deviceUncheckedUpdateWithoutDevice_have_notificationInput>
    create: XOR<deviceCreateWithoutDevice_have_notificationInput, deviceUncheckedCreateWithoutDevice_have_notificationInput>
    where?: deviceWhereInput
  }

  export type deviceUpdateToOneWithWhereWithoutDevice_have_notificationInput = {
    where?: deviceWhereInput
    data: XOR<deviceUpdateWithoutDevice_have_notificationInput, deviceUncheckedUpdateWithoutDevice_have_notificationInput>
  }

  export type deviceUpdateWithoutDevice_have_notificationInput = {
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUpdateManyWithoutDeviceNestedInput
    home?: homeUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateWithoutDevice_have_notificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUncheckedUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUncheckedUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceCreateWithoutHomeInput = {
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    measurement?: measurementCreateNestedManyWithoutDeviceInput
    schedule?: scheduleCreateNestedManyWithoutDeviceInput
    log_event?: log_eventCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationCreateNestedManyWithoutDeviceInput
  }

  export type deviceUncheckedCreateWithoutHomeInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
    measurement?: measurementUncheckedCreateNestedManyWithoutDeviceInput
    schedule?: scheduleUncheckedCreateNestedManyWithoutDeviceInput
    log_event?: log_eventUncheckedCreateNestedManyWithoutDeviceInput
    device_have_notification?: device_have_notificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceCreateOrConnectWithoutHomeInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutHomeInput, deviceUncheckedCreateWithoutHomeInput>
  }

  export type deviceCreateManyHomeInputEnvelope = {
    data: deviceCreateManyHomeInput | deviceCreateManyHomeInput[]
    skipDuplicates?: boolean
  }

  export type user_in_homeCreateWithoutHomeInput = {
    user: usersCreateNestedOneWithoutUser_in_homeInput
  }

  export type user_in_homeUncheckedCreateWithoutHomeInput = {
    user_email: string
  }

  export type user_in_homeCreateOrConnectWithoutHomeInput = {
    where: user_in_homeWhereUniqueInput
    create: XOR<user_in_homeCreateWithoutHomeInput, user_in_homeUncheckedCreateWithoutHomeInput>
  }

  export type user_in_homeCreateManyHomeInputEnvelope = {
    data: user_in_homeCreateManyHomeInput | user_in_homeCreateManyHomeInput[]
    skipDuplicates?: boolean
  }

  export type deviceUpsertWithWhereUniqueWithoutHomeInput = {
    where: deviceWhereUniqueInput
    update: XOR<deviceUpdateWithoutHomeInput, deviceUncheckedUpdateWithoutHomeInput>
    create: XOR<deviceCreateWithoutHomeInput, deviceUncheckedCreateWithoutHomeInput>
  }

  export type deviceUpdateWithWhereUniqueWithoutHomeInput = {
    where: deviceWhereUniqueInput
    data: XOR<deviceUpdateWithoutHomeInput, deviceUncheckedUpdateWithoutHomeInput>
  }

  export type deviceUpdateManyWithWhereWithoutHomeInput = {
    where: deviceScalarWhereInput
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyWithoutHomeInput>
  }

  export type deviceScalarWhereInput = {
    AND?: deviceScalarWhereInput | deviceScalarWhereInput[]
    OR?: deviceScalarWhereInput[]
    NOT?: deviceScalarWhereInput | deviceScalarWhereInput[]
    id?: IntFilter<"device"> | number
    status?: StringFilter<"device"> | string
    type?: StringFilter<"device"> | string
    power_rating?: StringFilter<"device"> | string
    room_name?: StringFilter<"device"> | string
    password?: StringFilter<"device"> | string
    serial_number?: StringFilter<"device"> | string
  }

  export type user_in_homeUpsertWithWhereUniqueWithoutHomeInput = {
    where: user_in_homeWhereUniqueInput
    update: XOR<user_in_homeUpdateWithoutHomeInput, user_in_homeUncheckedUpdateWithoutHomeInput>
    create: XOR<user_in_homeCreateWithoutHomeInput, user_in_homeUncheckedCreateWithoutHomeInput>
  }

  export type user_in_homeUpdateWithWhereUniqueWithoutHomeInput = {
    where: user_in_homeWhereUniqueInput
    data: XOR<user_in_homeUpdateWithoutHomeInput, user_in_homeUncheckedUpdateWithoutHomeInput>
  }

  export type user_in_homeUpdateManyWithWhereWithoutHomeInput = {
    where: user_in_homeScalarWhereInput
    data: XOR<user_in_homeUpdateManyMutationInput, user_in_homeUncheckedUpdateManyWithoutHomeInput>
  }

  export type user_in_homeCreateManyUserInput = {
    home_id: number
  }

  export type user_in_homeUpdateWithoutUserInput = {
    home?: homeUpdateOneRequiredWithoutUser_in_homeNestedInput
  }

  export type user_in_homeUncheckedUpdateWithoutUserInput = {
    home_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_in_homeUncheckedUpdateManyWithoutUserInput = {
    home_id?: IntFieldUpdateOperationsInput | number
  }

  export type measurementCreateManyDeviceInput = {
    id?: number
    usage_time: Date | string
    consumption?: number | null
  }

  export type scheduleCreateManyDeviceInput = {
    time_action: Date | string
    action: string
  }

  export type log_eventCreateManyDeviceInput = {
    id?: number
    time_in?: Date | string | null
    time_out?: Date | string | null
    action?: string | null
  }

  export type device_have_notificationCreateManyDeviceInput = {
    notification_id: number
    notification_time?: Date | string | null
  }

  export type measurementUpdateWithoutDeviceInput = {
    usage_time?: DateTimeFieldUpdateOperationsInput | Date | string
    consumption?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type measurementUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    usage_time?: DateTimeFieldUpdateOperationsInput | Date | string
    consumption?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type measurementUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    usage_time?: DateTimeFieldUpdateOperationsInput | Date | string
    consumption?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type scheduleUpdateWithoutDeviceInput = {
    time_action?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleUncheckedUpdateWithoutDeviceInput = {
    time_action?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type scheduleUncheckedUpdateManyWithoutDeviceInput = {
    time_action?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type log_eventUpdateWithoutDeviceInput = {
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type log_eventUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type log_eventUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_in?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type device_have_notificationUpdateWithoutDeviceInput = {
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUpdateOneRequiredWithoutDevice_have_notificationNestedInput
  }

  export type device_have_notificationUncheckedUpdateWithoutDeviceInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_have_notificationUncheckedUpdateManyWithoutDeviceInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_have_notificationCreateManyNotificationInput = {
    device_id: number
    notification_time?: Date | string | null
  }

  export type device_have_notificationUpdateWithoutNotificationInput = {
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateOneRequiredWithoutDevice_have_notificationNestedInput
  }

  export type device_have_notificationUncheckedUpdateWithoutNotificationInput = {
    device_id?: IntFieldUpdateOperationsInput | number
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_have_notificationUncheckedUpdateManyWithoutNotificationInput = {
    device_id?: IntFieldUpdateOperationsInput | number
    notification_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deviceCreateManyHomeInput = {
    id?: number
    status: string
    type: string
    power_rating: string
    room_name: string
    password: string
  }

  export type user_in_homeCreateManyHomeInput = {
    user_email: string
  }

  export type deviceUpdateWithoutHomeInput = {
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUpdateManyWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateWithoutHomeInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    measurement?: measurementUncheckedUpdateManyWithoutDeviceNestedInput
    schedule?: scheduleUncheckedUpdateManyWithoutDeviceNestedInput
    log_event?: log_eventUncheckedUpdateManyWithoutDeviceNestedInput
    device_have_notification?: device_have_notificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateManyWithoutHomeInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power_rating?: StringFieldUpdateOperationsInput | string
    room_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type user_in_homeUpdateWithoutHomeInput = {
    user?: usersUpdateOneRequiredWithoutUser_in_homeNestedInput
  }

  export type user_in_homeUncheckedUpdateWithoutHomeInput = {
    user_email?: StringFieldUpdateOperationsInput | string
  }

  export type user_in_homeUncheckedUpdateManyWithoutHomeInput = {
    user_email?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}