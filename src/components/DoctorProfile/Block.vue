<template>
  <section class="dr-block">
    <div class="block-row">
      <div class="block">
        <div class="heading">Block Dates</div>
        <div class="date-row row">
          <div class="form-item col-5 mb-16">
            <div class="title">From Date</div>
            <div class="date-input">
              <input type="date" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="">
              </div>
            </div>
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">To Date</div>
            <div class="date-input">
              <input type="date" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="submit-btn">
          <button class="btn black-btn w-10-r">Submit</button>
        </div>
      </div>
      <div class="block">
        <div class="heading">Block List</div>
        <div class="date-row row">
          <div class="form-item col-5 mb-16">
            <div class="title">From Date</div>
            <div class="date-input">
              <input type="date" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="">
              </div>
            </div>
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">To Date</div>
            <div class="date-input">
              <input type="date" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="date-table">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Sr. No.</th>
                <th>From</th>
                <th>To</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dates" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.from }}</td>
                  <td>{{ item.to }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";


const dates = reactive([
  {
    from: '12/07/2023',
    to: '12/07/2023',
  }
])

</script>

<style>

</style>