## 請以自己的話解釋 API 是什麼
API是各種不同軟件要進行資料交流的一種方式，這週學的主要是學會利用某個網站所提供的API來獲取資料，以及資料的新增、修改、刪除等等。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 408 Request Timeout  
請求超時。沒有在伺服器預備等待的時間內完成請求。用戶端可以隨時再次提交請求。
2. 405 Method Not Allowed  
請求方法錯誤，該用GET用到PUT或DELETE，伺服器不允許上述請求方法，會返回405錯誤。
3. 418 I'm a teapot  
本操作碼是在1998年作為IETF的傳統愚人節笑話, 在RFC 2324超文字咖啡壺控制協定'中定義的，並不需要在真實的HTTP伺服器中定義。這個HTTP狀態碼在某些網站（包括Google.com）與項目（如Node.js、ASP.NET和Go語言）中用作彩蛋。



## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://restautant.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳 | GET    | /restautant     | _limit:限制回傳資料數量           | /list?_limit=5 |
| 獲取單一餐廳 | GET    | /restautant/:id | 無                    | /restautant/10      |
| 新增餐廳   | POST   | /restautant     | name: 餐廳名 | 無              |
| 刪除餐廳   | DELETE   | /restautant/:id     | 無 | 無              |
| 更改餐廳資訊   | PATCH   | /restautant/:id     | name: 餐廳名 | 無              |