<template>
  <section class="medicine-layout">
    <div class="container">
      <div class="medicine-list-card">
        <div class="pre-search">
          <div class="heading">
            <div class="title">Find Medicine Here</div>
            <div class="no">980</div>
          </div>
          <div class="text">
             Dolore, expedita. Fugit nostrum quisquam animi modi? Illo beatae cum ducimus dolore!
          </div>
          <div class="searchbar">
            <input type="text" placeholder="Search for Medicine">
            <img src="/src/assets/images/png/search.png" alt="">
          </div>
        </div>
        <div class="medicine-list">
          <div class="list-item">
            <div class="med-info">
              <div class="name">Corocine 650</div>
              <div class="drugs">
                (Composition Formulation) 
              </div>
            </div>
            <div class="power">650 MG</div>
            <img src="/src/assets/images/png/star.png" class="star-img" alt="">
          </div>
        </div>
      </div>
      <div class="medicine-container">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style>

</style>