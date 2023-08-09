<template>
  <section class="bill-tax">
    <div class="row">
      <div class="form-item mb-16 col-5">
        <input type="text" placeholder="Search By Tax Name/Value">
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
          <tr v-for="(item, index) in taxData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>{{ item.tax_name }}</td>
            <td>{{ item.tax_value }}</td>
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
    tax_name: 'CGST',
    tax_value: 3,
  },
  {
    tax_name: 'CGST',
    tax_value: 6,
  },
  {
    tax_name: 'CGST',
    tax_value: 9,
  },
  {
    tax_name: 'CGST',
    tax_value: 14,
  },
  {
    tax_name: 'GST',
    tax_value: 5,
  },
  {
    tax_name: 'GST',
    tax_value: 12,
  },
  {
    tax_name: 'GST',
    tax_value: 18,
  },
  {
    tax_name: 'GST',
    tax_value: 28,
  },
  {
    tax_name: 'IGST',
    tax_value: 5,
  },
  {
    tax_name: 'IGST',
    tax_value: 12,
  },
  {
    tax_name: 'IGST',
    tax_value: 18,
  },
  {
    tax_name: 'IGST',
    tax_value: 28,
  },
  {
    tax_name: 'SGST',
    tax_value: 3,
  },
  {
    tax_name: 'SGST',
    tax_value: 6,
  },
  {
    tax_name: 'SGST',
    tax_value: 9,
  },
  {
    tax_name: 'SGST',
    tax_value: 14,
  },
])
</script>

<style>

</style>