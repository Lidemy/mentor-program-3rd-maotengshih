## 交作業流程
1. 用瀏覽器打開 github ，找到鋰學院為每個學員所開的專案頁面，例如我的就是這個 [mentor-program-3rd-maotengshih](https://github.com/Lidemy/mentor-program-3rd-maotengshih)，找到綠色的`Clone or Download`按鈕，把網址複製起來。   
2. `git clone "githubCloneUrl"` 把檔案抓到本地   
3. 用 terminal 的介面切換到剛才下載的資料夾。  
4. `git branch week1` 開立新分支。    
5. `git checkout week1`切換到新分支，開始寫作業。不一定一定得使用 terminal 的介面，也可以使用自己安裝的Atom文字編輯器，寫完以後直接用 Atom 存檔，等到五個作業都寫完了以後。   
6. `git status` 確認一下是否有五個被修改過的檔案。  
7. `git add .`把他們都加入到staged 的階段。  
8. `git commit -m 'week1_hw'` 用 terminal 將作業commit，並加上備註。   
9. `git push -u origin 	week1` push 回原專案的 week1 branch
10. 回到瀏覽器用 Github 提出一個 pull request，並把網址複製起來。
11. 回到瀏覽器，找到程導三期的專用Repo https://github.com/Lidemy/homeworks-3rd
12. 用 issue 功能，貼上剛才 pull request複製的網址，等待審核。   
13. 如果審核通過，會由管理者 (胡立) 把這支 branch merge 回 master。
14. `git pull origin master` 將遠端 merge 完的 master 拉回 local
15. `git branch -d week1`把剛才自己寫作業的那支branch砍掉，只留下更新後的 master
