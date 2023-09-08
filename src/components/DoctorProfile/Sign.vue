<template>
  <section class="dr-sign">
    <div class="doc-upload">
      <div class="title">Upload Sign Document</div>
      <div class="pic-upload">
        <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="SignPic" alt="" />
        <img v-else src="/src/assets/images/png/sign.png" class="dummy-img pic" alt="" />
        <label for="SignUpload" class="upload-file-block">
          Upload Sign
        </label>
        <input class="uploadProfileInput" type="file" name="sign_pic" id="SignUpload" accept="image/png"
          @change="previewProfiles($event)" style="display: none" />
      </div>
      <!-- <div class="err-msg">Please upload doc</div> -->
    </div>
    <div class="save-btn">
      <!-- <button class="btn black-btn w-10-r">Save</button> -->
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import router from "../../router";
import { useRoute } from "vue-router";

/* Constants */
const store = useStore()
const route = useRoute();
const storeVar = computed(() => store.state.Doctor);

const formVar = reactive({
  imagePreview: "",
})


function saveSing(file) {
  console.log(file);
  store.dispatch("Doctor/signatureUpload", {
    file
  });
}
// Upload Docs
async function previewProfiles(event) {
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
          saveSing(input.files[0]);
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