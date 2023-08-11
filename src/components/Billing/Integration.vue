<template>
  <section class="billing-itegration">
    <div class="table-outer">
      <table class="table">
        <thead>
          <th>Module</th>
          <th>Guardian at Appointment	</th>
          <th>Billing at Appointment Time	</th>
          <th>Default Billing Option</th>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item">
            <td>{{ item.module_name }}</td>
            <td>
              <label class="toggle-control">
                <input type="checkbox" checked="checked" />
                <span class="control"></span>
              </label>
            </td>
            <td>
              <label class="toggle-control">
                <input type="checkbox" checked="checked" />
                <span class="control"></span>
              </label>
            </td>
            <td>
              <div class="select-dropdown">
                <select name="" id="">
                  <option value="">Payment</option>
                  <option value="">Invoice</option>
                  <option value="">Appointment</option>
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const tableData = reactive([
  {
    module_name: 'Lab',
  }
])

</script>

<style>

</style>