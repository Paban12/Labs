<template>
  <section class="ref-sharing-layout">
    <div class="container">
      <div class="card">
        <div class="route-tabs">
          <router-link to="/reference-lab-doctor" class="route-tab">
            <div class="title">Reference Lab Doctor</div>
          </router-link>
          <router-link to="/reference-lab-to" class="route-tab">
            <div class="title">Reference Lab To</div>
          </router-link>
          <router-link to="/reference-lab-by" class="route-tab">
            <div class="title">Reference Lab By</div>
          </router-link>
          <router-link to="/reference-lab-master" class="route-tab">
            <div class="title">Reference Lab Master</div>
          </router-link>
          <router-link to="/phlebo-sharing" class="route-tab">
            <div class="title">Phlebo Sharing</div>
          </router-link>
        </div>
        <div class="route-tab-content">
          <router-view></router-view>
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