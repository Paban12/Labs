<template>
  <section class="bill-tax">
    <div class="row">
      <div class="form-item col-5">
          <div class="searchbar mb-16">
            <input type="text" placeholder="Search By Pay Mode" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
        </div>
      </div>
    <div class="table-outer">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Tax Name</th>
          <th>Tax Value</th>
          <th>Status</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in storeVar.billingTax" :key="item">
            <td>{{ index + 1 }}</td>
            <td>{{ item.gstList?.level }}</td>
            <td>{{ item.gstList?.tax }}</td>
            <td>
              <label class="toggle-control">
                <input type="checkbox" v-model="item.status" @change="statusChange(item.status,item.id,item.gstList?.id)" />
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

function statusChange(status,id,gstListId){
  store.dispatch("Settings/changeTaxStatus", {
    status,id,gstListId
  });
}
</script>

<style>

</style>