<template>
  <section>
    <div class="navbar">
      <div class="nav-container container">
        <div class="left">
          <div class="menu-icon" v-if="!isSidebarOpen" @click="toggleSidebar">
            <icon-menu></icon-menu>
          </div>
          <div v-else class="menu-icon cross-icon" @click="closeSideMenu">
            <icon-cross></icon-cross>
          </div>
          <router-link to="/" class="logo">
            <img src="/src/assets/images/logo/logo-white.png" alt="">
            <!-- <div class="text grade-text">Thyromax Labs</div> -->
          </router-link>
          <!-- sidebar -->
          <div class="sidebar" :class="{ open: isSidebarOpen, closing: isClosing }">
            <div class="sidebar-card">
              <div class="mob-icons mob-view">
                <div class="bell-icon" @click="showNotificationSidebar() && toggleSidebar()">
                  <img src="/src/assets/images/png/bell.png" alt="" />
                  <div class="no"></div>
                  <div class="tooltip">Notification</div>
                </div>
                <div class="bell-icon" @click.prevent="nav.noteSidebar = true">
                  <img src="/src/assets/images/png/note.png" alt="" />
                  <div class="tooltip">Notes</div>
                </div>
              </div>
              <div class="close-icon mob-view" @click="toggleSidebar">
                <icon-cross></icon-cross>
              </div>
              <div class="menu-icons">
                <router-link to="/appointment/calender" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-calender></icon-calender>
                  </div>
                  <div class="text">Calender</div>
                </router-link>
                <router-link to="/dashboard" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-dashboard></icon-dashboard>
                  </div>
                  <div class="text">Dashboard</div>
                </router-link>
                <router-link to="/patients" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-patient></icon-patient>
                  </div>
                  <div class="text">Patients</div>
                </router-link>
                <router-link to="/doctors" class="list " @click="toggleSidebar">
                  <div class="icon">
                    <icon-doctor2></icon-doctor2>
                  </div>
                  <div class="text">Doctors</div>
                </router-link>
                <router-link to="/pathologist" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-lab></icon-lab>
                  </div>
                  <div class="text">Pathologist</div>
                </router-link>
                <div class="list setting-title mob-view" @click.prevent="toggleApt()">
                  <div class="main-icon">
                    <icon-setting></icon-setting>
                  </div>
                  <div class="text">Appointments</div>
                  <div class="icon" v-if="!nav.aptList" @click.prevent="toggleApt()">
                    <icon-right-arrow-round></icon-right-arrow-round>
                  </div>
                  <div class="icon" v-if="nav.aptList" @click.prevent="toggleApt()">
                    <icon-down-arrow-round></icon-down-arrow-round>
                  </div>
                </div>
                <!-- //Appoinment List -->
                <div class="setting-list mob-view" v-if="nav.aptList">
                  <router-link to="/appointment/doctor" class="list" @click="toggleSidebar">
                    <div class="text">Doctor Appointments</div>
                  </router-link>
                  <router-link to="/appointment/patient" class="list" @click="toggleSidebar">
                    <div class="text">Patient Appointments</div>
                  </router-link>
                </div>


                <router-link to="/staff/details" class="list desk-view" @click="toggleSidebar">
                  <div class="icon">
                    <icon-staff></icon-staff>
                  </div>
                  <div class="text">Staff</div>
                </router-link>
                <router-link to="/staff" class="list mob-view" @click="toggleSidebar">
                  <div class="icon">
                    <icon-staff></icon-staff>
                  </div>
                  <div class="text">Staff</div>
                </router-link>
                <router-link to="/visits" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-visit></icon-visit>
                  </div>
                  <div class="text">Visits</div>
                </router-link>
                <router-link to="/expense" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-money></icon-money>
                  </div>
                  <div class="text">Expense</div>
                </router-link>
                <router-link to="/ref-share-layout" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-share></icon-share>
                  </div>
                  <div class="text">Reference & Sharing</div>
                </router-link>
                <router-link to="/reports" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-report></icon-report>
                  </div>
                  <div class="text">Reports</div>
                </router-link>
                <div class="list setting-title" @click.prevent="toggleSetting()">
                  <div class="main-icon">
                    <icon-setting></icon-setting>
                  </div>
                  <div class="text">Settings</div>
                  <div class="icon" v-if="!nav.settingList" @click.prevent="toggleSetting()">
                    <icon-right-arrow-round></icon-right-arrow-round>
                  </div>
                  <div class="icon" v-if="nav.settingList" @click.prevent="toggleSetting()">
                    <icon-down-arrow-round></icon-down-arrow-round>
                  </div>
                </div>
                <!-- //Setting List -->
                <div class="setting-list" v-if="nav.settingList">
                  <router-link to="/practice-details" class="list" @click="toggleSidebar">
                    <div class="text">Practice Details</div>
                  </router-link>
                  <router-link to="/thyromax-plan" class="list" @click="toggleSidebar">
                    <div class="text">Thyromax Plan</div>
                  </router-link>
                  <router-link to="/labtest" class="list" @click="toggleSidebar">
                    <div class="text">Tests</div>
                  </router-link>
                  <router-link to="/department" class="list" @click="toggleSidebar">
                    <div class="text">Department</div>
                  </router-link>
                  <router-link to="/site-setting" class="list" @click="toggleSidebar">
                    <div class="text">Site Settings</div>
                  </router-link>
                  <router-link to="/billing" class="list" @click="toggleSidebar">
                    <div class="text">Billing</div>
                  </router-link>
                  <router-link to="/laboratory" class="list" @click="toggleSidebar">
                    <div class="text">Laboratory</div>
                  </router-link>
                  <router-link to="/login-access" class="list" @click="toggleSidebar">
                    <div class="text">Login Access</div>
                  </router-link>
                  <router-link to="/calender-setting" class="list" @click="toggleSidebar">
                    <div class="text">Calender Setting</div>
                  </router-link>
                  <router-link to="/patient-record" class="list" @click="toggleSidebar">
                    <div class="text">Patient Record Share</div>
                  </router-link>
                  <router-link to="/patient-group" class="list" @click="toggleSidebar">
                    <div class="text">Patient Groups & Master</div>
                  </router-link>
                  <router-link to="/reference-doctor" class="list" @click="toggleSidebar">
                    <div class="text">Reference Doctor</div>
                  </router-link>
                </div>
                <router-link to="/faq-create" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-help></icon-help>
                  </div>
                  <div class="text">FAQ's</div>
                </router-link>
                <router-link to="/feedback" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-feedback></icon-feedback>
                  </div>
                  <div class="text">Feedback</div>
                </router-link>
                <router-link to="/prescription" class="list" @click="toggleSidebar">
                  <div class="icon">
                    <icon-prescription></icon-prescription>
                  </div>
                  <div class="text">Prescription</div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="sidebar-overlay" :class="{ open: isSidebarOpen, closing: isClosing }" @click="toggleSidebar"></div>
        </div>
        <div class="right">
          <div class="searchbar">
            <div class="search-modal desk-data" v-click-outside="closeSearch">
              <div class="search-modal-header">
                <div class="left">
                  <input v-model="nav.searchValue" type="text" placeholder="Search Patients" @click.prevent="visible()" />
                  <div class="options" v-if="nav.isVisible">
                    <div class="ul">
                      <router-link to="/" class="li" v-for="(item, index) in matchList" :key="index">
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
            <div class="search-modal mob-data">
              <div class="search-modal-header">
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
          <!-- notifications -->
          <div class="" v-click-outside="hideNotificationSidebar">
            <div class="bell-icon" @click.prevent="showNotificationSidebar()">
              <img src="/src/assets/images/png/bell.png" alt="" />
              <div class="no"></div>
              <div class="tooltip">Notification</div>
            </div>
            <div class="notification-section notes-section" v-if="nav.notificationSidebar">
              <div class="card">
                <div class="heading">
                  <h4 class="">Notifications</h4>
                  <div class="icon" @click.prevent="nav.notificationSidebar = false">
                    <icon-cross></icon-cross>
                  </div>
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
          <!-- Appointment -->
          <div @click.prevent="storeVar.aptBookModal = true" class="bell-icon">
            <img src="/src/assets/images/png/add.png" alt="" />
            <div class="tooltip">Appointment</div>
          </div>
          <!-- sticky notes -->
          <div class="" v-click-outside="hideNoteSidebar">
            <div class="bell-icon tab-icon" @click.prevent="showNoteSidebar()">
              <img src="/src/assets/images/png/note.png" alt="" />
              <div class="tooltip">Notes</div>
            </div>
            <div class="notes-section" v-if="nav.noteSidebar">
              <div class="card">
                <div class="heading">
                  <h4 class="">Notes <icon-add @click.prevent="nav.addModal = true"></icon-add></h4>
                  <div class="icon" @click.prevent="nav.noteSidebar = false">
                    <icon-cross></icon-cross>
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
              <img src="/src/assets/images/png/user.png" class="user-img" alt="" />
              <h3>Profile</h3>
              <img src="/src/assets/images/icons/Line.svg" class="arrow-img" alt="" />
            </div>
            <div class="float-card" v-if="nav.accMenu">
              <ul>
                <li>
                  <router-link to="/profile" class="link" @click.prevent="nav.accMenu = false">
                    <img src="/src/assets/images/png/staff.png" alt="image" />
                    <div class="text">My Profile</div>
                  </router-link>
                </li>
                <li>
                  <div class="link" @click="logout()">
                    <img src="/src/assets/images/png/door.png" alt="image" />
                    <div class="text">Logout Now</div>
                  </div>
                </li>
              </ul>
            </div>
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
        <div class="save-btn flex justify-end">
          <button type="submit" class="btn black-btn w-10-r">Add</button>
        </div>
      </form>
    </Modal>
    <AptSuccessModal />
    <AptBookModal />
  </section>
</template>

<script setup>
import { reactive, computed, onBeforeMount, ref } from "vue";
import { useStore } from 'vuex'
import router from "../router";

/* constatnt */
const store = useStore();
const storeVar = computed(() => store.state.Auth);

const isSidebarOpen = ref(false);
const isClosing = ref(false);

const toggleSidebar = () => {
  if (isSidebarOpen.value) {
    isClosing.value = true;
    setTimeout(() => {
      isSidebarOpen.value = false;
      isClosing.value = false;
    }, 300);
  } else {
    isSidebarOpen.value = true;
  }
};
// const closeSideMenu = () => {
//   if (isClosing.value) {
//     isClosing.value = true;
//     // setTimeout(() => {
//     //   isSidebarOpen.value = false;
//     //   isClosing.value = false;
//     // }, 300); 
//   } 
//   // else {
//   //   isClosing.value = true;
//   // }
// };
/* Lifecycle/Hooks */
onBeforeMount(() => {
  getDoctorProfile()
})

function getDoctorProfile() {
  store.dispatch("Doctor/getProfile",);
}
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
  settingList: false,
  aptList: false,
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

/* Constant */

function visible() {
  nav.isVisible = true;
}

function closeSearch() {
  nav.isVisible = false;
}

// function closeSideMenu() {
//   nav.sidebar = false;
// }
function closeAccMenu() {
  nav.accMenu = false;
}
function logout(){
  localStorage.clear()
  nav.accMenu = false;
  router.push('/login')
}
function hideNoteSidebar() {
  nav.noteSidebar = false;
}
function showNoteSidebar() {
  nav.noteSidebar = true;
}
function showNotificationSidebar() {
  nav.notificationSidebar = true;
}
function hideNotificationSidebar() {
  nav.notificationSidebar = false;
}

function toggleSetting() {
  nav.settingList = !nav.settingList
}
function toggleApt() {
  nav.aptList = !nav.aptList
}
</script>

<style></style>