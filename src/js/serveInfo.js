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
    serve_title: '保護電驛',
    serve_title_en: 'Protection Relays.',
    serve_txt: '保護電驛盤設計及製造,保護電驛參數設定,保護電驛功能測試及特性試驗',
    serve_txt_en:
      'Design and manufacture of protective relay panels,Setting of protective relay parameters,Functional testing and characteristic trials of protective relays',
    serve_title_pic: '/img/Serve/1-serve_block1_pic.png',
    serve_block1_title: '簡介',
    serve_block1_title_en: 'Introduction',
    serve_block1_pic: '/img/Serve/1-serve_block1_pic.png',
    serve_block1_txt:
      '台灣電力系統龐大且複雜，難免因需多不可抗力因素造成的故障及接地事故，保護電驛作為供電設備的第一道保險應在發生故障時第一時間判斷故障範圍，並下指定清除故障，為供電穩定起了關鍵作用',
    serve_block1_txt_en:
      'The power system in Taiwan is vast and complex, inevitably subject to faults and grounding incidents due to various force majeure factors. Protective relays, serving as the first line of defense for power supply equipment, should immediately identify the scope of the fault when it occurs and issue commands to clear the fault, playing a key role in ensuring the stability of the power supply.',
    serve_block2_title: '團隊',
    serve_block2_title_en: 'team',
    serve_block2_pic: '/img/Serve/1-serve_block2_pic.png',
    serve_block2_txt:
      '誠諾工程擁有多年的保護電驛建置經驗，熟悉各設備所需的保護電驛規格及型號，應映客戶需求，提供最具性價比的解決方案',
    serve_block2_txt_en:
      'Chengnuo Engineering has many years of experience in setting up protective relays and is familiar with the specifications and models of protective relays required for various equipment. In response to customer needs, it provides the most cost-effective solutions.'
  },
  {
    serve_no: 2,
    serve_title: '發電機機組保護電驛',
    serve_title_en: 'Generator Protection Relays.',
    serve_txt: '保護電驛盤設計及製造, 保護電驛參數設定',
    serve_txt_en:
      'Design and manufacture of protective relay panels,Setting of protective relay parameters.',
    serve_title_pic: '/img/Serve/2-serve_block1_pic.png',
    serve_block1_title: '簡介',
    serve_block1_title_en: 'Introduction',
    serve_block1_pic: '/img/Serve/2-serve_block1_pic.png',
    serve_block1_txt:
      '台灣電力系統龐大且複雜，難免因需多不可抗力因素造成的故障及接地事故，保護電驛作為供電設備的第一道保險應在發生故障時第一時間判斷故障範圍，並下指定清除故障，為供電穩定起了關鍵作用',
    serve_block1_txt_en:
      'As the origin of the power system, generators require more precise and careful protection. Compared to the equipment protection in substations, the protection of generators is more complex, as it needs to take into account a greater number of uncertain factors.',
    serve_block2_title: '團隊',
    serve_block2_title_en: 'team',
    serve_block2_pic: '/img/Serve/2-serve_block2_pic.png',
    serve_block2_txt: 'none',
    serve_block2_txt_en: 'none'
  },
  {
    serve_no: 3,
    serve_title: '電力監控系統',
    serve_title_en: 'SCADA System.',
    serve_txt: 'SCADA',
    serve_txt_en: 'SCADA',
    serve_title_pic: '/img/Serve/3-serve_block1_pic.png',
    serve_block1_title: '簡介',
    serve_block1_title_en: 'Introduction',
    serve_block1_pic: '/img/Serve/3-serve_block1_pic.png',
    serve_block1_txt:
      'SCADA系統是一個全面的監控、數據採集和遠程操作解決方案，為工業過程提供即時監視和控制。與以前的RTU時代相比，現代SCADA更加靈活、智能且高效。透過直觀的可視化界面，操作人員可以即時追踪設備、感測器和計量裝置的狀態，並快速響應異常條件。我們的系統支援多種通信協定，提供更高的安全性，確保數據完整性和系統穩定性。同時，現代SCADA系統具有更強大的遠程操作能力，從而進一步提高了工業過程的效率和可靠性，為企業提供了強大的控制和監視工具。',
    serve_block1_txt_en:
      'The SCADA system is a comprehensive monitoring, data acquisition, and remote operation solution, offering real-time monitoring and control for industrial processes. Compared to the previous era of RTUs, modern SCADA systems are more flexible, intelligent, and efficient. Through an intuitive visual interface, operators can track the status of equipment, sensors, and measuring devices in real-time and respond quickly to abnormal conditions. Our system supports multiple communication protocols, provides higher security, and ensures data integrity and system stability. Moreover, modern SCADA systems have more powerful remote operation capabilities, which further improve the efficiency and reliability of industrial processes, offering enterprises robust control and monitoring tools.',
    serve_block2_title: '成功實例 : 南興D/S',
    serve_block2_title_en: 'Successful case: Nanxing D/S',
    serve_block2_pic: '/img/Serve/3-serve_block2_pic.png',
    serve_block2_txt:
      '透過SCADA汰舊換新案，人機介面裝置的更新，減少配電盤面以及GIS控制箱元件的使用，使現場人員的監控更為流暢簡易，功能也更加豐富，IEC61850的互操作性也提供不同廠家IED的協作與監控。',
    serve_block2_txt_en:
      'Through the SCADA modernization project, updating the human-machine interface devices reduces the use of components in distribution panel faces and GIS control boxes, making on-site personnel monitoring more fluid and straightforward, with richer functionalities. The interoperability of IEC 61850 also provides for collaboration and monitoring of IEDs from different manufacturers.'
  },
  {
    serve_no: 4,
    serve_title: 'RCP',
    serve_title_en: 'Relay and Control Panel Design & Assembly.',
    serve_txt:
      '專業團隊參與建設規劃,根據實際需求設計盤體,盤體製造及安裝,與現場設備對接,保護電驛設定及特性試驗,開關操作測試,後續維護及教育訓練',
    serve_txt_en:
      'Professional team participates in construction planning,Design of the panel body according to actual needs,Manufacture and installation of the panel body,Integration with on-site equipment,Setting and characteristic testing of protective relays,Switch operation testing,Subsequent maintenance and educational training.',
    serve_title_pic: '/img/Serve/4-serve_block1_pic.png',
    serve_block1_title: '簡介',
    serve_block1_title_en: 'Introduction',
    serve_block1_pic: '/img/Serve/4-serve_block1_pic.png',
    serve_block1_txt:
      'RCP配電盤全名為relay control panel是一個包含保護電驛及控制的盤體，在民間變電站被廣泛運用，為場內的電力品質提供穩定的可靠度，在保護電驛及控制盤的合併下，近一步減少空間和資源的浪費，但在設計的難度上也會隨之增加',
    serve_block1_txt_en:
      "The full name of an RCP distribution panel is 'relay control panel.' It is a panel body that includes both protective relays and controls. It is widely used in private substations to provide stable reliability for the power quality within the facility. The combination of protective relays and control panels further reduces the waste of space and resources, but it also increases the difficulty of the design.",
    serve_block2_title: '團隊',
    serve_block2_title_en: 'team',
    serve_block2_pic: '/img/Serve/4-serve_block2_pic.png',
    serve_block2_txt:
      '誠諾工程擁有許多民間大型變電站的建置經驗，對於RCP的設計相當熟悉，除了提供視覺化的操作盤面，還能結合IEC61850做全站的智慧變電所，進一步節省空間及資源浪費',
    serve_block2_txt_en:
      'CNETC Engineering has extensive experience in the construction of many large private substations and is very familiar with the design of RCPs (Relay Control Panels). In addition to providing a visualized operating panel, it can also integrate with IEC61850 to create a fully intelligent substation, further saving space and reducing resource waste.'
  },
  {
    serve_no: 5,
    serve_title: '特高壓及高壓GIS',
    serve_title_en: 'HV Swithgear.',
    serve_txt: 'none',
    serve_txt_en: 'none',
    serve_title_pic: '/img/Serve/5-serve_block1_pic.png',
    serve_block1_title: '簡介',
    serve_block1_title_en: 'Introduction',
    serve_block1_pic: '/img/Serve/5-serve_block1_pic.png',
    serve_block1_txt: 'none',
    serve_block1_txt_en: 'none',
    serve_block2_title: '團隊',
    serve_block2_title_en: 'team',
    serve_block2_pic: '/img/Serve/5-serve_block2_pic.png',
    serve_block2_txt: 'none',
    serve_block2_txt_en: 'none'
  },
  {
    serve_no: 6,
    serve_title: '電力電纜',
    serve_title_en: 'Power Cables.',
    serve_txt: 'none',
    serve_txt_en: 'none',
    serve_title_pic: '/img/Serve/6-serve_block1_pic.png',
    serve_block1_title: '簡介',
    serve_block1_title_en: 'Introduction',
    serve_block1_pic: '/img/Serve/6-serve_block1_pic.png',
    serve_block1_txt: 'none',
    serve_block1_txt_en: 'none',
    serve_block2_title: '團隊',
    serve_block2_title_en: 'team',
    serve_block2_pic: '/img/Serve/6-serve_block2_pic.png',
    serve_block2_txt: 'none',
    serve_block2_txt_en: 'none'
  },
  {
    serve_no: 7,
    serve_title: '變電站',
    serve_title_en: 'Substations.',
    serve_txt: 'none',
    serve_txt_en: 'none',
    serve_title_pic: '/img/Serve/7-serve_block1_pic.png',
    serve_block1_title: '簡介',
    serve_block1_title_en: 'Introduction',
    serve_block1_pic: '/img/Serve/7-serve_block1_pic.png',
    serve_block1_txt: 'none',
    serve_block1_txt_en: 'none',
    serve_block2_title: '團隊',
    serve_block2_title_en: 'team',
    serve_block2_pic: '/img/Serve/7-serve_block2_pic.png',
    serve_block2_txt: 'none',
    serve_block2_txt_en: 'none'
  }
])
