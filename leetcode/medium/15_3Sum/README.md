Submission Detail

318 / 318 test cases passed.

Status: Accepted

Runtime: 1748 ms, faster than 21.76% of TypeScript online submissions for 3Sum.

Memory Usage: 51.7 MB, less than 30.60% of TypeScript online submissions for 3Sum.

---

소요시간 : 2시간

`투 포인터` 알고리즘을 사용하여 해결.

중복 제거 처리를 위해 string으로 변환 후 검증 하고 마지막에 JSON.parse하는 방법을 택했는데, 해당 방법 때문에 Runtime과 Memory Usage가 좋지 않게 나온듯 하다.
<br />

<높은 점수가 나온 다른 사람의 풀이>

```
ans.push([arr[i], arr[p1], arr[p2]]);

p1++;

while (p1 < p2 && arr[p1] === arr[p1-1]) {
    p1++;
}
```

중복 제거를 위해 미리 '패스'하는 방법이 있었다...!
