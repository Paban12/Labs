<template>
  <section class="calender-setting-page">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">Calender</div>
        <div class="card-body">
          <div class="card-sub-tabs mb-16">
            <div
              class="tab"
              @click.prevent="calender.tab = 1"
              :class="calender.tab === 1 ? 'active' : ''"
            >
              <div class="title">Practice Timing</div>
            </div>
            <div
              class="tab"
              @click.prevent="calender.tab = 2"
              :class="calender.tab === 2 ? 'active' : ''"
            >
              <div class="title">Default Setting</div>
            </div>
            <div
              class="tab"
              @click.prevent="calender.tab = 3"
              :class="calender.tab === 3 ? 'active' : ''"
            >
              <div class="title">Lab Categories</div>
            </div>
          </div>
          <div class="tab-content practice-timing" v-if="calender.tab === 1">
            <h4 class="mb-16">Timing Slots of Calendar</h4>
            <div class="select-row mb-16">
              <div class="text">LAB Calender :</div>
              <div class="select-dropdown">
                <select name="" id="">
                  <option value="">5 Minutes</option>
                  <option value="">10 Minutes</option>
                  <option value="">15 Minutes</option>
                  <option value="">20 Minutes</option>
                  <option value="">30 Minutes</option>
                </select>
              </div>
            </div>
            <div class="list">
              <div class="list-header">Thyromax Labs</div>
              <div class="list-data">
                <div class="day f-w-bold">MON - SUN</div>
                <div class="text">Full Time</div>
              </div>
            </div>
          </div>
          <div class="tab-content default-setting" v-if="calender.tab === 2">
            <div class="row">
              <div class="form-item col-33 mb-16">
                <div class="title">Patient Profile Compulsory Field</div>
                <div class="check-inputs">
                  <div class="input">
                    <input type="checkbox" />
                    <div class="text">Age/DOB</div>
                  </div>
                  <div class="input">
                    <input type="checkbox" />
                    <div class="text">Gender</div>
                  </div>
                  <div class="input">
                    <input type="checkbox" />
                    <div class="text">Address</div>
                  </div>
                </div>
              </div>
              <div class="form-item col-33 mb-16">
                <div class="title">Week Starts On</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Today</option>
                    <option value="">Monday</option>
                  </select>
                </div>
              </div>
              <div class="form-item col-33 mb-16">
                <div class="title">Default View</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Day</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="toggle-row mb-16">
              <div class="text">Allow Lab Appointments Direct Done On</div>
              <label class="toggle-control">
                <input type="checkbox" checked="checked" />
                <span class="control"></span>
              </label>
            </div>
            <div class="row">
              <div class="form-item col-33 mb-16">
                <div class="title">Lab Calender</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Lab Category</option>
                    <option value="">Lab Collection Center</option>
                  </select>
                </div>
              </div>
              <div class="form-item col-33 mb-16">
                <div class="title">Lab Calender Ref. lab By & To</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Reference Lab To</option>
                    <option value="">Reference Lab By</option>
                  </select>
                </div>
              </div>
              <div class="form-item toggle-item col-33 mb-16">
                <div class="title">
                  Lab Appointment Show Reference Lab To & By
                </div>
                <div class="toggle-btn">
                  <label class="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span class="control"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-item w-100 mb-16">
                <div class="title">Appointment Token</div>
                <div class="check-inputs">
                  <div class="input">
                    <input type="checkbox" />
                    <div class="text">Lab</div>
                  </div>
                  <div class="input">
                    <input type="checkbox" />
                    <div class="text">Token Edit</div>
                  </div>
                  <input type="text" placeholder="Token Prefix" />
                </div>
              </div>
            </div>
            <div class="patient-prefix mb-16">
              <button
                class="btn black-btn"
                @click.prevent="calender.prefixModal = true"
              >
                Patient Prefix
                <icon-edit></icon-edit>
              </button>
            </div>
            <div class="doctor-sign-section">
              <h4 class="mb-10">Print & Share Doctor/Practice Signature</h4>
              <div class="table-outer mb-16">
                <table class="table">
                  <thead>
                    <th>Sr. No.</th>
                    <th>Doctor/Practice Name</th>
                    <th>Speciality/Subheading</th>
                    <th>Registration No.</th>
                    <th>Staff Maping</th>
                    <th>Signature/Stamp</th>
                    <th class="text-center">Option</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in drSignData" :key="item">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <input type="text" placeholder="Doctor Name" />
                      </td>
                      <td>
                        <input type="text" placeholder="Speciality" />
                      </td>
                      <td>
                        <input type="number" placeholder="Registration No" />
                      </td>
                      <td>
                        <SingleSelect
                          v-model="calender.staff"
                          :options="staffOptions"
                          @selected="handleSelectedOption"
                          placeholder="Select Dr/Staff Name"
                        ></SingleSelect>
                      </td>
                      <td>
                        <div class="pic-upload">
                          <img
                            v-if="calender.imagePreview"
                            :src="calender.imagePreview"
                            class="preview-image pic"
                            id="profilePic"
                            alt=""
                          />
                          <img
                            v-else
                            src="/src/assets/images/png/sign.png"
                            class="dummy-img pic"
                            alt=""
                          />
                          <label for="imgUpload" class="upload-file-block">
                            Upload Sign
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
                      </td>
                      <td class="text-center">
                        <div class="option-btns">
                          <div
                            class=""
                            @click.prevent="calender.confirmModal = true"
                          >
                            <img
                              src="/src/assets/images/png/delete.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="add-ref text-blue pointer mb-16">
                + Add New Reference
              </div>
            </div>
          </div>
          <div class="tab-content lab-category" v-if="calender.tab === 3">
            <div class="search-select mb-16">
              <div class="left">
                <input type="text" placeholder="Add Lab Category">
                <button class="btn black-btn save-btn">Save</button>
              </div>
              <div class="searchbar">
                <input type="text" placeholder="Search By Lab Category" />
                <img src="/src/assets/images/png/search.png" alt="" />
              </div>
            </div>
            <div class="dept-list">
              <div class="list-item">
                Utility Bills
                <icon-cross></icon-cross>
              </div>
              <div class="list-item">
                Meals and Entertainments
                <icon-cross></icon-cross>
              </div>
              <div class="list-item">
                Meals and Entertainments
                <icon-cross></icon-cross>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <Modal
      v-model:show="calender.prefixModal"
      class="prefix-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Patient Prefix</div>
        <div class="close-btn" @click.prevent="calender.prefixModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="check-row mb-16">
        <div class="input">
          <input type="checkbox" />
          <div class="title">Prefix On</div>
        </div>
        <div class="input">
          <input type="checkbox" />
          <div class="title">Patient Prefix Compulsary</div>
        </div>
      </div>
      <div class="table-outer mb-16">
        <table class="table">
          <thead>
            <th>Prefix</th>
            <th>Gender Type</th>
            <th>Options</th>
          </thead>
          <tbody>
            <tr v-for="item in prefixData" :key="item">
              <td>{{ item.prefix }}</td>
              <td>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Default</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                  </select>
                </div>
              </td>
              <td>
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
      <div class="add-btn mb-16">
        <input type="text" placeholder="Enter Prefix" />
        <button class="btn black-btn">Add</button>
      </div>
      <div class="save-btn flex justify-end">
        <button class="btn black-btn w-10-r">Save</button>
      </div>
    </Modal>
    <Modal v-model:show="calender.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button
          class="btn grey-btn cancel-btn"
          @click.prevent="calender.confirmModal = false"
        >
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const calender = reactive({
  tab: 1,
  prefixModal: false,
  confirmModal: false,
  staff: null,
  imagePreview: "",
});

const prefixData = reactive([
  {
    prefix: "Mr",
  },
  {
    prefix: "Mrs",
  },
  {
    prefix: "Ms",
  },
  {
    prefix: "Miss",
  },
  {
    prefix: "Master",
  },
  {
    prefix: "Smt",
  },
  {
    prefix: "Dr",
  },
  {
    prefix: "Sir",
  },
]);

const drSignData = reactive([{}]);
//for table data
const staffOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

// Upload Docs
async function previewProfile(event, id) {
  if (event) {
    const input = await event.target;
    if (input.files[0].type === "image/png") {
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          calender.imagePreview = e.target.result;
        };
        if (input.files[0]) {
          reader.readAsDataURL(input.files[0]);
          await saveProfile(id, input.files[0]);
        }
      }
    } else {
      calender.imagePreview = null;
      store.dispatch("ErrorSuccess/error", {
        msg: "Upload image in png, jpeg, jpg format.",
      });
    }
  }
}
</script>

<style>
</style>