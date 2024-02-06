<script setup>
import { reactive } from 'vue'

const licenseInfo = [
  {
    license_page_no: 1,
    license_page_title: '證照管理',
    license_page_title_pic: '/img/LicenseView/banner.png'
  }
]
const licenses = reactive([
  {
    license_no: 1,
    license_order: 1,
    license_name: '勞安衛生管理員',
    license_num: '2'
  },
  {
    license_no: 2,
    license_order: 2,
    license_name: '施工架組配作業主管',
    license_num: '6'
  },
  {
    license_no: 3,
    license_order: 3,
    license_name: '營造業甲種職業安全衛生業務主管',
    license_num: '34'
  },
  {
    license_no: 4,
    license_order: 4,
    license_name: '甲種職業安全衛生業務主管',
    license_num: '11'
  },
  { license_no: 5, license_order: 5, license_name: '職業安全衛生管理乙級', license_num: '9' },
  { license_no: 6, license_order: 6, license_name: '變電設備裝修丙級', license_num: '56' },
  { license_no: 7, license_order: 7, license_name: '變電設備裝修乙級', license_num: '24' },
  { license_no: 8, license_order: 8, license_name: '配電電纜裝修丙級', license_num: '4' },
  { license_no: 9, license_order: 9, license_name: '配電電纜裝修乙級', license_num: '9' },
  { license_no: 10, license_order: 10, license_name: '工業配線丙級', license_num: '14' },
  { license_no: 11, license_order: 11, license_name: '工業配線乙級', license_num: '9' },
  { license_no: 12, license_order: 12, license_name: '室內配線丙級', license_num: '14' },
  { license_no: 13, license_order: 13, license_name: '室內配線乙級', license_num: '9' },
  { license_no: 14, license_order: 14, license_name: '品管人員機電', license_num: '24' },
  { license_no: 15, license_order: 15, license_name: '自來水管配管丙級', license_num: '8' },
  {
    license_no: 16,
    license_order: 16,
    license_name: '固定式起重機操作-架空式-機上操作',
    license_num: '9'
  },
  { license_no: 11, license_order: 17, license_name: '露天開挖作業主管', license_num: '8' },
  { license_no: 18, license_order: 18, license_name: '起重吊掛作業', license_num: '3' },
  { license_no: 19, license_order: 19, license_name: '缺氧作業主管', license_num: '13' },
  { license_no: 20, license_order: 20, license_name: '擋土支撐作業主管', license_num: '11' },
  { license_no: 21, license_order: 21, license_name: '急救人員', license_num: '10' }
])
</script>

<template>
  <!-- banner -->
  <div class="banner">
    <div
      class="bg-pic"
      :style="{ backgroundImage: 'url(' + licenseInfo[0].license_page_title_pic + ')' }"
    ></div>
    <div class="banner-overlay"></div>
    <div class="banner-title first-letter-underline">{{ licenseInfo[0].license_page_title }}</div>
  </div>

  <!-- title + animate -->
  <div class="page-title animate__animated animate__flipInX">
    <span class="page-title-txt">{{ licenseInfo[0].license_page_title }}</span>
  </div>

  <!-- 證照 table + animate -->
  <div class="license-block page-content animate__animated animate__fadeInUp">
    <table class="w-full">
      <thead class="bg-sky-900 text-white md:text-lg">
        <tr>
          <th>項次</th>
          <th>專業技術證照</th>
          <th>張數</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="license in licenses" :key="license.license_no">
          <td>{{ license.license_order }}</td>
          <td class="text-left sm:text-center">{{ license.license_name }}</td>
          <td class="text-left sm:text-center whitespace-nowrap">{{ license.license_num }} 張</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.license-block {
  @apply text-center;

  th {
    @apply py-2 px-2 font-bold;
  }

  td {
    @apply py-2 px-2 border;
  }
}
</style>
