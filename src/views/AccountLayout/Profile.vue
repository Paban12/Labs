<template>
  <section class="patient-profile-page">
    <div class="card">
      <div class="top-details">
        <div class="img">
          <img src="/src/assets/images/png/man.png" alt="">
        </div>
        <div class="info">
          <div class="name">Mrs Aravindhan</div>
          <div class="about">
            <span>Female</span>-
            <span>49 Years</span>-
            <span>A+</span>
          </div>
          <div class="p-id">PID : 189</div>
          <div class="amt">Language Prefer : Hindi</div>
        </div>
        <router-link to="account/edit" class="icon-edit grade-btn">
          <img src="/src/assets/images/png/edit.png" alt="">
        </router-link>
      </div>
      <div class="other-details">
        <div class="data-row">
          <div class="data">
            <div class="title">Phone :</div>
            <div class="val">+91 8888888888</div>
          </div>
          <div class="data">
            <div class="title">Email :</div>
            <div class="val">arvindham@gmail.com</div>
          </div>
        </div>
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