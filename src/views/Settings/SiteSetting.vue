<template>
  <section class="site-setting-page">
    <div class="container">
      <form action="" class="form">
        <div class="card">
          <h2 class="heading mb-16">Site Settings</h2>
          <div class="card-content">
            <div class="doc-upload mb-16">
              <h4 class="main-title f-s-1 mb-5">Fevicon</h4>
              <div class="pic-upload">
                <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic" alt="" />
                <img v-else src="/src/assets/images/png/img.png" class="dummy-img pic" alt="" />
                <label for="imgUpload" class="upload-file-block">
                  Upload Fevicon
                </label>
                <input class="uploadProfileInput" type="file" name="profile_pic" id="imgUpload" accept="image/png"
                  @change="previewProfile($event, profilePic)" style="display: none" />
              </div>
            </div>
            <div class="desc mb-16">
              <h4 class="main-title f-s-1 mb-5">Meta Description</h4>
              <textarea name="" id="" rows="5"></textarea>
            </div>
            <div class="social-links">
              <h4 class="main-title f-s-1 mb-5">Social Links</h4>
              <div class="row">
                <div class="form-item col-5 mb-16">
                  <div class="title">Facebook</div>
                  <input type="text" placeholder="Link">
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">Instagram</div>
                  <input type="text" placeholder="Link">
                </div>
              </div>
              <div class="row">
                <div class="form-item col-5 mb-16">
                  <div class="title">Twitter</div>
                  <input type="text" placeholder="Link">
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">LinkedIn</div>
                  <input type="text" placeholder="Link">
                </div>
              </div>
            </div>
            <div class="save-btn">
              <button class="btn black-btn w-10-r">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
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