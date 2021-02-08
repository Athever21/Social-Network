/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"port\": () => (/* binding */ port),\n/* harmony export */   \"mongo_uri\": () => (/* binding */ mongo_uri),\n/* harmony export */   \"sess_secret\": () => (/* binding */ sess_secret)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst port = process.env.PORT || 3000;\nconst mongo_uri = process.env.MONGO_URI || \"mongodb://localhost:27017/social\";\nconst sess_secret = process.env.SESS_SECRET || \"secret\";\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(port, \"port\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\config\\\\config.js\");\n  reactHotLoader.register(mongo_uri, \"mongo_uri\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\config\\\\config.js\");\n  reactHotLoader.register(sess_secret, \"sess_secret\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/config/config.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webpack.client */ \"./webpack.client.js\");\n/* harmony import */ var _webpack_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_client__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst _default = app => {\n  if (true) {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_client__WEBPACK_IMPORTED_MODULE_3___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: (_webpack_client__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/devBundle.js?");

/***/ }),

/***/ "./server/google-drive.js":
/*!********************************!*\
  !*** ./server/google-drive.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uploadAsync\": () => (/* binding */ uploadAsync),\n/* harmony export */   \"showFilesAsync\": () => (/* binding */ showFilesAsync),\n/* harmony export */   \"deleteFileAsync\": () => (/* binding */ deleteFileAsync),\n/* harmony export */   \"getFileAsync\": () => (/* binding */ getFileAsync),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst scopes = ['https://www.googleapis.com/auth/drive'];\n\nconst credentials = __webpack_require__(/*! ./config/credentials.json */ \"./server/config/credentials.json\");\n\nconst auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.JWT(credentials.client_email, null, credentials.private_key, scopes);\nconst drive = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.drive({\n  version: \"v3\",\n  auth\n});\n\nconst uploadAsync = (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)(drive.files.create).bind(drive);\nconst showFilesAsync = (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)(drive.files.list).bind(drive);\nconst deleteFileAsync = (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)(drive.files.delete).bind(drive);\nconst getFileAsync = (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)(drive.files.get).bind(drive);\nconst _default = drive;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(scopes, \"scopes\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n  reactHotLoader.register(drive, \"drive\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n  reactHotLoader.register(uploadAsync, \"uploadAsync\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n  reactHotLoader.register(showFilesAsync, \"showFilesAsync\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n  reactHotLoader.register(deleteFileAsync, \"deleteFileAsync\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n  reactHotLoader.register(getFileAsync, \"getFileAsync\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\google-drive.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/google-drive.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! connect-redis */ \"connect-redis\");\n/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(connect_redis__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/handleError */ \"./server/utils/handleError.js\");\n/* harmony import */ var _routes_users__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/users */ \"./server/routes/users.js\");\n/* harmony import */ var _routes_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/auth */ \"./server/routes/auth.js\");\n/* harmony import */ var _routes_posts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/posts */ \"./server/routes/posts.js\");\n/* harmony import */ var _routes_friends__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/friends */ \"./server/routes/friends.js\");\n/* harmony import */ var _routes_notifiactions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/notifiactions */ \"./server/routes/notifiactions.js\");\n/* harmony import */ var _routes_comments__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/comments */ \"./server/routes/comments.js\");\n/* harmony import */ var _routes_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/message */ \"./server/routes/message.js\");\n/* harmony import */ var _routes_admin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/admin */ \"./server/routes/admin.js\");\n/* harmony import */ var _socket_io__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./socket-io */ \"./server/socket-io.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(async () => {\n  try {\n    await mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_9__.mongo_uri, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n      useCreateIndex: true,\n      useFindAndModify: false\n    });\n    console.log(\"connected to database\");\n  } catch (err) {\n    console.log(err);\n  }\n})();\n\nlet RedisStore = connect_redis__WEBPACK_IMPORTED_MODULE_7___default()((express_session__WEBPACK_IMPORTED_MODULE_4___default()));\nlet redisClient = redis__WEBPACK_IMPORTED_MODULE_6___default().createClient();\nredisClient.on(\"error\", message => console.log(message));\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()({\n  contentSecurityPolicy: {\n    directives: {\n      defaultSrc: [\"'self'\"],\n      styleSrc: [\"'self'\", \"'unsafe-inline'\", \"unpkg.com\", \"cdn.jsdelivr.net\", \"fonts.googleapis.com\", \"use.fontawesome.com\"],\n      scriptSrc: [\"'self'\", \"js.stripe.com\",  true ? \"'unsafe-eval'\" : 0],\n      frameSrc: [\"'self'\", \"js.stripe.com\"],\n      fontSrc: [\"'self'\", \"fonts.googleapis.com\", \"fonts.gstatic.com\", \"use.fontawesome.com\", \"cdn.joinhoney.com\"],\n      imgSrc: [\"'self'\", \"data:\"]\n    }\n  }\n}));\napp.use(express_session__WEBPACK_IMPORTED_MODULE_4___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_9__.sess_secret,\n  cookie: {\n    httpOnly: true,\n    // secure: true\n    sameSite: true,\n    maxAge: 600000\n  },\n  store: new RedisStore({\n    client: redisClient,\n    ttl: 86400\n  }),\n  resave: false,\n  saveUninitialized: false\n}));\n(0,_devBundle__WEBPACK_IMPORTED_MODULE_10__.default)(app);\napp.disable(\"x-powered-by\");\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"dist\")));\napp.use(\"/api/users\", _routes_users__WEBPACK_IMPORTED_MODULE_12__.default);\napp.use(\"/api/auth\", _routes_auth__WEBPACK_IMPORTED_MODULE_13__.default);\napp.use(\"/api/posts\", _routes_posts__WEBPACK_IMPORTED_MODULE_14__.default);\napp.use(\"/api/friends\", _routes_friends__WEBPACK_IMPORTED_MODULE_15__.default);\napp.use(\"/api/notif\", _routes_notifiactions__WEBPACK_IMPORTED_MODULE_16__.default);\napp.use(\"/api/comments\", _routes_comments__WEBPACK_IMPORTED_MODULE_17__.default);\napp.use(\"/api/message\", _routes_message__WEBPACK_IMPORTED_MODULE_18__.default);\napp.use(\"/api/admin\", _routes_admin__WEBPACK_IMPORTED_MODULE_19__.default);\napp.get(\"*\", (req, res) => {\n  return res.send((0,_template__WEBPACK_IMPORTED_MODULE_8__.default)());\n});\napp.use(_utils_handleError__WEBPACK_IMPORTED_MODULE_11__.default);\nconst server = app.listen(_config_config__WEBPACK_IMPORTED_MODULE_9__.port, () => console.log(`Server listening on port ${_config_config__WEBPACK_IMPORTED_MODULE_9__.port}`));\nconst io = socket_io__WEBPACK_IMPORTED_MODULE_3___default()(server);\n(0,_socket_io__WEBPACK_IMPORTED_MODULE_20__.default)(io);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(RedisStore, \"RedisStore\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\index.js\");\n  reactHotLoader.register(redisClient, \"redisClient\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\index.js\");\n  reactHotLoader.register(app, \"app\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\index.js\");\n  reactHotLoader.register(server, \"server\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\index.js\");\n  reactHotLoader.register(io, \"io\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/index.js?");

/***/ }),

/***/ "./server/models/Comments.js":
/*!***********************************!*\
  !*** ./server/models/Comments.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst commentsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String,\n    default: (uuid__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n  author: {\n    type: String,\n    ref: 'User'\n  },\n  post: {\n    type: String,\n    ref: 'Post'\n  },\n  message: String\n}, {\n  timestamps: true\n});\ncommentsSchema.set('toJSON', {\n  transform: (doc, ret) => {\n    ret.id = ret._id;\n    delete ret._id;\n    delete ret.__v;\n  }\n});\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Comment', commentsSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(commentsSchema, \"commentsSchema\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Comments.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Comments.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/models/Comments.js?");

/***/ }),

/***/ "./server/models/Friends.js":
/*!**********************************!*\
  !*** ./server/models/Friends.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst friendsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  user: {\n    type: String,\n    ref: \"User\"\n  },\n  friends: {\n    type: [{\n      type: String,\n      ref: \"User\"\n    }],\n    ref: \"User\"\n  }\n});\nfriendsSchema.set(\"toJSON\", {\n  transform: (doc, ret) => {\n    ret.id = ret._id;\n    delete ret._id;\n    delete ret.__v;\n  }\n});\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Friends\", friendsSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(friendsSchema, \"friendsSchema\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Friends.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Friends.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/models/Friends.js?");

/***/ }),

/***/ "./server/models/Message.js":
/*!**********************************!*\
  !*** ./server/models/Message.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst messageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String,\n    default: (uuid__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n  from: {\n    type: String,\n    ref: \"User\"\n  },\n  to: {\n    type: String,\n    ref: \"User\"\n  },\n  message: String,\n  read: {\n    type: Boolean,\n    default: false\n  }\n}, {\n  timestamps: true\n});\nmessageSchema.set(\"toJSON\", {\n  transform: (doc, ret) => {\n    ret.id = ret._id;\n    delete ret._id;\n    delete ret.__v;\n  }\n});\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Message\", messageSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(messageSchema, \"messageSchema\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Message.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Message.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/models/Message.js?");

/***/ }),

/***/ "./server/models/Notification.js":
/*!***************************************!*\
  !*** ./server/models/Notification.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst notificationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String,\n    default: (uuid__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n  from: {\n    type: String,\n    ref: 'User'\n  },\n  to: {\n    type: String,\n    ref: 'User'\n  },\n  type: {\n    type: String,\n    enum: ['FRIEND', 'LIKE_POST', 'COMMENT']\n  },\n  post: String,\n  read: {\n    type: Boolean,\n    default: false\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now()\n  },\n  updateAt: {\n    type: Date,\n    default: Date.now()\n  }\n});\nnotificationSchema.pre('save', function (next) {\n  const now = Date.now();\n  this.updatedAt = now;\n\n  if (!this.createdAt) {\n    this.createdAt = now;\n  }\n\n  next();\n});\nnotificationSchema.set('toJSON', {\n  transform: (doc, ret) => {\n    ret.id = ret._id;\n    delete ret._id;\n    delete ret.__v;\n  }\n});\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Notif', notificationSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(notificationSchema, \"notificationSchema\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Notification.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Notification.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/models/Notification.js?");

/***/ }),

/***/ "./server/models/Post.js":
/*!*******************************!*\
  !*** ./server/models/Post.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst postSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String,\n    default: (uuid__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n  message: String,\n  author: {\n    type: String,\n    ref: 'User'\n  },\n  likes: {\n    type: Number,\n    default: 0\n  },\n  usersLiked: {\n    type: [String],\n    ref: 'User',\n    default: []\n  },\n  files: {\n    type: [String],\n    default: []\n  }\n}, {\n  timestamps: true\n});\npostSchema.set('toJSON', {\n  transform: (doc, ret) => {\n    ret.id = ret._id;\n    delete ret._id;\n    delete ret.__v;\n  }\n});\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Post', postSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(postSchema, \"postSchema\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Post.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\Post.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/models/Post.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! argon2 */ \"argon2\");\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(argon2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String,\n    default: (uuid__WEBPACK_IMPORTED_MODULE_3___default())\n  },\n  username: {\n    type: String,\n    minlength: 3,\n    maxlength: 16,\n    unique: true\n  },\n  password: String,\n  img: String\n});\n\nclass User {\n  static async validatePassword(password, userInfo) {\n    const bool = await argon2__WEBPACK_IMPORTED_MODULE_1___default().verify(userInfo.password, password);\n    return bool;\n  }\n\n  static async createUser(fields) {\n    const hash = await argon2__WEBPACK_IMPORTED_MODULE_1___default().hash(fields.password);\n    const user = new this({ ...fields,\n      password: hash\n    });\n    return user.save();\n  }\n\n}\n\nuserSchema.plugin((mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2___default()));\nuserSchema.loadClass(User);\nuserSchema.set('toJSON', {\n  transform: (doc, ret) => {\n    ret.id = ret._id;\n    delete ret._id;\n    delete ret.__v;\n    delete ret.password;\n  }\n});\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', userSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(userSchema, \"userSchema\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\User.js\");\n  reactHotLoader.register(User, \"User\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\User.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\models\\\\User.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/models/User.js?");

/***/ }),

/***/ "./server/routes/admin.js":
/*!********************************!*\
  !*** ./server/routes/admin.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* harmony import */ var _services_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin */ \"./server/services/admin.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_admin__WEBPACK_IMPORTED_MODULE_2__.auth));\nrouter.route(\"/post\").get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_admin__WEBPACK_IMPORTED_MODULE_2__.getPosts)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_admin__WEBPACK_IMPORTED_MODULE_2__.deletePost));\nrouter.route(\"/user\").get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_admin__WEBPACK_IMPORTED_MODULE_2__.getUsers)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_admin__WEBPACK_IMPORTED_MODULE_2__.deleteUser));\nrouter.route(\"/file\").get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_admin__WEBPACK_IMPORTED_MODULE_2__.getFiles)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_admin__WEBPACK_IMPORTED_MODULE_2__.deleteFile));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\admin.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\admin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/admin.js?");

/***/ }),

/***/ "./server/routes/auth.js":
/*!*******************************!*\
  !*** ./server/routes/auth.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth */ \"./server/services/auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route('/login').post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_auth__WEBPACK_IMPORTED_MODULE_2__.loginUser));\nrouter.route('/logout').post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_auth__WEBPACK_IMPORTED_MODULE_2__.logoutUser));\nrouter.route('/session').post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_auth__WEBPACK_IMPORTED_MODULE_2__.getSessionUser));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\auth.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/auth.js?");

/***/ }),

/***/ "./server/routes/comments.js":
/*!***********************************!*\
  !*** ./server/routes/comments.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* harmony import */ var _services_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/comments */ \"./server/services/comments.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route('/').all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.auth)).post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.addComment));\nrouter.route('/post/:postId').all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.auth)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.getCommentsForPost));\nrouter.route('/:id').all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.authToAlter)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.getComment)).put((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.changeComment)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_comments__WEBPACK_IMPORTED_MODULE_2__.removeComment));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\comments.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\comments.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/comments.js?");

/***/ }),

/***/ "./server/routes/friends.js":
/*!**********************************!*\
  !*** ./server/routes/friends.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* harmony import */ var _services_friends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/friends */ \"./server/services/friends.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route('/').all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_friends__WEBPACK_IMPORTED_MODULE_2__.auth)).post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_friends__WEBPACK_IMPORTED_MODULE_2__.addFriend));\nrouter.route('/:user').all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_friends__WEBPACK_IMPORTED_MODULE_2__.authToAlter)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_friends__WEBPACK_IMPORTED_MODULE_2__.getFriends)).patch((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_friends__WEBPACK_IMPORTED_MODULE_2__.removeFriend));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\friends.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\friends.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/friends.js?");

/***/ }),

/***/ "./server/routes/message.js":
/*!**********************************!*\
  !*** ./server/routes/message.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message */ \"./server/services/message.js\");\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route(\"/\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.auth)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.getMessages)).post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.addMessage));\nrouter.route(\"/count\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.auth)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.countMessages));\nrouter.route(\"/:id\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.authToAlter)).patch((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.changeMessage)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_message__WEBPACK_IMPORTED_MODULE_1__.removeMessage));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\message.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\message.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/message.js?");

/***/ }),

/***/ "./server/routes/notifiactions.js":
/*!****************************************!*\
  !*** ./server/routes/notifiactions.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* harmony import */ var _services_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notifications */ \"./server/services/notifications.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route(\"/\").get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_notifications__WEBPACK_IMPORTED_MODULE_2__.getAllNotif)).post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_notifications__WEBPACK_IMPORTED_MODULE_2__.createNotif));\nrouter.route(\"/:id\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_notifications__WEBPACK_IMPORTED_MODULE_2__.authToAlter)).patch((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_notifications__WEBPACK_IMPORTED_MODULE_2__.changeNotif)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_notifications__WEBPACK_IMPORTED_MODULE_2__.deleteNotif));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\notifiactions.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\notifiactions.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/notifiactions.js?");

/***/ }),

/***/ "./server/routes/posts.js":
/*!********************************!*\
  !*** ./server/routes/posts.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* harmony import */ var _services_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/posts */ \"./server/services/posts.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nconst upload = multer__WEBPACK_IMPORTED_MODULE_1___default()();\nrouter.route(\"/\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.auth)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.getAllPosts)).post(upload.fields([{\n  name: \"file\"\n}, {\n  name: \"message\"\n}]), (0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.createPost));\nrouter.route(\"/user/:userId\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.auth)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.getPostsForUser));\nrouter.route(\"/img/:imgId\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.auth)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.getImage));\nrouter.route(\"/:id\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.authToAlter)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.getPost)).put((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.changePost)).patch((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.likePost)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_2__.default)(_services_posts__WEBPACK_IMPORTED_MODULE_3__.removePost));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\posts.js\");\n  reactHotLoader.register(upload, \"upload\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\posts.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\posts.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/posts.js?");

/***/ }),

/***/ "./server/routes/users.js":
/*!********************************!*\
  !*** ./server/routes/users.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/autoCatch */ \"./server/utils/autoCatch.js\");\n/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users */ \"./server/services/users.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nconst upload = multer__WEBPACK_IMPORTED_MODULE_3___default()();\nrouter.route(\"/\").get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.getAllUsers)).post((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.createUser));\nrouter.route(\"/img\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.imgAuth)).post(upload.single('userPhoto'), (0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.setImage));\nrouter.route(\"/img/:id\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.auth)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.getImage));\nrouter.route(\"/:id\").all((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.authorize)).get((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.getUser)).patch((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.changeUser)).delete((0,_utils_autoCatch__WEBPACK_IMPORTED_MODULE_1__.default)(_services_users__WEBPACK_IMPORTED_MODULE_2__.removeUser));\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\users.js\");\n  reactHotLoader.register(upload, \"upload\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\users.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\routes\\\\users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/routes/users.js?");

/***/ }),

/***/ "./server/services/admin.js":
/*!**********************************!*\
  !*** ./server/services/admin.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"deletePost\": () => (/* binding */ deletePost),\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers),\n/* harmony export */   \"deleteUser\": () => (/* binding */ deleteUser),\n/* harmony export */   \"getFiles\": () => (/* binding */ getFiles),\n/* harmony export */   \"deleteFile\": () => (/* binding */ deleteFile)\n/* harmony export */ });\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Post */ \"./server/models/Post.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var _models_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Comments */ \"./server/models/Comments.js\");\n/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Notification */ \"./server/models/Notification.js\");\n/* harmony import */ var _models_Friends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Friends */ \"./server/models/Friends.js\");\n/* harmony import */ var _google_drive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../google-drive */ \"./server/google-drive.js\");\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst auth = (req, res) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_6__.Unauthorized();\n  }\n\n  if (!req.session.user.username !== \"admin\") {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_6__.Forbidden();\n  }\n\n  return next();\n};\nconst getPosts = async (req, res) => {\n  const {\n    page = 0\n  } = req.query;\n  const perPage = 20;\n  const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.find().populate(\"author\").skip(parseInt(page) * perPage).exec();\n  return res.json(posts);\n};\nconst deletePost = async (req, res) => {\n  const {\n    id\n  } = req.query;\n  const post = await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.findById(id);\n\n  for (const file of post.files) {\n    await (0,_google_drive__WEBPACK_IMPORTED_MODULE_5__.deleteFileAsync)(file);\n  }\n\n  await _models_Comments__WEBPACK_IMPORTED_MODULE_2__.default.deleteMany({\n    post: id\n  });\n  await _models_Notification__WEBPACK_IMPORTED_MODULE_3__.default.deleteMany({\n    post: id\n  });\n  await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndDelete(id);\n  return res.send(\"ok\");\n};\nconst getUsers = async (req, res) => {\n  const {\n    page = 0\n  } = req.query;\n  const perPage = 50;\n  const users = await _models_User__WEBPACK_IMPORTED_MODULE_1__.default.find().skip(parseInt(page) * perPage).exec();\n  return res.json(users);\n};\nconst deleteUser = async (req, res) => {\n  const {\n    id\n  } = req.query;\n  const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.find({\n    author: id\n  });\n  const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.default.findById(id);\n\n  if (user.img) {\n    await (0,_google_drive__WEBPACK_IMPORTED_MODULE_5__.deleteFileAsync)({\n      fileId: user.img\n    });\n  }\n\n  for (const post of posts) {\n    for (const file of post.files) {\n      await (0,_google_drive__WEBPACK_IMPORTED_MODULE_5__.deleteFileAsync)({\n        fileId: file\n      });\n    }\n\n    await _models_Comments__WEBPACK_IMPORTED_MODULE_2__.default.deleteMany({\n      post: post.id\n    });\n    await _models_Notification__WEBPACK_IMPORTED_MODULE_3__.default.deleteMany({\n      post: post.id\n    });\n    await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndDelete(post.id);\n  }\n\n  const friends = await _models_Friends__WEBPACK_IMPORTED_MODULE_4__.default.find({\n    friends: id\n  });\n\n  for (const friend of friends) {\n    const index = friend.friends.findIndex(x => x === req.user._id);\n    friend.friends.splice(index, 1);\n    await friend.save();\n  }\n\n  await _models_Friends__WEBPACK_IMPORTED_MODULE_4__.default.deleteOne({\n    user: id\n  });\n  await _models_Notification__WEBPACK_IMPORTED_MODULE_3__.default.deleteMany({\n    $or: [{\n      to: id\n    }, {\n      from: id\n    }]\n  });\n  await _models_User__WEBPACK_IMPORTED_MODULE_1__.default.findByIdAndDelete(id);\n  return res.send(\"ok\");\n};\nconst getFiles = async (req, res) => {\n  console.log(\"a\");\n  const {\n    page = 0\n  } = req.query;\n  const perPage = 25;\n  const skip = parseInt(page) * perPage;\n  let count = 1;\n  let arr = [];\n  const files = await (0,_google_drive__WEBPACK_IMPORTED_MODULE_5__.showFilesAsync)();\n\n  for (const file of files.data.files) {\n    if (file.mimeType !== \"application/vnd.google-apps.folder\") {\n      if (count > skip && count - skip <= 25) {\n        console.log(file);\n        arr.push(file.id);\n        count++;\n      } else {\n        break;\n      }\n    }\n  }\n\n  return res.json({\n    data: arr\n  });\n};\nconst deleteFile = async (req, res) => {\n  const {\n    id\n  } = req.query;\n  await (0,_google_drive__WEBPACK_IMPORTED_MODULE_5__.deleteFileAsync)({\n    fileId: id\n  });\n  return res.send(\"ok\");\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\admin.js\");\n  reactHotLoader.register(getPosts, \"getPosts\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\admin.js\");\n  reactHotLoader.register(deletePost, \"deletePost\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\admin.js\");\n  reactHotLoader.register(getUsers, \"getUsers\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\admin.js\");\n  reactHotLoader.register(deleteUser, \"deleteUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\admin.js\");\n  reactHotLoader.register(getFiles, \"getFiles\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\admin.js\");\n  reactHotLoader.register(deleteFile, \"deleteFile\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\admin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/admin.js?");

/***/ }),

/***/ "./server/services/auth.js":
/*!*********************************!*\
  !*** ./server/services/auth.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser),\n/* harmony export */   \"logoutUser\": () => (/* binding */ logoutUser),\n/* harmony export */   \"getSessionUser\": () => (/* binding */ getSessionUser)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst loginUser = async (req, res, next) => {\n  const {\n    username,\n    password\n  } = req.body;\n\n  if (!username || !password) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.BadRequest(\"Missing username or password\");\n  }\n\n  const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n    username\n  });\n\n  if (!user || !(await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.validatePassword(password, user))) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.BadRequest(\"Invalid username or password\");\n  }\n\n  req.session.regenerate(err => {\n    if (err) {\n      return next(err);\n    }\n\n    req.session.user = user.toJSON();\n    console.log(user.toJSON());\n    return res.json(user);\n  });\n};\nconst logoutUser = async (req, res, next) => {\n  req.session.destroy(err => {\n    if (err) {\n      return next(err);\n    }\n  });\n  return res.send('ok');\n};\nconst getSessionUser = async (req, res) => {\n  return res.json(req.session.user);\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(loginUser, \"loginUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\auth.js\");\n  reactHotLoader.register(logoutUser, \"logoutUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\auth.js\");\n  reactHotLoader.register(getSessionUser, \"getSessionUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/auth.js?");

/***/ }),

/***/ "./server/services/comments.js":
/*!*************************************!*\
  !*** ./server/services/comments.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"authToAlter\": () => (/* binding */ authToAlter),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getCommentsForPost\": () => (/* binding */ getCommentsForPost),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"changeComment\": () => (/* binding */ changeComment),\n/* harmony export */   \"removeComment\": () => (/* binding */ removeComment)\n/* harmony export */ });\n/* harmony import */ var _models_Comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Comments */ \"./server/models/Comments.js\");\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst auth = async (req, res, next) => {\n  if (req.session.user) {\n    return next();\n  }\n\n  throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Unauthorized();\n};\nconst authToAlter = async (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Unauthorized();\n  }\n\n  const comment = await _models_Comments__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.params.id);\n\n  if (!comment) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.BadRequest(\"Comment not found\");\n  }\n\n  if (comment.author !== req.session.user.id) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Forbidden();\n  }\n\n  req.comment = comment;\n  return next();\n};\nconst addComment = async (req, res, next) => {\n  const comment = new _models_Comments__WEBPACK_IMPORTED_MODULE_0__.default({\n    message: req.body.message,\n    author: req.session.user.id,\n    post: req.body.post\n  });\n  await comment.save();\n  return res.json(comment);\n};\nconst getCommentsForPost = async (req, res, next) => {\n  try {\n    const perPage = 20;\n    const {\n      postId\n    } = req.params;\n    const {\n      page = 0\n    } = req.query;\n    const comments = await _models_Comments__WEBPACK_IMPORTED_MODULE_0__.default.find({\n      post: postId\n    }).sort({\n      createdAt: -1\n    }).populate(\"author\").skip(parseInt(page) * perPage).limit(perPage).exec();\n    return res.json(comments);\n  } catch (err) {\n    return next(err);\n  }\n};\nconst getComment = async (req, res) => {\n  return res.json(req.comment);\n};\nconst changeComment = async (req, res) => {\n  req.comment.message = req.body.message;\n  await req.comment.save();\n  return res.json(req.comment);\n};\nconst removeComment = async (req, res) => {\n  await _models_Comments__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndRemove(req.comment._id);\n  return res.send(\"deleted\");\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\comments.js\");\n  reactHotLoader.register(authToAlter, \"authToAlter\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\comments.js\");\n  reactHotLoader.register(addComment, \"addComment\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\comments.js\");\n  reactHotLoader.register(getCommentsForPost, \"getCommentsForPost\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\comments.js\");\n  reactHotLoader.register(getComment, \"getComment\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\comments.js\");\n  reactHotLoader.register(changeComment, \"changeComment\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\comments.js\");\n  reactHotLoader.register(removeComment, \"removeComment\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\comments.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/comments.js?");

/***/ }),

/***/ "./server/services/friends.js":
/*!************************************!*\
  !*** ./server/services/friends.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"addFriend\": () => (/* binding */ addFriend),\n/* harmony export */   \"getFriends\": () => (/* binding */ getFriends),\n/* harmony export */   \"authToAlter\": () => (/* binding */ authToAlter),\n/* harmony export */   \"removeFriend\": () => (/* binding */ removeFriend)\n/* harmony export */ });\n/* harmony import */ var _models_Friends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Friends */ \"./server/models/Friends.js\");\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst auth = async (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Unauthorized();\n  }\n\n  return next();\n};\nconst addFriend = async (req, res) => {\n  const {\n    user1,\n    user2\n  } = req.body;\n\n  for (const user of [user1, user2]) {\n    let f = await _models_Friends__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n      user\n    });\n    const toAdd = user === user1 ? user2 : user1;\n\n    if (f) {\n      f.friends = [...f.friends, toAdd];\n    } else {\n      f = new _models_Friends__WEBPACK_IMPORTED_MODULE_0__.default({\n        user,\n        friends: [toAdd]\n      });\n    }\n\n    await f.save();\n  }\n\n  return res.send(\"added\");\n};\nconst getFriends = async (req, res) => {\n  const {\n    user\n  } = req.params;\n  const {\n    page = 0\n  } = req.query;\n  const perPage = 10;\n  const friends = await _models_Friends__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n    user\n  }, {\n    friends: {\n      $slice: [perPage * parseInt(page), perPage]\n    }\n  }).populate(\"friends\").exec();\n  return res.json(friends);\n};\nconst authToAlter = async (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Unauthorized();\n  }\n\n  const f = await _models_Friends__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n    user: req.session.user.id\n  });\n\n  if (!f) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.NotFound();\n  }\n\n  req.f = f;\n  return next();\n};\nconst removeFriend = async (req, res, next) => {\n  try {\n    const index = req.f.friends.findIndex(x => x === req.body.user);\n    req.f.friends.splice(index, 1);\n    await req.f.save();\n    return res.json(req.f);\n  } catch (err) {\n    return next(err);\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\friends.js\");\n  reactHotLoader.register(addFriend, \"addFriend\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\friends.js\");\n  reactHotLoader.register(getFriends, \"getFriends\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\friends.js\");\n  reactHotLoader.register(authToAlter, \"authToAlter\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\friends.js\");\n  reactHotLoader.register(removeFriend, \"removeFriend\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\friends.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/friends.js?");

/***/ }),

/***/ "./server/services/message.js":
/*!************************************!*\
  !*** ./server/services/message.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"getMessages\": () => (/* binding */ getMessages),\n/* harmony export */   \"addMessage\": () => (/* binding */ addMessage),\n/* harmony export */   \"authToAlter\": () => (/* binding */ authToAlter),\n/* harmony export */   \"changeMessage\": () => (/* binding */ changeMessage),\n/* harmony export */   \"removeMessage\": () => (/* binding */ removeMessage),\n/* harmony export */   \"countMessages\": () => (/* binding */ countMessages)\n/* harmony export */ });\n/* harmony import */ var _models_Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Message */ \"./server/models/Message.js\");\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst auth = async (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Unauthorized();\n  }\n\n  return next();\n};\nconst getMessages = async (req, res) => {\n  const {\n    page = 0,\n    user\n  } = req.query;\n  const perPage = 20;\n  const messages = await _models_Message__WEBPACK_IMPORTED_MODULE_0__.default.find({\n    from: {\n      $in: [req.session.user.id, user]\n    },\n    to: {\n      $in: [req.session.user.id, user]\n    }\n  }).sort({\n    createdAt: -1\n  }).skip(parseInt(page) * perPage).limit(perPage).exec();\n  return res.json(messages);\n};\nconst addMessage = async (req, res) => {\n  const message = new _models_Message__WEBPACK_IMPORTED_MODULE_0__.default(req.body);\n  await message.save();\n  return res.json(message);\n};\nconst authToAlter = async (req, res, next) => {\n  const t1 = Date.now();\n\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Unauthorized();\n  }\n\n  const message = await _models_Message__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.params.id);\n\n  if (!message) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.NotFound();\n  }\n\n  if (req.method === \"PATCH\" && req.session.user.id !== message.to) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Forbidden();\n  }\n\n  if (req.method === \"DELETE\" && req.session.user.id !== message.from) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_1__.Forbidden();\n  }\n\n  req.message = message;\n  const t2 = Date.now();\n  console.log(`performance authToAlter ${t2 - t1}`);\n  return next();\n};\nconst changeMessage = async (req, res) => {\n  const t1 = Date.now();\n  req.message.read = true;\n  await req.message.save();\n  const t2 = Date.now();\n  console.log(`performance changeMessage ${t2 - t1}`);\n  return res.json(req.message);\n};\nconst removeMessage = async (req, res) => {\n  await _models_Message__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndDelete(req.message.id);\n  return res.send(\"ok\");\n};\nconst countMessages = async (req, res) => {\n  const {\n    user\n  } = req.query;\n  const count = await _models_Message__WEBPACK_IMPORTED_MODULE_0__.default.countDocuments({\n    from: user,\n    to: req.session.user.id,\n    read: false\n  });\n  return res.json({\n    count\n  });\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\message.js\");\n  reactHotLoader.register(getMessages, \"getMessages\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\message.js\");\n  reactHotLoader.register(addMessage, \"addMessage\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\message.js\");\n  reactHotLoader.register(authToAlter, \"authToAlter\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\message.js\");\n  reactHotLoader.register(changeMessage, \"changeMessage\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\message.js\");\n  reactHotLoader.register(removeMessage, \"removeMessage\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\message.js\");\n  reactHotLoader.register(countMessages, \"countMessages\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\message.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/message.js?");

/***/ }),

/***/ "./server/services/notifications.js":
/*!******************************************!*\
  !*** ./server/services/notifications.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"authToAlter\": () => (/* binding */ authToAlter),\n/* harmony export */   \"createNotif\": () => (/* binding */ createNotif),\n/* harmony export */   \"getAllNotif\": () => (/* binding */ getAllNotif),\n/* harmony export */   \"changeNotif\": () => (/* binding */ changeNotif),\n/* harmony export */   \"deleteNotif\": () => (/* binding */ deleteNotif)\n/* harmony export */ });\n/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Notification */ \"./server/models/Notification.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst auth = (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_2__.Unauthorized();\n  }\n\n  return next();\n};\nconst authToAlter = async (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_2__.Unauthorized();\n  }\n\n  const n = await _models_Notification__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.params.id);\n\n  if (!n) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_2__.NotFound();\n  }\n\n  if (req.session.user.id !== n.to) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_2__.Forbidden();\n  }\n\n  req.n = n;\n  return next();\n};\nconst createNotif = async (req, res, next) => {\n  const {\n    from,\n    to,\n    type,\n    post = \"\"\n  } = req.body;\n\n  try {\n    const n = new _models_Notification__WEBPACK_IMPORTED_MODULE_0__.default({\n      from,\n      to,\n      type,\n      post\n    });\n    await n.save();\n    const u = await _models_User__WEBPACK_IMPORTED_MODULE_1__.default.findById(from);\n    n.author = u;\n    return res.json(n);\n  } catch (err) {\n    return next(err);\n  }\n};\nconst getAllNotif = async (req, res) => {\n  const perPage = 10;\n  const {\n    page = 0\n  } = req.query;\n  const notifs = await _models_Notification__WEBPACK_IMPORTED_MODULE_0__.default.find({\n    to: req.session.user.id\n  }).sort({\n    createdAt: -1\n  }).populate(\"from\").skip(parseInt(page) * perPage).limit(perPage).exec();\n  const count = await _models_Notification__WEBPACK_IMPORTED_MODULE_0__.default.countDocuments({\n    to: req.session.user.id,\n    read: false\n  });\n  return res.json({\n    notifs,\n    count\n  });\n};\nconst changeNotif = async (req, res) => {\n  req.n.read = true;\n  req.n.save();\n  return res.json(req.n);\n};\nconst deleteNotif = async (req, res) => {\n  await _models_Notification__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndRemove(req.params.id);\n  return res.send(\"deleted\");\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\notifications.js\");\n  reactHotLoader.register(authToAlter, \"authToAlter\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\notifications.js\");\n  reactHotLoader.register(createNotif, \"createNotif\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\notifications.js\");\n  reactHotLoader.register(getAllNotif, \"getAllNotif\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\notifications.js\");\n  reactHotLoader.register(changeNotif, \"changeNotif\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\notifications.js\");\n  reactHotLoader.register(deleteNotif, \"deleteNotif\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\notifications.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/notifications.js?");

/***/ }),

/***/ "./server/services/posts.js":
/*!**********************************!*\
  !*** ./server/services/posts.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"getAllPosts\": () => (/* binding */ getAllPosts),\n/* harmony export */   \"createPost\": () => (/* binding */ createPost),\n/* harmony export */   \"getPostsForUser\": () => (/* binding */ getPostsForUser),\n/* harmony export */   \"getImage\": () => (/* binding */ getImage),\n/* harmony export */   \"authToAlter\": () => (/* binding */ authToAlter),\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"changePost\": () => (/* binding */ changePost),\n/* harmony export */   \"likePost\": () => (/* binding */ likePost),\n/* harmony export */   \"removePost\": () => (/* binding */ removePost)\n/* harmony export */ });\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Post */ \"./server/models/Post.js\");\n/* harmony import */ var _models_Friends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Friends */ \"./server/models/Friends.js\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stream */ \"stream\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* harmony import */ var _google_drive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../google-drive */ \"./server/google-drive.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst auth = (req, res, next) => {\n  if (req.session.user) {\n    return next();\n  }\n\n  throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_3__.Unauthorized();\n};\nconst getAllPosts = async (req, res) => {\n  const perPage = 25;\n  const {\n    page = 0\n  } = req.query;\n  const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.find().skip(parseInt(page) * perPage).limit(perPage);\n  return res.json(posts);\n};\nconst createPost = async (req, res, next) => {\n  const {\n    message\n  } = JSON.parse(req.files.message[0].buffer.toString());\n  const post = new _models_Post__WEBPACK_IMPORTED_MODULE_0__.default({\n    message,\n    author: req.session.user.id\n  });\n\n  if (Object.keys(req.files).length === 1) {\n    await post.save();\n    return res.json({ ...post._doc,\n      author: req.session.user\n    });\n  }\n\n  try {\n    const folder = await (0,_google_drive__WEBPACK_IMPORTED_MODULE_4__.uploadAsync)({\n      resource: {\n        name: post._id,\n        mimeType: \"application/vnd.google-apps.folder\"\n      },\n      fields: \"id\"\n    });\n    let i = 0;\n\n    for (const file of req.files.file) {\n      let bufferStream = new (stream__WEBPACK_IMPORTED_MODULE_2___default().PassThrough)();\n      bufferStream.end(file.buffer);\n      const res = await (0,_google_drive__WEBPACK_IMPORTED_MODULE_4__.uploadAsync)({\n        media: {\n          mimeType: file.mimetype,\n          body: bufferStream\n        },\n        resource: {\n          name: i++,\n          parents: [folder.id]\n        }\n      });\n      post.files = [...post.files, res.data.id];\n    }\n\n    await post.save();\n    return res.json({ ...post._doc,\n      author: req.session.user\n    });\n  } catch (err) {\n    console.log(err);\n    return next(err);\n  }\n};\nconst getPostsForUser = async (req, res) => {\n  const perPage = 5;\n  const user = req.params.userId;\n  const {\n    page = 0\n  } = req.query;\n  const f = await _models_Friends__WEBPACK_IMPORTED_MODULE_1__.default.findOne({\n    user\n  });\n  const friends = f ? f.friends : [];\n  const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.find({\n    author: {\n      $in: [...friends, user]\n    }\n  }, {\n    usersLiked: 0\n  }).sort({\n    createdAt: -1\n  }).populate(\"author\").skip(parseInt(page) * perPage).limit(perPage).exec();\n  return res.json(posts);\n};\nconst getImage = async (req, res) => {\n  const {\n    imgId\n  } = req.params;\n  const img = await (0,_google_drive__WEBPACK_IMPORTED_MODULE_4__.getFileAsync)({\n    fileId: imgId,\n    alt: \"media\"\n  }, {\n    responseType: \"stream\"\n  });\n  return img.data.pipe(res);\n};\nconst authToAlter = async (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_3__.Unauthorized();\n  }\n\n  const post = await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.params.id).populate(\"author\");\n\n  if (!post) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_3__.NotFound();\n  }\n\n  if (post.author._id !== req.session.user.id && req.session.user.username !== \"admin\" && req.method !== \"PATCH\" && req.method !== \"GET\") {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_3__.Forbidden();\n  }\n\n  req.post = post;\n  return next();\n};\nconst getPost = async (req, res) => {\n  return res.json(req.post);\n};\nconst changePost = async (req, res, next) => {\n  for (const key of Object.keys(req.body)) {\n    req.post[key] = req.body[key];\n  }\n\n  await req.post.save();\n  return res.json(req.post);\n};\nconst likePost = async (req, res, next) => {\n  const index = req.post.usersLiked.findIndex(x => x === req.session.user.id);\n  let liked = true;\n\n  if (index !== -1) {\n    req.post.usersLiked.splice(index, 1);\n    req.post.likes--;\n    liked = false;\n  } else {\n    if (req.post.userLiked) {\n      req.post.usersLiked.push(req.session.user.id);\n    } else {\n      req.post.usersLiked = [req.session.user.id];\n    }\n\n    req.post.likes++;\n  }\n\n  await req.post.save();\n  return res.json({\n    post: req.post,\n    liked\n  });\n};\nconst removePost = async (req, res) => {\n  if (req.post.files.length > 0) {\n    await (0,_google_drive__WEBPACK_IMPORTED_MODULE_4__.deleteFileAsync)({\n      fileId: req.params.id\n    });\n  }\n\n  await _models_Post__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndRemove(req.params.id);\n  return res.send(\"deleted\");\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(getAllPosts, \"getAllPosts\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(createPost, \"createPost\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(getPostsForUser, \"getPostsForUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(getImage, \"getImage\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(authToAlter, \"authToAlter\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(getPost, \"getPost\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(changePost, \"changePost\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(likePost, \"likePost\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n  reactHotLoader.register(removePost, \"removePost\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\posts.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/posts.js?");

/***/ }),

/***/ "./server/services/users.js":
/*!**********************************!*\
  !*** ./server/services/users.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllUsers\": () => (/* binding */ getAllUsers),\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"authorize\": () => (/* binding */ authorize),\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"changeUser\": () => (/* binding */ changeUser),\n/* harmony export */   \"removeUser\": () => (/* binding */ removeUser),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"setImage\": () => (/* binding */ setImage),\n/* harmony export */   \"getImage\": () => (/* binding */ getImage),\n/* harmony export */   \"imgAuth\": () => (/* binding */ imgAuth)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var _models_Friends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Friends */ \"./server/models/Friends.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Post */ \"./server/models/Post.js\");\n/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Notification */ \"./server/models/Notification.js\");\n/* harmony import */ var _models_Comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Comments */ \"./server/models/Comments.js\");\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! argon2 */ \"argon2\");\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(argon2__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_Errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Errors */ \"./server/utils/Errors.js\");\n/* harmony import */ var _google_drive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../google-drive */ \"./server/google-drive.js\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stream */ \"stream\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nconst getAllUsers = async (req, res) => {\n  const perPage = 5;\n  const {\n    page = 0,\n    text = \"\"\n  } = req.query;\n  const regex = new RegExp(text, \"i\");\n  const users = await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.find({\n    username: {\n      $regex: regex\n    }\n  }).skip(parseInt(page) * perPage).limit(perPage);\n  return res.json(users);\n};\nconst createUser = async (req, res) => {\n  const {\n    username,\n    password\n  } = req.body;\n\n  if (!username || !password) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_6__.BadRequest(\"Missing username or password\");\n  }\n\n  const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.createUser({\n    username,\n    password\n  });\n  return res.json(user);\n};\nconst authorize = async (req, res, next) => {\n  const {\n    id\n  } = req.params;\n  const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n    $or: [{\n      _id: id\n    }, {\n      username: id\n    }]\n  });\n\n  if (!user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_6__.NotFound();\n  }\n\n  req.user = user;\n\n  if (req.method === \"GET\") {\n    return next();\n  }\n\n  if (user.username !== req.session.user.username || req.session.user.username !== \"admin\") {\n    return new _utils_Errors__WEBPACK_IMPORTED_MODULE_6__.Forbidden();\n  }\n\n  return next();\n};\nconst getUser = async (req, res) => {\n  return res.json(req.user);\n};\nconst changeUser = async (req, res, next) => {\n  if (req.body.password) {\n    req.body.password = await argon2__WEBPACK_IMPORTED_MODULE_5___default().hash(req.body.password);\n  }\n\n  for (const key of Object.keys(req.body)) {\n    req.user[key] = req.body[key];\n  }\n\n  await req.user.save();\n\n  if (req.session.user.username !== \"admin\") {\n    req.session.regenerate(err => {\n      if (err) {\n        return next(err);\n      }\n\n      req.session.user = user.toJSON();\n      return res.json(user);\n    });\n  }\n\n  return res.json(req.user);\n};\nconst removeUser = async (req, res) => {\n  await _models_Friends__WEBPACK_IMPORTED_MODULE_1__.default.deleteOne({\n    user: req.user._id\n  });\n  const friends = await _models_Friends__WEBPACK_IMPORTED_MODULE_1__.default.find({\n    friends: req.user._id\n  });\n\n  for (const friend of friends) {\n    const index = friend.friends.findIndex(x => x === req.user._id);\n    friend.friends.splice(index, 1);\n    await friend.save();\n  }\n\n  const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_2__.default.find({\n    author: req.user._id\n  });\n\n  for (const post of posts) {\n    await (0,_google_drive__WEBPACK_IMPORTED_MODULE_7__.deleteFileAsync)({\n      fileId: post._id\n    });\n  }\n\n  await _models_Post__WEBPACK_IMPORTED_MODULE_2__.default.deleteMany({\n    author: req.user._id\n  });\n  await _models_Notification__WEBPACK_IMPORTED_MODULE_3__.default.deleteMany({\n    $or: [{\n      from: req.user._id\n    }, {\n      to: req.user._id\n    }]\n  });\n  await _models_Comments__WEBPACK_IMPORTED_MODULE_4__.default.deleteMany({\n    author: req.user._id\n  });\n\n  if (req.user.img) {\n    await (0,_google_drive__WEBPACK_IMPORTED_MODULE_7__.deleteFileAsync)({\n      fileId: req.user.img\n    });\n  }\n\n  await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndDelete(req.user._id);\n  return res.send(\"ok\");\n};\nconst auth = async (req, res, next) => {\n  if (req.session.user) {\n    return next();\n  }\n\n  throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_6__.Unauthorized();\n};\nconst setImage = async (req, res, next) => {\n  if (req.session.user.img) {\n    await (0,_google_drive__WEBPACK_IMPORTED_MODULE_7__.deleteFileAsync)({\n      fileId: req.session.user.img\n    });\n  }\n\n  const bufferStream = new stream__WEBPACK_IMPORTED_MODULE_8__.PassThrough();\n  bufferStream.end(req.file.buffer);\n  const {\n    data\n  } = await (0,_google_drive__WEBPACK_IMPORTED_MODULE_7__.uploadAsync)({\n    media: {\n      mimeType: req.file.mimetype,\n      body: bufferStream\n    },\n    resource: {\n      name: req.session.user.id\n    }\n  });\n  req.user.img = data.id;\n  await req.user.save();\n  req.session.regenerate(err => {\n    if (err) return next(err);\n    req.session.user = req.user.toJSON();\n    return res.send(req.user);\n  });\n};\nconst getImage = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  const img = await (0,_google_drive__WEBPACK_IMPORTED_MODULE_7__.getFileAsync)({\n    fileId: id,\n    alt: \"media\"\n  }, {\n    responseType: \"stream\"\n  });\n  return img.data.pipe(res);\n};\nconst imgAuth = async (req, res, next) => {\n  if (!req.session.user) {\n    throw new _utils_Errors__WEBPACK_IMPORTED_MODULE_6__.Unauthorized();\n  }\n\n  req.user = await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.session.user.id);\n  return next();\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getAllUsers, \"getAllUsers\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(createUser, \"createUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(authorize, \"authorize\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(getUser, \"getUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(changeUser, \"changeUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(removeUser, \"removeUser\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(auth, \"auth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(setImage, \"setImage\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(getImage, \"getImage\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n  reactHotLoader.register(imgAuth, \"imgAuth\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\services\\\\users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/services/users.js?");

/***/ }),

/***/ "./server/socket-io.js":
/*!*****************************!*\
  !*** ./server/socket-io.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = io => {\n  io.on(\"connection\", socket => {\n    let u = null;\n    socket.on(\"conn\", user => {\n      u = user;\n      socket.join(user);\n    });\n    socket.on(\"sendChatMessage\", (message, reciver, from) => {\n      socket.to(reciver).emit(\"reciveChatMessage\", from, message);\n    });\n    socket.on(\"addNotif\", (notif, reciver, from) => {\n      console.log(\"why?\", notif, reciver);\n      socket.to(reciver).emit(\"reciveNotif\", notif, from);\n    });\n    socket.on(\"addedFriend\", (reciver1, reciver2, user1, user2) => {\n      socket.broadcast.to(reciver1).emit(\"newFriend\", user2);\n      socket.broadcast.to(reciver2).emit(\"newFriend\", user1);\n    });\n    socket.on(\"disconn\", () => {\n      socket.leave(u);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\socket-io.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/socket-io.js?");

/***/ }),

/***/ "./server/utils/Errors.js":
/*!********************************!*\
  !*** ./server/utils/Errors.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GeneralError\": () => (/* binding */ GeneralError),\n/* harmony export */   \"BadRequest\": () => (/* binding */ BadRequest),\n/* harmony export */   \"Unauthorized\": () => (/* binding */ Unauthorized),\n/* harmony export */   \"Forbidden\": () => (/* binding */ Forbidden),\n/* harmony export */   \"NotFound\": () => (/* binding */ NotFound)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nclass GeneralError extends Error {\n  constructor() {\n    super();\n  }\n\n  getCode() {\n    return this.code;\n  }\n\n  getMessage() {\n    return this.message;\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\nclass BadRequest extends GeneralError {\n  constructor(message) {\n    super();\n    this.code = 400;\n    this.message = message;\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\nclass Unauthorized extends GeneralError {\n  constructor() {\n    super();\n    this.code = 401;\n    this.message = \"Unauthorized\";\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\nclass Forbidden extends GeneralError {\n  constructor() {\n    super();\n    this.code = 403;\n    this.message = \"Forbidden\";\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\nclass NotFound extends GeneralError {\n  constructor() {\n    super();\n    this.code = 404;\n    this.message = \"Not Found\";\n  }\n\n  // @ts-ignore\n  __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  }\n\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GeneralError, \"GeneralError\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\utils\\\\Errors.js\");\n  reactHotLoader.register(BadRequest, \"BadRequest\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\utils\\\\Errors.js\");\n  reactHotLoader.register(Unauthorized, \"Unauthorized\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\utils\\\\Errors.js\");\n  reactHotLoader.register(Forbidden, \"Forbidden\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\utils\\\\Errors.js\");\n  reactHotLoader.register(NotFound, \"NotFound\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\utils\\\\Errors.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/utils/Errors.js?");

/***/ }),

/***/ "./server/utils/autoCatch.js":
/*!***********************************!*\
  !*** ./server/utils/autoCatch.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = f => {\n  return (req, res, next) => {\n    Promise.resolve(f(req, res, next)).catch(next);\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\utils\\\\autoCatch.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/utils/autoCatch.js?");

/***/ }),

/***/ "./server/utils/handleError.js":
/*!*************************************!*\
  !*** ./server/utils/handleError.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ \"./server/utils/Errors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst _default = (err, req, res, next) => {\n  if (err instanceof _Errors__WEBPACK_IMPORTED_MODULE_0__.GeneralError) {\n    return res.status(err.getCode()).json({\n      error: err.getMessage()\n    });\n  }\n\n  if (err.name === 'ValidationError') {\n    let errors = Object.values(err.errors).map(el => el.message);\n    let fields = Object.values(err.errors).map(el => el.path);\n\n    if (errors.length > 1) {\n      const formattedErrors = errors.join(' ');\n      return res.status(400).json({\n        messages: formattedErrors,\n        fields\n      });\n    }\n\n    return res.status(400).json({\n      messages: errors,\n      fields\n    });\n  }\n\n  if (err.code && err.code == 11000) {\n    const field = Object.keys(err.keyValue);\n    return res.status(409).json({\n      error: `An account with that field ${field} already exists.`\n    });\n  }\n\n  ;\n  console.log(err.message);\n  return res.status(500).json({\n    error: \"Internal server error\"\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\server\\\\utils\\\\handleError.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./server/utils/handleError.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => `<!DOCTYPE HTML>\n    <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>Social Network</title>\n        </head>\n        <body>\n          <div id=\"root\"></div>\n          <script src=\"/dist/bundle.js\"></script>\n        </body>\n    </html>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Projects\\\\Social Network\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./template.js?");

/***/ }),

/***/ "./webpack.client.js":
/*!***************************!*\
  !*** ./webpack.client.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst cwd = process.cwd();\n\nconst Dotenv = __webpack_require__(/*! dotenv-webpack */ \"dotenv-webpack\");\n\nmodule.exports = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"webpack-hot-middleware/client?reload=true\", path.join(cwd, \"client\", \"index.js\")],\n  output: {\n    path: path.join(cwd, \"dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.scss$/,\n      exclude: /node_modules/,\n      use: [\"style-loader\", \"css-loader\", {\n        loader: \"sass-loader\",\n        options: {\n          implementation: __webpack_require__(/*! sass */ \"sass\"),\n          sassOptions: {\n            fiber: __webpack_require__(/*! fibers */ \"fibers\")\n          }\n        }\n      }]\n    }]\n  },\n  optimization: {\n    emitOnErrors: false\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv({\n    path: './client/.env'\n  })],\n  resolve: {\n    alias: {\n      \"react-dom\": \"@hot-loader/react-dom\"\n    }\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(cwd, \"cwd\", \"E:\\\\Projects\\\\Social Network\\\\webpack.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://social-network/./webpack.client.js?");

/***/ }),

/***/ "./server/config/credentials.json":
/*!****************************************!*\
  !*** ./server/config/credentials.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"type\\\":\\\"service_account\\\",\\\"project_id\\\":\\\"social-network-300813\\\",\\\"private_key_id\\\":\\\"7ca8e9c0073062525e652e1136b479e55fda6fe7\\\",\\\"private_key\\\":\\\"-----BEGIN PRIVATE KEY-----\\\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyqywMz8/XBC+t\\\\n4mcRiC0ihVljIm+MI8Foc5BVOju+BaJIudKEMLezfhkR3EUy4YD7BW9s8Tf+KYl+\\\\nFZmsgsW8LJwp3zHxTOpaPgLqtP3GokA5363ZHJpPAEHNibdCsUxIHEKPb+FU5pOe\\\\nKBqcbYbg32tU0sQMmUQnf4zGuuHP7vwEVEqZURf/ttvKAoirM6zFKjHYnYCXzw4P\\\\n+nTlJrC2OE9PL4JEosQaV89mexLTPkroJ4xPuP2MmSDrh+VgR4GJ9hTXZ8uMibIO\\\\nuXEeNLls6s+lQapevv0pRJ8e4M8X8vINK//vuP2Ua7tasX4O3ofQYXgv6aE/vWvG\\\\nyP2UbJt/AgMBAAECggEADjCkFfxnQGd3tfK2RuEu3IAEwmfYviOU18vd2bb/Sa8+\\\\n3VHM02zfGiVYrl91K35XdRhQajGaRdhcsCPdCaN1OuW8HWM5nzWBo1srdiKbySvX\\\\nuAD42LZ51u5pS361jFlyeoOsEaJMHicV8Ei1HFlijfeQmbMHmQyPKifqMVpkVtQ9\\\\nO2ihGN4PWlrjyZj7/xQ9erazrv82R+67m073BxiujFfuJYaIeFu2ahkOlF06/hIA\\\\nuX9kVWWPCbv95HiE0vdWx/3h7RPnBmg15SdliV6L10ikF7HoFkkhUnBNUIqwbx1T\\\\nGcz6bEAR3+k0Rcx9jUoLzIp8tgNCLXZGnOSXdJ5UAQKBgQDaFgIMJHn/Ze6OWN6C\\\\nlUMxNM217UOFMmmHERoKOjpKTsX7RPio2GAG6ml69bN//gf59+wymZ1rjYo6Xbft\\\\nap/zE6LhvNJ5TakDxZiv4N7bWued+YPia+n3LrASoTRF7e17jYM/1P7+2EcdBWKO\\\\n1ncXKPY0M5dHEz1bC1po+Pt+AQKBgQDRuuHVuGkcaqcYvhMsfrBFURo24Wvrmd/r\\\\nIZJxv0Agtbkg3d3T0kIcXdhcVp+R4jJkPi6SLzPlDYRFTsnByOO4ZkIvqbc0IU6K\\\\ntUSf9DINMk1ktPBNnqsjaWi9Cu3BGGzvMFKFUaPn0P4yeUXqqDfG5JbUabUN2tVY\\\\niB+ftlsZfwKBgHig170TqA9muE8wRNOB8EqVZHuOo1xXiBtXkEm772YOsF/NxKTQ\\\\nGj15B6MlqIXRY2QWiCVs5rAI+D5UfFnsMlDnuZ6XLOw/0o7tiwktntdCLv8odpSV\\\\nEDLTNjz3wcw0ULmYitKR5AHea2dYBS3w3qqG07gIGVMNB1EGtJl/rswBAoGAKEvv\\\\n+FBmYb9cO7TJmlL9K1RZ5RGK2snF7DeXG6PTfnVsDJSUeo57hVfCqns6TZ1YcUpB\\\\nSHUpU2k1cNuiiElA970uGlpRiQKdRKlvdgxFUaPImwDo6wEBgNxP84KWC/PVel+e\\\\ne18kTvYo4SnL9To8/UoOcOGel/rj4w7EhLtU5aECgYEAms4c2ivos8O2QPC/Px0n\\\\nM4NPfLmiuxYpJIpH7A362Y/w0wR/JjdTr0cXFwpj8tnNSkblqilcvlOXvHaX6fEH\\\\nrlYntyChrLKEsx3sci1sy9G+49u9Hbt346vQNZxyxwZK1E8/2X75kcyWq31Y9v9Z\\\\nShiozeaMkAT8qgGCzdePH40=\\\\n-----END PRIVATE KEY-----\\\\n\\\",\\\"client_email\\\":\\\"admin-364@social-network-300813.iam.gserviceaccount.com\\\",\\\"client_id\\\":\\\"108261891588000169905\\\",\\\"auth_uri\\\":\\\"https://accounts.google.com/o/oauth2/auth\\\",\\\"token_uri\\\":\\\"https://oauth2.googleapis.com/token\\\",\\\"auth_provider_x509_cert_url\\\":\\\"https://www.googleapis.com/oauth2/v1/certs\\\",\\\"client_x509_cert_url\\\":\\\"https://www.googleapis.com/robot/v1/metadata/x509/admin-364%40social-network-300813.iam.gserviceaccount.com\\\"}\");\n\n//# sourceURL=webpack://social-network/./server/config/credentials.json?");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("argon2");;

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("connect-redis");;

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "dotenv-webpack":
/*!*********************************!*\
  !*** external "dotenv-webpack" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv-webpack");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-session");;

/***/ }),

/***/ "fibers":
/*!*************************!*\
  !*** external "fibers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("fibers");;

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("googleapis");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose-unique-validator");;

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redis");;

/***/ }),

/***/ "sass":
/*!***********************!*\
  !*** external "sass" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("sass");;

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./server/index.js");
/******/ })()
;