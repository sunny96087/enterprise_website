import { reactive } from 'vue';
<script setup>
const aboutInfo = [
  {
    about_no: 1,
    about_title_en: 'About Us',
    about_title_pic: '/img/AboutView/banner.png',
    about_block1_pic: '/img/AboutView/about_pic1.png',
    about_block1_txt1_en:
      "Our motto is ' Founded on Honesty.Promise Strong Policy.' With a focus on sustainable operation, our company was established in January 2006, registered capital of 90 million NT dollars and a staff of 60 employees. We are a qualified electrical engineering company with Class A licenses for Electric Appliance Construction and Pipe Construction. Our main scope of business includes the design, installation, and testing of protection relay equipment, installation of generator unit protection relays, installation and maintenance of extra-high voltage and high-voltage GIS (Gas-Insulated Switchgear), planning and construction of power SCADA systems, RCP (Relay & Control Panel) design and assembly, high-voltage switchgear wiring, installation, assembly, testing, and maintenance.",
    about_block1_txt2_en:
      "Since our establishment, we have undertaken over 500 projectsfor major enterprises across the country. We are committed to providing high-quality services with a focus on prioritizing quality and customer satisfaction. We adhere to professional design and excellent construction practices, actively striving to meet our clients' entrusted tasks, which has earned us positive feedback from our clients. Furthermore, we places great emphasis on the working environment and safety of our employees, not only dedicating to nurturing employee skills and relevant technical knowledge but also to enhance their professional capabilities. In every project, we ensure the highest quality and strict compliance with labor safety and health regulations.",
    about_block2_pic: '/img/AboutView/about_pic2_tw.png',
    about_block2_txt1_en:
      "CNETC operates with the philosophy of 'Founded on Honesty. Promise Strong Policy .' For employees who join the company, CNETC hopes that every partner can experience a sense of accomplishment and realize their self-worth in their work. Rather than emphasizing academic background and experience, CNETC places greater importance on employees' work attitudes and enthusiasm. Currently we employ a total of 65 people, with 26% being middle-aged or older. Regardless of age, experience, or whether they have a background in the relevant field, all employees receive full subsidies and guidanceto obtain relevant professional certifications. CNETC also organizes educational training led by experienced in-house staff, fostering a culture of continuous learning and growth among both new and existing employees, enhancing their competitiveness in the workplace.",
    about_block2_txt2_en:
      "Simultaneously, CNETC places significant importance on the 'family' function and value. The company believes that an individual's success requires the support of their family. Therefore, CNETC welcomes employees' family members to participate in company gatherings, employee trips, and other benefits and activities."
  }
]
</script>

<template>
  <div class="about">
    <!-- banner -->
    <div class="banner">
      <div
        class="bg-pic"
        :style="{ backgroundImage: 'url(' + aboutInfo[0].about_title_pic + ')' }"
      ></div>
      <div class="banner-overlay"></div>
      <div class="banner-title first-letter-underline">{{ aboutInfo[0].about_title_en }}</div>
    </div>

    <!-- title + animate -->

    <div class="page-title animate__animated animate__flipInX">
      <span class="page-title-txt">{{ aboutInfo[0].about_title_en }}</span>
    </div>

    <div class="page-content">
      <!-- block1 -->
      <div class="block1">
        <!-- animate -->
        <div class="block1-pic pic-card animate__animated animate__fadeIn">
          <div
            class="bg-pic rounded-xl"
            :style="{ backgroundImage: 'url(' + aboutInfo[0].about_block1_pic + ')' }"
          ></div>
        </div>

        <!-- txt + animate -->
        <div class="block-txt block1-txt" data-aos="fade-right">
          <div class="txt1">{{ aboutInfo[0].about_block1_txt1_en }}</div>
          <div class="txt1">{{ aboutInfo[0].about_block1_txt2_en }}</div>
        </div>
      </div>

      <!-- block2 -->
      <div class="block2">
        <div class="block2-pic">
          <!-- animate -->
          <div
            class="bg-pic2"
            data-aos="zoom-out-right"
            :style="{ backgroundImage: 'url(' + aboutInfo[0].about_block2_pic + ')' }"
          ></div>

          <!-- animate -->
          <div class="logo-pic" data-aos="fade-right" data-aos-delay="500">
            <img src="/img/CompanyData/logo.svg" alt="logo" class="pic" />
          </div>
        </div>

        <!-- txt + animate -->
        <div class="block-txt block2-txt" data-aos="fade-left">
          <div class="txt1">{{ aboutInfo[0].about_block2_txt1_en }}</div>
          <div class="txt1">{{ aboutInfo[0].about_block2_txt2_en }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .page-title {
//   @apply text-center mt-10 lg:mt-20 mb-5 lg:mb-10;

//   .page-title-txt {
//     @apply relative text-2xl lg:text-3xl font-medium;
//   }

//   .page-title-txt::after {
//     @apply absolute w-8 h-8 bg-no-repeat bg-center;
//     content: '';
//     right: 102%;
//     background-image: url('/img/blue-line.svg');
//   }
// }

.page-content {
  @apply px-5 lg:px-10 pb-5 lg:pb-10;

  .block1 {
    @apply flex flex-col lg:gap-8;
  }
  .block1-pic {
    @apply w-full lg:w-[60vw] m-auto;

    .bg-pic {
      @apply h-[40vh] md:h-[60vh];
    }
  }

  .block-txt {
    @apply w-full lg:text-xl flex flex-col gap-4 py-5 px-3;
    letter-spacing: 1.4px;
    line-height: 1.7;
  }

  .block2 {
    @apply flex flex-col gap-8 items-center mt-10 lg:mt-20;

    .block-txt {
      @apply w-full;
    }
  }
  .block2-pic {
    @apply w-full sm:w-[60%] lg:w-2/5 rounded-full object-cover relative;

    .logo-pic {
      @apply w-[30%]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
    }
  }

  .bg-pic2 {
    @apply w-full h-0 bg-cover bg-center;
    padding-top: 100%;
  }
}
</style>
