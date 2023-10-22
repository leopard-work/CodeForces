// https://codeforces.com/contest/1884/problem/A

const { readline, print} = require('@ip-algorithmics/codeforces-io');

"use strict";

const lines = parseInt(readline());

for (let line = 0; line < lines; line++) {
    const inp = readline().split(' ').map(item => parseInt(item));
    let x = inp[0];
    const k = inp[1];

    const sumF = (n) => {
        let tmp = 0;

        for (let i = 0; i < n.length; i++) {
            tmp += parseInt(n[i]);
        }

        return tmp;
    }

    while (sumF(x.toString()) % k !== 0) {
        x++;
    }

    print(x);
}

