<template>
  <section class="dr-schedule">
    <div class="heading">Doctor Schedule</div>
      <div v-for="faqItem in storeVar.doctorSchedule" :key="faqItem.id" class="schedule-item">
        <h2 class="schedule-question" @click="toggleAnswer(faqItem.id)">
          <span>{{ faqItem.name }}</span>
          <icon-right-arrow-round v-if="!faqItem.showAnswer"></icon-right-arrow-round>
          <icon-down-arrow-round v-if="faqItem.showAnswer"></icon-down-arrow-round>
        </h2>
        <div v-show="faqItem.showAnswer" class="schedule-answer">
          <div class="cards">
            <div class="single-card" v-for="(item,index) in faqItem.period" :key="index">
              <div class="main-title">Organization (Medica Superspecialty Hospital (MSH))</div>
              <SingleSelect2 v-model="item.organizationId" :options="storeVar.organizationData" @onType="loadState($event)" @selected="handleSelectedOption"
              placeholder="Search"></SingleSelect2>
              <div class="checkbox">
                <div class="input">
                  <div class="text">{{ item.name }}</div>
                  <label class="toggle-control">
                    <input type="checkbox" v-model="item.periodStatus" />
                    <span class="control"></span>
                  </label>
                </div>
                <div class="input">
                  <div class="text">Clinic Visit</div>
                  <label class="toggle-control">
                    <input type="checkbox" v-model="item.clinicVisitStatus" />
                    <span class="control"></span>
                  </label>
                </div>
              </div>
              <div class="time-row row">
                <div class="form-item col-5 mb-16">
                  <div class="title">Start Time</div>
                  <input type="time" v-model="item.time_start">
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">End Time</div>
                  <input type="time" v-model="item.time_end">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="add-btn">
        <button type="button" class="btn black-btn w-10-r" @click="onSubmitSchedule">Save</button>
      </div>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Doctor);
const formVar = reactive({
  submit: false,
  limit:10,
  offset:0,
  keyword:"",
  status:true,
  org: null,
});


/* Constants */
/* Lifecycle/Hooks */
onBeforeMount(() => {
  getOrganization(formVar.limit, formVar.offset, formVar.keyword, formVar.status,)
})
/* Lifecycle/Hooks */
/* Functions/Methods */

function getOrganization(limit, offset, keyword, status) {
  store.dispatch("Doctor/getOrganization", { limit, offset, keyword, status });
}
function loadState(search){
  console.log(search);
  getOrganization(formVar.limit, formVar.offset, search, formVar.status,)
}
//search select start//
const orgOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
const onSubmitSchedule = () => {
  console.log(storeVar.value.doctorSchedule);
    store.dispatch("Doctor/updateSchedule", {
      schedule: storeVar.value.doctorSchedule,
      id: storeVar.value.id,
    });
};

function toggleAnswer(id) {
  storeVar.value.doctorSchedule.forEach((faqItem) => {
    if (faqItem.id === id) {
      faqItem.showAnswer = !faqItem.showAnswer;
    } else {
      faqItem.showAnswer = false;
    }
  });
}

</script>

<style>

</style>