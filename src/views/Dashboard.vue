<template>
  <section class="dashboard-page">
    <div class="container">
      <div class="dash-cards">
        <router-link to="appointment/calender" class="card card1">
          <img src="/src/assets/images/png/mobile.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Appointments</div>
          <div class="tooltip">You can book <strong>Appointment</strong></div>
        </router-link>
        <router-link to="/lab-appointment" class="card card1">
          <img src="/src/assets/images/png/mobile.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Lab Appointments</div>
          <div class="tooltip">You can manage <strong>Lab Appointment</strong></div>
        </router-link>
        <router-link to="/patients" class="card card2">
          <img src="/src/assets/images/png/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Patients</div>
          <div class="tooltip">You can manage <strong>Patients</strong></div>
        </router-link>
        <router-link to="/pathologist" class="card card3">
          <img src="/src/assets/images/png/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Patholigist</div>
          <div class="tooltip">You can manage <strong>Patholigist</strong></div>
        </router-link>
        <router-link to="/payment-history" class="card card5">
          <img src="/src/assets/images/png/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Payment History</div>
          <div class="tooltip">You can manage <strong>Payment History</strong></div>
        </router-link>
        <router-link to="/labtest" class="card card6">
          <img src="/src/assets/images/png/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Lab Test</div>
          <div class="tooltip">You can do <strong>Lab Test</strong></div>
        </router-link>
        <router-link to="/staff/details" class="card card8 desk-view-card">
          <img src="/src/assets/images/png/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Staff</div>
          <div class="tooltip">You can do <strong>Staff</strong></div>
        </router-link>
        <router-link to="/staff" class="card card8 mob-view-card">
          <img src="/src/assets/images/png/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Staff</div>
          <div class="tooltip">You can do <strong>Staff</strong></div>
        </router-link>
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
      <div class="services">
        <h3>Our Services</h3>
        <div class="service-cards">
          <router-link to="/" class="card card1">
            <img src="/src/assets/images/png/desk.png" alt="image">
            <div class="title">Front Desk</div>
          </router-link>
          <router-link to="/" class="card card2">
            <img src="/src/assets/images/png/man.png" alt="image">
            <div class="title">Branch Admin</div>
          </router-link>
          <router-link to="/" class="card card3">
            <img src="/src/assets/images/png/dr2.png" alt="image">
            <div class="title">Doctor</div>
          </router-link>
          <router-link to="/" class="card card1">
            <img src="/src/assets/images/png/timeline.png" alt="image">
            <div class="title">Core Plan</div>
          </router-link>
          <router-link to="/" class="card card2">
            <img src="/src/assets/images/png/bill.png" alt="image">
            <div class="title">Form</div>
          </router-link>
          <router-link to="/" class="card card3">
            <img src="/src/assets/images/png/stats.png" alt="image">
            <div class="title">Report</div>
          </router-link>
          <router-link to="/" class="card card1">
            <img src="/src/assets/images/png/paper.png" alt="image">
            <div class="title">Prastation</div>
          </router-link>
          <router-link to="/" class="card card2">
            <img src="/src/assets/images/png/help.png" alt="image">
            <div class="title">Help & Support</div>
          </router-link>
        </div>
      </div>
      <div class="review-section">
        <h3>Our Clients</h3>
        <Carousel
          :autoplay="3000000"
          :autoplayLoop="true"
          :wrap-around="true"
          pause-autoplay-on-hover
          :loop="true"
          :settings="settings"
          :breakpoints="breakpoints2"
        >
          <Slide v-for="slide in reviewCarousel" :key="slide" class="">
            <div class="carousel__item card">
              <div class="review-card">
                <h4> <icon-quote></icon-quote> {{ slide.title }}</h4>
                <div class="review">{{ slide.review }}</div>
                <div class="stars">
                  <icon-star></icon-star>
                  <icon-star></icon-star>
                  <icon-star></icon-star>
                  <icon-star></icon-star>
                  <icon-star></icon-star>
                </div>
              </div>
              <div class="u-details">
                <div class="img">
                  <img :src="`/src/assets/images/png/${slide.img}.png`" class="h-9" alt="image" />
                </div>
                <div class="info">
                  <div class="u-name">{{ slide.u_name }}</div>
                  <div class="city">{{ slide.city }}</div>
                </div>
              </div>
            </div>
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

const breakpoints2 = {
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
const reviewCarousel = [
  {
    title: 'Awesome website',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto cumque facere doloribus natus eum, soluta omnis. Itaque, veniam ad? Vitae!',
    img: 'man',
    u_name: 'John Carter',
    city: 'Mumbai'   
  },
  {
    title: 'Awesome website',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto cumque facere doloribus natus eum, soluta omnis. Itaque, veniam ad? Vitae!',
    img: 'man',
    u_name: 'John Carter',
    city: 'Mumbai'   
  },
  {
    title: 'Awesome website',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto cumque facere doloribus natus eum, soluta omnis. Itaque, veniam ad? Vitae!',
    img: 'man',
    u_name: 'John Carter',
    city: 'Mumbai'   
  },
  {
    title: 'Awesome website',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto cumque facere doloribus natus eum, soluta omnis. Itaque, veniam ad? Vitae!',
    img: 'man',
    u_name: 'John Carter',
    city: 'Mumbai'   
  },
  {
    title: 'Awesome website',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto cumque facere doloribus natus eum, soluta omnis. Itaque, veniam ad? Vitae!',
    img: 'man',
    u_name: 'John Carter',
    city: 'Mumbai'   
  }
]
</script>

<style>
</style>