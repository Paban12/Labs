<template>
  <section class="staff-slot-page">
    <form action="" class="form">
      <div class="row" v-for="item in dayData" :key="item">
        <div class="form-item day col-4 mb-16">
          <div class="title">{{ item.day }}</div>
          <label class="toggle-control">
            <input type="checkbox" @change="toggleTime" checked="checked" />
            <span class="control"></span>
          </label>
        </div>
        <div class="col-6 two-inputs mb-16" v-if="formVar.showTime">
          <div class="form-item col-5">
            <div class="title">From</div>
            <input type="time" placeholder="Enter Time">
          </div>
          <div class="form-item col-5">
            <div class="title">To</div>
            <input type="time" placeholder="Enter Time">
          </div>
        </div>
      </div>
      <div class="save-btn flex justify-center">
        <button class="btn black-btn w-50">Save</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  loginId: null,
  showTime: true,
});

const dayData = reactive([
  {
    day: 'Monday'
  },
  {
    day: 'Tuesday'
  },
  {
    day: 'Wednesday'
  },
  {
    day: 'Thursday'
  },
  {
    day: 'Friday'
  },
  {
    day: 'Saturday'
  },
  {
    day: 'Sunday'
  },
])

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

function toggleTime() {
  formVar.showTime = !formVar.showTime
}

const onSubmitLogin = () => {
  if (
    loginIdValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {     
    userId: 10563543453,
    password: 4532453, });
};
/* Functions/Methods */

/* Validation */
const loginIdValid = computed(() => {
  if (!formVar.loginId) {
    return "Please enter your phone number!";
  }
});
function phnum(e) {
  formVar.loginId = e.slice(0, 10)
}
/* Validation */
</script>

<style>

</style>