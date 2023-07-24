<template>
  <section class="patient-list-page">
    <div class="container">
      <div class="patient-list-card">
        <div class="pre-search">
          <div class="heading">
            <div class="title">Find Prescription Here</div>
            <div class="no">980</div>
          </div>
          <div class="text">
            Dolore, expedita. Fugit nostrum quisquam animi modi? Illo beatae cum
            ducimus dolore!
          </div>
          <div class="searchbar">
            <input type="text" placeholder="Search for Patients" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
        </div>
        <div class="patient-list">
          <div class="list-item">
            <div class="patient-info" @click.prevent="patientInfoToggle()">
              <div class="top">
                <div class="id">#21579652</div>
                <div class="date">24-06-2022</div>
              </div>
              <div class="middle">
                <div class="left">
                  <div class="name">Mr. Anurag Pandey</div>
                  <div class="age">29Y 9M</div>
                  <div class="gender">Male</div>
                </div>
                <div class="arrow">
                  <img src="/src/assets/images/icons/Line.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="doctor-info" v-if="prescription.patientInfo">
              <div class="top">
                <div class="name">Dr. Harry Potter</div>
                <div class="disease">Fever | Maleria</div>
              </div>
              <div class="actions">
                <router-link to="/" class="img eye-img">
                  <img src="/src/assets/images/png/eye.png" alt="" />
                </router-link>
                <router-link to="/" class="img delete-img">
                  <img src="/src/assets/images/png/delete.png" alt="" />
                </router-link>
                <router-link to="/" class="img edit-img">
                  <img src="/src/assets/images/png/edit.png" alt="" />
                </router-link>
                <router-link to="/" class="img dr-img">
                  <img src="/src/assets/images/png/mask-doctor.png" alt="" />
                </router-link>
                <router-link to="/" class="img file-img">
                  <img src="/src/assets/images/png/file.png" alt="" />
                </router-link>
                <router-link to="/" class="img printer-img">
                  <img src="/src/assets/images/png/printer.png" alt="" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue'

  const prescription = reactive({
    patientInfo: false
  })

  function patientInfoToggle() {
    prescription.patientInfo = !prescription.patientInfo
  }

</script>

<style>
</style>