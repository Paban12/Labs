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
          <tr v-for="(item, index) in storeVar.billingPayMode" :key="item">
            <td>{{ index + 1 }}</td>
            <td>{{ item.payMode?.level }}</td>
            <td>
              <label class="toggle-control">
                <input type="checkbox" v-model="item.status" @change="statusChange(item.status,item.id,item.payMode?.id)" />
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
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
/* Constants */

const store = useStore();
const storeVar = computed(() => store.state.Settings);

function statusChange(status,id,payModeId){
  store.dispatch("Settings/changePayModeStatus", {
    status,id,payModeId
  });
}
</script>

<style>

</style>