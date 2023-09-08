<template>
  <section class="staff-slot-page">
    <form action="" class="form" @submit.prevent="onAvailabilitySub">
      <div class="row" v-for="item in storeVar.Availability" :key="item">
        <div class="form-item day col-4 mb-16">
          <div class="title">{{ item.name }}</div>
          <label class="toggle-control"> 
            <input type="checkbox" v-model="item.periodStatus" @change="toggleTime" />
            <span class="control"></span>
          </label>
        </div>
        <div class="col-6 two-inputs mb-16" v-if="item.periodStatus">
          <div class="form-item col-5">
            <div class="title">From</div>
            <input type="time" v-model="item.time_start" placeholder="Enter Time">
          </div>
          <div class="form-item col-5">
            <div class="title">To</div>
            <input type="time" v-model="item.time_end" placeholder="Enter Time">
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
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Staff);
const formVar = reactive({
  submit: false,
  loginId: null,
  showTime: true,
});


/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  loadIdFromUrl()
})

/* Lifecycle/Hooks */

function loadIdFromUrl() {
  store.dispatch('Staff/getAvailability', { id: storeVar.value.staffId })
}
/* Functions/Methods */

function toggleTime() {
  formVar.showTime = !formVar.showTime
}

const onAvailabilitySub = () => {
  store.dispatch("Staff/updateAvailability", { 
    id:storeVar.value.staffId,    
    StaffSchedule:storeVar.value.Availability
  });
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