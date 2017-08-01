var print = console.log; // like python
var input_lines; // 標準入力を改行区切りしたリスト

function PreMain(input) {
    input_lines = input.split("\n");
    var f = function () {
        return input_lines.shift();
    };
    Main(f);
}

function IL(min1Flg) {
    var s = input_lines.shift().split(' ');
    var offset = min1Flg ? -1 : 0;
    var res = [];
    for (var i = 0; i < s.length; i++) {
        res.push(parseInt(s[i]));
    }
    return res;
}

/**
 * @return {number}
 */
Array.prototype.SUM = function SUM() {
    var sum = 0;
    this.forEach(function (elm) {
        sum += elm;
    });
    return sum;
};

/**
 * @return {string}
 */
Array.prototype.Format = function Format(split) {
    if (split === undefined) {
        split = " ";
    }
    return this.join(split);
};

Array.prototype.Copy = function Copy() {
    return [].concat(this);
};

/***
 * 配列Sort
 * <Array>.sortだと、(文字列)辞書順に並べるとのこと。
 * 数値の配列などで、数値の昇順にならべたい場合は、こちらを使用する。
 * @constructor
 */
Array.prototype.Sort = function Sort() {
    this.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
};

/*

(((つ・ω・)つ ————————————————————️キリトリセン————————————————————

*/

function Main(input) {
    //var N = parseInt(input());
}

// PreMain(require("fs").readFileSync("/dev/stdin", "utf8"));
PreMain(require("fs").readFileSync("input.txt", "utf8"));
