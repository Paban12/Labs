<template>
  <section class="login-access-page">
    <div class="container">
      <div class="card">
        <div class="card-header-bg">Login Access</div>
        <div class="card-body">
          <div class="tabs mb-16">
            <div
              class="tab"
              @click.prevent="loginAccess.tab = 1"
              :class="loginAccess.tab === 1 ? 'active' : ''"
            >
              <div class="title">Doctor</div>
            </div>
            <div
              class="tab"
              @click.prevent="loginAccess.tab = 2"
              :class="loginAccess.tab === 2 ? 'active' : ''"
            >
              <div class="title">Staff</div>
            </div>
          </div>
          <div class="tab-content" v-if="loginAccess.tab === 1">
            <div class="search-select">
              <div class="searchbar">
                <input type="text" placeholder="Search By Doctor Name/Mobile" />
                <img src="/src/assets/images/png/search.png" alt="" />
              </div>
              <div class="select-dropdown">
                <select name="" id="">
                  <option value="">Active Login</option>
                  <option value="">InactiveLogin</option>
                  <option value="">Delete Login</option>
                  <option value="">All Login</option>
                </select>
              </div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Doctor Name</th>
                  <th>Doctor Id</th>
                  <th>Speciality</th>
                  <th>Access Status</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in doctorAccessData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.doctor_name }}</td>
                    <td>{{ item.doctor_id }}</td>
                    <td>{{ item.speciality }}</td>
                    <td>
                      <label class="toggle-control">
                        <input type="checkbox" checked="checked" />
                        <span class="control"></span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-no-data">
              <div>No records Found!</div>
            </div>
            <div class="table-footer">
              <div class="entries">
                Showing <span>0</span> to <span>0</span> of
                <span>0</span> entries
              </div>
              <div class="pagination">
                <icon-left-double-arrow></icon-left-double-arrow>
                <div class="page">1</div>
                <div class="page active">2</div>
                <div class="page">3</div>
                <icon-right-double-arrow></icon-right-double-arrow>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="loginAccess.tab === 2">
            <div class="search-select">
              <div class="searchbar">
                <input type="text" placeholder="Search By Staff Name/Mobile" />
                <img src="/src/assets/images/png/search.png" alt="" />
              </div>
              <div class="select-dropdown">
                <select name="" id="">
                  <option value="">Active Login</option>
                  <option value="">InactiveLogin</option>
                  <option value="">Delete Login</option>
                  <option value="">All Login</option>
                </select>
              </div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Staff Name</th>
                  <th>Staff Id</th>
                  <th>Role</th>
                  <th>Access Status</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in staffAccessData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.staff_name }}</td>
                    <td>{{ item.staff_id }}</td>
                    <td>{{ item.role }}</td>
                    <td>
                      <label class="toggle-control">
                        <input type="checkbox" checked="checked" />
                        <span class="control"></span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="table-no-data">
                <div>No records Found!</div>
              </div>
              <div class="table-footer">
                <div class="entries">
                  Showing <span>0</span> to <span>0</span> of
                  <span>0</span> entries
                </div>
                <div class="pagination">
                  <icon-left-double-arrow></icon-left-double-arrow>
                  <div class="page">1</div>
                  <div class="page active">2</div>
                  <div class="page">3</div>
                  <icon-right-double-arrow></icon-right-double-arrow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const loginAccess = reactive({
  tab: 1,
});

const doctorAccessData = reactive([
  {
    doctor_name: "Arvind Kumar",
    doctor_id: 112,
    speciality: "ENT",
  },
]);

const staffAccessData = reactive([
  {
    staff_name: "Arvind Kumar",
    staff_id: 112,
    role: "Front Desk",
  },
]);
</script>

<style>
</style>