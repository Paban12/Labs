<template>
  <section class="staff-details-layout">
    <div class="card staff-info-card">
      <div class="card-header">
        <div class="top-info">
          <div class="img">
            <img src="/src/assets/images/png/dr2.png" alt="image">
          </div>
          <div class="staff-name">Dr. Anurag Malohatra Strhya</div>
          <div class="post Admin">Admin</div>
          <div class="delete-btn" @click.prevent="formVar.confirmModal = true">
            <img src="/src/assets/images/png/delete.png" alt="image">
          </div>
        </div>
        <div class="tabs">
          <router-link to="/staff/details" class="tab">Details</router-link>
          <router-link to="/staff/permission" class="tab">Permission</router-link>
          <router-link to="/staff/slot" class="tab">Availability</router-link>
        </div>
      </div>
      <div class="card-body">
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