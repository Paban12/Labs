<template>
  <section class="billing-expense">
    <div class="add-row mb-16">
      <div class="left">
        <SingleSelect v-model="formVar.expense" :options="expenseOptions" @selected="handleSelectedOption"
        placeholder="Select State"></SingleSelect>
        <div class="add-btn">
          <button class="btn black-btn">+ Add</button>
        </div>
      </div>
      <div class="right">
        <div class="searchbar">
          <input type="text" placeholder="Search Payment History" />
          <img src="/src/assets/images/png/search.png" alt="" />
        </div>
      </div>
    </div>
    <div class="expense-list">
      <div class="list-item">
        Utility Bills
        <icon-cross></icon-cross>
      </div>
      <div class="list-item">
        Meals and Entertainments
        <icon-cross></icon-cross>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  expense: null,
  city: null,
})

//search select start//
const expenseOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

</script>

<style>

</style>