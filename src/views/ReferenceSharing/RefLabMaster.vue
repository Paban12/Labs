<template>
  <section class="ref-lab-master common-list-page">
    <div class="card">
      <div class="heading">
        <div class="title">Reference Lab Master</div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search By Test/Ref Doc" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
          <div class="add-btn">
            <button
              class="btn black-btn"
              @click.prevent="formVar.addModal = true"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Reference Lab</th>
              <th>Owner Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>City</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in masterData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.ref_lab }}</td>
                <td>{{ item.owner }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.city }}</td>
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
    <!-- modals -->
    <Modal
      v-model:show="formVar.addModal"
      class="big-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Reference Lab</div>
        <div class="close-btn" @click.prevent="formVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="dr-pic flex justify-center mb-16">
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
              src="/src/assets/images/png/man.png"
              class="dummy-img pic"
              alt=""
            />
            <label for="imgUpload" class="upload-file-block">
              Upload Pic
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
          </div>
        </div>

        <div class="row">
          <div class="form-item mb-16">
            <input type="text" placeholder="Reference Lab Name" />
          </div>
          <div class="form-item col-255 mb-16">
            <input type="number" placeholder="PAN Card No." />
          </div>
          <div class="form-item col-255 mb-16">
            <input type="number" placeholder="GSTIN No." />
          </div>
          <div class="form-item col-255 mb-16">
            <input type="number" placeholder="TIN No." />
          </div>
          <div class="form-item col-255 mb-16">
            <input type="number" placeholder="CST No." />
          </div>
        </div>
        <h4 class="mb-16">Personal Info</h4>
        <div class="row">
          <div class="form-item col-33 mb-16">
            <input type="text" placeholder="First Name" />
          </div>
          <div class="form-item col-33 mb-16">
            <input type="text" placeholder="Middle Name" />
          </div>
          <div class="form-item col-33 mb-16">
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <h4 class="mb-16">Licence</h4>
        <div class="row">
          <div class="form-item col-5 mb-16">
            <input type="number" placeholder="Drug Licence No." />
          </div>
          <div class="form-item col-5 mb-16">
            <input type="number" placeholder="Food Licence No." />
          </div>
        </div>
        <h4 class="mb-16">Address</h4>
        <div class="row">
          <div class="form-item col-33 mb-16">
            <SingleSelect
              v-model="formVar.state"
              :options="stateOptions"
              @selected="handleSelectedOption"
              placeholder="Select city"
            ></SingleSelect>
          </div>
          <div class="form-item col-33 mb-16">
            <SingleSelect
              v-model="formVar.city"
              :options="cityOptions"
              @selected="handleSelectedOption"
              placeholder="Select city"
            ></SingleSelect>
          </div>
          <div class="form-item col-33 mb-16">
            <input type="number" placeholder="Pin Code" />
          </div>
        </div>
        <h4 class="mb-16">Bank Info</h4>
        <div class="row">
          <div class="form-item col-33 mb-16">
            <div class="select-dropdown">
              <select name="" id="">
                <option value="">Cash</option>
                <option value="">Card</option>
                <option value="">Cheque</option>
                <option value="">Net Banking</option>
                <option value="">Paytm</option>
                <option value="">Credit Card</option>
                <option value="">Debit Card</option>
                <option value="">Visa Card</option>
                <option value="">American Express Card</option>
                <option value="">Master Card</option>
              </select>
            </div>
          </div>
          <div class="form-item col-33 mb-16">
            <input type="text" placeholder="Credit Day" />
          </div>
          <div class="form-item col-33 mb-16">
            <input type="number" placeholder="Credit Amount" />
          </div>
        </div>
        <div class="row bank-row">
          <div class="form-item col-33 mb-16">
            <input type="text" placeholder="Bank Name" />
          </div>
          <div class="form-item col-33 mb-16">
            <input type="number" placeholder="Account No" />
          </div>
          <div class="form-item col-33 mb-16">
            <input type="text" placeholder="IFSC Code" />
          </div>
          <div class="delete-icon">
            <img src="/src/assets/images/png/delete.png" alt="" />
          </div>
        </div>
        <div class="add-bank text-blue f-w-bold pointer">+ Add New Bank</div>
        <div class="save-btn flex justify-end">
          <button class="btn black-btn w-10-r">Save</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  addModal: false,
  state: null,
  city: null,
});

const masterData = reactive([
  {
    ref_lab: "Detox Lab",
    owner: "Raju Singh",
    mobile: "+91 8888888888",
    email: "owner@gmail.com",
    city: "Kolkata",
  },
]);

//search select
const stateOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const cityOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

// Upload Logo
async function previewProfile(event, id) {
  if (event) {
    const input = await event.target;
    if (
      input.files[0].type === "image/png" ||
      input.files[0].type === "image/jpeg" ||
      input.files[0].type === "image/jpg"
    ) {
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.imagePreview = e.target.result;
        };
        if (input.files[0]) {
          reader.readAsDataURL(input.files[0]);
          await saveProfile(id, input.files[0]);
        }
      }
    } else {
      preview.imagePreview = null;
      store.dispatch("ErrorSuccess/error", {
        msg: "Upload image in png, jpeg, jpg format.",
      });
    }
  }
}
</script>

<style>
</style>