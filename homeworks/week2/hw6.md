``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 宣告一個叫isValid的函式
2. 執行function isValid，i=0
3. i=0,arr[0] = 3; 3 > 0,   不符合執行條件，不繼續往下執行;執行i++, i=1
4. i=1,arr[1] = 5; 5 > 0,   不符合執行條件，不繼續往下執行;執行i++, i=2
5. i=2,arr[2] = 8; 8 > 0,   不符合執行條件，不繼續往下執行;執行i++, i=3
6. i=3,arr[3] = 13; 13 > 0, 不符合執行條件，不繼續往下執行;執行i++, i=4
7. i=4,arr[4] = 22; 22 > 0, 不符合執行條件，不繼續往下執行;執行i++, i=5
8. i=5,arr[5] = 35; 35 > 0, 不符合執行條件，不繼續往下執行;執行i++, i=6, 大於字串長度，跳出迴圈

9.  i=2,判斷arr[2]是否不相等於arr[1]+arr[0]; 8 = 5 + 3, 不符合執行條件，不繼續往下執行;執行i++, i=3
10. i=3,判斷arr[3]是否不相等於arr[2]+arr[1]; 13 = 8 + 5, 不符合執行條件，不繼續往下執行;執行i++, i=4
11. i=4,判斷arr[4]是否不相等於arr[3]+arr[2]; 22 != 13 + 8, 符合執行條件，return 'invalid'
12. 執行完畢
