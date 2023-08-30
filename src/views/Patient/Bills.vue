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
              <div class="img" @click.prevent="formVar.printModal = true">
                <img src="/src/assets/images/png/print.png" alt="" />
              </div>
              <div class="img">
                <img src="/src/assets/images/png/share.png" alt="" />
              </div>
              <button class="btn black-btn" @click.prevent="formVar.billModal = true">Add Bill</button>
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
    <!-- Modals -->
    <Modal
      v-model:show="formVar.billModal"
      class="add-bill-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Payment</div>
        <div class="close-btn" @click.prevent="formVar.billModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="patient-details">
        <div class="left">
          <div class="img">
            <img src="/src/assets/images/png/man.png" alt="">
          </div>
          <div class="info">
            <div class="name f-w-bold">Mrs Pranita</div>
            <div class="other">
              <span>Female</span> /
              <span>31 Years</span> /
              <span>PID : 267</span> 
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="data">
            <icon-phone></icon-phone>
            <div class="text">+91 8888888888</div>
          </div>
          <div class="data">
            <icon-location></icon-location>
            <div class="text">Kolkata</div>
          </div>
        </div>
        <div class="right">
          <div class="date-time">05 Aug,23 at 08:41 AM for 5 Min</div>
          <div class="dr-name">Dr. Rohith</div>
        </div>
      </div>
      <div class="table-outer main-table-outer mb-16">
        <table class="table">
          <thead>
            <th>Sr. No.</th>
            <th>Procedures & Items</th>
            <th>Unit</th>
            <th>Cost (₹)</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>Total (₹)</th>
            <th class="text-center">Option</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in billingData" :key="item">
              <td>{{ index + 1 }}</td>
              <td>
                <SingleSelect
                  v-model="formVar.item"
                  :options="itemOptions"
                  @selected="handleSelectedOption"
                  placeholder="Search"
                ></SingleSelect>
              </td>
              <td>
                <input type="number" placeholder="0">
              </td>
              <td>
                <input type="number" placeholder="0.00">
              </td>
              <td>
                <div class="select-input flex align-center gap-10">
                  <input type="number" placeholder="0">
                  <div class="select-dropdown">
                    <select name="" id="">
                      <option value="">%</option>
                      <option value="">₹</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <MultiSelect
                  :options="tableTaxOptions"
                  :tabs="tab"
                  @selected="handleSelectedOption"
                  placeholder="Select Tax"
                />
              </td>
              <td>{{ item.total }}</td>
              <td class="text-center">
                <div class="option-btns">
                  <div class="">
                    <img src="/src/assets/images/png/delete.png" alt="" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="note-row row mb-16">
        <div class="form-item col-5">
          <input type="text" placeholder="Invoice Note">
        </div>
        <div class="form-item col-5">
          <input type="text" placeholder="Payment Note">
        </div>
      </div>
      <div class="charges-row flex align-start mb-16">
        <div class="data flex align-start">
          <input type="checkbox" />
          <div class="text">Home Collection Charge</div>
        </div>
        <div class="data flex align-start">
          <input type="checkbox" />
          <div class="text">Report Print Charge</div>
        </div>
        <div class="data flex align-start">
          <input type="checkbox" />
          <div class="text">Smart Report Charge Charge</div>
        </div>
      </div>
      <div class="total-table mb-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Total Cost (₹)</th>
              <th>Total Discount (₹)</th>
              <th>Total Tax (₹)</th>
              <th>Grand Total (₹)</th>
            </thead>
            <tbody>
              <tr>
                <td>2000</td>
                <td>10</td>
                <td>1000</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="pay-table mb-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Pay Mode</th>
              <th>Payable(₹)</th>
              <th>From Advance(₹)</th>
              <th>Pay Now(₹)</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="select-dropdown">
                    <select name="" id="">
                      <option value="">Cash</option>
                      <option value="">Card</option>
                      <option value="">Cheque</option>
                      <option value="">Net Banking</option>
                      <option value="">Google Pay</option>
                      <option value="">Paytm</option>
                      <option value="">PhonePe</option>
                      <option value="">Credit Card</option>
                      <option value="">Debit Card</option>
                      <option value="">UPI</option>
                      <option value="">Amazon Pay</option>
                    </select>
                  </div>
                </td>
                <td>00</td>
                <td>00</td>
                <td>00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="btn-row gap-16">
        <button class="btn black-btn">Create Invoice</button>
        <button class="btn black-btn">Accept Payment</button>
      </div>
    </Modal>
    <Modal
      v-model:show="formVar.printModal"
      class="mid-modal print-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Print</div>
        <div class="close-btn" @click.prevent="formVar.printModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="print-modal-content">
        <div class="print-content">
          <iframe src="https://drlogy.com/drlogy-pro/Patient_lab/billShrPrnt?apt_id=393&amp;mode=print&amp;pat_dr=1&amp;stplb1=641&amp;stplb2=642&amp;contitle=&amp;whats_app=&amp;latterhead=1&amp;pnl_tst_same_page=1&amp;dr_sign_id%5B%5D=1&amp;step_chk=4&amp;pnl_new_page=0&amp;tst_new_page=0" frameborder="0" style="height: 918px; width: 100%;" data-src="https://drlogy.com/drlogy-pro/Patient_lab/billShrPrnt?apt_id=393&amp;mode=print&amp;pat_dr=1&amp;stplb1=641&amp;stplb2=642&amp;contitle=&amp;whats_app=&amp;latterhead=1&amp;pnl_tst_same_page=1&amp;dr_sign_id%5B%5D=1&amp;step_chk=4&amp;pnl_new_page=0&amp;tst_new_page=0">
          </iframe>
        </div>
        <div class="other-data">
          <div class="select-list">
            <div class="form-item mb-16">
              <div class="select-dropdown">
                <select name="" id="">
                  <option value="">Bill Summary Format 1</option>
                  <option value="">Bill Summary Format 2</option>
                  <option value="">Bill Summary Format 3</option>
                  <option value="">Bill Summary Format 4</option>
                  <option value="">Bill Summary Format 5</option>
                  <option value="">Bill Summary Format 6</option>
                  <option value="">Bill Summary Format 7</option>
                </select>
              </div>
            </div>
            <div class="data">
              <input type="checkbox" id="select_all">
              <label for="select_all" class="text f-w-bold">Invoices</label>
            </div>
            <div class="data">
              <input type="checkbox" id="select_all">
              <label for="select_all" class="text">Receipt</label>
            </div>
            <div class="data">
              <input type="checkbox" id="select_all">
              <label for="select_all" class="text">Refund</label>
            </div>
          </div>
          <div class="print-btn">
            <button class="btn black-btn w-10-r">Print</button>
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  billModal: false,
  item: null,
  printModal: false,
})

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

//Modal Table
const billingData = reactive([
  {
    total: 1500,
  },
]);

//search select
const itemOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

// multiselect
const tableTaxOptions = [
  { id: 1, name: "28% IGST" },
  { id: 2, name: "18% IGST" },
  { id: 3, name: "12% IGST" },
  { id: 4, name: "5% IGST" },
  { id: 5, name: "14% SGST" },
  { id: 6, name: "9% SGST" },
  { id: 7, name: "6% SGST" },
  { id: 8, name: "3% SGST" },
  { id: 9, name: "14% CGST" },
  { id: 10, name: "9% CGST" },
  { id: 11, name: "6% CGST" },
  { id: 12, name: "3% CGST" },
  { id: 13, name: "28% GST" },
  { id: 14, name: "18% GST" },
  { id: 15, name: "12% GST" },
  { id: 16, name: "5% GST" },
];
const tab = [];
</script>

<style>
</style>