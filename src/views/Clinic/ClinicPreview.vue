<template>
  <section class="clinic-preview-page">
    <div class="container">
      <div class="row container-row">
        <div class="col-5">
          <h3 class="head card mb-10 f-w-bold">Clinic Preferences</h3>
          <form action="" class="form">
            <div class="card">
              <div class="card-header mb-16 f-w-bold">Clinic Information</div>
              <div class="card-body">
                <div class="row">
                  <div class="form-item col-5 mb-16">
                    <div class="title">Clinic Name (Will Appear On Bill)</div>
                    <input type="text" placeholder="Name" />
                    <div class="err-msg">Please enter clinic name</div>
                  </div>
                  <div class="form-item col-5 mb-16">
                    <div class="title">Clinic Email Id</div>
                    <input type="text" placeholder="Enter Email Id" />
                    <div class="err-msg">Please enter Email Id</div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-item col-5 mb-16">
                    <div class="title">Phone No (Primary)</div>
                    <div class="dr-input">
                      <div class="dr-tag">+91</div>
                      <input type="number" placeholder="Refered by" />
                    </div>
                    <div class="err-msg">Please enter phone no</div>
                  </div>
                  <div class="form-item col-5 mb-16">
                    <div class="title">Phone No (Secondary)</div>
                    <div class="dr-input">
                      <div class="dr-tag">+91</div>
                      <input type="number" placeholder="Refered by" />
                    </div>
                    <div class="err-msg">Please enter phone no</div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-item col-10 mb-16">
                    <div class="title">Clinic Address</div>
                    <textarea
                      name=""
                      id=""
                      rows="4"
                      placeholder="Clinic Address"
                    ></textarea>
                    <div class="err-msg">Please enter clinic address</div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-item col-5 mb-16">
                    <div class="title">State</div>
                    <SingleSelect
                      v-model="preview.state"
                      :options="stateOptions"
                      @selected="handleSelectedOption"
                      placeholder="Select state"
                    ></SingleSelect>
                    <div class="err-msg">Please select state</div>
                  </div>
                  <div class="form-item col-5 mb-16">
                    <div class="title">City</div>
                    <SingleSelect
                      v-model="preview.city"
                      :options="cityOptions"
                      @selected="handleSelectedOption"
                      placeholder="Select city"
                    ></SingleSelect>
                    <div class="err-msg">Please select city</div>
                  </div>
                </div>
              </div>
              <div class="card-header mb-16 f-w-bold">Other Information</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="form-item mb-16">
                      <div class="title">Reg No</div>
                      <input type="text" placeholder="Reg No" />
                      <div class="err-msg">Please enter Reg No</div>
                    </div>
                    <div class="form-item mb-16">
                      <div class="title">Patient ID Prefix</div>
                      <input type="text" placeholder="Patient Id" />
                      <div class="err-msg">Please enter patient id</div>
                    </div>
                    <div class="form-item mb-16">
                      <div class="title"></div>
                      <div class="time-slot">
                        <div
                          class="time"
                          @click.prevent="preview.tab = 1"
                          :class="preview.tab === 1 ? 'active' : ''"
                        >
                          05
                        </div>
                        <div
                          class="time"
                          @click.prevent="preview.tab = 2"
                          :class="preview.tab === 2 ? 'active' : ''"
                        >
                          10
                        </div>
                        <div
                          class="time"
                          @click.prevent="preview.tab = 3"
                          :class="preview.tab === 3 ? 'active' : ''"
                        >
                          15
                        </div>
                        <div
                          class="time"
                          @click.prevent="preview.tab = 4"
                          :class="preview.tab === 4 ? 'active' : ''"
                        >
                          30
                        </div>
                        <div
                          class="time"
                          @click.prevent="preview.tab = 5"
                          :class="preview.tab === 5 ? 'active' : ''"
                        >
                          45
                        </div>
                        <input type="number" placeholder="Enter" />
                      </div>
                      <div class="err-msg">Please select/enter time</div>
                    </div>
                    <div class="form-item mb-16">
                      <div class="title">
                        Appointment’s Start At (Ex: 9 For 9am)
                      </div>
                      <input type="text" placeholder="Enter" />
                      <div class="err-msg">Please enter</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-item mb-16">
                      <div class="title">Specialization</div>
                      <MultiSelect
                        :options="specialityOptions"
                        :tabs="tab"
                        @selected="handleSelectedOption"
                        placeholder="Select Specialization"
                      />
                      <div class="err-msg">Please select specialization</div>
                    </div>
                    <div class="form-item mb-16">
                      <div class="title">Upload Clinic Logo</div>
                      <div class="pic-upload-wrapper">
                        <div class="pic-upload">
                          <img
                            v-if="preview.imagePreview"
                            :src="preview.imagePreview"
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
                            Click
                          </label>
                          <input
                            class="uploadProfileInput"
                            type="file"
                            name="profile_pic"
                            id="imgUpload"
                            accept="image/*"
                            @change="previewProfile($event, profilePic)"
                            style="display: none"
                          />
                        </div>
                      </div>
                      <div class="err-msg">Please upload logo</div>
                    </div>
                    <div class="form-item mb-16">
                      <div class="title">Upload Doctor Sign</div>
                      <div class="pic-upload-wrapper">
                        <div class="pic-upload">
                          <img
                            v-if="preview.imagePreview"
                            :src="preview.imagePreview"
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
                            Click
                          </label>
                          <input
                            class="uploadProfileInput"
                            type="file"
                            name="profile_pic"
                            id="imgUpload"
                            accept="image/*"
                            @change="previewProfile($event, profilePic)"
                            style="display: none"
                          />
                        </div>
                      </div>
                      <div class="err-msg">Please upload doctor sign</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btns flex align-center gap-16">
                <button class="btn clear-btn">Reset</button>
                <button class="btn black-btn">Save</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-5 visit-prescription">
          <h3 class="head card mb-10 f-w-bold">Preview</h3>
          <div
            class="card preview-card"
            id="preview-card"
            style="position: relative"
          >
            <div class="card-content" style="padding-bottom: 12rem">
              <div class="logo" style="display: none">
                <img src="/src/assets/images/png/logo.png" alt="image" />
              </div>
              <div
                class="clinic-details"
                style="
                  color: var(--red);
                  display: flex;
                  margin-bottom: 1rem;
                  border-bottom: 1px solid var(--red);
                  padding-bottom: 0.5rem;
                "
              >
                <div
                  class="info"
                  style="width: calc(50% - 3rem); font-size: 0.8rem"
                >
                  <h4 class="name mb-5" style="font-size: 1rem">
                    Divya Drishiti Doctor Cliic
                  </h4>
                  <div class="time" style="display: flex">
                    <div class="day" style="width: 4rem">Monday</div>
                    <div class="val">09:00 AM - 11:00 AM</div>
                  </div>
                  <div class="time" style="display: flex">
                    <div class="day" style="width: 4rem">Thursday</div>
                    <div class="val">09:00 AM - 11:00 AM</div>
                  </div>
                </div>
                <div class="clinic-logo" style="width: 6rem">
                  <img
                    src="/src/assets/images/png/logo.png"
                    style="width: 100%"
                    alt="image"
                  />
                </div>
                <div
                  class="info dr-info"
                  style="
                    width: calc(50% - 3rem);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                  "
                >
                  <h4 class="name mb-5">Dr. Abhijit Banaarajee</h4>
                  <div class="deg">MBBS, MD GYNOCOLOGIST</div>
                  <div class="reg">Reg: 98989809098</div>
                </div>
              </div>
              <div class="patient-content">
                <div
                  class="p-details"
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    font-size: 13px;
                    margin-bottom: 1rem;
                  "
                >
                  <div
                    class="row mb-10"
                    style="
                      display: flex;
                      align-items: flex-start;
                      width: 33.333%;
                      gap: 1rem;
                    "
                  >
                    <div class="col-5 flex" style="display: flex; width: 100%">
                      <div class="title f-w-bold" style="width: 4rem">Name</div>
                    </div>
                    <div class="col-5 flex" style="display: flex; width: 100%">
                      <div class="title f-w-bold" style="width: 4rem">
                        Phone
                      </div>
                    </div>
                  </div>
                  <div
                    class="row mb-10"
                    style="
                      display: flex;
                      align-items: flex-start;
                      width: 33.333%;
                      gap: 1rem;
                    "
                  >
                    <div class="col-5 flex" style="display: flex; width: 100%">
                      <div class="title f-w-bold" style="width: 4rem">Age</div>
                    </div>
                    <div class="col-5 flex" style="display: flex; width: 100%">
                      <div class="title f-w-bold" style="width: 4rem">Date</div>
                    </div>
                  </div>
                  <div
                    class="row mb-10"
                    style="
                      display: flex;
                      align-items: flex-start;
                      width: 33.333%;
                      gap: 1rem;
                    "
                  >
                    <div class="col-5 flex" style="display: flex; width: 100%">
                      <div class="title f-w-bold" style="width: 4rem">
                        Weight
                      </div>
                    </div>
                    <div class="col-5 flex" style="display: flex; width: 100%">
                      <div class="title f-w-bold" style="width: 4rem">
                        Height
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bottom-content"
                style="
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  padding: 1rem;
                "
              >
                <div
                  class="bottom-details"
                  style="
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1rem 0;
                    border-bottom: 1px solid var(--red);
                  "
                >
                  <div class="left">
                    <div
                      class="id"
                      style="font-size: 0.8rem; text-align: center"
                    >
                      Case ID WASS987987898
                    </div>
                    <img src="/src/assets/images/png/barcode.png" alt="" />
                  </div>
                  <div
                    class="right"
                    style="
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      text-align: center;
                    "
                  >
                    <img
                      src="/src/assets/images/png/sign.png"
                      style="width: 4rem"
                      alt=""
                    />
                    <h4 style="font-size: 1rem">Dr. Abhijit Banaarajee.</h4>
                    <div class="deg" style="font-size: 0.8rem">
                      MBBS, MD GYNOCOLOGIST
                    </div>
                  </div>
                </div>
                <div class="contact-details" style="margin-top: 1rem">
                  <div
                    class="data-row"
                    style="
                      margin-bottom: 0.5rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 1.5rem;
                    "
                  >
                    <div
                      class="data"
                      style="    display: flex;
                      align-items: center;
                      gap: 5px;
                    }"
                    >
                      <icon-phone
                        style="height: 1rem; width: 1rem"
                      ></icon-phone>
                      <div class="val" style="font-size: 0.85rem">
                        +91 9763500291 +91 9763500291
                      </div>
                    </div>
                    <div
                      class="data"
                      style="display: flex;
                        align-items: center;
                        gap: 5px;
                    }"
                    >
                      <icon-mail style="height: 1rem; width: 1rem"></icon-mail>
                      <div class="val" style="font-size: 0.85rem">
                        divyadrishitclicni@webappssoft.com
                      </div>
                    </div>
                  </div>
                  <div
                    class="data-row"
                    style="
                      margin-bottom: 0.5rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 1.5rem;
                    "
                  >
                    <div
                      class="data"
                      style="display: flex; align-items: center; gap: 5px"
                    >
                      <icon-location
                        style="height: 1rem; width: 1rem"
                      ></icon-location>
                      <div class="val" style="font-size: 0.85rem">
                        128 jodhpur Garden, Ops South city Mall Lake Gardens ,
                        Jadhavpur Kolkata 700045
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="share-btns">
            <div class="btn grade-btn" @click="printPage()">
              <img src="/src/assets/images/png/print.png" alt="image" />
              <div class="text">Print</div>
            </div>
            <div class="btn grade-btn">
              <img src="/src/assets/images/png/share.png" alt="image" />
              <div class="text">Share</div>
            </div>
            <div class="btn grade-btn">
              <img src="/src/assets/images/png/file.png" alt="image" />
              <div class="text">Download</div>
            </div>
            <div class="btn grade-btn">
              <img src="/src/assets/images/png/share.png" alt="image" />
              <div class="text">Share</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const preview = reactive({
  state: "",
  city: "",
  tab: 1,
  profile: null,
  imagePreview: "",
});

const stateOptions = [
  { id: 1, name: "Goa" },
  { id: 2, name: "Maharashtra" },
];
const cityOptions = [
  { id: 1, name: "Ratnagiri" },
  { id: 2, name: "Mumbai" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

//multi select
const specialityOptions = [
  { id: 1, name: "ENT" },
  { id: 2, name: "General Surgen" },
];
const tab = [];

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

function printPage() {
  const printContents = document.getElementById("preview-card").innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();
  // window.close();

  document.body.innerHTML = originalContents;
  window.close();
  // window.print();
}
</script>

<style>
</style>