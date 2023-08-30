<template>
  <section class="dashboard-page">
    <div class="container">
      <div class="dash-cards">
        <router-link to="appointment/calender" class="card card1">
          <img src="/src/assets/images/dashboard/apt.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Appointments</div>
          <div class="tooltip">You can book <strong>Appointment</strong></div>
        </router-link>
        <router-link to="/lab-appointment" class="card card2">
          <img src="/src/assets/images/dashboard/lab-apt.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Lab Appointments</div>
          <div class="tooltip">You can manage <strong>Lab Appointment</strong></div>
        </router-link>
        <router-link to="/patients" class="card card3">
          <img src="/src/assets/images/dashboard/patient.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Patients</div>
          <div class="tooltip">You can manage <strong>Patients</strong></div>
        </router-link>
        <router-link to="/doctors" class="card card4">
          <img src="/src/assets/images/dashboard/doctor.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Doctors</div>
          <div class="tooltip">You can manage <strong>Doctors</strong></div>
        </router-link>
        <router-link to="/pathologist" class="card card5">
          <img src="/src/assets/images/dashboard/pathology.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Patholigist</div>
          <div class="tooltip">You can manage <strong>Patholigist</strong></div>
        </router-link>
        <router-link to="/laboratory" class="card card6">
          <img src="/src/assets/images/dashboard/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Laboratory</div>
          <div class="tooltip">You can manage <strong>Laboratories</strong></div>
        </router-link>
        <router-link to="/labtest" class="card card7">
          <img src="/src/assets/images/dashboard/lab-test.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Lab Test</div>
          <div class="tooltip">You can do <strong>Lab Test</strong></div>
        </router-link>
        <router-link to="/staff/details" class="card card8 desk-view-card">
          <img src="/src/assets/images/dashboard/staff.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Staff</div>
          <div class="tooltip">You can do <strong>Staff</strong></div>
        </router-link>
        <router-link to="/staff" class="card card8 mob-view-card">
          <img src="/src/assets/images/dashboard/staff.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Staff</div>
          <div class="tooltip">You can do <strong>Staff</strong></div>
        </router-link>
        <!-- <router-link to="/payment-history" class="card card5">
          <img src="/src/assets/images/png/lab.png" alt="image" />
          <div class="val">254</div>
          <div class="title">Payment History</div>
          <div class="tooltip">You can manage <strong>Payment History</strong></div>
        </router-link> -->
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
            <img src="/src/assets/images/dashboard/front-desk.png" alt="image">
            <div class="title">Front Desk</div>
          </router-link>
          <router-link to="/" class="card card2">
            <img src="/src/assets/images/dashboard/admin.png" alt="image">
            <div class="title">Branch Admin</div>
          </router-link>
          <router-link to="/" class="card card3">
            <img src="/src/assets/images/dashboard/doctor2.png" alt="image">
            <div class="title">Doctor</div>
          </router-link>
          <router-link to="/" class="card card4">
            <img src="/src/assets/images/dashboard/core-plan.png" alt="image">
            <div class="title">Core Plan</div>
          </router-link>
          <router-link to="/" class="card card5">
            <img src="/src/assets/images/dashboard/form.png" alt="image">
            <div class="title">Form</div>
          </router-link>
          <router-link to="/" class="card card6">
            <img src="/src/assets/images/dashboard/report.png" alt="image">
            <div class="title">Report</div>
          </router-link>
          <router-link to="/" class="card card7">
            <img src="/src/assets/images/dashboard/presentation.png" alt="image">
            <div class="title">Prastation</div>
          </router-link>
          <router-link to="/" class="card card8">
            <img src="/src/assets/images/dashboard/help.png" alt="image">
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
      <div class="new-el">
        <div class="parent-container">
          <button
            class="hover-trigger"
            @mouseover="showTooltip"
            @mouseleave="hideTooltip"
            ref="button"
          >
            Hover Me
          </button>
          <div
            class="custom-tooltip"
            :class="{ active: isTooltipActive }"
            :style="tooltipStyle"
            ref="tooltip"
            @mouseenter="showTooltip"
            @mouseleave="hideTooltip"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus sed maxime quos deleniti velit repellat ullam tempora exercitationem dolor non praesentium atque pariatur mollitia dolore, at magni quibusdam deserunt! Laboriosam molestiae voluptate placeat totam odit aperiam harum facilis provident quos accusamus eos sint, non tempore nobis rerum soluta illum?
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

/////////////////////////

import { ref } from 'vue';

const isTooltipActive = ref(false);

const showTooltip = () => {
  isTooltipActive.value = true;
  updateTooltipPosition();
};

const hideTooltip = () => {
  isTooltipActive.value = false;
};

const updateTooltipPosition = () => {
  const parentContainer = document.querySelector('.parent-container');
  const button = $refs.button;
  const tooltip = $refs.tooltip;

  const parentRect = parentContainer.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  // Calculate the position of the tooltip based on available space
  const tooltipStyle = {
    display: 'block',
  };

  // Check for available space within the parent container
  const spaceAbove = buttonRect.top - parentRect.top;
  const spaceBelow = parentRect.bottom - buttonRect.bottom;
  const spaceLeft = buttonRect.left - parentRect.left;
  const spaceRight = parentRect.right - buttonRect.right;

  // Determine the best direction to display the tooltip based on available space
  if (spaceAbove >= tooltipRect.height && spaceAbove >= spaceBelow) {
    // Display above the button
    tooltipStyle.top = `${buttonRect.top - parentRect.top - tooltipRect.height}px`;
    tooltipStyle.left = `${buttonRect.left - parentRect.left}px`;
  } else if (spaceBelow >= tooltipRect.height) {
    // Display below the button
    tooltipStyle.top = `${buttonRect.bottom - parentRect.top}px`;
    tooltipStyle.left = `${buttonRect.left - parentRect.left}px`;
  } else if (spaceLeft >= tooltipRect.width && spaceLeft >= spaceRight) {
    // Display to the left of the button
    tooltipStyle.top = `${buttonRect.top - parentRect.top}px`;
    tooltipStyle.left = `${buttonRect.left - parentRect.left - tooltipRect.width}px`;
  } else {
    // Display to the right of the button
    tooltipStyle.top = `${buttonRect.top - parentRect.top}px`;
    tooltipStyle.left = `${buttonRect.right - parentRect.left}px`;
  }

  // Apply the calculated style
  Object.assign(tooltip.style, tooltipStyle);
};

/////////////////////////

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


<style scoped>

.parent-container {
  position: relative;
  /* width: 1000px;
  height: 1000px; */
  display: none;
}

.hover-trigger {
  position: relative;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
}

.custom-tooltip {
  position: absolute;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  max-width: 500px;
  text-align: center;
  display: none;
}

.custom-tooltip.active {
  display: block;
}

</style>