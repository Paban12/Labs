<template>
  <section class="login-page">
    <form class="login-card form">
      <h1>Welcome to Parchi</h1>
      <span>
        Enter details for Login
      </span>
      <div class="form-item mb-16">
        <input type="number" class="" placeholder="Enter your phone number">
        <div class="err-msg">Please enter your phone number</div>
      </div>
      <div class="submit-btn form-item">
        <button class="btn black-btn">Verify Now</button>
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