<template>
  <section class="medicine-layout">
    <div class="container">
      <div class="medicine-list-card">
        <div class="pre-search">
          <div class="heading">
            <div class="title">Search RX Group</div>
            <div class="no">980</div>
          </div>
          <div class="text">
             Dolore, expedita. Fugit nostrum quisquam animi modi? Illo beatae cum ducimus dolore!
          </div>
          <div class="search-row">
            <div class="searchbar">
              <input type="text" placeholder="Search RX Group">
              <img src="/src/assets/images/png/search.png" alt="">
            </div>
            <div class="btn black-btn" @click.prevent="medicine.rxModal = true">Add RX Group</div>
          </div>
        </div>
        <div class="medicine-list">
          <!-- add 'active' class when active -->
          <div class="list-item">
            <div class="med-info">
              <div class="name">RX Group</div>
              <div class="drugs">
                (Composition Formulation)
              </div>
            </div>
            <div class="edit-img" @click.prevent="medicine.rxModal = true">
              <img src="/src/assets/images/png/edit.png" class="star-img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="medicine-container">
        <div class="our-medicine">
          <div class="card">
            <div class="heading">
              <div class="title">
                <h3>Our Medicines</h3>
                <router-link to="/rx/add-medicine" class="btn black-btn">Add Medicine</router-link>
              </div>
              <div class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, distinctio?
              </div> 
            </div>
            <div class="list-container">
              <div class="list-item">
                <div class="med-info">
                  <div class="name">Corocine 650</div>
                  <div class="drugs">
                    (Composition Formulation) 
                  </div>
                </div>
                <div class="right flex align-center gap-10">
                  <div class="power">650 MG</div>
                  <router-link to="/rx/add-medicine">
                    <img src="/src/assets/images/png/edit.png" class="star-img" alt="">
                  </router-link>
                  <img src="/src/assets/images/png/delete.png" @click.prevent="medicine.confirmModal = true" class="star-img" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="medicine.rxModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true"> 
          Add RX Group
        </div>
        <div class="close-btn" @click.prevent="medicine.rxModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16 mt-16">
          <div class="title">Enter RX Group Name</div>
          <input type="text" placeholder="RX Group Name">
          <div class="err-msg">Please enter diagnosis</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Enter Description</div>
          <input type="text" placeholder="Text">
          <div class="err-msg">Please enter diagnosis</div>
        </div>
        <button class="btn black-btn w-100 mt-16">Add</button>
      </form>
    </Modal>
    <Modal v-model:show="medicine.confirmModal" class="confirm-modal">
      <h4>
        Are you sure want to Delete
      </h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="medicine.confirmModal = false">Cancel</button>
        <button class="btn confirm-btn">Confirm</button>
      </div>      
    </Modal>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const medicine = reactive({
    confirmModal: false,
    rxModal: false,
  })
</script>

<style>

</style>