/**
 * 指定回数分繰り返して返す
 * @param x
 * @returns {string}
 */
String.prototype.dot = function dot(x) {
    var res = "";
    for (var i = 0; i < x; i++) {
        res += this.toString();
    }
    return res;
};

/**
 * @return {string}
 */
Object.prototype.PadL = function PadL(c, cnt) {
    return (c.dot(cnt) + this).slice(-cnt);
};

/**
 * @return {string}
 */
Object.prototype.PadR = function PadR(c, cnt) {
    return (this + c.dot(cnt)).slice(0,cnt);
};

