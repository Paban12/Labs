<template>
  <section class="reference-doctor-page">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">Reference Doctor</div>
        <div class="card-body">
          <div class="top-row">
            <div class="search-select">
              <div class="searchbar">
                <input type="text" placeholder="Search By Doctor" />
                <img src="/src/assets/images/png/search.png" alt="" />
              </div>
              <div class="select-dropdown">
                <select name="" id="">
                  <option value="">All</option>
                  <option value="">Chat</option>
                </select>
              </div>
            </div>
            <div class="btns flex align-center gap-10">
              <button class="btn black-btn">Download</button>
              <button class="btn black-btn">Update</button>
              <button
                class="btn black-btn"
                @click.prevent="formVar.addModal = true"
              >
                + Add
              </button>
            </div>
          </div>
          <div class="dr-table">
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Sharing (%)</th>
                  <th>Reg. No.</th>
                  <th>Clinic/Hospital</th>
                  <th>Mobile/Email</th>
                  <th>Options</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in doctorData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.share }}</td>
                    <td>{{ item.reg_no }}</td>
                    <td>{{ item.clinic_hospital }}</td>
                    <td>{{ item.mob_email }}</td>
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
                Showing <span>0</span> to <span>0</span> of
                <span>0</span> entries
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
    </div>
    <!-- modals -->
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
      class="mid-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Doctor Detail</div>
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
            <input type="text" placeholder="Doctor Name" />
          </div>
          <div class="form-item mb-16">
            <SingleSelect
              v-model="formVar.speciality"
              :options="specialityOptions"
              @selected="handleSelectedOption"
              placeholder="Select Specialization"
            ></SingleSelect>
          </div>
          <div class="form-item mb-16">
            <input type="number" placeholder="Registration No" />
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Clinic/Hospital Name" />
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            <input type="number" placeholder="Phone No" />
          </div>
          <div class="form-item mb-16">
            <input type="number" placeholder="Landline No" />
          </div>
          <div class="form-item mb-16">
            <input type="number" placeholder="Email" />
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            <SingleSelect
              v-model="formVar.state"
              :options="stateOptions"
              @selected="handleSelectedOption"
              placeholder="Select state"
            ></SingleSelect>
          </div>
          <div class="form-item mb-16">
            <SingleSelect
              v-model="formVar.city"
              :options="cityOptions"
              @selected="handleSelectedOption"
              placeholder="Select city"
            ></SingleSelect>
          </div>
          <div class="form-item mb-16">
            <input type="number" placeholder="Pincode" />
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            <input type="number" placeholder="Lab/Diagnostic Sharing (%)" />
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Address" />
          </div>
        </div>

        <div class="permission">
          <div class="data flex align-center gap-10">
            <input type="checkbox" class="w-max" />
            <span class="text mb-0"
              >Permanently Lab/Diagnostic Not Sharing</span
            >
          </div>
        </div>
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
  confirmModal: false,
  speciality: null,
  state: null,
  city: null,
  imagePreview: "",
});

const doctorData = reactive([
  {
    name: "Dr. Rohit Sharma",
    share: 5,
    reg_no: 12578,
    clinic_hospital: "Maharshi Karve Hospital",
    mob_email: "+91 8888888888",
  },
]);

//search select
const specialityOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const cityOptions = [
  { id: 1, name: "Ratnagiri" },
  { id: 2, name: "Mumbai" },
];
const stateOptions = [
  { id: 1, name: "Goa" },
  { id: 2, name: "Maharashtra" },
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