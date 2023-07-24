<template>
  <section class="profile-page">
    <div class="container">
      <div class="profile-details">
        <div class="profile-card">
          <div class="top-details">
            <div class="profile-img">
              <img src="/src/assets/images/png/user.png" alt="">
            </div>
            <h2 class="dr-name">Dr. Madhumita Saha</h2>
            <div class="data">
              <div class="title">Phone :</div>
              <div class="val">+918888888888</div>
              <div class="verified">
                <img src="/src/assets/images/png/verified.png" alt="">
              </div>
            </div>
            <div class="data">
              <div class="title">Email :</div>
              <div class="val">doctor@gmail.com</div>
              <div class="verified">
                <img src="/src/assets/images/png/verified.png" alt="">
              </div>
            </div>
            <div class="data">
              <div class="title">Address :</div>
              <div class="val">
                Jadhavpura, City Center Mall, Kolkata, West Bengal 422012.
              </div>
            </div>
          </div>
          <div class="bottom-details">
            <div class="deg">
              MD Medicine & Nuero Surgen
            </div>
            <div class="sub">
              Women Specialist for Hair Treatment
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
        <Carousel
          :autoplay="3000"
          :autoplayLoop="true"
          :wrap-around="true"
          pause-autoplay-on-hover
          :loop="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
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

<style>

</style>