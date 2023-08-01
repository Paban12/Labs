<template>
  <section class="payment-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">Payment History</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Payment History" />
              <img src="/src/assets/images/png/search.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Sr. No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Lab Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Speciality</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in doctorData" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.lab_name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.speciality }}</td>
                  <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click.prevent="patient.viewModal = true">
                        <img src="/src/assets/images/png/eye.png" alt="" />
                      </div>
                      <div class="" @click.prevent="patient.addModal = true">
                        <img src="/src/assets/images/png/edit.png" alt="" />
                      </div>
                      <div
                        class=""
                        @click.prevent="patient.confirmModal = true"
                      >
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
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
  </section>
</template>

<script setup>
import { reactive } from "vue";

const doctorData = reactive([
  {
    id: 125,
    name: "Prakash Jhaa",
    phone: 8888888888,
    email: "patient@mail.com",
    speciality: 'ENT'
  },
]);
</script>

<style>
</style>