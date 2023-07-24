<template>
  <section class="faq-page">
    <div class="bread-crumb">
      <div class="content">
        <h3 class="title">FAQ</h3>
        <div class="path">
          <router-link to="/">Home</router-link>
          >>
          <div class="text">FAQ</div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <h2 class="heading">Frequently Asked Questions</h2>
      <div class="faq-sections">
        <div class="card">
          <div class="title">What Our Clients Say</div>
          <div v-for="faqItem in faqItems" :key="faqItem.id" class="faq-item">
            <h2 class="faq-question" @click="toggleAnswer(faqItem.id)">
              <span>{{ faqItem.question }}</span>
              <icon-right-arrow-round v-if="!faqItem.showAnswer"></icon-right-arrow-round>
              <icon-down-arrow-round v-if="faqItem.showAnswer"></icon-down-arrow-round>
            </h2>
            <div v-show="faqItem.showAnswer" class="faq-answer">
              {{ faqItem.answer }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="title">Medication & Pharmacy</div>
          <div v-for="faqItem2 in faqItems2" :key="faqItem2.id" class="faq-item">
            <h2 class="faq-question" @click="toggleAnswer2(faqItem2.id)">
              <span>{{ faqItem2.question }}</span>
              <icon-right-arrow-round v-if="!faqItem2.showAnswer"></icon-right-arrow-round>
              <icon-down-arrow-round v-if="faqItem2.showAnswer"></icon-down-arrow-round>
            </h2>
            <div v-show="faqItem2.showAnswer" class="faq-answer">
              {{ faqItem2.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const faqItems = reactive([
  {
    id: 1,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
    showAnswer: false,
  },
  {
    id: 2,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
    showAnswer: false,
  },
  {
    id: 3,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
    showAnswer: false,
  },
  {
    id: 4,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
    showAnswer: false,
  },
])

const faqItems2 = reactive([
  {
    id: 11,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
    showAnswer: false,
  },
  {
    id: 22,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
    showAnswer: false,
  },
  {
    id: 33,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
    showAnswer: false,
  },
  {
    id: 44,
    question: "Is porta semper MedService primis?",
    answer: "Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec pretium and ipsum porta",
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
function toggleAnswer2(id) {
  this.faqItems2.forEach((faqItem2) => {
    if (faqItem2.id === id) {
      faqItem2.showAnswer = !faqItem2.showAnswer;
    } else {
      faqItem2.showAnswer = false;
    }
  });
}

</script>

<style scoped>

</style>