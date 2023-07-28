<template>
  <section class="staff-slot-page">
    <form action="" class="form">
      <div class="mb-16">
        <div class="col-4 two-inputs top-inputs">
          <div class="form-item col-5">
            <div class="title">Slot Duration</div>
            <input type="number" v-model="formVar.slot_duration" placeholder="Enter Slot Duration">
          </div>
          <div class="form-item col-5">
            <div class="title">Minit</div>
            <input type="number" v-model="formVar.minit" placeholder="Enter Minit">
          </div>
        </div>
        <div class="err-msg">Enter Duration</div>
      </div>
      <div class="row align-end">
        <div class="form-item col-4 mb-16">
          <div class="day">Monday</div>
        </div>
        <div class="col-6 two-inputs mb-16">
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
      <div class="row align-end">
        <div class="form-item col-4 mb-16">
          <div class="day">Tuesday</div>
        </div>
        <div class="col-6 two-inputs mb-16">
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
      <div class="row align-end">
        <div class="form-item col-4 mb-16">
          <div class="day">Wednesday</div>
        </div>
        <div class="col-6 two-inputs mb-16">
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
      <div class="row align-end">
        <div class="form-item col-4 mb-16">
          <div class="day">Thursday</div>
        </div>
        <div class="col-6 two-inputs mb-16">
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
      <div class="row align-end">
        <div class="form-item col-4 mb-16">
          <div class="day">Friday</div>
        </div>
        <div class="col-6 two-inputs mb-16">
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
      <div class="row align-end">
        <div class="form-item col-4 mb-16">
          <div class="day">Saturday</div>
        </div>
        <div class="col-6 two-inputs mb-16">
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
      <div class="row align-end">
        <div class="form-item col-4 mb-16">
          <div class="day">Sunday</div>
        </div>
        <div class="col-6 two-inputs mb-16">
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
});

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

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