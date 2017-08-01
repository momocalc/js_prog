function nCm() {
    /**
     * nCmを求める
     */

    var row = [[1]]; // 0階層

    function calc_row(n) {
        if (n < row.length) {
            return row[n];
        }

        var pre_row = calc_row(n - 1); //n-1階層
        // n階層目を作成
        var cur_row = [1];
        for (var i = 1; i < pre_row.length; i++) {
            cur_row.push(pre_row[i] + pre_row[i - 1]);
        }
        cur_row.push(1);
        row.push(cur_row);
        return cur_row;
    }

    this.calc = function calc(n, m) {
        var l = calc_row(n);
        // console.log(row);
        return l[m];
    };
}

function combinations(source, n) {
    var res = [];

    function spam(l, idx) {
        if (l.length === n) {
            res.push([].concat(l));
            return;
        }
        if (source.length <= idx) {
            return;
        }

        //とらないパターン
        spam(l, idx + 1);
        //取るパターン
        l.push(source[idx]);
        spam(l, idx + 1);
        l.pop();
    }

    spam([], 0);
    return res;
}

function permutations(source, n) {
    var res = [];

    function spam(l, selected) {
        if(l.length === n){
            res.push([].concat(l));
        }

        for (var i = 0; i < source.length; i++) {
            if (selected.indexOf(i) >= 0) {
                continue;
            }
            l.push(source[i]);
            selected.push(i);
            spam(l, selected);
            l.pop();
            selected.pop();
        }
    }

    spam([], []);
    return res;
}
