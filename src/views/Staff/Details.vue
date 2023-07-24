<template>
  <section class="staff-details-page">
    <form action="" class="form">
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Name</div>
          <input type="text" placeholder="Enter Name">
          <div class="err-msg">Please enter name</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Phone No</div>
          <input type="number" placeholder="Enter phone no">
          <div class="err-msg">Please enter phone no</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Email</div>
          <input type="text" placeholder="Enter Email">
          <div class="err-msg">Please enter email</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Password</div>
          <input type="password" placeholder="Enter Password">
          <div class="err-msg">Please enter password</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Designation / Role</div>
          <SingleSelect
            v-model="staff.des"
            :options="desOptions"
            @selected="handleSelectedOption"
            placeholder="Select"
          ></SingleSelect>
          <div class="err-msg">Please select designation</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Speciality</div>
          <SingleSelect
            v-model="staff.speciality"
            :options="specialityOptions"
            @selected="handleSelectedOption"
            placeholder="Select"
          ></SingleSelect>
          <div class="err-msg">Please select speciality</div>
        </div>
      </div>
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">text Signature</div>
          <input type="text" placeholder="Enter Text Signature">
          <div class="err-msg">Please enter text signature</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Upload Sign (PNG Format only)</div>
          <div class="pic-upload">
            <img
              v-if="staff.imagePreview"
              :src="staff.imagePreview"
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
              Upload Sign
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
          <div class="err-msg">Please upload sign </div>
        </div>
      </div>
      <div class="save-btn flex justify-center">
        <button class="btn black-btn w-50">Save</button>
      </div>
    </form>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const staff = reactive({
    des: "",
    speciality: "",
    imagePreview: "",
  })

  const desOptions = [
    { id: 1, name: "Designation1" },
    { id: 2, name: "Designation2" },
  ];
  const specialityOptions = [
    { id: 1, name: "Speciality1" },
    { id: 2, name: "Speciality2" },
  ];
  const handleSelectedOption = (option) => {
    console.log("Selected option:", option);
  };

  // Upload Logo
	async function previewProfile(event, id) {
		if (event) {
			const input = await event.target;
			if (
				input.files[0].type === 'image/png' ||
				input.files[0].type === 'image/jpeg' ||
				input.files[0].type === 'image/jpg'
			) {
				if (input.files) {
					const reader = new FileReader();
					reader.onload = (e) => {
						staff.imagePreview = e.target.result;
					};
					if (input.files[0]) {
						reader.readAsDataURL(input.files[0]);
						await saveProfile(id, input.files[0]);
					}
				}
			} else {
				staff.imagePreview = null;
				store.dispatch('ErrorSuccess/error', {
					msg: 'Upload image in png, jpeg, jpg format.',
				});
			}
		}
	}
</script>

<style>

</style>