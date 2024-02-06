// serveInfo.js
import { ref } from 'vue'

// 要新增英文欄位

export const ServeInfo = ref([
  // {
  //   serve_no: 服務項目編號,
  //   serve_title: 服務項目標題,
  //   serve_title_en: 服務項目標題_英文,
  //   serve_txt: 服務項目內容,
  //   serve_txt_en: 服務項目內容_英文,
  //   serve_title_pic: 內頁標題背景圖,
  //   serve_block1_title: 區塊1標題,
  //   serve_block1_title_en: 區塊1標題_英文,
  //   serve_block1_pic: 區塊1圖片,
  //   serve_block1_txt: 區塊1文字,
  //   serve_block1_txt_en: 區塊1文字_英文,
  //   serve_block2_title: 區塊2標題,
  //   serve_block2_title_en: 區塊2標題_英文,
  //   serve_block2_pic: 區塊2圖片,
  //   serve_block2_txt: 區塊2文字
  //   serve_block2_txt_en: 區塊2文字_英文
  // },
  {
    serve_no: 1,
    serve_title: '麻糬',
    serve_title_en: 'Mochi',
    serve_txt: '溫柔親人,好奇心強',
    serve_txt_en: 'Gentle and affectionate, highly curious',
    serve_title_pic: '/img/Serve/1-serve_block1_pic.png',
    serve_block1_title: '故事',
    serve_block1_title_en: 'Story',
    serve_block1_pic: '/img/Serve/1-serve_block1_pic.png',
    serve_block1_txt:
      '麻糬是咖啡廳裡最溫柔的貓咪。它被一位常客發現在街頭流浪，因其軟糯可愛的外表與性格，被命名為麻糬並帶到了咖啡廳。從那天起，麻糬就成為了咖啡廳的小太陽，用它的溫暖照亮每位顧客的心。',
    serve_block1_txt_en:
      'Mochi is the gentlest cat in the café. She was found wandering the streets by a regular customer and brought to the café due to her soft and adorable appearance and nature, thus named Mochi. Since then, Mochi has become the little sunshine of the café, warming the hearts of every customer with her tenderness.',
    serve_block2_title: '最喜歡做的事',
    serve_block2_title_en: 'Favorite Activity',
    serve_block2_pic: '/img/Serve/1-serve_block2_pic.png',
    serve_block2_txt:
      '麻糬最喜歡的事就是在咖啡廳裡的窗邊曬太陽，同時觀察窗外的世界。它經常蜷縮成一個小球，享受陽光的溫暖，偶爾還會對外面的小鳥發出輕柔的喵喵聲，彷彿在和它們進行遠距離的交流。',
    serve_block2_txt_en:
      "Mochi loves basking in the sun by the café's window while watching the world outside. She often curls up into a small ball, enjoying the warmth of the sunlight. Occasionally, she softly meows at the birds outside, as if communicating with them from afar."
  },
  {
    serve_no: 2,
    serve_title: '琥珀',
    serve_title_en: 'Amber',
    serve_txt: '活潑好動, 眼神犀利',
    serve_txt_en: 'Lively and active, sharp gaze',
    serve_title_pic: '/img/Serve/2-serve_block1_pic.png',
    serve_block1_title: '故事',
    serve_block1_title_en: 'Story',
    serve_block1_pic: '/img/Serve/2-serve_block1_pic.png',
    serve_block1_txt:
      '琥珀以其金色的眼睛和活潑的性格而著名。牠原本是一個失去家的小貓，直到咖啡廳的老闆在一個冬日的早晨將牠帶回家。琥珀很快就適應了咖啡廳的生活，成為了顧客間的小明星。',
    serve_block1_txt_en:
      "Amber is known for her golden eyes and vivacious personality. She was a little homeless kitten until the café's owner brought her home on a chilly winter morning. Amber quickly adapted to the café life and became a little star among the customers.",
    serve_block2_title: '最喜歡做的事',
    serve_block2_title_en: 'Favorite Activity',
    serve_block2_pic: '/img/Serve/2-serve_block2_pic.png',
    serve_block2_txt:
      '琥珀最喜歡在咖啡廳裡追逐小玩具和攀爬貓樹。牠的活力無窮，總是能夠帶給咖啡廳一股生機。當不是在追逐遊戲中，琥珀喜歡跳到最高的貓樹上，從高處俯瞰整個咖啡廳，好像牠是那裡的小守護者。',
    serve_block2_txt_en:
      'Amber loves chasing toys and climbing the cat trees in the café. Her endless energy always brings vitality to the café. When not engaged in her playful pursuits, Amber enjoys jumping to the top of the highest cat tree to oversee the entire café, like a little guardian of her domain.'
  },
  {
    serve_no: 3,
    serve_title: '雪球',
    serve_title_en: 'Snowball',
    serve_txt: '安靜慵懶, 毛茸茸',
    serve_txt_en: 'Quiet and lazy, fluffy',
    serve_title_pic: '/img/Serve/3-serve_block1_pic.png',
    serve_block1_title: '故事',
    serve_block1_title_en: 'Story',
    serve_block1_pic: '/img/Serve/3-serve_block1_pic.png',
    serve_block1_txt:
      '雪球是咖啡廳裡最安靜的貓咪。它被發現時躲在一個雪地裡，因此得名。雪球被帶到咖啡廳後，很快就成為了顧客最愛的懶洋洋的伙伴，牠的毛茸茸的外表和慵懶的舉動總是能夠融化顧客的心。',
    serve_block1_txt_en:
      "Snowball is the quietest cat in the café. He was found hiding in a pile of snow, which is how he got his name. After being brought to the café, Snowball quickly became a favorite lazy companion among the customers. His fluffy appearance and lethargic actions always manage to melt the customers' hearts.",
    serve_block2_title: '最喜歡做的事',
    serve_block2_title_en: 'Favorite Activity',
    serve_block2_pic: '/img/Serve/3-serve_block2_pic.png',
    serve_block2_txt:
      '雪球最喜歡的事就是在咖啡廳的柔軟沙發上打盹。你經常可以看到它蜷縮在一個舒適的角落，靜靜地睡著，偶爾發出滿足的呼嚕聲。雪球的寧靜存在為咖啡廳增添了一份特別的平靜感。',
    serve_block2_txt_en:
      "Snowball's favorite activity is napping on the café's soft couches. You can often find him curled up in a cozy corner, sleeping peacefully, occasionally emitting contented purrs. Snowball's tranquil presence adds a special sense of calm to the café."
  },
  {
    serve_no: 4,
    serve_title: '玉米',
    serve_title_en: 'Corn',
    serve_txt: '友好社交,愛吃零食',
    serve_txt_en: 'Friendly and sociable, loves snacks',
    serve_title_pic: '/img/Serve/4-serve_block1_pic.png',
    serve_block1_title: '故事',
    serve_block1_title_en: 'Story',
    serve_block1_pic: '/img/Serve/4-serve_block1_pic.png',
    serve_block1_txt:
      '玉米以其明亮的橘色毛皮和友好的性格而受到歡迎。在一次社區活動中被發現後，玉米很快就成為了咖啡廳的一員。牠的到來為咖啡廳帶來了溫馨的氛圍，讓每個人都感受到家的感覺。',
    serve_block1_txt_en:
      'Corn is beloved for his bright orange fur and friendly demeanor. Found during a community event, Corn quickly became a member of the café. His arrival brought a warm atmosphere to the café, making everyone feel at home.',
    serve_block2_title: '最喜歡做的事',
    serve_block2_title_en: 'Favorite Activity',
    serve_block2_pic: '/img/Serve/4-serve_block2_pic.png',
    serve_block2_txt:
      '玉米最喜歡在咖啡廳裡和顧客及其他貓咪玩耍。無論是追逐小球還是和顧客玩互動遊戲，玉米總是能夠輕鬆地使氣氛活躍起來。當牠累了，就會找一個溫暖的膝蓋坐下，享受撫摸。',
    serve_block2_txt_en:
      "Corn loves playing with customers and other cats in the café. Whether it's chasing balls or engaging in interactive games with customers, Corn always manages to liven up the atmosphere effortlessly. When he gets tired, he finds a warm lap to sit on and enjoys being petted."
  },
  {
    serve_no: 5,
    serve_title: '咖啡',
    serve_title_en: 'Coffee',
    serve_txt: '獨立自主,喜歡探索',
    serve_txt_en: 'Independent, loves exploring',
    serve_title_pic: '/img/Serve/5-serve_block1_pic.png',
    serve_block1_title: '故事',
    serve_block1_title_en: 'Story',
    serve_block1_pic: '/img/Serve/5-serve_block1_pic.png',
    serve_block1_txt:
      '咖啡是一隻獨立而神秘的黑貓，牠在一個寒冷的夜晚走進了咖啡廳，從此便成了這裡的一份子。咖啡的神秘氣質和獨立性格迅速吸引了許多顧客的注意，成為了咖啡廳的一大亮點。',
    serve_block1_txt_en:
      "Coffee is an independent and mysterious black cat who walked into the café on a cold night and has been a part of it ever since. Coffee's mysterious aura and independent character quickly caught the attention of many customers, making him a highlight of the café.",
    serve_block2_title: '最喜歡做的事',
    serve_block2_title_en: 'Favorite Activity',
    serve_block2_pic: '/img/Serve/5-serve_block2_pic.png',
    serve_block2_txt:
      '咖啡最喜歡在咖啡廳的書架間穿梭，探索每一個角落。牠喜歡在書堆中找到一個隱蔽的地方，靜靜地觀察咖啡廳的生活。偶爾，咖啡會選擇一個靠窗的位置，凝視著窗外的世界，沉浸在自己的思緒中。',
    serve_block2_txt_en:
      'Coffee loves weaving through the bookshelves in the café, exploring every nook and cranny. He enjoys finding a hidden spot among the books to quietly observe café life. Occasionally, Coffee chooses a spot by the window to gaze out at the world, lost in his thoughts.'
  },
  {
    serve_no: 6,
    serve_title: '藍莓',
    serve_title_en: 'Blueberry',
    serve_txt: '神秘內斂,眼睛閃亮',
    serve_txt_en: 'Mysterious and reserved, bright eyes',
    serve_title_pic: '/img/Serve/6-serve_block1_pic.png',
    serve_block1_title: '故事',
    serve_block1_title_en: 'Story',
    serve_block1_pic: '/img/Serve/6-serve_block1_pic.png',
    serve_block1_txt:
      '藍莓是一隻擁有深藍色眼睛的美麗貓咪，牠的眼神中充滿了好奇和智慧。藍莓被一位愛貓的咖啡廳員工在路邊救助，並帶回了咖啡廳。牠很快適應了新環境，並以其獨特的魅力和溫柔的性格贏得了顧客的喜愛。',
    serve_block1_txt_en:
      "Blueberry is a beautiful cat with deep blue eyes, full of curiosity and intelligence. She was rescued by a cat-loving café employee from the streets and brought to the café. Blueberry quickly adapted to her new surroundings and won the customers' hearts with her unique charm and gentle nature.",
    serve_block2_title: '最喜歡做的事',
    serve_block2_title_en: 'Favorite Activity',
    serve_block2_pic: '/img/Serve/6-serve_block2_pic.png',
    serve_block2_txt:
      '藍莓最喜歡在咖啡廳裡尋找安靜的角落，細細品味每一刻的寧靜。當咖啡廳不太忙碌時，藍莓會躺在柔軟的墊子上，慵懶地伸展，享受著悠閒的下午時光。牠也喜歡被顧客輕輕撫摸，會用那雙深邃的藍眼深情回望。',
    serve_block2_txt_en:
      'Blueberry loves finding quiet corners in the café to savor moments of tranquility. When the café is less busy, she lies on a soft cushion, lazily stretching and enjoying the leisurely afternoons. She also enjoys being gently petted by customers, returning their affection with deep, blue-eyed gazes.'
  },
  {
    serve_no: 7,
    serve_title: '灰灰',
    serve_title_en: 'Ash',
    serve_txt: '沉穩成熟,忠誠依賴',
    serve_txt_en: 'Calm and mature, loyal and dependable',
    serve_title_pic: '/img/Serve/7-serve_block1_pic.png',
    serve_block1_title: '故事',
    serve_block1_title_en: 'Story',
    serve_block1_pic: '/img/Serve/7-serve_block1_pic.png',
    serve_block1_txt:
      '灰灰是一隻沉穩而忠誠的灰色貓咪，牠在一次偶然的機會下被咖啡廳老闆發現並帶回了咖啡廳。灰灰的出現為咖啡廳增添了一份特別的安定感。牠的忠誠和沉穩成熟，使牠成為了咖啡廳不可或缺的一員。',
    serve_block1_txt_en:
      "Ash is a calm and loyal gray cat who was discovered and brought to the café by the owner on a chance occasion. Ash's presence added a special sense of stability to the café. His loyalty and mature calmness have made him an indispensable member of the café.",
    serve_block2_title: '最喜歡做的事',
    serve_block2_title_en: 'Favorite Activity',
    serve_block2_pic: '/img/Serve/7-serve_block2_pic.png',
    serve_block2_txt:
      '灰灰最喜歡在咖啡廳裡的最高點俯瞰整個空間。牠享受在高處的感覺，好像能夠守護著這個小小的世界。除此之外，灰灰還喜歡與顧客一起靜靜地坐著，提供一種特別的安慰和陪伴，讓人感到格外的溫馨和安心。',
    serve_block2_txt_en:
      'Ash loves to overlook the entire café from the highest point. He enjoys the feeling of being up high, as if he could guard this little world. In addition to this, Ash likes to sit quietly with customers, providing a special kind of comfort and companionship, making people feel exceptionally warm and secure.'
  }
])
