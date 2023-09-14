<template>
  <section class="faq-create-page">
    <div class="container">
      <div class="card">
        <div class="card-header">FAQ's</div>
        <div class="card-body">
          <div class="tabs">
            <div class="tab" @click.prevent="formVar.tab = 1" :class="formVar.tab === 1 ? 'active' : ''">
              <div class="title">FAQ's</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 2" :class="formVar.tab === 2 ? 'active' : ''">
              <div class="title">Common FAQ's</div>
            </div>
          </div>
          <div class="tab-content" v-if="formVar.tab === 1">
            <div class="search-row mb-16">
              <div class="searchbar">
                <input type="text" placeholder="Search By FAQ" />
                <img src="/src/assets/images/png/search.png" alt="" />
              </div>
              <div class="add-btn">
                <button class="btn black-btn w-10-r" @click="addModel">
                  Add
                </button>
              </div>
            </div>
            <div class="faq-list">
              <div class="list" v-for="(item, index) in storeVar.faqData" :key="index">
                <div class="left">
                  <div class="que">{{ item.question }}</div>
                  <div class="ans">
                    {{ item.answer }}
                  </div>
                </div>
                <div class="option-btn">

                  <div class="icon">
                    <icon-vert-dots></icon-vert-dots>
                  </div>
                  <div class="hover-list card">
                    <div class="list-item" @click="editModel(item)">Edit</div>
                    <div class="list-item" @click.prevent="formVar.confirmModal = true">Delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="formVar.tab === 2">
            <div class="sample-list">
              <h4>Most helpful FAQs for Patients</h4>
              <div class="list">
                <div class="list-item">How many patients can be seated at the waiting area at a time of Sample Collection?
                </div>
                <div class="list-item">Are you provide Sample Home Collection Facility?</div>
                <div class="list-item">Are you provide E-report Facility?</div>
                <div class="list-item">How many Collection centers you have?</div>
                <div class="list-item">Are you Share My Report on WhatsApp?</div>
                <div class="list-item">Are you provide medicine Home delivery Facility?</div>
                <div class="list-item">Are you provide E-Bill Facility?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <Modal v-model:show="formVar.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="formVar.confirmModal = false">
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal v-model:show="storeVar.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">FAQ's</div>
        <div class="close-btn" @click.prevent="storeVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitFaq">
        <div class="form-item mb-16">
          <div class="title">Question</div>
          <input type="text" v-model="formVar.question" placeholder="Enter Question">
          <div class="err-msg" v-if="formVar.submit && questionValid">
            {{ questionValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Answer</div>
          <textarea name="" id="" rows="4" v-model="formVar.answer" placeholder="Enter Answer"></textarea>
          <div class="err-msg" v-if="formVar.submit && answerValid">
            {{ answerValid }}
          </div>
        </div>
        <div class="save-btn">
          <button type="submit" class="btn black-btn w-10-r">Submit</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import moment from "moment";
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import router from "../../router";
/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Faq);
const formVar = reactive({
  tab: 1,
  addModal: false,
  confirmModal: false,
  editMode:false,
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  cPage: 1,
  question: null,
  answer: null,
  questionId:null,
})

/* Constants */ 

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getFaq(formVar.limit, formVar.offset, formVar.keyword, formVar.cPage)
})
/* Lifecycle/Hooks */
/* Functions/Methods */
function getFaq(limit, offset, keyword, cPage) {
  store.dispatch("Faq/getFaq", { limit, offset, keyword, cPage });
}

function editModel(data){
  formVar.question=data.question
  formVar.answer=data.answer
  formVar.questionId=data.id
  formVar.editMode=true
  storeVar.value.addModal=true
}
function addModel(){
  formVar.question=null
  formVar.answer=null
  formVar.questionId=null
  formVar.editMode=false
  storeVar.value.addModal=true
}
const onSubmitFaq = () => {
  if (
    questionValid.value ||
    answerValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if(formVar.editMode){
    store.dispatch("Faq/updateFaq", {
      question: formVar.question,
      answer: formVar.answer,
      id:formVar.questionId
    });
  }else{
    store.dispatch("Faq/addFaq", {
      question: formVar.question,
      answer: formVar.answer,
    });
  }
};

/* Functions/Methods */

/* Validation */
const questionValid = computed(() => {
  if (!formVar.question) {
    return "Enter question!";
  }
});

const answerValid = computed(() => {
  if (!formVar.answer) {
    return "Enter answer!";
  }
});

/* Validation */
</script>

<style></style>