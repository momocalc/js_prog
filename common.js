function MAX() {
    var res = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        res = res > arguments[i] ? res : arguments[i];
    }
    return res;
}

function MIN() {
    var res = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        res = res < arguments[i] ? res : arguments[i];
    }
    return res;
}

function range(i,n){
    var res = [];
    for(;i<n;i++){
        res.push(i);
    }
    return res;
}

/**
 * like Python's collections.Counter
 * @constructor
 */
var Counter = function Counter() {
    this.dic = {};
    var that = this;
    this.add = function (key, val) {
        if (that.dic.hasOwnProperty(key)) {
            that.dic[key] += val;
        } else {
            that.dic[key] = val;
        }
    };
    this.get = function (key) {
        if (that.dic.hasOwnProperty(key)) {
            return that.dic[key];
        }
        return 0;
    };

    /**
     * valueの降順で[key, value]の配列を返す
     * @type {Array} [[key1, value1], [key2, value2], ...]]
     */
    this.most_values = function () {
        var keys = Object.keys(that.dic);
        var res = [];
        for (var i = 0; i < keys.length; i++) {
            res.push([keys[i], that.dic[keys[i]]]);
        }
        res.sort(item_getter_key(1,true));
        print(res);
    };

};


/**
 * 配列ソートキー関数取得メソッド
 * @param x ソート対象index
 * @param desc 降順にソートするか？(bool)
 * @param func_when_eq 同一値の場合、さらに別の関数で比較する場合は、関数を渡す。　指定なければ、その時点で0を返却する。
 * @returns {Function}
 */
function item_getter_key(x, desc, func_when_eq) {
    var sign = 1;
    if (desc) {
        sign = -1;
    }
    return function (a, b) {
        if (a[x] < b[x]) return -1 * sign;
        else if (a[x] > b[x]) return sign;

        if (func_when_eq === undefined) {
            return 0;
        } else {
            return func_when_eq(a, b);
        }
    };
}

