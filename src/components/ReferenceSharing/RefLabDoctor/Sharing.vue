<template>
  <section class="ref-sharing-page common-list-page">
    <div class="card">
      <div class="heading">
        <div class="title">Default Sharing</div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search By Ref Doc" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Reference Doctor</th>
              <th>Sharing</th>
              <th>Portal Access</th>
              <th>Tests Report Access</th>
              <th>Sharing Access</th>
              <th>Options</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in testData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.ref_doctor }}</td>
                <td>{{ item.share }}</td>
                <td>{{ item.portal_access }}</td>
                <td>{{ item.report_access }}</td>
                <td>{{ item.sharing_access }}</td>
                <td class="text-center">
                  <div class="option-btns">
                    <div class="" @click.prevent="formVar.addModal = true">
                      <img src="/src/assets/images/png/edit.png" alt="" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data">
          <div >No records Found!</div>
        </div>
        <div class="table-footer">
          <div class="entries">
            Showing <span>0</span> to <span>0</span> of <span>0</span> entries
          </div>
          <div class="pagination">
            <span>First</span>
            <span>Previous</span>
            <div class="page">1</div>
            <span>Next</span>
            <span>Last</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <Modal
      v-model:show="formVar.addModal"
      class="big-modall"
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
            <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic" alt="" />
            <img v-else src="/src/assets/images/png/man.png" class="dummy-img pic" alt="" />
            <label for="imgUpload" class="upload-file-block">
              Upload Pic
            </label>
            <input class="uploadProfileInput" type="file" name="profile_pic" id="imgUpload" accept="image/png"
              @change="previewProfile($event, profilePic)" style="display: none" />
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Doctor Name</div>
          <input type="text" placeholder="Doctor Name">
        </div>
        <div class="two-inputs">
          <div class="form-item mb-16">
            <div class="title">Specialization</div>
            <SingleSelect
              v-model="formVar.speciality"
              :options="specialityOptions"
              @selected="handleSelectedOption"
              placeholder="Select Speciality"
            ></SingleSelect>
          </div>
          <div class="form-item mb-16">
            <div class="title">Registration Number</div>
            <input type="number" placeholder="Reg No">
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Clinic/Hospital Name</div>
          <input type="text" placeholder="Clinic/Hospital Name">
        </div>
        <div class="form-item mb-16">
          <div class="title">Lab/Diagnostic Sharing</div>
          <input type="number" placeholder="00 %">
        </div>
        <div class="two-inputs">
          <div class="form-item mb-16">
            <div class="title">Phone No</div>
            <input type="number" placeholder="Phone No">
          </div>
          <div class="form-item mb-16">
            <div class="title">Landline No</div>
            <input type="number" placeholder="Landline No">
          </div>
        </div>
        <div class="two-inputs">
          <div class="form-item mb-16">
            <div class="title">Email</div>
            <input type="number" placeholder="Email">
          </div>
          <div class="form-item mb-16">
            <div class="title">State</div>
            <SingleSelect
              v-model="formVar.state"
              :options="stateOptions"
              @selected="handleSelectedOption"
              placeholder="Select state"
            ></SingleSelect>
          </div>
        </div>
        <div class="two-inputs">
          <div class="form-item mb-16">
            <div class="title">State</div>
            <SingleSelect
              v-model="formVar.city"
              :options="cityOptions"
              @selected="handleSelectedOption"
              placeholder="Select city"
            ></SingleSelect>
          </div>
          <div class="form-item mb-16">
            <div class="title">Pincode</div>
            <input type="number" placeholder="Pincode">
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Address</div>
          <textarea name="" id="" rows="4" placeholder="Address"></textarea>
        </div>
        <div class="permissions">

        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  addModal: false,
  speciality: null,
  state: null,
  city: null,
  imagePreview: "",
})

const testData = reactive([
  {
    ref_doctor: 'Dr. Shukla',
    share: 5,
    portal_access: 'Yes',
    report_access: 'Sample Name, Sample collection status, Test/sample Process status, View Report, Test Price/Amount	',
    sharing_access: 'Test Amount, Dr. Discount, Lab Discount, Dr. Due, RCPT No., Paid Date',
  }
])

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