<template>
  <section class="practice-details-page">
    <div class="container">
      <div class="card">
        <div class="card-header-bg">Practice Details</div>
        <div class="card-body">
          <form action="" class="form">
            <div class="self-details single-section">
              <h4 class="main-title">Personal Details</h4>
              <div class="self-details-row">
                <div class="logo-section">
                  <div class="title">Upload Logo</div>
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
                      src="/src/assets/images/png/img.png"
                      class="dummy-img pic"
                      alt=""
                    />
                    <label for="imgUpload" class="upload-file-block">
                      Upload Logo
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
                <div class="right">
                  <div class="two-inputs">
                    <div class="form-item col-5 mb-16">
                      <div class="title">Diagnostic Name</div>
                      <input type="text" placeholder="Diagnostic Name" />
                    </div>
                    <div class="form-item col-5 mb-16">
                      <div class="title">Practice Registration Number</div>
                      <input
                        type="text"
                        placeholder="Practice Registration Number"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-item col-33">
                      <div class="p-id">Practice ID : 45494</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="address-details single-section">
              <h4 class="main-title">Address Details</h4>
              <div class="two-inputs">
                <div class="form-item col-25 mb-16">
                  <div class="title">Country</div>
                  <input type="text" placeholder="" value="India" disabled />
                </div>
                <div class="form-item col-25 mb-16">
                  <div class="title">State</div>
                  <SingleSelect
                    v-model="formVar.state"
                    :options="stateOptions"
                    @selected="handleSelectedOption"
                    placeholder="Select state"
                  ></SingleSelect>
                </div>
                <div class="form-item col-25 mb-16">
                  <div class="title">City</div>
                  <SingleSelect
                    v-model="formVar.city"
                    :options="cityOptions"
                    @selected="handleSelectedOption"
                    placeholder="Select city"
                  ></SingleSelect>
                </div>
                <div class="form-item col-25 mb-16">
                  <div class="title">Locality</div>
                  <input type="text" placeholder="Locality" />
                </div>
              </div>
              <div class="two-inputs">
                <div class="form-item col-25 mb-16">
                  <div class="title">Landmark</div>
                  <input type="text" placeholder="Landmark" />
                </div>
                <div class="form-item col-25 mb-16">
                  <div class="title">Pincode</div>
                  <input type="text" placeholder="Pincode" />
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">Address</div>
                  <input type="text" placeholder="Address" />
                </div>
              </div>
              <div class="map-section">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="100%"
                      height="100%"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=kolkata&t=&z=10&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="address-details single-section">
              <h4 class="main-title">Patient Contact</h4>
              <div class="two-inputs">
                <div class="form-item col-33 mb-16">
                  <div class="title">Mobile Primary</div>
                  <input type="number" placeholder=" Mobile Primary">
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Mobile Seconday</div>
                  <input type="number" placeholder="Mobile Seconday">
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Email Primary</div>
                  <input type="email" placeholder="Email Primary">
                </div>
              </div>
              <div class="two-inputs">
                <div class="form-item col-33 mb-16">
                  <div class="title">Email Secondary</div>
                  <input type="email" placeholder="Email Secondary">
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Landline Primary</div>
                  <input type="number" placeholder="Landline Primary">
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Landline Secondary</div>
                  <input type="number" placeholder="Landline Secondary">
                </div>
              </div>
            </div>
            <div class="bank-details single-section">
              <h4 class="main-title">Bank Details</h4>
              <div class="two-inputs">
                <div class="form-item col-25 mb-16">
                  <div class="title">Pan Card No</div>
                  <input type="number" placeholder="Pan Card No">
                </div>
                <div class="form-item col-25 mb-16">
                  <div class="title">GSTIN No</div>
                  <input type="number" placeholder="GSTIN No">
                </div>
                <div class="form-item col-25 mb-16">
                  <div class="title">TIN No</div>
                  <input type="number" placeholder="TIN No">
                </div>
                <div class="form-item col-25 mb-16">
                  <div class="title">CST No</div>
                  <input type="number" placeholder="CST No">
                </div>
              </div>
              <div class="two-input bank-row">
                <div class="form-item col-33">
                  <input type="text" placeholder="Bank Name">
                </div>
                <div class="form-item col-33">
                  <input type="number" placeholder="Account No">
                </div>
                <div class="form-item col-33">
                  <input type="text" placeholder="IFSC Code">
                </div>
                <div class="delete-icon">
                  <img src="/src/assets/images/png/delete.png" alt="">
                </div>
              </div>
              <div class="add-bank text-blue f-w-bold pointer">
                + Add New Bank
              </div>
            </div>
            <div class="licence-details single-section">
              <h4 class="main-title">Licence Details</h4>
              <div class="two-inputs">
                <div class="form-item col-5 mb-16">
                  <div class="title">Drug Licence No</div>
                  <input type="number" placeholder="Drug Licence No">
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">Food Licence No</div>
                  <input type="number" placeholder="Food Licence No">
                </div>
              </div>
            </div>
            <div class="stamp-details single-section">
              <h4 class="main-title">Practice Stamp</h4>
              <div class="title f-w-bold">Thyromax Labs</div>
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
                  src="/src/assets/images/png/img.png"
                  class="dummy-img pic"
                  alt=""
                />
                <label for="imgUpload" class="upload-file-block">
                  Upload Stamp
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
            <div class="bank-details single-section">
              <h4 class="main-title">Bank Details For Thyromax Lab's Pay</h4>
              <div class="two-inputs">
                <div class="form-item col-33 mb-16">
                  <div class="title">Name as per Passbook</div>
                  <input type="text" placeholder="Name as per Passbook">
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Bank Name</div>
                  <SingleSelect
                    v-model="formVar.bank"
                    :options="bankOptions"
                    @selected="handleSelectedOption"
                    placeholder="Select bank"
                  ></SingleSelect>
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Account No</div>
                  <input type="number" placeholder="Account No">
                </div>
              </div>
              <div class="two-inputs">
                <div class="form-item col-33 mb-16">
                  <div class="title">IFSC Code</div>
                  <input type="text" placeholder="IFSC Code">
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Select Account Type</div>
                  <div class="select-dropdown">
                    <select name="" id="">
                      <option value="">Saving</option>
                      <option value="">Current</option>
                      <option value="">Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-item col-33 mb-16">
                  <div class="title">Pan Card No</div>
                  <input type="text" placeholder="Pan Card No">
                </div>
              </div>
              <div class="doc-row">
                <div class="doc">
                  <div class="title">Cancelled Cheque</div>
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
                      src="/src/assets/images/png/img.png"
                      class="dummy-img pic"
                      alt=""
                    />
                    <label for="imgUpload" class="upload-file-block">
                      Upload Cheque
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
                <div class="doc">
                  <div class="title">Pan Card</div>
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
                      src="/src/assets/images/png/img.png"
                      class="dummy-img pic"
                      alt=""
                    />
                    <label for="imgUpload" class="upload-file-block">
                      Upload Pan
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
              </div>
            </div>
            <div class="save-btn flex justify-end">
              <button class="btn black-btn w-10-r">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  imagePreview: "",
  state: null,
  city: null,
  bank: null,
});

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

//search select
const cityOptions = [
  { id: 1, name: "Ratnagiri" },
  { id: 2, name: "Mumbai" },
];
const stateOptions = [
  { id: 1, name: "Goa" },
  { id: 2, name: "Maharashtra" },
];
const bankOptions = [
  { id: 1, name: "Bank Of India" },
  { id: 2, name: "State Bank Of India" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

</script>

<style>
</style>