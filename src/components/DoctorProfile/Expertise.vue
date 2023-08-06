<template>
  <section class="dr-expertise">
    <form action="" class="form">
      <div class="row">
        <div class="form-item col-5 mb-16">
          <div class="title">Expertise</div>
          <textarea name="" id="" rows="5" placeholder=""></textarea>
          <div class="err-msg">Please enter expertise</div>
        </div>
        <div class="form-item col-5 mb-16">
          <div class="title">Associated Hospital</div>
          <textarea name="" id="" rows="5" placeholder=""></textarea>
          <div class="err-msg">Please enter associated hospital</div>
        </div>
      </div>
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
      <div class="save-btn">
        <button class="btn black-btn w-10-r">Save</button>
      </div>
    </form>
  </section>
</template>

<script setup>

//multi select
const specialityOptions = [
  { id: 1, name: "ENT" },
  { id: 2, name: "General Surgen" },
];
const tab = [];

</script>

<style>

</style>