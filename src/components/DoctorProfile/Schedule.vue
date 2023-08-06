<template>
  <section class="dr-schedule">
    <div class="heading">Doctor Schedule</div>
      <div v-for="faqItem in faqItems" :key="faqItem.id" class="schedule-item">
        <h2 class="schedule-question" @click="toggleAnswer(faqItem.id)">
          <span>{{ faqItem.question }}</span>
          <icon-right-arrow-round v-if="!faqItem.showAnswer"></icon-right-arrow-round>
          <icon-down-arrow-round v-if="faqItem.showAnswer"></icon-down-arrow-round>
        </h2>
        <div v-show="faqItem.showAnswer" class="schedule-answer">
          <div class="cards">
            <div class="single-card">
              <div class="main-title">Organization (Medica Superspecialty Hospital (MSH))</div>
              <SingleSelect v-model="formVar.org" :options="orgOptions" @selected="handleSelectedOption"
              placeholder="Search"></SingleSelect>
              <div class="checkbox">
                <div class="input">
                  <div class="text">Morning</div>
                  <label class="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span class="control"></span>
                  </label>
                </div>
                <div class="input">
                  <div class="text">Clinic Visit</div>
                  <label class="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span class="control"></span>
                  </label>
                </div>
              </div>
              <div class="time-row row">
                <div class="form-item col-5 mb-16">
                  <div class="title">Start Time</div>
                  <input type="time">
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">Start Time</div>
                  <input type="time">
                </div>
              </div>
            </div>
            <div class="single-card">
              <div class="main-title">Organization (Medica Superspecialty Hospital (MSH))</div>
              <SingleSelect v-model="formVar.org" :options="orgOptions" @selected="handleSelectedOption"
              placeholder="Search"></SingleSelect>
              <div class="checkbox">
                <div class="input">
                  <div class="text">Morning</div>
                  <label class="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span class="control"></span>
                  </label>
                </div>
                <div class="input">
                  <div class="text">Clinic Visit</div>
                  <label class="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span class="control"></span>
                  </label>
                </div>
              </div>
              <div class="time-row row">
                <div class="form-item col-5 mb-16">
                  <div class="title">Start Time</div>
                  <input type="time">
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">Start Time</div>
                  <input type="time">
                </div>
              </div>
            </div>
            <div class="single-card">
              <div class="main-title">Organization (Medica Superspecialty Hospital (MSH))</div>
              <SingleSelect v-model="formVar.org" :options="orgOptions" @selected="handleSelectedOption"
              placeholder="Search"></SingleSelect>
              <div class="checkbox">
                <div class="input">
                  <div class="text">Morning</div>
                  <label class="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span class="control"></span>
                  </label>
                </div>
                <div class="input">
                  <div class="text">Clinic Visit</div>
                  <label class="toggle-control">
                    <input type="checkbox" checked="checked" />
                    <span class="control"></span>
                  </label>
                </div>
              </div>
              <div class="time-row row">
                <div class="form-item col-5 mb-16">
                  <div class="title">Start Time</div>
                  <input type="time">
                </div>
                <div class="form-item col-5 mb-16">
                  <div class="title">Start Time</div>
                  <input type="time">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  org: null,
})

//search select start//
const orgOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

const faqItems = reactive([
  {
    id: 1,
    question: "Monday",
    showAnswer: false,
  },
  {
    id: 2,
    question: "Tuesday",
    showAnswer: false,
  },
  {
    id: 3,
    question: "Wednesday",
    showAnswer: false,
  },
  {
    id: 4,
    question: "Thursday",
    showAnswer: false,
  },
  {
    id: 5,
    question: "Friday",
    showAnswer: false,
  },
  {
    id: 6,
    question: "Saturday",
    showAnswer: false,
  },
  {
    id: 7,
    question: "Sunday",
    showAnswer: false,
  },
])

function toggleAnswer(id) {
  this.faqItems.forEach((faqItem) => {
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