// https://codeforces.com/contest/1878/problem/A
const { readline, print } = require('@ip-algorithmics/codeforces-io');


"use strict";

const lines = parseInt(readline());

for (let line = 0; line < lines; line++) {
    const test = readline().split(' ').map(item => parseInt(item));
    const n = test[0];
    const k = test[1];
    const arr = readline().split(' ').map(item => parseInt(item));

    let ans = "NO";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            ans = "YES";
        }
    }

    print(ans);
}