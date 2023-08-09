<template>
  <section class="consult-page appointment-page">
    <div class="container">
      <div class="consult-table-data">
        <div class="card stat-card mb-16">
          <div class="stats">
            <div class="stat card1">
              <img src="/src/assets/images/png/mobile.png" alt="image">
              <div class="vals">
                <div class="no">25</div>
                <div class="text">Total</div>
              </div>
            </div>
            <div class="stat card2">
              <img src="/src/assets/images/png/mobile.png" alt="image">
              <div class="vals">
                <div class="no">25</div>
                <div class="text">Cancelled</div>
              </div>
            </div>
            <div class="stat card3">
              <img src="/src/assets/images/png/mobile.png" alt="image">
              <div class="vals">
                <div class="no">25</div>
                <div class="text">Absent</div>
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
          <!-- <div class="date-no-found">
            <div class="no-found-card">
              <img src="/src/assets/images/png/calender.png" alt="image">
              <div class="text">No appointments for the selected date!</div>
            </div>
          </div> -->
          <div class="consult-table">
            <div class="title-header mb-16">
              <div class="title f-w-bold">Doctor Appointments</div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Date</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Last Visit</th>
                  <th class="text-center">View</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in consultData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.last_visit }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <router-link to="/" class="">
                          <img src="/src/assets/images/png/eye.png" alt="">
                        </router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-no-data">
              <div >No records Found!</div>
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
      date: '12-05-2023',
      id: 125,
      name: 'Prakash Jhaa',
      phone: 8888888888,
      recent_visit: '20 Days ago',
    },
  ])

</script>

<style>

</style>