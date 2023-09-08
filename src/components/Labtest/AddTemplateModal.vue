<template>
  <Modal v-model:show="storeVar.addTemplateModal" class="add-test-modal" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">Template</div>
      <div class="close-btn" @click.prevent="storeVar.addTemplateModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="form-item mb-16">
      <SingleSelect
        v-model="formVar.test"
        :options="testOptions"
        @selected="handleSelectedOption"
        placeholder="Search Test"
      ></SingleSelect>
    </div>
    <div class="form-item mb-16">
      <input type="text" placeholder="Template Name">
    </div>
    <vue-editor :editor-toolbar="customToolbar"></vue-editor>
    <div class="save-btn">
      <button class="btn black-btn">Save</button>
    </div>
  </Modal>
</template> 

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { VueEditor } from "vue3-editor";

const store = useStore();
const storeVar = computed(() => store.state.Labtest);

const formVar = reactive({
  test: null,
})

const customToolbar = [
  [{ header: [false, 1, 2, 3, 4, 5, 6] }],
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [
    { align: "" },
    { align: "center" },
    { align: "right" },
    { align: "justify" }
  ],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ color: [] }, { background: [] }],
  // ["link", "image", "video"],
  ["clean"],
]

//for table data
const testOptions = [
  { id: 1, name: "Option111111111111" },
  { id: 2, name: "Option2" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>