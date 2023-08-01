<template>
  <section class="bills-page">
    <div class="card">
      <div class="card-body">
        <div class="bill-table">
          <div class="title-header">
            <div class="title">Visits</div>
            <div class="search">
              <div class="date-input">
                <input type="date">
                <div class="icon">
                  <img src="/src/assets/images/icons/calender.svg" alt="">
                </div>
              </div>
              <button class="btn black-btn">Search</button>
            </div>
          </div>
          <div class="table-body">
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Token No</th>
                  <th>Doctor Name</th>
                  <th>Patient Name</th>
                  <th>Remark</th>
                  <th>Date</th>
                  <th class="text-center">Options</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in billData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.token }}</td>
                    <td>{{ item.doctor_name }}</td>
                    <td>{{ item.patient_name }}</td>
                    <td>
                      <input type="text" placeholder="Remark">
                    </td>
                    <td>{{ item.date }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <router-link to="/" class="">
                          <img src="/src/assets/images/png/printer.png" alt="">
                        </router-link>
                        <router-link to="/" class="">
                          <img src="/src/assets/images/icons/mail.svg" alt="">
                        </router-link>
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

  const billData = reactive([
    {
      token: 25478,
      doctor_name: 'Harish Verma',
      patient_name: 'Ravish Kumar',
      date: '15-05-2023'
    },
  ])

</script>

<style>

</style>