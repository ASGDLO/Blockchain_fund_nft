"use strict";
exports.__esModule = true;
exports.fail = exports.wordLength = exports.decodeUint = exports.encodeUint = exports.bufPaddedLength = exports.buffLength = void 0;
// number of bytes in the hext string - '0x' at the start doesn't count
// each two characters are one byte
var buffLength = function (buf) { return (buf.length - 2) / 2; };
exports.buffLength = buffLength;
// length of the buffer padded to the nearest 32 bytes
var bufPaddedLength = function (buf) { return Math.ceil((0, exports.buffLength)(buf) / 32) * 32; };
exports.bufPaddedLength = bufPaddedLength;
var encodeUint = function (uint) { return uint.toString(16).padStart(64, '0'); };
exports.encodeUint = encodeUint;
var decodeUint = function (buf) { return parseInt(buf, 16); };
exports.decodeUint = decodeUint;
// word length in characters - 32 bytes = 64 characters
exports.wordLength = 64;
var fail = function () {
    throw new Error('Invalid calldata');
};
exports.fail = fail;
//# sourceMappingURL=common.js.map