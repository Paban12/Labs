<template>
  <section class="login-page">
    
    <div class="login-form">
      <div class="login-form-inner">
        <div class="img-section">
          <h1>Thyromax Lab is India's largest EMR</h1>
          <div class="sub-title">Trusted by 10000+ doctors across 16 specialties</div>
          <div class="img-details">
            <div class="dr-img">
              <img src="/src/assets/images/doctor/dr.png" alt="">
            </div>
            <div class="about">
              <div class="data">
                <img src="/src/assets/images/png/add.png" alt="">
                <div class="text">
                  Same-day Payouts For Online Consultations
                </div>
              </div>
              <div class="data">
                <img src="/src/assets/images/png/add.png" alt="">
                <div class="text">
                  Refer & Earn up to ₹60,000
                </div>
              </div>
              <div class="data">
                <img src="/src/assets/images/png/add.png" alt="">
                <div class="text">
                  Start Patient Engagement on WhatsApp, with a masked number!
                </div>
              </div>
              <div class="data">
                <img src="/src/assets/images/png/add.png" alt="">
                <div class="text">
                  DDI - Proactive nudges on medicine interactions
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>