# 九宮姓名筆劃查詢 — Claude 操作說明

## 這個專案是什麼
林鉅比（大人）的九宮姓名學筆劃查詢工具，純前端 PWA，單一 HTML 檔案架構。

---

## 重要路徑與網址

| 項目 | 位置 |
|------|------|
| 本地工作資料夾 | `P:\AI 專用資料庫\背景資料\jb-name-lookup\` |
| 主程式檔案 | `P:\AI 專用資料庫\背景資料\jb-name-lookup\index.html` |
| GitHub Repo | https://github.com/jblin0213/9name |
| 線上網址 | https://jblin0213.github.io/9name/ |

---

## 推送更新到網站的指令

每次修改 index.html 後，執行以下指令（在 bash/terminal）：

```bash
cd "P:\AI 專用資料庫\背景資料\jb-name-lookup"
git add .
git commit -m "更新說明"
git push https://[GitHub-Token]@github.com/jblin0213/9name.git main
```

---

## 自訂筆劃合併流程

當大人說「我已匯出自訂筆劃，請合併」時：

1. 讀取匯出的 JSON 檔案（大人會告知路徑，通常在 `P:\AI 專用資料庫\背景資料\jb-name-lookup\jb_strokes_backup.json`）
2. 讀取 `index.html` 第 404 行的 `const DB={...}` 物件
3. 將 JSON 裡的每個字與筆劃數，更新進 DB 物件（若已存在則覆蓋，不存在則新增）
4. 存檔，執行上方推送指令
5. 告知大人完成

---

## 技術架構重點

- **DB 物件**（index.html 第 404 行）：所有漢字筆劃資料庫，格式為 `{"字": 筆劃數, ...}`
- **calcSumDigit**（約第 1382 行）：氣化數計算，數字相加直到個位數（1-9），例如 19→1, 29→2
- **五宮名稱**：命宮、父母宮、疾惡宮、奴僕宮、遷移宮（禁止用天格/地格/人格）
- **Service Worker**：`sw.js`，每次更新後記得把 `CACHE` 版本號加1（目前是 `jb-name-v3`）

---

## 溝通規則

- 用繁體中文
- 稱呼大人為「大人」，自稱「克勞弟」
- 大人非工程師，技術名詞要解釋清楚
- 語氣隨興幽默，多用 Emoji 🦐🔥✨

---

## 目前已實作功能

- 五宮筆劃計算（單人）
- 流年發動年表
- 雙人命格比對（情侶/夫妻/合夥/朋友）
- 婚姻宮來電分析
- 坐入分析（所有關係類型）
- 歲值紅鸞/歲值貴人
- 財帛宮分析（財氣類型、先天財庫）
- 筆劃管理後台（新增/修正/匯出/匯入）
- PWA 支援（可安裝到手機）
- Banner 圖片（banner.png）

---

*最後更新：2026年5月6日*
