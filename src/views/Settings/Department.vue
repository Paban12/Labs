<template>
  <section class="dept-page">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">Department</div>
        <div class="card-body p-16">
          <div class="search-select mb-16">
            <div class="left">
              <SingleSelect v-model="formVar.dept" :options="deptOptions" @selected="handleSelectedOption"
              placeholder="Select State"></SingleSelect>
              <button class="btn black-btn save-btn">Save</button>
            </div>
            <div class="searchbar">
              <input type="text" placeholder="Search By Patient/Test" />
              <img src="/src/assets/images/png/search.png" alt="" />
            </div>
          </div>
          <div class="dept-list">
            <div class="list-item">
              Utility Bills
              <icon-cross></icon-cross>
            </div>
            <div class="list-item">
              Meals and Entertainments
              <icon-cross></icon-cross>
            </div>
            <div class="list-item">
              Meals and Entertainments
              <icon-cross></icon-cross>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  dept: null,
})

//search select start//
const deptOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>

</style>