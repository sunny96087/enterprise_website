<script setup>
import { reactive } from 'vue'

const licenseInfo = [
  {
    license_page_no: 1,
    license_page_title: 'Professional Technical Certifications',
    license_page_title_pic: '/img/LicenseView/banner.png'
  }
]

const licenses = reactive([
  {
    license_no: 1,
    license_order: 1,
    license_name_en: 'Occupational Safety and Health Management Personnel',
    license_num: '2'
  },
  {
    license_no: 2,
    license_order: 2,
    license_name_en: 'Construction Scaffold Assembly Supervisor',
    license_num: '6'
  },
  {
    license_no: 3,
    license_order: 3,
    license_name_en:
      'Class A Occupational Safety and Health Supervisor Education and Training - Construction Industry',
    license_num: '34'
  },
  {
    license_no: 4,
    license_order: 4,
    license_name_en: 'Class A Occupational Safety and Health Supervisor',
    license_num: '11'
  },
  {
    license_no: 5,
    license_order: 5,
    license_name_en: 'Occupational Safety and Health Management - Level B',
    license_num: '9'
  },
  {
    license_no: 6,
    license_order: 6,
    license_name_en: 'Substation Facility Installation and Maintenance - Level C',
    license_num: '56'
  },
  {
    license_no: 7,
    license_order: 7,
    license_name_en: 'Substation Facility Installation and Maintenance - Level B',
    license_num: '24'
  },
  {
    license_no: 8,
    license_order: 8,
    license_name_en: 'Underground Cable - Level C',
    license_num: '4'
  },
  {
    license_no: 9,
    license_order: 9,
    license_name_en: 'Underground Cable - Level B',
    license_num: '9'
  },
  {
    license_no: 10,
    license_order: 10,
    license_name_en: 'Industrial Wiring - Level C',
    license_num: '14'
  },
  {
    license_no: 11,
    license_order: 11,
    license_name_en: 'Industrial Wiring - Level B',
    license_num: '9'
  },
  {
    license_no: 12,
    license_order: 12,
    license_name_en: 'Commercial Wiring – Level C',
    license_num: '14'
  },
  {
    license_no: 13,
    license_order: 13,
    license_name_en: 'Commercial Wiring – Level B',
    license_num: '9'
  },
  {
    license_no: 14,
    license_order: 14,
    license_name_en: 'Quality Control Personnel - Mechanical and Electrical',
    license_num: '24'
  },
  {
    license_no: 15,
    license_order: 15,
    license_name_en: 'Water Supply Piping- Level C',
    license_num: '8'
  },
  {
    license_no: 16,
    license_order: 16,
    license_name_en: 'Fixed Crane Operation - Overhead - Onboard Operation',
    license_num: '9'
  },
  {
    license_no: 17,
    license_order: 17,
    license_name_en: 'Outdoor Excavation Operation Supervisor',
    license_num: '8'
  },
  {
    license_no: 18,
    license_order: 18,
    license_name_en: 'Crane Lifting and Hoisting Operation',
    license_num: '3'
  },
  {
    license_no: 19,
    license_order: 19,
    license_name_en: 'Anoxic Work Supervisor',
    license_num: '13'
  },
  {
    license_no: 20,
    license_order: 20,
    license_name_en: 'Soil Retaining Support Supervisor',
    license_num: '11'
  },
  { license_no: 21, license_order: 21, license_name_en: 'First Aid Personnel', license_num: '10' }
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
          <th>Item No.</th>
          <th class="text-left">Professional Technical Certifications</th>
          <th>Number of Certificates</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="license in licenses" :key="license.license_no">
          <td>{{ license.license_order }}</td>
          <td class="text-left">{{ license.license_name_en }}</td>
          <td>{{ license.license_num }}</td>
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
