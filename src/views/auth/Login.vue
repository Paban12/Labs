<template>
  <section class="login-form-inner">
    <form action="" class="form">
      <h2>Welcome to Parchi</h2>
      <div class="text">Login to continue</div>
      <div class="form-item mb-16">
        <div class="title">Phone Number</div>
        <div class="input">
          <input type="number" placeholder="+91 8888888888">
        </div>
        <div class="err-msg">Please enter username</div>
      </div>
      <div class="login-btn">
        <button class="btn black-btn">Get OTP <icon-right-arrow></icon-right-arrow> </button>
      </div>
      <div class="reg">
        New On Parchi
        <icon-right-arrow></icon-right-arrow> 
        <router-link to="/register">Register Here</router-link> 
      </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>