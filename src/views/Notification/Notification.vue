<template>
  <section class="notification-list-page">
    <div class="container">
      <div class="noti-container">
        <h2>Notifications</h2>
        <!-- for desktop view -->
        <div class="noti-card-row desk-view">
          <div class="noti-card">
            <div class="list-item success">
              <div class="icon">
                <icon-success></icon-success>
              </div>
              <div class="info">
                <div class="title">Success</div>
                <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
              </div>
            </div>
            <div class="list-item warning">
              <div class="icon">
                <icon-warning></icon-warning>
              </div>
              <div class="info">
                <div class="title">Warning !</div>
                <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
              </div>
            </div>
            <div class="list-item error">
              <div class="icon">
                <icon-warning></icon-warning>
              </div>
              <div class="info">
                <div class="title">Error !</div>
                <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
              </div>
            </div>
            
          </div>
        </div>
        <!-- for mobile view -->
        <!-- <div class="noti-card-row mob-view">
          <div class="noti-card">
            <router-link to="/notification/detail" class="list-item success">
              <div class="icon">
                <icon-success></icon-success>
              </div>
              <div class="info">
                <div class="title">Success</div>
                <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
              </div>
            </router-link>
            <router-link to="/notification/detail" class="list-item warning">
              <div class="icon">
                <icon-warning></icon-warning>
              </div>
              <div class="info">
                <div class="title">Warning !</div>
                <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
              </div>
            </router-link>
            <router-link to="/notification/detail" class="list-item error">
              <div class="icon">
                <icon-warning></icon-warning>
              </div>
              <div class="info">
                <div class="title">Error !</div>
                <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
              </div>
            </router-link>
            
          </div>
        </div> -->
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