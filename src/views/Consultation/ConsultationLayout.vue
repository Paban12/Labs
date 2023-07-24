<template>
  <section class="consultation-layout">
    <div class="container">
      <div class="name-card-header mb-16">
        <div class="left">
          <div class="top">
            <h3 class="name grade-text">Mr. Ram Holkar</h3>
            <div class="id">(4356879)</div>
          </div>
          <div class="details">
            <div class="data">+918888888888</div>
            <div class="data">39Y 6M</div>
            <div class="data">Female</div>
          </div>
        </div>
        <div class="options">
          <router-link to="/account/visits" class="option">
            <div class="img grade-btn">
              <img src="/src/assets/images/png/microscope2.png" alt="image">
            </div>
            <div class="text">Test</div>
          </router-link>
          <router-link to="/account/visits" class="option">
            <div class="img grade-btn">
              <img src="/src/assets/images/png/bill.png" alt="image">
            </div>
            <div class="text">Attachment</div>
          </router-link>
          <router-link to="/">
            <button class="btn grade-btn">New Visit</button>
          </router-link>
          <div class="visit-btn btn">
            <h5>3 Visits</h5>
            <span>Since 2022-11-25</span>
          </div>
        </div>
      </div>
      <div class="">
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