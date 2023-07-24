<template>
  <section class="account-layout">
    <div class="container">
      <div class="name-card-header">
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
              <img src="/src/assets/images/png/eye.png" alt="image">
            </div>
            <div class="text">Visit</div>
          </router-link>
          <router-link to="/account/edit" class="option">
            <div class="img grade-btn">
              <img src="/src/assets/images/png/edit.png" alt="image">
            </div>
            <div class="text">Edit</div>
          </router-link>
          <router-link to="/account/lab-report" class="option">
            <div class="img grade-btn">
              <img src="/src/assets/images/png/microscope.png" alt="image">
            </div>
            <div class="text">Lab</div>
          </router-link>
          <router-link to="/account/bills" class="option">
            <div class="img grade-btn">
              <img src="/src/assets/images/png/bill.png" alt="image">
            </div>
            <div class="text">Bills</div>
          </router-link>
          <router-link to="/account/appointment" class="option">
            <div class="img grade-btn">
              <img src="/src/assets/images/png/time.png" alt="image">
            </div>
            <div class="text">Appointment</div>
          </router-link>
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