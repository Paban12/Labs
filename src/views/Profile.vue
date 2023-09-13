<template>
  <section class="profile-page">
    <div class="container">
      <div class="profile-details">
        <div class="profile-card">
          <div class="top-details">
            <div class="profile-img">
              <img src="/src/assets/images/png/user.png" alt="">
            </div>
            <h2 class="dr-name">{{ storeVar.name }}</h2>
            <div class="data">
              <div class="title">Phone :</div>
              <div class="val">{{ storeVar.mobile }}</div>
              <div class="verified">
                <img src="/src/assets/images/png/verified.png" alt="">
              </div>
            </div>
            <div class="data">
              <div class="title">Email :</div>
              <div class="val">{{ storeVar.emailId }}</div>
              <div class="verified">
                <img src="/src/assets/images/png/verified.png" alt="">
              </div>
            </div>
            <div class="data">
              <div class="title">Address :</div>
              <div class="val">
                {{ storeVar.address }}
              </div>
            </div>
          </div>
          <div class="bottom-details">
            <div class="deg">
              <span v-for="(item, index) in storeVar.doctorEducation" :key="index">
                {{ item.qualification }},
              </span>
            </div>
            <div class="sub">
              <span v-for="(item, index) in storeVar.doctorSpecialization" :key="index">
                {{ item.specialization?.name }},
              </span>
            </div>
          </div>
          <button class="btn edit-btn grade-btn">Edit</button>
        </div>
        <div class="other-cards">
          <div class="hospital-details">
            <div class="card">
              <div class="info">
                <div class="img">
                  <img src="/src/assets/images/png/hospital.png" alt="">
                </div>
                <h2 class="no">3</h2>
              </div>
              <div class="tag">Your Clinic</div>
              <button class="btn grade-btn add-btn">Add</button>
            </div>
            <div class="card">
              <div class="info">
                <div class="img">
                  <img src="/src/assets/images/png/staff.png" alt="">
                </div>
                <h2 class="no">3</h2>
              </div>
              <div class="tag">Doctors Available</div>
              <button class="btn grade-btn add-btn">Add</button>
            </div>
          </div>
          <div class="about-cards">
            <router-link to="/about" class="about-card card">
              <div class="img">
                <img src="/src/assets/images/png/dr.png" alt="image">
              </div>
              <div class="text">Why Use This App</div>
            </router-link>
            <router-link to="/terms" class="about-card card">
              <div class="img">
                <img src="/src/assets/images/png/mobile.png" alt="image">
              </div>
              <div class="text">Terms & Conditions</div>
            </router-link>
            <router-link to="" class="about-card card">
              <div class="img">
                <img src="/src/assets/images/png/privacy.png" alt="image">
              </div>
              <div class="text">Data Privacy</div>
            </router-link>
            <router-link to="/rating" class="about-card card">
              <div class="img">
                <img src="/src/assets/images/png/rating.png" alt="image">
              </div>
              <div class="text">Rate Your Experience</div>
            </router-link>
          </div>
          <div class="update-cards">
            <router-link to="/" class="card">
              <img src="/src/assets/images/png/process.png" alt="image">
              <div class="info">
                <div class="title">Check Update</div>
                <div class="sub-title">Version 1.5.2</div>
              </div>
            </router-link>
            <router-link to="/" class="card">
              <img src="/src/assets/images/png/gloves.png" alt="image">
              <div class="info">
                <div class="title">Say Hello</div>
                <div class="sub-title">Version 1.5.2</div>
              </div>
            </router-link>
            <router-link to="/" class="card">
              <img src="/src/assets/images/png/process.png" alt="image">
              <div class="info">
                <div class="title">Check Update</div>
                <div class="sub-title">Version 1.5.2</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="other-cards cards-carousel">
        <h3>Our Achivements</h3>
        <Carousel :autoplay="3000" :autoplayLoop="true" :wrap-around="true" pause-autoplay-on-hover :loop="true"
          :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in carouselData" :key="slide" class="">
            <router-link to="/" class="carousel__item card">
              <img :src="`/src/assets/images/png/${slide.img}.png`" class="h-9" alt="image" />
              <div class="info">
                <div class="title">{{ slide.title }}</div>
                <div class="sub-title">{{ slide.subtitle }}</div>
              </div>
            </router-link>
          </Slide>
          <template #addons>
            <!-- <Navigation /> -->
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import moment from "moment";
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import router from "../router";
/* Constants */

const store = useStore();
const storeVar = computed(() => store.state.Doctor);

const formVar = reactive({
  submit: false,
})

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: "start",
  },
};

/* Constants */

/* Lifecycle/Hooks */
// onBeforeMount(() => {
//   getProfile()
// })
/* Lifecycle/Hooks */

/* Functions/Methods */
// function getProfile() {
//   store.dispatch("Doctor/getProfile");
// }

const onSubmitDoctor = () => {
  if (
    nameValid.value ||
    emailValid.value ||
    phoneValid.value ||
    genderValid.value ||
    dobValid.value ||
    specialityValid.value ||
    councilValid.value ||
    CyearValid.value ||
    experienceValid.value ||
    addressValid.value ||
    stateValid.value ||
    cityValid.value ||
    typeValid.value ||
    passwordValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Doctor/addDoctor", {
    mobile: formVar.phone,
    name: formVar.name,
    emailId: formVar.email,
    gender: formVar.gender?.id,
    dob: formVar.dob,
    roles: formVar.role,
    password: formVar.password,
    city: formVar.city,
    state: formVar.state,
    reg_number: formVar.council_no,
    reg_year: formVar.council_year,
    reg_type: formVar.registration_type.id,
    experience: formVar.experience,
    address: formVar.address,
    about: null,
    altMobile: null,
    altEmail: null,
    type: formVar.role,
  });
};
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Enter doctor name!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter phone no!";
  } else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter email!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});

function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
function phnum(e) {
  formVar.phone = e.slice(0, 10)
}
/* Validation */
const carouselData = [
  {
    img: "banner",
    title: "Please walk throgh all the sections",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat.",
  },
  {
    img: "banner",
    title: "Please walk throgh all the sections",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat.",
  },
  {
    img: "banner",
    title: "Please walk throgh all the sections",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat.",
  },
  {
    img: "banner",
    title: "Please walk throgh all the sections",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat.",
  },
  {
    img: "banner",
    title: "Please walk throgh all the sections",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat.",
  },
  {
    img: "banner",
    title: "Please walk throgh all the sections",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat.",
  },
  {
    img: "banner",
    title: "Please walk throgh all the sections",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellat.",
  },
];
</script>

<style></style>