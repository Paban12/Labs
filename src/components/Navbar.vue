<template>
  <section class="navbar">
    <div class="nav-container container">
      <router-link to="/" class="logo">
        <!-- <img src="" alt=""> -->
        <div class="text grade-text">PARCHI</div>
      </router-link>
      <div class="right">
        <div class="searchbar">
          <div class="search-modal desk-data" v-click-outside="closeSearch">
            <div class="search-modal-header" > 
              <div class="left">
                <input v-model="nav.searchValue" type="text" placeholder="Search Patients" @click.prevent="visible()">
                <div class="options" v-if="nav.isVisible">
                  <div class="ul">
                    <router-link to="/" class="li" v-for="(item, index) in matchList" :key="index">
                      <div class="match-name">{{ item.name }}</div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="icon-search">
                <img src="/src/assets/images/png/search.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <router-link to="/notification" class="bell-iconn">
          <img src="/src/assets/images/png/bell.png" alt="">
          <div class="no"></div>
        </router-link>
        <div class="account" v-click-outside="closeAccMenu">
          <div class="account-card" @click.prevent="nav.accMenu = true">
            <img src="/src/assets/images/png/user.png" class="user-img" alt="">
            <h3>Profile</h3>
            <img src="/src/assets/images/icons/Line.svg" class="arrow-img" alt="">
          </div>
          <div class="float-card" v-if="nav.accMenu">
            <ul>
              <li>
                <router-link to="/profile" class="link" @click.prevent="nav.accMenu = false">
                  <img src="/src/assets/images/png/staff.png" alt="image">
                  <div class="text">My Profile</div>
                </router-link>
              </li>
              <li>
                <router-link to="/" class="link" @click.prevent="nav.accMenu = false">
                  <img src="/src/assets/images/png/setting.png" alt="image">
                  <div class="text">Settings</div>
                </router-link>
              </li>
              <li>
                <div class="link" @click.prevent="closeAccMenu()">
                  <img src="/src/assets/images/png/door.png" alt="image">
                  <div class="text">Logout Now</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';
  import { computed } from '@vue/reactivity';

  const nav = reactive({
    accMenu: false,
    searchValue: '',
    isVisible: false,
  })

  const matches = [
    {
      name: 'Mr. Prakash Kumar'
    },
    {
      name: 'Mr. Ajay Mishra'
    },
    {
      name: 'Mr. Rajesh Bacchan'
    },
    {
      name: 'Mr. Hari Pandit'
    },
  ]

  const matchList = computed(() => {
    if (nav.searchValue.trim().length > 0){
      return matches.filter((match) => match.name.toLowerCase().includes
      (nav.searchValue.trim().toLowerCase()))
    }
  })

  function visible() {
    nav.isVisible = true
  }

  function closeSearch() {
    nav.isVisible = false
  }

  function closeAccMenu() {
    nav.accMenu = false
  }

</script>

<style>

</style>