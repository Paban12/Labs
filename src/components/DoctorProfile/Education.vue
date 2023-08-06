<template>
  <section class="doctor-education-details">
    <form action="" class="form">
      <div class="edu-row">
        <div class="input">
          <div class="title">Degree Name</div>
          <input type="text" placeholder="Degree">
          <div class="err-msg">Please enter degree</div>
        </div>
        <div class="doc-upload">
          <div class="title">Upload Degree Document</div>
          <div class="pic-upload">
            <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic" alt="" />
            <img v-else src="/src/assets/images/png/img.png" class="dummy-img pic" alt="" />
            <label for="imgUpload" class="upload-file-block">
              Upload Sign
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
        <button class="btn black-btn w-10-r">Add</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  imagePreview: "",
})

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

<style>

</style>