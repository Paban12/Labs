<template>
  <Modal v-model:show="storeVar.addPanelModal" class="add-test-modal" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">Tests Panel</div>
      <div class="close-btn" @click.prevent="storeVar.addPanelModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="test-table mb-16">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Panel Name</th>
          <th>Category</th>
          <th>Department</th>
          <th>Test Code</th>
          <th>Sample</th>
          <th>Container</th>
          <th>Sample Size</th>
          <th>Price(₹)</th>
          <th>Home Collection</th>
          <th>Report Within</th>
          <th>print Note</th>
          <th class="text-center">Option</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in testTableData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>
              <SingleSelect
                v-model="formVar.test"
                :options="testOptions"
                @selected="handleSelectedOption"
                placeholder="Search Test"
              ></SingleSelect>
            </td>
            <td>
              <div class="select-dropdown">
                <select name="" id="">
                  <option value="">Hematology</option>
                  <option value="">Clinical Pathology</option>
                </select>
              </div>
            </td>
            <td>
              <SingleSelect
                v-model="formVar.dept"
                :options="deptOptions"
                @selected="handleSelectedOption"
                placeholder="Select Department"
              ></SingleSelect>
            </td>
            <td>
              <input type="number" placeholder="Test Code" />
            </td>
            <td>
              <SingleSelect
                v-model="formVar.sample"
                :options="sampleOptions"
                @selected="handleSelectedOption"
                placeholder="Select Sample"
              ></SingleSelect>
            </td>
            <td>
              <SingleSelect
                v-model="formVar.container"
                :options="containerOptions"
                @selected="handleSelectedOption"
                placeholder="Select Container"
              ></SingleSelect>
            </td>
            <td>
              <div class="sample-input">
                <input type="number" placeholder="1" />
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">ml</option>
                    <option value="">Test amount</option>
                    <option value="">g</option>
                    <option value="">swab</option>
                    <option value="">gauze</option>
                    <option value="">Cotton swab</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <input type="number" placeholder="Price" />
            </td>
            <td>
              <label class="toggle-control">
                <input type="checkbox" checked="checked" />
                <span class="control"></span>
              </label>
            </td>
            <td>
              <div class="sample-input">
                <input type="number" placeholder="1" />
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Hrs</option>
                    <option value="">Days</option>
                    <option value="">Weeks</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <input type="number" placeholder="Print Note" @click.prevent="formVar.noteModal = true" />
            </td>
            <td class="text-center">
              <div class="option-btns">
                <div class="">
                  <img src="/src/assets/images/png/delete.png" alt="" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="save-btn">
      <button class="btn black-btn">Save</button>
    </div>
  </Modal>
  <Modal v-model:show="formVar.noteModal" class="add-test-modal" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">Note</div>
      <div class="close-btn" @click.prevent="formVar.noteModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
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
  dept: null,
  sample: null,
  container: null,
  noteModal: false,
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

const testTableData = reactive([
  {
    id: 2,
  }
])

//for table data
const testOptions = [
  { id: 1, name: "Option111111111111" },
  { id: 2, name: "Option2" },
];
const deptOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const sampleOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const containerOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>