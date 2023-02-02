/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect */ \"./src/rect.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n/* eslint-disable import/extensions */\n\nvar Background = /** @class */ (function (_super) {\n    __extends(Background, _super);\n    function Background(color, canvas) {\n        return _super.call(this, 0, 0, canvas.width, canvas.height, color) || this;\n    }\n    return Background;\n}(_rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);\n\n\n//# sourceURL=webpack://breakout-game/./src/background.ts?");

/***/ }),

/***/ "./src/ball.ts":
/*!*********************!*\
  !*** ./src/ball.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Ball = /** @class */ (function () {\n    function Ball(x, y, radius, color) {\n        this.radius = radius;\n        this.color = color;\n        this.x = x;\n        this.y = y;\n        this.dx = 2;\n        this.dy = -2;\n    }\n    Ball.prototype.render = function (context) {\n        context.beginPath();\n        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        context.fillStyle = this.color;\n        context.fill();\n        context.closePath();\n    };\n    Ball.prototype.move = function () {\n        this.x += this.dx;\n        this.y += this.dy;\n    };\n    return Ball;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://breakout-game/./src/ball.ts?");

/***/ }),

/***/ "./src/breakout.ts":
/*!*************************!*\
  !*** ./src/breakout.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lives */ \"./src/lives.ts\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.ts\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball */ \"./src/ball.ts\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background */ \"./src/background.ts\");\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brick */ \"./src/brick.ts\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score */ \"./src/score.ts\");\n/* eslint-disable import/extensions */\n\n\n\n\n\n\nvar rightPressed = false;\nvar leftPressed = false;\nvar canvas = document.getElementById('myCanvas');\nvar ctx = canvas.getContext('2d');\nvar paddleWidth = 75;\nvar paddleHeight = 10;\nvar paddle = new _paddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]((canvas.width) / 2, (canvas.height - paddleHeight), paddleWidth, paddleHeight, '#0095DD');\nvar ball = new _ball__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas.width / 2, canvas.height / 2, 10, '#0095DD');\nvar bg = new _background__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('#fefefe', canvas);\nvar score = new _score__WEBPACK_IMPORTED_MODULE_5__[\"default\"](8, 20, '#0095DD', '16px Arial');\nvar lives = new _lives__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width - 65, 20, '#0095DD', '16px Arial', canvas);\nvar brickRowCount = 3;\nvar brickColumnCount = 5;\nvar brickWidth = 75;\nvar brickHeight = 20;\nvar brickPadding = 10;\nvar brickOffsetTop = 30;\nvar brickOffsetLeft = 30;\nvar bricks = [];\nfor (var c = 0; c < brickColumnCount; c += 1) {\n    bricks[c] = [];\n    for (var r = 0; r < brickRowCount; r += 1) {\n        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;\n        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;\n        bricks[c][r] = new _brick__WEBPACK_IMPORTED_MODULE_4__[\"default\"](brickX, brickY, brickWidth, brickHeight, '#0095DD');\n    }\n}\nfunction keyUpHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n        rightPressed = false;\n    }\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n        leftPressed = false;\n    }\n}\nfunction keyDownHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n        rightPressed = true;\n    }\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n        leftPressed = true;\n    }\n}\nfunction mouseMoveHandler(e) {\n    var relativeX = e.clientX - canvas.offsetLeft;\n    if (relativeX > 0 && relativeX < canvas.width) {\n        paddle.x = relativeX - paddleWidth / 2;\n    }\n}\nfunction collisionDetection() {\n    for (var c = 0; c < brickColumnCount; c += 1) {\n        for (var r = 0; r < brickRowCount; r += 1) {\n            var b = bricks[c][r];\n            if (b.status === 1) {\n                if (ball.x > b.x && ball.x < b.x + brickWidth && ball.y > b.y && ball.y < b.y + brickHeight) {\n                    ball.dy = -ball.dy;\n                    b.status = 0;\n                    score.update();\n                    if (score.score === brickRowCount * brickColumnCount) {\n                        // eslint-disable-next-line no-alert\n                        alert('YOU WIN, CONGRATULATIONS!');\n                        document.location.reload();\n                    }\n                }\n            }\n        }\n    }\n}\nfunction drawBricks(ctx) {\n    for (var c = 0; c < brickColumnCount; c += 1) {\n        for (var r = 0; r < brickRowCount; r += 1) {\n            if (bricks[c][r].status === 1) {\n                bricks[c][r].render(ctx);\n            }\n        }\n    }\n}\nfunction draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    bg.render(ctx);\n    drawBricks(ctx);\n    paddle.render(ctx);\n    ball.render(ctx);\n    lives.render(ctx);\n    score.render(ctx);\n    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {\n        ball.dx = -ball.dx;\n    }\n    if (ball.y + ball.dy < ball.radius) {\n        ball.dy = -ball.dy;\n    }\n    else if (ball.y + ball.dy > canvas.height - ball.radius) {\n        if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {\n            ball.dy = -ball.dy;\n        }\n        else {\n            lives.loseLife();\n            if (lives.lives <= 0) {\n                // eslint-disable-next-line no-alert\n                alert('GAME OVER');\n                document.location.reload();\n            }\n            else {\n                ball.x = canvas.width / 2;\n                ball.y = canvas.height - 30;\n                ball.dx = 2;\n                ball.dy = -2;\n                paddle.x = (canvas.width - paddleWidth) / 2;\n            }\n        }\n    }\n    if (rightPressed && paddle.x < canvas.width - paddleWidth) {\n        paddle.x += 7;\n    }\n    else if (leftPressed && paddle.x > 0) {\n        paddle.x -= 7;\n    }\n    ball.x += ball.dx;\n    ball.y += ball.dy;\n    collisionDetection();\n    requestAnimationFrame(draw);\n}\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\ndraw();\n\n\n//# sourceURL=webpack://breakout-game/./src/breakout.ts?");

/***/ }),

/***/ "./src/brick.ts":
/*!**********************!*\
  !*** ./src/brick.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect */ \"./src/rect.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n/* eslint-disable import/extensions */\n\nvar Brick = /** @class */ (function (_super) {\n    __extends(Brick, _super);\n    function Brick(x, y, width, height, color) {\n        if (color === void 0) { color = '#f00'; }\n        var _this = _super.call(this, x, y, width, height, color) || this;\n        _this.status = 1;\n        return _this;\n    }\n    Brick.prototype.render = function (ctx) {\n        ctx.beginPath();\n        ctx.rect(this.x, this.y, this.width, this.height);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Brick;\n}(_rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://breakout-game/./src/brick.ts?");

/***/ }),

/***/ "./src/lives.ts":
/*!**********************!*\
  !*** ./src/lives.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Lives = /** @class */ (function () {\n    function Lives(x, y, font, color, canvas) {\n        this.x = x;\n        this.y = y;\n        this.lives = 3;\n        this.font = font;\n        this.color = color;\n        this.canvas = canvas;\n    }\n    Lives.prototype.render = function (ctx) {\n        ctx.font = this.font;\n        ctx.fillStyle = this.color;\n        ctx.fillText(\"\".concat(this.lives), this.canvas.width - 65, 20);\n    };\n    Lives.prototype.loseLife = function () {\n        this.lives -= 1;\n    };\n    Lives.prototype.reset = function () {\n        this.lives = 3;\n    };\n    return Lives;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lives);\n\n\n//# sourceURL=webpack://breakout-game/./src/lives.ts?");

/***/ }),

/***/ "./src/paddle.ts":
/*!***********************!*\
  !*** ./src/paddle.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect */ \"./src/rect.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n/* eslint-disable import/extensions */\n\nvar Paddle = /** @class */ (function (_super) {\n    __extends(Paddle, _super);\n    function Paddle(x, y, width, height, canvas) {\n        var _this = _super.call(this, x, y, width, height) || this;\n        _this.canvas = canvas;\n        return _this;\n    }\n    Paddle.prototype.drawPaddle = function (context) {\n        context.beginPath();\n        context.rect(this.x, this.width - this.x, this.width, this.height);\n        context.fillStyle = '#0095DD';\n        context.fill();\n        context.closePath();\n    };\n    Paddle.prototype.updatePaddle = function (context) {\n        this.x = (this.canvas.width - this.width) / 2;\n        this.drawPaddle(context);\n    };\n    return Paddle;\n}(_rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\n\n\n//# sourceURL=webpack://breakout-game/./src/paddle.ts?");

/***/ }),

/***/ "./src/rect.ts":
/*!*********************!*\
  !*** ./src/rect.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Rect = /** @class */ (function () {\n    function Rect(x, y, width, height, color) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (width === void 0) { width = 0; }\n        if (height === void 0) { height = 100; }\n        if (color === void 0) { color = '#f00'; }\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n    }\n    Rect.prototype.render = function (ctx) {\n        ctx.beginPath();\n        ctx.rect(this.x, this.y, this.width, this.height);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Rect;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);\n\n\n//# sourceURL=webpack://breakout-game/./src/rect.ts?");

/***/ }),

/***/ "./src/score.ts":
/*!**********************!*\
  !*** ./src/score.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Score = /** @class */ (function () {\n    function Score(x, y, color, font) {\n        this.x = x;\n        this.y = y;\n        this.color = color;\n        this.font = font;\n        this.score = 0;\n    }\n    Score.prototype.update = function () {\n        this.score += 1;\n    };\n    Score.prototype.reset = function () {\n        this.score = 0;\n    };\n    Score.prototype.render = function (ctx) {\n        ctx.font = this.font;\n        ctx.fillStyle = this.color;\n        ctx.fillText(\"\".concat(this.score), 8, 20);\n    };\n    return Score;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);\n\n\n//# sourceURL=webpack://breakout-game/./src/score.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/breakout.ts");
/******/ 	
/******/ })()
;