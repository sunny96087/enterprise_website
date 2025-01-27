// leaflet-markers.js

// 貓咪主題咖啡廳
// 寵物友善餐廳
// 貓咪收容中心
// 貓咪美容服務
// 寵物用品專區

export const markers = [
  {
    id: 'taipei',
    latlng: [25.033976, 121.564942],
    type: '貓咪主題',
    zh: {
      name: '喵星人樂園 - 台北本店',
      feature: '最大的室內貓咪活動空間',
      cats: '店貓：麻糬、琥珀、雪球',
      address: '台北市信義區松仁路'
    },
    en: {
      name: 'Meow Paradise - Taipei Main Store',
      feature: 'Largest Indoor Cat Activity Space',
      cats: 'Resident Cats: Mochi, Amber, Snowball',
      address: 'Songren Road, Xinyi District, Taipei'
    }
  },
  {
    id: 'tamsui',
    latlng: [25.169907, 121.445114],
    type: '寵物友善',
    zh: {
      name: '寵物友善餐廳 - 淡水店',
      feature: '海景第一排寵物友善餐廳',
      special: '特色餐點：寵物鮮食餐盤',
      address: '新北市淡水區觀海路'
    },
    en: {
      name: 'Pet-Friendly Restaurant - Tamsui Branch',
      feature: 'Oceanfront Pet-Friendly Restaurant',
      special: 'Special: Fresh Pet Meal Platters',
      address: 'Guanhai Road, Tamsui District, New Taipei'
    }
  },
  {
    id: 'taichung',
    latlng: [24.179848, 120.645893],
    type: '貓咪主題',
    zh: {
      name: '喵星人樂園 - 台中分店',
      feature: '結合藝文展覽的貓咪空間',
      cats: '店貓：藍莓、灰灰',
      address: '台中市西區美術館路'
    },
    en: {
      name: 'Meow Paradise - Taichung Branch',
      feature: 'Art Gallery Style Cat Space',
      cats: 'Resident Cats: Blueberry, Ash',
      address: 'Art Museum Road, West District, Taichung'
    }
  },
  {
    id: 'kaohsiung',
    latlng: [22.627278, 120.293436],
    type: '貓咪收容',
    zh: {
      name: '貓咪收容中心 - 高雄站',
      feature: '專業貓咪照護與認養服務',
      special: '服務項目：貓咪健檢、結紮、認養',
      address: '高雄市鹽埕區大勇路'
    },
    en: {
      name: 'Cat Shelter - Kaohsiung Station',
      feature: 'Professional Cat Care and Adoption Services',
      special: 'Services: Health Check, Neutering, Adoption',
      address: 'Dayong Road, Yancheng District, Kaohsiung'
    }
  },
  {
    id: 'hualien',
    latlng: [23.991787, 121.601171],
    type: '貓咪美容',
    zh: {
      name: '喵星人美容 - 花蓮店',
      feature: '專業貓咪美容與SPA服務',
      special: '服務項目：美容、按摩、洗澡',
      address: '花蓮市國聯一路'
    },
    en: {
      name: 'Cat Grooming - Hualien Branch',
      feature: 'Professional Cat Grooming and Spa Services',
      special: 'Services: Grooming, Massage, Bathing',
      address: 'Guolian 1st Road, Hualien City'
    }
  },
  {
    id: 'tainan',
    latlng: [22.997322, 120.202381],
    type: '貓咪主題',
    zh: {
      name: '喵星人樂園 - 台南分店',
      feature: '古蹟改建的特色貓咪空間',
      cats: '店貓：奶茶、布丁',
      address: '台南市中西區正興街'
    },
    en: {
      name: 'Meow Paradise - Tainan Branch',
      feature: 'Historic Building Cat Space',
      cats: 'Resident Cats: Milk Tea, Pudding',
      address: 'Zhengxing Street, West Central District, Tainan'
    }
  },
  {
    id: 'yilan',
    latlng: [24.751381, 121.758156],
    type: '寵物用品',
    zh: {
      name: '寵物用品專賣 - 宜蘭店',
      feature: '全台最大寵物用品專賣店',
      special: '商品：貓砂、飼料、玩具、貓跳台',
      address: '宜蘭市女中路'
    },
    en: {
      name: 'Pet Supplies Store - Yilan Branch',
      feature: "Taiwan's Largest Pet Supply Store",
      special: 'Products: Cat Litter, Food, Toys, Cat Trees',
      address: 'Nüzhong Road, Yilan City'
    }
  },
  {
    id: 'taoyuan',
    latlng: [24.989857, 121.313545],
    type: '寵物友善',
    zh: {
      name: '寵物友善餐廳 - 桃園店',
      feature: '現代風格寵物友善餐廳',
      special: '特色餐點：寵物生日蛋糕訂製',
      address: '桃園市中壢區中央西路'
    },
    en: {
      name: 'Pet-Friendly Restaurant - Taoyuan Branch',
      feature: 'Modern Style Pet-Friendly Restaurant',
      special: 'Special: Custom Pet Birthday Cakes',
      address: 'Zhongyang West Road, Zhongli District, Taoyuan'
    }
  },
  {
    id: 'hsinchu',
    latlng: [24.80109, 120.971118],
    type: '貓咪收容',
    zh: {
      name: '貓咪收容中心 - 新竹站',
      feature: '科技化貓咪照護環境',
      special: '服務項目：貓咪救助、醫療、認養',
      address: '新竹市東區光復路'
    },
    en: {
      name: 'Cat Shelter - Hsinchu Station',
      feature: 'High-Tech Cat Care Environment',
      special: 'Services: Rescue, Medical Care, Adoption',
      address: 'Guangfu Road, East District, Hsinchu'
    }
  },
  {
    id: 'chiayi',
    latlng: [23.479356, 120.449943],
    type: '貓咪美容',
    zh: {
      name: '喵星人美容 - 嘉義店',
      feature: '森林系寵物美容沙龍',
      special: '服務項目：美容、SPA、攝影',
      address: '嘉義市西區興業西路'
    },
    en: {
      name: 'Cat Grooming - Chiayi Branch',
      feature: 'Forest-Style Pet Grooming Salon',
      special: 'Services: Grooming, Spa, Photography',
      address: 'Xingye West Road, West District, Chiayi'
    }
  }
]

// 多語系類型對照表
export const typeMapping = {
  貓咪主題: {
    zh: '貓咪主題咖啡廳',
    en: 'Cat Café'
  },
  寵物友善: {
    zh: '寵物友善餐廳',
    en: 'Pet-Friendly Restaurant'
  },
  貓咪收容: {
    zh: '貓咪收容中心',
    en: 'Cat Shelter'
  },
  貓咪美容: {
    zh: '貓咪美容服務',
    en: 'Cat Grooming Service'
  },
  寵物用品: {
    zh: '寵物用品專區',
    en: 'Pet Supplies Store'
  }
}
