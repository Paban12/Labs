<template>
  <section class="lab-report-page bill-page">
    <div class="cards">
      <div class="card">
        <div class="date">04 Aung 23</div>
        <div class="card-data">
          <div class="card-header mb-10">
            <div class="left">
              <div class="time">
                <div class="">03:52 PM</div>
                <div class="">5 Minuts</div>
              </div>
              <div class="info">
                <div class="">Self</div>
                <div class="">9 Test (DEXTOR LABS - Lab Address)</div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img src="/src/assets/images/png/print.png" alt="" />
              </div>
              <div class="img">
                <img src="/src/assets/images/png/share.png" alt="" />
              </div>
              <button class="btn black-btn">Add Bill</button>
            </div>
          </div>
          <div class="card-body">
            <div class="test-table mb-16">
              <h4 class="mb-10">Invoice</h4>
              <table class="table">
                <thead>
                  <th>Invoice No.</th>
                  <th>Towards</th>
                  <th>Total Amount (₹)</th>
                  <th>Paid Amount (₹)</th>
                  <th>Due Amount (₹)</th>
                  <th class="text-center">Option</th>
                </thead>
                <tbody>
                  <tr v-for="item in invoiceTableData" :key="item">
                    <td>{{ item.invoice_no }}</td>
                    <td>{{ item.towards }}</td>
                    <td>{{ item.total_amt }}</td>
                    <td>{{ item.paid_amt }}</td>
                    <td>{{ item.due_amt }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <div class="icon">
                          <icon-vert-dots></icon-vert-dots>
                        </div>
                        <div class="hover-list card">
                          <div class="list-item">Print</div>
                          <div class="list-item">Share</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="test-table mb-16">
              <h4 class="mb-10">Payment</h4>
              <table class="table">
                <thead>
                  <th>Receipt No.</th>
                  <th>Total Amount (₹)</th>
                  <th>Towards</th>
                  <th>Pay Mode</th>
                  <th class="text-center">Option</th>
                </thead>
                <tbody>
                  <tr v-for="item in paymentTableData" :key="item">
                    <td>{{ item.receipt_no }}</td>
                    <td>{{ item.amt }}</td>
                    <td>{{ item.towards }}</td>
                    <td>{{ item.pay_mode }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <div class="icon">
                          <icon-vert-dots></icon-vert-dots>
                        </div>
                        <div class="hover-list card">
                          <div class="list-item">Print</div>
                          <div class="list-item">Share</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const invoiceTableData = reactive([
  {
    invoice_no: 125,
    towards: 'INV 322 (50.00)',
    total_amt: 2000,
    paid_amt: 2000,
    due_amt: 2000,
  },
]);

const paymentTableData = reactive([
  {
    receipt_no: 125,
    amt: 2000,
    towards: 'INV 322 (50.00)',
    pay_mode: 'Cash',
  },
]);

</script>

<style>
</style>