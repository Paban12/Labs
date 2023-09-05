<template>
  <section class="billing-setting">
    <div class="table-outer">
      <table class="table">
        <thead>
          <th>Module</th>
          <th>Dropdown</th>
          <th>Default Billing Option</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in storeVar.billingCharge" :key="index">
            <td>{{ item.charge?.level }}</td>
            <td>
              <label class="toggle-control">
                <input type="checkbox" v-model="item.status" @change="statusChange(item.status,item.id,item.charge?.id,item.amount)" />
                <span class="control"></span>
              </label>
            </td>
            <td>
                <input type="number" v-model="item.amount" placeholder="00">
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

function statusChange(status,id,chargeId,amount){
  store.dispatch("Settings/changeChargeStatus", {
    status,id,chargeId,amount
  });
}
</script>

<style></style>