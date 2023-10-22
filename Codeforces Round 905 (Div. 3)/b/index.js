// https://codeforces.com/contest/1883/problem/B

// const { readline, print} = require('@ip-algorithmics/codeforces-io');

"use strict";

const lines = parseInt(readline());

for (let line = 0; line < lines; line++) {
    const inp = readline().split(' ').map(item => parseInt(item));
    const n = inp[0];
    const k = inp[1];
    const s = readline();
    const keys = {};

    for (let i = 0; i < s.length; i++) {
        if (keys[s[i]]) {
            keys[s[i]]++;
        } else {
            keys[s[i]] = 1;
        }
    }

    let tmp = 0;

    for (let value in keys) {
        if (keys[value] % 2 === 1) {
            tmp++;
        }
    }

    if (tmp - k <= 1) {
        print("YES");
    } else {
        print("NO");
    }
}

