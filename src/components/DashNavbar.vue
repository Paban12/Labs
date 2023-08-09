<template>
  <section>
    <div class="navbar">
      <div class="nav-container container">
        <div class="left">
          <div class="menu-icon" v-if="!isSidebarOpen" @click="toggleSidebar">
            <icon-menu></icon-menu>
          </div>
          <div v-else class="menu-icon cross-icon" @click="toggleSidebar">
            <icon-cross></icon-cross>
          </div>
          <router-link to="/" class="logo">
            <!-- <img src="" alt=""> -->
            <div class="text grade-text">Thyromax Labs</div>
          </router-link>
        </div>
        <div class="right"> 
          <div class="searchbar">
            <div class="search-modal desk-data" v-click-outside="closeSearch">
              <div class="search-modal-header">
                <div class="left">
                  <input
                    v-model="nav.searchValue"
                    type="text"
                    placeholder="Search Patients"
                    @click.prevent="visible()"
                  />
                  <div class="options" v-if="nav.isVisible">
                    <div class="ul">
                      <router-link
                        to="/"
                        class="li"
                        v-for="(item, index) in matchList"
                        :key="index"
                      >
                        <div class="match-name">{{ item.name }}</div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="icon-search">
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="search-icon" @click.prevent="nav.searchModal = true">
            <img src="/src/assets/images/png/search.png" alt="image" />
          </div>
          <!-- search for mob view -->
          <div class="search-modal-mob" v-if="nav.searchModal">
            <div class="search-modal mob-data" >
              <div class="search-modal-header" > 
                <div class="left">
                  <div class="back-arrow" @click.prevent="nav.searchModal = false">
                    <img src="/src/assets/images/icons/back.svg" alt="">
                  </div>
                  <input v-model="nav.searchValue" type="text" placeholder="Search" @click.prevent="visible()">
                  <div class="options" v-if="nav.isVisible = true">
                    <div class="ul">
                      <router-link to="/" class="list" v-for="(item, index) in matchList" :key="index">
                        {{ item.name }}
                      </router-link>
                    </div>
                  </div>
                </div>
                <div class="search-btn">
                  <img src="/src/assets/images/png/search.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="" v-click-outside="hideNotificationSidebar">
            <div class="bell-icon" @click.prevent="showNotificationSidebar()">
              <img src="/src/assets/images/png/bell.png" alt="" />
              <div class="no"></div>
              <div class="tooltip">Notification</div>
            </div>
            <!-- notifications -->
            <div class="notification-section notes-section" v-if="nav.notificationSidebar" >
              <div class="card">
                <div class="heading">
                  <h3 class="">Notifications</h3>
                </div>
                <div class="notes-list">
                  <router-link to="/" class="list-item success">
                    <div class="icon">
                      <icon-success></icon-success>
                    </div>
                    <div class="info">
                      <div class="title">Success</div>
                      <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
                    </div>
                  </router-link>
                  <router-link to="/" class="list-item warning">
                    <div class="icon">
                      <icon-warning></icon-warning>
                    </div>
                    <div class="info">
                      <div class="title">Warning !</div>
                      <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
                    </div>
                  </router-link>
                  <router-link to="/" class="list-item error">
                    <div class="icon">
                      <icon-warning></icon-warning>
                    </div>
                    <div class="info">
                      <div class="title">Error !</div>
                      <div class="sub-title">The developer has kept the source code structure adaptable enough for</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/" class="bell-icon desk-icon">
            <img src="/src/assets/images/png/add.png" alt="" />
            <div class="tooltip">Add</div>
          </router-link>
          <div class="" v-click-outside="hideNoteSidebar">
            <div class="bell-icon desk-icon" @click.prevent="showNoteSidebar()">
              <img src="/src/assets/images/png/note.png" alt="" />
              <div class="tooltip">Notes</div>
            </div>
            <!-- sticky notes -->
            <div class="notes-section" v-if="nav.noteSidebar" >
              <div class="card">
                <div class="heading">
                  <h3 class="">Notes</h3>
                  <div class="icon" @click.prevent="nav.addModal = true">
                    <icon-add></icon-add>
                  </div>
                </div>
                <div class="notes-list">
                  <div class="list-item">
                    <div class="icon">
                      <icon-note></icon-note>
                    </div>
                    <div class="data">
                      <div class="title">At 4 O Clock meeting</div>
                      <div class="text">03-08-2023 11:38 AM</div>
                    </div>
                    <div class="icon-edit icon-i black-btn" @click.prevent="nav.addModal = true">
                      <icon-edit></icon-edit>
                    </div>
                    <div class="icon-delete icon-i black-btn" @click.prevent="nav.confirmModal = true">
                      <icon-delete></icon-delete>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="account" v-click-outside="closeAccMenu">
            <div class="account-card grade-btn btn" @click.prevent="nav.accMenu = true">
              <img
                src="/src/assets/images/png/user.png"
                class="user-img"
                alt=""
              />
              <h3>Profile</h3>
              <img
                src="/src/assets/images/icons/Line.svg"
                class="arrow-img"
                alt=""
              />
            </div>
            <div class="float-card" v-if="nav.accMenu">
              <ul>
                <li>
                  <router-link
                    to="/profile"
                    class="link"
                    @click.prevent="nav.accMenu = false"
                  >
                    <img src="/src/assets/images/png/staff.png" alt="image" />
                    <div class="text">My Profile</div>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/"
                    class="link"
                    @click.prevent="nav.accMenu = false"
                  >
                    <img src="/src/assets/images/png/setting.png" alt="image" />
                    <div class="text">Settings</div>
                  </router-link>
                </li>
                <li>
                  <div class="link" @click.prevent="closeAccMenu()">
                    <img src="/src/assets/images/png/door.png" alt="image" />
                    <div class="text">Logout Now</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- sidebar -->
      <div class="sidebar" :class="{ open: isSidebarOpen, closing: isClosing }">
        <div class="sidebar-card">
          <div class="close-icon" @click.prevent="nav.sidebar = false">
            <icon-cross></icon-cross>
          </div>
          <div class="menu-icons">
            <router-link to="/" class="list" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/eye.png" alt="image" />
              </div>
              <div class="text">Calender</div>
            </router-link>
            <router-link to="/dashboard" class="list" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/eye.png" alt="image" />
              </div>
              <div class="text">Dashboard</div>
            </router-link>
            <router-link to="/patients" class="list desk-view" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/microscope.png" alt="image" />
              </div>
              <div class="text">Patients</div>
            </router-link>
            <router-link to="/doctors" class="list desk-view" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/microscope.png" alt="image" />
              </div>
              <div class="text">Doctors</div>
            </router-link>
            <router-link to="/pathologist" class="list desk-view" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/microscope.png" alt="image" />
              </div>
              <div class="text">Pathologist</div>
            </router-link>
            <router-link to="/staff/details" class="list desk-view" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/microscope.png" alt="image" />
              </div>
              <div class="text">Staff</div>
            </router-link>
            <router-link to="/staff" class="list mob-view" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/microscope.png" alt="image" />
              </div>
              <div class="text">Staff</div>
            </router-link>
            <router-link to="/labtest" class="list" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Tests</div>
            </router-link>
            <router-link to="/visits" class="list" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Visits</div>
            </router-link>
            <router-link to="/site-setting" class="list" @click="toggleSidebar">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Site Settings</div>
            </router-link>
<<<<<<< HEAD
            <router-link to="/appointment/calender" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Appoinments</div>
            </router-link>
            <router-link to="/prescription" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Prescription</div>
            </router-link>
            <router-link to="/appointment/patient" class="list mob-view" @click.prevent="closeSidebar()">
=======
            <router-link to="/appointment/patient" class="list mob-view" @click="toggleSidebar">
>>>>>>> df488f9b47bbdcd8a7548adf8fcf931ff45f3aa2
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Patients Appoinments</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="nav.confirmModal" class="confirm-modal">
      <h4>
        Are you sure want to Delete
      </h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="nav.confirmModal = false">Cancel</button>
        <button class="btn confirm-btn">Confirm</button>
      </div>      
    </Modal>
    <Modal v-model:show="nav.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Add Note</div>
        <div class="close-btn" @click.prevent="nav.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <textarea name="" id="" placeholder="Enter Note"></textarea>
          <div class="err-msg">Enter note</div>
        </div>
        <div class="save-btn form-item">
          <button class="btn black-btn">Add</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { computed } from "@vue/reactivity";


const isSidebarOpen = ref(false);
const isClosing = ref(false);

const toggleSidebar = () => {
  if (isSidebarOpen.value) {
    isClosing.value = true;
    setTimeout(() => {
      isSidebarOpen.value = false;
      isClosing.value = false;
    }, 300); // Change the delay (in milliseconds) based on your desired animation time
  } else {
    isSidebarOpen.value = true;
  }
};
const nav = reactive({
  accMenu: false,
  searchValue: "",
  isVisible: false,
  sidebar: false,
  searchModal: false,
  confirmModal: false,
  addModal: false,
  noteSidebar: false,
  notificationSidebar: false,
});

const matches = [
  {
    name: "Mr. Prakash Kumar",
  },
  {
    name: "Mr. Ajay Mishra",
  },
  {
    name: "Mr. Rajesh Bacchan",
  },
  {
    name: "Mr. Hari Pandit",
  },
];

const matchList = computed(() => {
  if (nav.searchValue.trim().length > 0) {
    return matches.filter((match) =>
      match.name.toLowerCase().includes(nav.searchValue.trim().toLowerCase())
    );
  }
});

function visible() {
  nav.isVisible = true;
}

function closeSearch() {
  nav.isVisible = false;
}

function closeAccMenu() {
  nav.accMenu = false;
}
function closeSidebar() {
  nav.sidebar = false;
}
function hideNoteSidebar() {
  nav.noteSidebar = false;
}
function showNoteSidebar() {
  nav.noteSidebar = true;
}
function hideNotificationSidebar() {
  nav.notificationSidebar = false;
}
function showNotificationSidebar() {
  nav.notificationSidebar = true;
}
</script>

<style>
</style>