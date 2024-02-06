import { ref } from 'vue'

// article table data
export const ArticleInfo = ref([
    {
      article_no: 1,
      article_title: '【媒體報導】勞動部長許銘春參訪誠諾',
      article_title_en: '(Press Report) Minister of Labor, Ming-Chun Hsu, Visits CNETC',
      article_pic: '/img/NewsView/news1.png',
      article_txt:
        '誠諾在2022年「促進中高齡及高齡者就業暨世代合作績優獎選拔活動」中脫穎而出，贏得「促進中高齡者及高齡者就業績優獎」，部長於今年8月16日南下參訪誠諾，親自體驗中高齡員工的工作場域，關心壯世代勞工朋友的工作情形。',
      article_txt_en:
        ' CNETC stood out in the Selection of Outstanding Achievements in Promoting Employment of Middle-aged and Elderly Workers and Generational Cooperation in 2022, winning the Outstanding Achievement Award for Promoting Employment of Middle-aged and Elderly Workers. On August 16 of this year, the Minister visited CNETC, personally experiencing the working environment of middle-aged and elderly employees, and showing concern for the work conditions of workers from the silver generation.',
      article_date: '2023/08/18',
      article_link: 'https://money.udn.com/money/story/11799/7378286',

    //   staff_no: 1
    },
    {
        article_no: 2,
        article_title: '【媒體報導】榮獲第3屆「促進中高齡者及高齡者就業績優獎」',
        article_title_en: '(Press Report) CNETC Received the 3rd ""Outstanding Achievement Award for Promoting Employment of Middle-aged and Elderly Workers',
        article_pic: '/img/NewsView/news2.png',
        article_txt:
          '依中高齡員工需求，自主開發圖資系統及e化工具，透過青銀協學輔助中高齡員工查找資料及運用，並輔導其考取專業證照，提供系統化升遷路徑。',
        article_txt_en:
          ' "In response to the needs of middle-aged and elderly employees, independent development of mapping systems and digital tools has been undertaken. These tools assist middle-aged and elderly workers in finding and utilizing information through a Young-Silver Generation Mutual Learning Program. Additionally, guidance is provided for them to obtain professional certifications, offering a systematic career advancement path."',
        article_date: '2023/11/30',
        article_link: 'https://money.udn.com/money/story/11799/7378286',
        
        // staff_no: 1
      }
  ]
)