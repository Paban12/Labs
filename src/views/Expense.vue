<template>
  <section class="expense-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">Expense</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Expense" />
              <img src="/src/assets/images/png/search.png" alt="" />
            </div>
            <div class="add-btn">
              <button
                class="btn black-btn"
                @click.prevent="formVar.addModal = true"
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Sr. No.</th>
                <th>Expense Title</th>
                <th>Expense Type</th>
                <th>Date</th>
                <th>Vendor</th>
                <th>Pay Mode</th>
                <th>Tax</th>
                <th>Amount(₹)</th>
                <th>Note</th>
                <th>Documents</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in expenseData" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.expense_title }}</td>
                  <td>{{ item.expense_type }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.vendor }}</td>
                  <td>{{ item.pay_mode }}</td>
                  <td>{{ item.tax }}</td>
                  <td>{{ item.amt }}</td>
                  <td>{{ item.note }}</td>
                  <td>
                    <div class="doc-pics">
                      <img src="/src/assets/images/jpg/about1.jpg" alt="" />
                      <img src="/src/assets/images/jpg/login-bg2.jpg" alt="" />
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click.prevent="formVar.addModal = true">
                        <img src="/src/assets/images/png/edit.png" alt="" />
                      </div>
                      <div
                        class=""
                        @click.prevent="formVar.confirmModal = true"
                      >
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data">
            <div>No records Found!</div>
          </div>
          <div class="table-footer">
            <div class="entries">
              Showing <span>0</span> to <span>0</span> of <span>0</span> entries
            </div>
            <div class="pagination">
              <icon-left-double-arrow></icon-left-double-arrow>
              <div class="page">1</div>
              <div class="page active">2</div>
              <div class="page">3</div>
              <icon-right-double-arrow></icon-right-double-arrow>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <Modal v-model:show="formVar.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button
          class="btn grey-btn cancel-btn"
          @click.prevent="formVar.confirmModal = false"
        >
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal
      v-model:show="formVar.addModal"
      class="add-expense-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Expenses</div>
        <div class="close-btn" @click.prevent="formVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="table-outer mb-16">
          <table class="table">
            <thead class="table-header">
              <th>Expense Title</th>
              <th>Expense Type</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Pay Mode</th>
              <th>Tax</th>
              <th>Amount(₹)</th>
              <th>Note</th>
              <th>Documents</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" placeholder="Expense Title" />
                </td>
                <td>
                  <SingleSelect
                    v-model="formVar.expense_type"
                    :options="expenseTypeOptions"
                    @selected="handleSelectedOption"
                    placeholder="Select State"
                  ></SingleSelect>
                </td>
                <td>
                  <input type="text" placeholder="Vendor Name" />
                </td>
                <td>
                  <div class="date-input">
                    <input
                      type="date"
                      v-model="inputDate"
                      @change="onDateChange"
                    />
                    <div class="icon">
                      <img src="/src/assets/images/icons/calender.svg" alt="" />
                    </div>
                  </div>
                </td>
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
                <td>
                  <MultiSelect
                    :options="tableTaxOptions"
                    :tabs="tab"
                    @selected="handleSelectedOption"
                    placeholder="Select Tax"
                  />
                </td>
                <td>
                  <input type="number" placeholder="Amount" />
                </td>
                <td>
                  <input type="text" placeholder="Note" />
                </td>
                <td>
                  <div class="doc-row">
                    <div class="pic-upload">
                      <img
                        v-if="formVar.imagePreview"
                        :src="formVar.imagePreview"
                        class="preview-image pic"
                        id="profilePic"
                        alt=""
                      />
                      <img
                        v-else
                        src="/src/assets/images/png/add.png"
                        class="dummy-img pic"
                        alt=""
                      />
                      <label for="imgUpload" class="upload-file-block">
                        Add
                      </label>
                      <input
                        class="uploadProfileInput"
                        type="file"
                        name="profile_pic"
                        id="imgUpload"
                        accept="image/png"
                        @change="previewProfile($event, profilePic)"
                        style="display: none"
                      />
                      <div class="delete-icon">
                        <icon-cross></icon-cross>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="save-btn">
          <button class="btn black-btn w-10-r">Add</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  confirmModal: false,
  addModal: false,
  expense_type: null,
  imagePreview: "",
});

const expenseData = reactive([
  {
    expense_title: "Fashion",
    expense_type: "Fashion",
    date: "21/05/2022",
    vendor: "Mall",
    pay_mode: "Cash",
    tax: "18% CGST",
    amt: 2000,
    note: "Have a nice",
  },
]);

//search select start//
const expenseTypeOptions = [
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

// Upload Docs
async function previewProfile(event, id) {
  if (event) {
    const input = await event.target;
    if (input.files[0].type === "image/png") {
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          formVar.imagePreview = e.target.result;
        };
        if (input.files[0]) {
          reader.readAsDataURL(input.files[0]);
          await saveProfile(id, input.files[0]);
        }
      }
    } else {
      formVar.imagePreview = null;
      store.dispatch("ErrorSuccess/error", {
        msg: "Upload image in png, jpeg, jpg format.",
      });
    }
  }
}
</script>

<style>
</style>