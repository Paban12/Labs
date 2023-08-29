<template>
  <section class="apt-calender-page apt-doctor-page">
    <div class="container">
      <div class="calender-page-row">
        <div class="doctor-list-card card">
          <div class="list-header">Doctors</div>
          <div class="list-sub-header">All Reference Doctors (114)</div>
          <div class="list">
            <router-link to="/appointment/calender" class="list-item">
              <div class="left">
                <div class="dot red-dot"></div>
                <div class="dr-name">Dr. Snehal</div>
              </div>
              <div class="val">131</div>
            </router-link>
            <router-link to="/appointment/calender" class="list-item">
              <div class="left">
                <div class="dot green-dot"></div>
                <div class="dr-name">Dr. Atharva</div>
              </div>
              <div class="val">131</div>
            </router-link>
            <router-link to="/appointment/calender" class="list-item">
              <div class="left">
                <div class="dot green-dot"></div>
                <div class="dr-name">Dr. Kamal</div>
              </div>
              <div class="val">131</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>