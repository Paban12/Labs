<template>
  <section class="dr-opd">
    <div class="block">
      <div class="date-row row">
        <div class="form-item col-5 mb-16">
          <div class="title">Current Date</div>
          <div class="date-input">
            <input type="date" />
            <div class="icon">
              <img src="/src/assets/images/icons/calender.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">To Date</div>
          <div class="date-input">
            <input type="date" />
            <div class="icon">
              <img src="/src/assets/images/icons/calender.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="date-table">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Organization</th>
              <th>Date</th>
              <th>Update</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in dates" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.org }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.update }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const dates = reactive([
  {
    org: "Organization",
    date: "12/07/2023",
    update: "Update",
  },
]);
</script>

<style>
</style>