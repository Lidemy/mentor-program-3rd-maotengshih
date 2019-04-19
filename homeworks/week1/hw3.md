## 教你朋友 CLI

### 什麼是 Command line ？
Command line 是另一種跟電腦溝通的方式，更精確地來說，是另一種指揮電腦做事的指令下達方式。

一般我們常用的 Win 或 ＭacOS 作業系統都是屬於圖像化使用者介面 GUI (Graphic User Interface)，
除此之外還有另一種文字指令介面叫 CLI（Command line Interface），顧名思義，就是透過一行一行下達指令的介面。

### 如何開始使用 Command line ？

在 Win 或 ＭacOS 作業系統裡，我們透過執行 terminal(終端機) 來進入 CLI 介面

### 定位當前工作目錄

進來之後，因為眼前一片漆黑，所以你必須要先知道你人在哪裡，這時候你可以用 `pwd` 印出當前工作目錄 (print working directory) 的這個指令，來定位一下你目前處在哪一個資料夾裡。

### 切換工作目錄

知道你人在哪裡，更要知道你想去哪裡， 你可以運用 change directory 切換到你想要去的目錄裡，但是因為工程師都很懶惰，他們不會把整個單字全部寫出來，所以就取頭兩個字母 cd ，`cd /Users/h0w/Documents/` 像這樣在後面接上你想要去的地方也就可以了。

想不到你比工程師更懶惰，連前面的`/Users/h0w`都懶得寫， 直接用波浪號來省略這一切`cd ~/Documents/`， 原來這招也行，我只能說 h0w 哥你還真有當工程師的天份。

### 建立/刪除目錄

找到 h0w 哥想要建立資料夾的目錄之後，用英文對電腦說 make directory，但身為一個懶惰的工程師我有義務告訴 h0w 哥你這樣的英文單字句子太長了，就說 mkdir wifi，結果又不小心 h0w 哥發音太不標準了變成 `mkdir wowcow`，
只好再教 h0w 哥下一個指令`rmdir wowcow` 來刪除整個資料夾 (remove directory)。 `mkdir wifi` 然後重新下一次指令後，看著電腦酷酷的一句話也不說，h0w 哥也不知道電腦它辦事牢不牢靠。盛怒之下 h0w 哥罰電腦把所有的檔案清單通通列出來， `ls` (Listing)，這下h0w 哥才知道它辦事牢靠，只是不善表達。

### 建立/刪除目錄

h0w 哥的心裡產生了一絲愧疚，決定用心的碰觸電腦內心中最軟的一塊豆腐 `touch toufu.js`， 但為了不想讓別人覺得h0w 哥在吃電腦豆腐， 又再教 h0w哥用 `mv toufu.js afu.js` 這道指令把檔案名稱改了一下，再度用`ls` (Listing) 把清單列出來之後，h0w 哥清楚的看到他的碰觸在電腦的資料夾裡紮實的留下了一個帶有時間戳記的 afu.js 檔案。

至此h0w 哥與電腦已經成功建立起了黑白分明的男人默契，不需要任何的內心戲與情緒化用語， 就用一行一行的 Command line，來進行最有效率的溝通。

導完這場內心戲我也累了，就把這篇教學文章傳送給 h0w 哥，並在最後附上我從的 huli哥那裡學來的 CLI 小抄筆記，希望他若有心，第四期的程式導師實驗計畫報名請早，程式教學這種事還是閃開讓專業的來比較正確。自立自強，祝他好運。

# CLI新手指令
```
pwd //print working dir

ls -a（包含隱藏檔）l（longformat） // list -al(包含詳細資料)

cd.. //回上一層
cd /absolute/path //絕對路徑
cd ~/  //省略了 user/yourname
cd iamafolder //可用tab鍵補全資料夾名稱

man ‘指令’ //叫男人把‘指令’的說明書拿來

touch filename//碰了就改變時間，或新檔在這一碰中被建立

rm filename  //刪除檔案
rmdir filefolder //刪除資料夾
rm -f(forceToDo) -r(整個資料夾)  //刪除資料夾

mkdir iamfolder //建立資料夾

mv oldName newName //改名，內容移進去改用新名字

cp fileA fileB //拷貝一份檔案Ａ取名叫做Ｂ
cp -r folderA folderB //拷貝一份資料夾Ａ取名叫做Ｂ

grep xx file //把xx	檔案裡抓出來

wget  //非預設 brew install wget
wget 網址 //下載這個網址上的東西
open filename //直接打開檔案

curl -I 網址 //查看各種連線請求的資訊

echo 123 //印出123，跟console.log 有點像
echo 123 > 456.txt //印出123，直接覆蓋儲存到456.txt
		  >>        //不覆蓋原檔，新增至最後一行

輸入指令 | 輸出指令 //連續技
cat 123 | grep ok >> result   //用cat查看123 這支檔案，接著用 grep 把含有ok的那幾行都抓出來，然後輸出儲存至result這個檔案的最末端
