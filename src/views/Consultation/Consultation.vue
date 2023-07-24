<template>
  <section class="consult-page">
    <div class="container">
      <div class="consult-table-data">
        <div class="card stat-card mb-16">
          <div class="stats">
            <div class="stat card1">
              <img src="/src/assets/images/png/mobile.png" alt="image">
              <div class="vals">
                <div class="no">25</div>
                <div class="text">Completed</div>
              </div>
            </div>
            <div class="stat card2">
              <img src="/src/assets/images/png/mobile.png" alt="image">
              <div class="vals">
                <div class="no">25</div>
                <div class="text">Pending</div>
              </div>
            </div>
            <div class="stat card3">
              <img src="/src/assets/images/png/mobile.png" alt="image">
              <div class="vals">
                <div class="no">25</div>
                <div class="text">Waiting</div>
              </div>
            </div>
          </div> 
          <div class="search-section">
            <div class="row">
              <div class="col-25">
                <input type="text" placeholder="Search by name">
              </div>
              <div class="col-25">
                <div class="date-input">
                  <input type="date">
                  <div class="icon">
                    <img src="/src/assets/images/icons/calender.svg" alt="">
                  </div>
                </div>
              </div>
              <div class="col-25">
                <button class="btn yellow-btn">Today</button>
              </div>
              <div class="col-25">
                <button class="btn black-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card table-card">
          <!-- <div class="no-found">
            <div class="no-found-card">
              <img src="/src/assets/images/png/calender.png" alt="image">
              <div class="text">No appointments for the selected date!</div>
            </div>
          </div> -->
          <div class="consult-table">
            <div class="title-header mb-16">
              <div class="title">Consultation Logs</div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>ID</th>
                  <th>#Token</th>
                  <th>Name</th>
                  <th>Recent Visit</th>
                  <th>#Visits</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Purpose</th>
                  <th class="text-center">Actions</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in consultData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.id }}</td>
                    <td>
                      <span class="token">{{ item.token }}</span>
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.recent_visit }}</td>
                    <td>{{ item.total_visits }}</td>
                    <td>{{ item.time }}</td>
                    <td>
                      <div class="tag green-tag">Booked</div>
                    </td>
                    <td>{{ item.purpose }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <router-link to="/" class="">
                          <img src="/src/assets/images/png/printer.png" alt="">
                        </router-link>
                        <router-link to="/" class="">
                          <img src="/src/assets/images/icons/mail.svg" alt="">
                        </router-link>
                        <router-link to="/visits" class="">
                          <img src="/src/assets/images/png/eye.png" alt="">
                        </router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tfoot class="no-data">
                  <tr>
                    <td colspan="10" rowspan="1">No records Found!</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="table-footer">
              <div class="entries">
                Showing <span>0</span> to <span>0</span> of <span>0</span> entries 
              </div>
              <div class="pagination">
                <span>First</span>
                <span>Previous</span>
                <div class="page">1</div>
                <span>Next</span>
                <span>Last</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const consultData = reactive([
    {
      id: 125,
      token: 25478,
      name: 'Prakash Jhaa',
      recent_visit: '20 Days ago',
      total_visits: 10,
      purpose: 'Consultation',
    },
  ])

</script>

<style>

</style>