<template>
  <section class="staff-details-page">
    <form action="" class="form" @submit.prevent="onSubmitStaff">
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Name</div>
          <input type="text" v-model="storeVar.name" placeholder="Enter Name" >
          <div class="err-msg" v-if="formVar.submit && nameValid">{{ nameValid }}</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Phone No</div>
          <input type="number" v-model="storeVar.mobile" placeholder="Enter phone no"
          v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)">
          <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Email</div>
          <input type="text" v-model="storeVar.emailId" placeholder="Enter Email">
          <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Gender</div>
          <Select v-model="storeVar.gender" :options="genderOptions" @selected="handleSelectedOption"
            placeholder="Select"></Select>
          <div class="err-msg" v-if="formVar.submit && passwordValid">{{ passwordValid }}</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Role</div>
          <Select v-model="storeVar.roles" :options="desOptions" @selected="handleSelectedOption" placeholder="Select">
          </Select>
          <div class="err-msg" v-if="formVar.submit && roleValid">{{ roleValid }}</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Designation</div>
          <input type="text" v-model="storeVar.designation" placeholder="Enter Designation">
            <div class="err-msg" v-if="formVar.submit && designationValid">{{ designationValid }}</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Text Signature</div>
          <input type="text" v-model="formVar.signature" placeholder="Enter Text Signature">
          <div class="err-msg" v-if="formVar.submit && signatureValid">{{ signatureValid }}</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Upload Sign (PNG Format only)</div>
          <div class="pic-upload">
            <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic" alt="" />
            <img v-else src="/src/assets/images/png/sign.png" class="dummy-img pic" alt="" />
            <label for="imgUpload" class="upload-file-block">
              Upload Sign
            </label>
            <input class="uploadProfileInput" type="file" name="profile_pic" id="imgUpload" accept="image/png"
              @change="previewProfile($event, profilePic)" style="display: none" />
          </div>
          <div class="err-msg" v-if="formVar.submit && fileValid">{{ fileValid }}</div>
        </div>
      </div>
      <div class="save-btn flex justify-center">
        <button type="submit" class="btn black-btn w-50">Update</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Staff);
const formVar = reactive({
  submit:false,
  des: "",
  speciality: "",
  imagePreview: "",
  name:null,
  email:null,
  phone:null,
  gender:null,
  password:null,
  signature:null,
})

const specialityOptions = [
  { id: 1, name: "Speciality1" },
  { id: 2, name: "Speciality2" },
];
const desOptions = [
  { id: 'EMPLOYEE', name: "EMPLOYEE" },
  { id: 'DOCTOR', name: "DOCTOR" },
  { id: 'STAFF', name: "STAFF" },
  { id: 'FRONT DESK', name: "FRONT DESK" },
  { id: 'BACK DESK', name: "BACK DESK" },
  { id: 'PATHOLOGIEST', name: "PATHOLOGIEST" },
];
const genderOptions = [
  { id: 'MALE', name: "MALE" },
  { id: 'FEMALE', name: "FEMALE" },
  { id: 'UNISEX', name: "UNISEX" },
  { id: 'OTHER', name: "OTHER" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

// Upload Logo
async function previewProfile(event, id) {
  if (event) {
    const input = await event.target;
    if (
      input.files[0].type === 'image/png'
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
      store.dispatch('ErrorSuccess/error', {
        msg: 'Upload image in png, jpeg, jpg format.',
      });
    }
  }
}

const onSubmitStaff = () => {
  if (
    nameValid.value ||
    emailValid.value ||
    phoneValid.value ||
    roleValid.value ||
    designationValid.value ||
    signatureValid.value ||
    fileValid.value 
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {     
    userId: 10563543453,
    password: 4532453, });
};
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!storeVar.value.name) {
    return "Please enter your name!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!storeVar.value.mobile) {
    return "Please enter your phone no!";
  }else if (!phoneValid.test(storeVar.value.mobile)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!storeVar.value.emailId) {
    return "Please enter your email!";
  }else if (!emailValid.test(storeVar.value.emailId)) {
    return "Please enter valid email!";
  }
});
const roleValid = computed(() => {
  if (!storeVar.value.roles) {
    return "Please select roles!";
  }
});
const designationValid = computed(() => {
  if (!storeVar.value.designation) {
    return "Please enter designation!";
  }
});
const signatureValid = computed(() => {
  if (!storeVar.value.signature) {
    return "Please enter text signature!";
  }
});
const fileValid = computed(() => {
  if (!formVar.imagePreview) {
    return "Please upload sign!";
  }
});
function phnum(e) {
  formVar.phone = e.slice(0, 10)
}
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
/* Validation */
</script>

<style></style>