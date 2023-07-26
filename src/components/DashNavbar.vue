<template>
  <section>
    <div class="navbar">
      <div class="nav-container container">
        <div class="left">
          <div class="menu-icon" v-if="!nav.sidebar" @click.prevent="nav.sidebar = true">
            <icon-menu></icon-menu>
          </div>
          <div class="menu-icon cross-icon" v-if="nav.sidebar" @click.prevent="nav.sidebar = false">
            <icon-cross></icon-cross>
          </div>
          <router-link to="/" class="logo">
            <!-- <img src="" alt=""> -->
            <div class="text grade-text">PARCHI</div>
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
          <router-link to="/notification" class="bell-icon">
            <img src="/src/assets/images/png/bell.png" alt="" />
            <div class="no"></div>
          </router-link>
          <router-link to="/" class="bell-icon desk-icon">
            <img src="/src/assets/images/png/add.png" alt="" />
          </router-link>
          <router-link to="/" class="bell-icon desk-icon">
            <img src="/src/assets/images/png/note.png" alt="" />
          </router-link>
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
      <div class="sidebar" v-if="nav.sidebar">
        <div class="sidebar-card">
          <div class="close-icon" @click.prevent="nav.sidebar = false">
            <icon-cross></icon-cross>
          </div>
          <div class="menu-icons">
            <router-link to="/" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/eye.png" alt="image" />
              </div>
              <div class="text">Home</div>
            </router-link>
            <router-link to="/" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/eye.png" alt="image" />
              </div>
              <div class="text">Visit</div>
            </router-link>
            <router-link to="/medicine-search" class="list mob-view" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/edit.png" alt="image" />
              </div>
              <div class="text">Medicines</div>
            </router-link>
            <router-link to="/medicine-list" class="list desk-view" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/edit.png" alt="image" />
              </div>
              <div class="text">Medicines</div>
            </router-link>
            <router-link to="/rx/list" class="list mob-view" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/edit.png" alt="image" />
              </div>
              <div class="text">RX Medicines</div>
            </router-link>
            <router-link to="/rx/medicine" class="list desk-view" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/edit.png" alt="image" />
              </div>
              <div class="text">RX Medicines</div>
            </router-link>
            <router-link to="/staff/details" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/microscope.png" alt="image" />
              </div>
              <div class="text">Staff</div>
            </router-link>
            <router-link to="/notes" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Notes</div>
            </router-link>
            <router-link to="/complaints" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Complaints</div>
            </router-link>
            <router-link to="/diagnosis" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Diagnosis</div>
            </router-link>
            <router-link to="/account" class="list" @click.prevent="closeSidebar()">
              <div class="img grade-btn">
                <img src="/src/assets/images/png/bill.png" alt="image" />
              </div>
              <div class="text">Account</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="menubar">
      <div class="menu-list vertical-list">
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/eye.png" alt="image" />
          </div>
          <div class="text">Visit</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/edit.png" alt="image" />
          </div>
          <div class="text">Edit</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/microscope.png" alt="image" />
          </div>
          <div class="text">Lab</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/bill.png" alt="image" />
          </div>
          <div class="text">Bills</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/time.png" alt="image" />
          </div>
          <div class="text">Appointment</div>
        </router-link>
      </div>
      <div class="menu-list horizontal-list">
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/eye.png" alt="image" />
          </div>
          <div class="text">Visit</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/edit.png" alt="image" />
          </div>
          <div class="text">Edit</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/microscope.png" alt="image" />
          </div>
          <div class="text">Lab</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/bill.png" alt="image" />
          </div>
          <div class="text">Bills</div>
        </router-link>
        <router-link to="/" class="list">
          <div class="img grade-btn">
            <img src="/src/assets/images/png/time.png" alt="image" />
          </div>
          <div class="text">Appointment</div>
        </router-link>
      </div>
    </div> -->
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { computed } from "@vue/reactivity";

const nav = reactive({
  accMenu: false,
  searchValue: "",
  isVisible: false,
  sidebar: false,
  searchModal: false,
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
</script>

<style>
</style>