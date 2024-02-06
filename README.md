# cnetc_website 誠諾官網

###### 使用技術  
  >Vue3.js & Vite & composition API  
  >SASS + Taliwind CSS  
  
###### 使用套件   
  >swiper  
  >leaflet  
  >chart.js  
  >Vue3-carousel  
  >FullScreen.js  
  >AOS  
  >axios  


## 專案指令區

### 下載專案套件

```sh
npm i
```

### 執行專案

```sh
npm run dev
```

### 執行專案 -- 可用手機看

```sh
npm run dev -- --host
```

### 打包專案

```sh
npm run build
```

### 專案架構
```
Vue/  
├── dist - 放打包好的檔案    
│ ├── assets - 程式碼   
│ ├── img - 圖片    
│ └── index.html - 首頁   
│  
├── node_modules  
│  
├── public  
│ └── img - 圖片  
│ │ └── 各頁面資料夾  
│  
├── src  
│ ├── App.vue - Vue 主頁面  
│ │  
│ ├── main.js - 專案 JS 配置文件  
│ │  
│ ├── assets  
│ │ ├── base.css - 專案樣式定義  
│ │ └── main.css - 自定義樣式  
│ │  
│ ├── components - 元件  
│ │ ├── BackNavBar.vue - 後台導航欄  
│ │ ├── ConfirmDialog.vue - 再次確認刪除視窗  
│ │ ├── FooterView.vue - 前台頁尾  
│ │ ├── FullPageEn.vue - 首頁 fullPage.js 套件 - 英文  
│ │ ├── FullPageTw.vue - 首頁 fullPage.js 套件  
│ │ ├── IconsPage.vue -  放 Icon 的  
│ │ └── NavBar.vue - 前台導航欄  
│ │  
│ ├── js - JavaScript  
│ │ ├── leaflet-map-en.js - leaflet 地圖設定及標記 - 英文  
│ │ ├── leaflet-map.js - leaflet 地圖設定及標記  
│ │ ├── leaflet-marker-en.js - leaflet 工程資料 - 英文  
│ │ ├── leaflet-marker.js - leaflet 工程資料  
│ │ └── serveInfo.js - 服務項目資料  
│ │  
│ ├── router - 路由  
│ │ └── index.js - 路由設定  
│ │  
│ ├── stores - pinia 套件  
│ │ ├── counter.js - 範例  
│ │ └── languageStore.js - 使用者語言管理  
│ │  
│ └── views - 頁面  
│ │ ├── AboutView.vue - 關於誠諾  
│ │ ├── AboutViewEn.vue - 關於誠諾 - 英文  
│ │ ├── BusinessView.vue - 營業實績  
│ │ ├── BusinessViewEn.vue - 營業實績 - 英文  
│ │ ├── ContactView.vue - 聯絡我們  
│ │ ├── ContactViewEn.vue - 聯絡我們 - 英文  
│ │ ├── HomeView.vue - 服務項目  
│ │ ├── HomeViewEn.vue - 服務項目 - 英文  
│ │ ├── LicenseView.vue - 專業證照  
│ │ ├── LicenseViewEn.vue - 專業證照 - 英文  
│ │ ├── NewsView.vue - 最新消息  
│ │ ├── NewsViewEn.vue - 最新消息 - 英文  
│ │ ├── OrganizeView.vue - 組織架構  
│ │ ├── OrganizeViewEn.vue - 組織架構 - 英文  
│ │ ├── ServiceView.vue - 服務項目內頁  
│ │ ├── ServiceViewEn.vue - 服務項目內頁 - 英文  
│ │ └── Backend - 後台  
│ │ │ ├── BackendAbout.vue - 關於誠諾  
│ │ │ ├── BackendBusiness.vue - 營業實績  
│ │ │ ├── BackendCompanyData.vue - 公司資料  
│ │ │ ├── BackendContact.vue - 聯絡我們  
│ │ │ ├── BackendFeedback.vue - 表單回饋  
│ │ │ ├── BackendHome.vue - 首頁  
│ │ │ ├── BackendLicense.vue - 證照管理  
│ │ │ ├── BackendLogin.vue - 登入  
│ │ │ ├── BackendNews.vue - 最新消息  
│ │ │ ├── BackendArticle.vue - 最新消息 - 文章  
│ │ │ ├── BackendOrganize.vue - 組織架構  
│ │ │ ├── BackendStaff.vue - 管理人員  
│ │ │ ├── BackendView.vue - 框架主頁面  
│ │ │ └── backendServices.vue - 服務項目  
│  
├── .eslintrc.cjs - ESLint 配置文件  
│  
├── .gitignore - 忽略文件  
│  
├── .prettierrc.json - Prettier 配置文件  
│  
├── index.html - 首頁  
│  
├── jsconfig.json - 自定義 JavaScript 的開發環境  
│  
├── package-lock.json - 專案套件管理  
│  
├── package.json - 管理和配置 JavaScript 專案  
│  
├── postcss.config.js - Tailwind 轉換工具  
│  
├── README.md - 說明文件  
│  
├── tailwind.config.js - Tailwind 配置文件  
│  
└── vite.config.js - Vite 配置文件  

```
