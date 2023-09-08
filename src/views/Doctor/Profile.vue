<template>
  <section class="doctor-profile-layout">
    <div class="container">
      <div class="top-info-card card">
        <div class="img">
          <div class="pic-upload">
            <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic" alt="" />
            <img v-else src="/src/assets/images/png/man.png" class="dummy-img pic" alt="" />
            <label for="imgUpload" class="upload-file-block">
              Upload Pic
            </label>
            <input class="uploadProfileInput" type="file" name="profile_pic" id="imgUpload" accept="image/png"
              @change="previewProfile($event)" style="display: none" />
          </div>
        </div>
        <div class="about">
          <div class="name">{{ storeVar.name }}</div> 
          <div class="education">
            <span v-for="(item, index) in storeVar.doctorEducation" :key="index">
              <span>{{ item.qualification }}, </span>
            </span>
            <span v-if="storeVar.doctorEducation?.length<=0">-</span>
            <!-- MBBS, MD (internal medicine), DNB (internal medicine), FRCP (London) -->
          </div>
          <div class="data-row">
            <div class="data">
              <div class="title">Specialization :</div>
              <div class="val" >
                <span v-for="(item, index) in storeVar.doctorSpecialization" :key="index">
                  <span>
                    {{ item.specialization?.name }}, 
                  </span>
                </span>
              </div>
            </div>
            <div class="data">
              <div class="title">Expertise :</div>
              <div class="val">Interventional Cardiology</div>
            </div>
          </div>
          <div class="data-row">
            <div class="data">
              <div class="title">Experience :</div>
              <div class="val">{{ storeVar.experience }} Years</div>
            </div>
            <div class="data">
              <div class="title">Phone No :</div>
              <div class="val">+91 {{ storeVar.mobile }}</div>
            </div>
          </div>
        </div>
      </div> 
      <div class="profile-main-content card">
        <div class="tab-options">
          <div
            class="tab"
            @click.prevent="formVar.tab = 1"
            :class="formVar.tab === 1 ? 'active' : ''"
          >
            <div class="text">Profile</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 2"
            :class="formVar.tab === 2 ? 'active' : ''"
          >
            <div class="text">Education</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 3"
            :class="formVar.tab === 3 ? 'active' : ''"
          >
            <div class="text">Expertise</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 5"
            :class="formVar.tab === 5 ? 'active' : ''"
          >
            <div class="text">Specialization</div>
          </div>
          <!-- <div
            class="tab"
            @click.prevent="formVar.tab = 6"
            :class="formVar.tab === 6 ? 'active' : ''"
          >
            <div class="text">Fees & Availability</div>
          </div> -->
          <div
            class="tab"
            @click.prevent="formVar.tab = 7"
            :class="formVar.tab === 7 ? 'active' : ''"
          >
            <div class="text">Schedule</div>
          </div>
          <div
            class="tab"
            @click.prevent="formVar.tab = 8"
            :class="formVar.tab === 8 ? 'active' : ''"
          >
            <div class="text">Sign & Cert</div>
          </div>
          <!-- <div
            class="tab"
            @click.prevent="formVar.tab = 9"
            :class="formVar.tab === 9 ? 'active' : ''"
          >
            <div class="text">Block</div>
          </div> -->
        </div>
        <div class="tabs-content">
          <div class="content" v-if="formVar.tab === 1">
            <DoctorProfile />
          </div>
          <div class="content" v-if="formVar.tab === 2">
            <DoctorEducation />
          </div>
          <div class="content" v-if="formVar.tab === 3">
            <DoctorExpertise />
          </div>
          <div class="content" v-if="formVar.tab === 5">
            <DoctorSpecialization />
          </div>
          <!-- <div class="content" v-if="formVar.tab === 5">
            <DoctorLanguage />
          </div> -->
          <div class="content" v-if="formVar.tab === 6">
            <DoctorFees />
          </div>
          <div class="content" v-if="formVar.tab === 7">
            <DoctorSchedule />
          </div>
          <div class="content" v-if="formVar.tab === 8">
            <DoctorSign />
          </div>
          <div class="content" v-if="formVar.tab === 9">
            <DoctorBlock />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import router from "../../router";
import { useRoute } from "vue-router";

/* Constants */
const store = useStore()
const route = useRoute();
const storeVar = computed(() => store.state.Doctor);
const formVar = reactive({
  tab: 1,
  imagePreview: "",
})
function saveProfile(file) {
  console.log(file);
  store.dispatch("Doctor/profileUpload", {
    file
  });
}
// Upload Docs
async function previewProfile(event) {
  if (event) {
    const input = await event.target;
    if (
      input.files[0].type === 'image/png'
    ) {
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          formVar.imagePreview = e.target.result;
        };
        if (input.files[0]) {
          reader.readAsDataURL(input.files[0]);
          saveProfile(input.files[0]);
        }
      }
    } else {
      formVar.imagePreview = null;
      store.dispatch('ErrorSuccess/error', {
        msg: 'Upload image in png, jpeg, jpg format.',
      });
    }
  }
}
</script>

<style>
</style>