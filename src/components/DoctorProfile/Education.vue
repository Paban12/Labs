<template>
  <section class="doctor-education-details">
    <form action="" class="form" @submit.prevent="onSubmitQualification">
      <div class="edu-row">
        <div>
          <div class="input">
            <div class="title">Qualification</div>
            <input type="text" v-model="formVar.qualification" placeholder="Qualification">
            <div class="err-msg" v-if="formVar.submit && qualificationValid">{{ qualificationValid }}</div>
          </div>
          <div class="input">
            <div class="title">College</div>
            <input type="text" v-model="formVar.college" placeholder="College">
            <div class="err-msg" v-if="formVar.submit && collegeValid">{{ collegeValid }}</div>
          </div>
        </div>
        <div>
          <div class="input">
            <div class="title">City</div>
            <input type="text" v-model="formVar.city" placeholder="City">
            <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
          </div>
          <div class="input">
            <div class="title">Passing Year</div>
            <input type="text" v-model="formVar.passingYear" placeholder="Passing Year">
            <div class="err-msg" v-if="formVar.submit && passingYearValid">{{ passingYearValid }}</div>
          </div>
        </div>
        <div class="doc-upload">
          <div class="title">Upload Degree Document</div>
          <div class="pic-upload">
            <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic"
              alt="" />
            <img v-else src="/src/assets/images/png/img.png" class="dummy-img pic" alt="" />
            <label for="imgUpload" class="upload-file-block">
              Upload Document
            </label>
            <input class="uploadProfileInput" type="file" name="profile_pic" id="imgUpload" accept="image/png"
              @change="previewProfile($event, profilePic)" style="display: none" />
          </div>
          <div class="err-msg">Please upload doc</div>
        </div>
        <div class="icon">
          <icon-cross></icon-cross>
        </div>
      </div>
      <div class="add-btn">
        <button type="submit" class="btn black-btn w-10-r">Add</button>
      </div>
      <div class="quaTable">
        <div class="table">
        <table>
          <thead>
            <th>Sl no</th>
            <th>Qualification</th>
            <th>College</th>
            <th>City</th>
            <th>Passing Year</th>
            <th>Document</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in storeVar.doctorEducation" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.qualification }}</td>
              <td>{{ item.college }}</td>
              <td>{{ item.city }}</td>
              <td>{{ item.passingYear }}</td>
              <td><img :src="item.proof" alt=""></td>
              <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click="DeleteQualification(item.id)">
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                    </div>
                  </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Doctor);
const formVar = reactive({
  submit: false,
  qualification:null,
  college:null,
  city:null,
  passingYear:null,
  imagePreview:null,
});


/* Constants */

/* Functions/Methods */

const onSubmitQualification = () => {
  if (
    qualificationValid.value ||
    collegeValid.value ||
    cityValid.value ||
    passingYearValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Doctor/addQualification", {
    doctorDetailId: storeVar.value.id,
    qualification:formVar.qualification,
    college:formVar.college,
    city:formVar.city,
    passingYear:formVar.passingYear,
  })
  formVar.qualification=null
  formVar.college=null
  formVar.city=null
  formVar.passingYear=null
}

function DeleteQualification(id){
  store.dispatch("Doctor/deleteQualification", {
    id
  });
}
/* Functions/Methods */

/* Validation */
const qualificationValid = computed(() => {
  if (!formVar.qualification) {
    return "Please enter qualification!";
  }
});
const collegeValid = computed(() => {
  if (!formVar.college) {
    return "Please enter college!";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please enter city!";
  }
});
const passingYearValid = computed(() => {
  if (!formVar.passingYear) {
    return "Please enter Passing Year!";
  }
});
/* Validation */

// Upload Docs
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
</script>

<style></style>