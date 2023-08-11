<template>
  <section class="billing-pay-mode">
    <h4 class="main-title">Thyromax Pay</h4>
    <div class="sub-title">You will receive Drlogy Pay successful message on below number. Drlogy Pay @ 2.5% Charge/transaction is Apply.</div>
   

    <div class="row">
      <div class="form-item col-25 mb-16">
        <input type="number" placeholder="Mobile Number">
        <!-- <div class="err-msg">Please enter mobile no</div> -->
      </div>
      <div class="form-item toggle-btn col-25 mb-16 flex align-center">
        <label class="toggle-control">
          <input type="checkbox" checked="checked" />
          <span class="control"></span>
        </label>
        <div class="text">SMS Notification</div>
      </div>
      <div class="form-item col-5">
        <div class="searchbar">
          <input type="text" placeholder="Search By Pay Mode" />
          <img src="/src/assets/images/png/search.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="search-row mb-16">
      <div class="searchbar">
        <input type="text" placeholder="Search By Pay Mode" />
        <img src="/src/assets/images/png/search.png" alt="" />
      </div>
    </div> -->
    <div class="table-outer">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Pay Mode</th>
          <th>Status</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in taxData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>{{ item.pay_mode }}</td>
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
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const taxData = reactive([
  {
    pay_mode: 'Amazon Pay',
  },
  {
    pay_mode: 'Ayushman Card',
  },
  {
    pay_mode: 'Card',
  },
  {
    pay_mode: 'Cash',
  },
  {
    pay_mode: 'Cheque',
  },
  {
    pay_mode: 'Credit Card',
  },
  {
    pay_mode: 'Debit Card',
  },
  {
    pay_mode: 'Thyromax Pay',
  },
  {
    pay_mode: 'Google Pay',
  },
  {
    pay_mode: 'Net Banking',
  },
  {
    pay_mode: 'Paytm',
  },
  {
    pay_mode: 'PhonePe',
  },
  {
    pay_mode: 'UPI',
  },
])
</script>

<style>

</style>