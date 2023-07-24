<template>
  <!-- <section class="dashboard-layout">
    <Navbar />
    <div class="middle-container">
      <router-view></router-view>
    </div>
    <Footer />
  </section> -->

  <section class="dashboard-layout">
    <DashNavbar />
    <div class="middle-container">
      <div class="middle-container-inner">
        <router-view></router-view>
      </div>
      <Footer />
      
    </div>
    <!-- <Footer /> -->
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>