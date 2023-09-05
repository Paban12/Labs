<template>
  <section class="billing-expense">
    <div class="add-row mb-16">
      <div class="left">
        <input type="text" v-model="formVar.expense" placeholder="Enter expense">
        <div class="err-msg" v-if="formVar.submit && expenseValid">{{ expenseValid }}</div>
        <div class="add-btn">
          <button class="btn black-btn" @click="addExpense">+ Add</button>
        </div>
      </div>
      <div class="right">
        <div class="searchbar">
          <input type="text" placeholder="Search Payment History" />
          <img src="/src/assets/images/png/search.png" alt="" />
        </div>
      </div>
    </div>
    <div class="expense-list" >
      <div class="list-item" v-for="(item, index) in storeVar.billingExpenseType" :key="index">
        {{ item.expense }}
        <icon-cross @click="deleteExpe(item.id)"></icon-cross>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
/* Constants */

const store = useStore();
const storeVar = computed(() => store.state.Settings);

const formVar = reactive({
  submit: false,
  expense: null,
});
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const addExpense = () => {
  if (expenseValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Settings/addExpense", {
    expense:formVar.expense
  });
  formVar.expense=null
};
function deleteExpe(id){
  store.dispatch("Settings/deleteExpense", {
    id:id
  });
}
/* Functions/Methods */

/* Validation */
const expenseValid = computed(() => {
  if (!formVar.expense) {
    return "Please enter expense!";
  }
});
/* Validation */
</script>

<style>
</style>