import L from 'leaflet'
import { useI18n } from 'vue-i18n'

let map = null
let originalMarkers = []
let currentMarkers = [] // 保存當前顯示的標記

// 修復默認圖標路徑問題
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

// 地圖設定
export function initializeMap() {
  map = L.map('map').setView([23.6978, 120.9605], 7) //以台灣為中心
  map.zoomControl.remove() //隱藏 + - 縮放鍵
  map.attributionControl.remove() //隱藏 右下角浮水印

  //地圖樣式
  // const url = 'https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}'; // 國家圖書館
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' // 標準地圖
  // const url = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'; // CartoDB (明亮樣式)
  // const url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'; // Stadia Maps (深色樣式)

  L.tileLayer(url, {
    maxZoom: 12, //放大最大到12，最小到8
    minZoom: 8
  }).addTo(map)

  return map
}

// 提取創建標記的函數
function createMarkerAndPopup(marker, locale = 'zh') {
  const lang = locale === 'en' ? 'en' : 'zh'

  L.marker(marker.latlng)
    .addTo(map)
    .bindPopup(
      `
      <div style="color: #333; letter-spacing: 1px;">
        <strong style="font-size:18px;">${marker[lang].name}</strong>
        <hr style="margin-top: 4px;">
        <p style="margin: 10px 0;font-size: 14px;">
          ${marker[lang].feature}<br>
          ${marker.type === '貓咪主題' ? marker[lang].cats : marker[lang].special}<br>
          ${marker[lang].address}
        </p>
      </div>
    `
    )
    .openPopup()
}

// 創建標記和彈窗
export function createMarkersAndPopups(markers, locale) {
  originalMarkers = [...markers]
  currentMarkers = [...markers]
  currentMarkers.forEach((marker) => createMarkerAndPopup(marker, locale))
}

// 過濾標記
export function filterMarkers(filter, locale) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer)
    }
  })

  if (filter === '') {
    currentMarkers = [...originalMarkers]
  } else {
    currentMarkers = originalMarkers.filter((marker) => marker.type === filter)
  }

  currentMarkers.forEach((marker) => createMarkerAndPopup(marker, locale))
}

// 重置標記
export function resetMarkers() {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer)
    }
  })

  currentMarkers = [...originalMarkers] // 重置為初始狀態
  currentMarkers.forEach(createMarkerAndPopup)
}
