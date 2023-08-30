<template>
  <section class="thyromax-plan-page">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">Thyromax Plan</div>
        <div class="card-body">
          <div class="tabs mb-16">
            <div
              class="tab"
              @click.prevent="plan.tab = 1"
              :class="plan.tab === 1 ? 'active' : ''"
            >
              <div class="title">My Practice</div>
            </div>
            <div
              class="tab"
              @click.prevent="plan.tab = 2"
              :class="plan.tab === 2 ? 'active' : ''"
            >
              <div class="title">Credit</div>
            </div>
            <div
              class="tab"
              @click.prevent="plan.tab = 3"
              :class="plan.tab === 3 ? 'active' : ''"
            >
              <div class="title">Receipt</div>
            </div>
          </div>
          <div class="tab-content" v-if="plan.tab === 1">
            <div class="about-plan">
              <div class="data">
                <h4 class="title">Plan</h4>
                <div class="text">
                  Currently Active Plan : <strong>Thyromax Lab Pro</strong>
                </div>
                <div class="text">
                  Expire On : <strong>31 May, 2024 01:10 PM</strong>
                </div>
              </div>
              <div class="data">
                <h4 class="title">Login Access</h4>
                <div class="text">
                  Total <strong>4</strong> Doctors & Staff Login Allowed
                </div>
                <div class="text">
                  Total <strong>20</strong> Reference Doctor Portal Access
                </div>
              </div>
              <div class="data">
                <h4 class="title">Credit</h4>
                <div class="text">
                  Currently Available SMS Credit : <strong>1051 (₹ 0.00)</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="plan.tab === 2">
            <div class="plan-section">
              <div class="text">Currently Available SMS Credit : <strong>1051 (₹ 0.00)</strong></div>
              <div class="plan-table">
                <div class="table">
                  <h4 class="main-title">Choose Your Recharge Amount</h4>
                  <div class="thead">
                    <div class="th">Number of SMS Credits	</div>
                    <div class="th">Cost Per SMS</div>
                    <div class="th">Amount (₹)</div>
                  </div>
                  <div class="tbody">
                    <div class="tr">
                      <div class="td">
                        <label for="radio1" class="input">
                          <input type="radio" id="radio1" name="radio">
                          <div class="sms">1000</div>
                        </label>
                      </div>
                      <div class="td">0.30</div>
                      <div class="td">300.00</div>
                    </div>
                    <div class="tr">
                      <div class="td">
                        <label for="radio2" class="input">
                          <input type="radio" id="radio2" name="radio">
                          <div class="sms">5000</div>
                        </label>
                      </div>
                      <div class="td">0.27</div>
                      <div class="td">1350.00</div>
                    </div>
                    <div class="tr">
                      <div class="td">
                        <label for="radio3" class="input">
                          <input type="radio" id="radio3" name="radio">
                          <div class="sms">10000</div>
                        </label>
                      </div>
                      <div class="td">0.24</div>
                      <div class="td">2400.00</div>
                    </div>
                    <div class="tr">
                      <div class="td">
                        <label for="radio4" class="input">
                          <input type="radio" id="radio4" name="radio">
                          <div class="sms">25000</div>
                        </label>
                      </div>
                      <div class="td">0.21</div>
                      <div class="td">5250.00</div>
                    </div>
                  </div>
                  <ol class="note">
                    <li>
                      All paid credits are non-refundable and non-transferable across practices
                    </li>
                    <li>
                      You can use credits only after the payment is realized by Drlogy
                    </li>
                    <li>
                      The credits are valid as long as your paid subscription is active
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="plan.tab === 3">
            <div class="receipt-table">
              <div class="table-outer">
                <table class="table">
                  <thead>
                    <th>Sr. No.</th>
                    <th>Receipt No.</th>
                    <th>Date</th>
                    <th>Amount (₹)</th>
                    <th>Download</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in receiptData" :key="item">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.receipt_no }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.amt }}</td>
                      <td>
                        <a href="" class="text-blue" target="_blank">View Receipt</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const plan = reactive({
  tab: 1,
});

const receiptData = reactive([
  {
    receipt_no: 545645,
    date: '21/10/2022',
    amt: 2000,

  }
])
</script>

<style>
</style>