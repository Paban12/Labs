<template>
  <section class="practice-details-page">
    <div class="container">
      <div class="card">
        <form action="" class="form">
          <div class="card-header">Practice Details</div>
          <div class="card-body">
            <div class="self-details">
              <div class="row">
                <div class="form-item col-25">
                  <div class="title">Upload Logo</div>
                  <div class="pic-upload">
                    <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic" alt="" />
                    <img v-else src="/src/assets/images/png/img.png" class="dummy-img pic" alt="" />
                    <label for="imgUpload" class="upload-file-block">
                      Upload Sign
                    </label>
                    <input class="uploadProfileInput" type="file" name="profile_pic" id="imgUpload" accept="image/png"
                      @change="previewProfile($event, profilePic)" style="display: none" />
                  </div>
                </div>
                <div class="form-item col-25">
                  <div class="title">Diagnostic Name</div>
                  <input type="text" placeholder="Diagnostic Name">
                </div>
                <div class="form-item col-25">
                  <div class="title">Practice Registration Number</div>
                  <input type="text" placeholder="Practice Registration Number">
                </div>
                <div class="form-item col-25">
                  <div class="p-id">Practice ID : 45494</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
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