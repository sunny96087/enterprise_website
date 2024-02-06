import L from 'leaflet';

let map = null;
let originalMarkers = [];
let currentMarkers = [];  // 保存當前顯示的標記

// 地圖設定
export function initializeMap() {
  map = L.map('map').setView([23.6978, 120.9605], 7); //以台灣為中心
  map.zoomControl.remove();  //隱藏 + - 縮放鍵
  map.attributionControl.remove();  //隱藏 右下角浮水印

  const url = 'https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}'; //地圖樣式

  L.tileLayer(url, {
    maxZoom: 12, //放大最大到12，最小到8
    minZoom: 8,
  }).addTo(map);

  return map;
}

// 提取創建標記的函數
function createMarkerAndPopup(marker) {
  L.marker(marker.latlng)
    .addTo(map)
    .bindPopup(`
      <div style="color: #333; letter-spacing: 1px;">
        <strong style="font-size:18px;">${marker.name}</strong>
        <hr>
        <p style="margin: 10px 0;font-size: 14px;">${marker.description}</p>
      </div>
    `)
    .openPopup();
}

// 創建標記和彈窗
export function createMarkersAndPopups(markers) {
  originalMarkers = [...markers];
  currentMarkers = [...markers];  // 初始情況下，顯示所有標記
  currentMarkers.forEach(createMarkerAndPopup);
}

// 過濾標記
export function filterMarkers(filter) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  if (filter === '') {
    currentMarkers = [...originalMarkers];  // 顯示所有標記
  } else {
    currentMarkers = originalMarkers.filter((marker) => marker.name === filter);  // 顯示符合條件的標記
  }

  currentMarkers.forEach(createMarkerAndPopup);
}

// 重置標記
export function resetMarkers() {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  currentMarkers = [...originalMarkers];  // 重置為初始狀態
  currentMarkers.forEach(createMarkerAndPopup);
}
