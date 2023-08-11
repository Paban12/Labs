<!-- mobile view -->
<template>
  <section class="staff-list-page">
    <div class="container">
      <div class="card staff-list">
        <div class="card-header">
          <div class="top">
            <div class="head">
              <h4>Staff Management</h4>
              <div class="btn yellow-btn">12</div>
            </div>
            <button
              class="btn black-btn"
              @click.prevent="staff.addModal = true"
            >
              + Add Staff
            </button>
          </div>
          <div class="searchbar">
            <input type="text" placeholder="Search for Staff" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
        </div>
        <div class="card-body">
          <router-link to="/staff/details" class="list-item card1">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Dr. Anurag Malohatra Strhya</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post dr">Doctor</div>
          </router-link>
          <div class="list-item card2">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Mukesh Raju Rastogi</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post office">Front Desk</div>
          </div>
          <div class="list-item card3">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Surakha Ajita Kumar</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post manager">Manager</div>
          </div>
          <div class="list-item card1">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Surakha Ajita Kumar</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post admin">Admin</div>
          </div>
          <div class="list-item card1">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Dr. Anurag Malohatra Strhya</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post dr">Doctor</div>
          </div>
          <div class="list-item card2">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Mukesh Raju Rastogi</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post office">Front Desk</div>
          </div>
          <div class="list-item card3">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Surakha Ajita Kumar</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post manager">Manager</div>
          </div>
          <div class="list-item card1">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Surakha Ajita Kumar</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post admin">Admin</div>
          </div>
          <div class="list-item card1">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Dr. Anurag Malohatra Strhya</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post dr">Doctor</div>
          </div>
          <div class="list-item card2">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Mukesh Raju Rastogi</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post office">Front Desk</div>
          </div>
          <div class="list-item card3">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Surakha Ajita Kumar</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post manager">Manager</div>
          </div>
          <div class="list-item card1">
            <div class="img">
              <img src="/src/assets/images/png/dr2.png" alt="image" />
            </div>
            <div class="info">
              <div class="staff-name">Surakha Ajita Kumar</div>
              <div class="contact-info">
                <div class="mail">ramaswami28989@gmail.com</div>
                <div class="phone">+919765300921</div>
              </div>
            </div>
            <div class="post admin">Admin</div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="staff.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Add Staff</div>
        <div class="close-btn" @click.prevent="staff.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <div class="title">Name</div>
          <input type="text" placeholder="Enter Name" />
          <div class="err-msg">Please enter name</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Phone No</div>
          <input type="number" placeholder="Enter Phone No" />
          <div class="err-msg">Please enter phone no</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Email</div>
          <input type="text" placeholder="Enter Email" />
          <div class="err-msg">Please enter email</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Address</div>
          <input type="text" placeholder="Enter Address" />
          <div class="err-msg">Please enter address</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Select Post</div>
          <SingleSelect
            v-model="staff.post"
            :options="postOptions"
            @selected="handleSelectedOption"
            placeholder="Select Post"
          ></SingleSelect>
          <div class="err-msg">Please select post</div>
        </div>
        <button class="btn black-btn w-100 mt-16">Add</button>
      </form>
    </Modal>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const staff = reactive({
    addModal: false,
    post: "",
  })

  const postOptions = [
    { id: 1, name: "Doctor" },
    { id: 2, name: "Nurse" },
  ];
  const handleSelectedOption = (option) => {
    console.log("Selected option:", option);
  };
</script>

<style>
</style>