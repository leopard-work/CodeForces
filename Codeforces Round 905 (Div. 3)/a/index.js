// https://codeforces.com/contest/1883/problem/A

// const { readline, print} = require('@ip-algorithmics/codeforces-io');

"use strict";

const lines = parseInt(readline());

for (let line = 0; line < lines; line++) {
    const s = readline();
    let pos = 1;
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        let next = parseInt(s[i]);

        if (next === 0) {
            next = 10;
        }

        if (pos === next) {
            ans++;
        } else {
            ans += Math.abs(next - pos) + 1;
            pos = next;
        }
    }

    print(ans);
}

