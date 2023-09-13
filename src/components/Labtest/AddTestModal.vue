<template>
  <Modal v-model:show="storeVar.addTestModal" class="add-test-modal" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">Lab Test Master</div>
      <div class="close-btn" @click.prevent="storeVar.addTestModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="test-table mb-16">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Test Name</th>
          <th>Category</th>
          <th>Department</th>
          <th>Test Code</th>
          <th>Sample</th>
          <th>Container</th>
          <th>Sample Size</th>
          <th>Price(₹)</th>
          <th>Home Collection</th>
          <th>Report Within</th>
          <th>Reference Value</th>
          <th>print Note</th>
          <th class="text-center">Option</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in formVar.testTableData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>
              <SingleSelect v-model="formVar.title" :options="testOptions" @selected="handleSelectedTestName"
                placeholder="Search Test"></SingleSelect>
            </td>
            <td>
              <Select v-model="formVar.labCategory" :options="categoryOptions" @selected="handleSelectedTestName"
                placeholder="Search Test"></Select>
            </td>
            <td>
              <Select v-model="formVar.labDepartment" :options="deptOptions" @selected="handleSelectedOption"
                placeholder="Select Department"></Select>
            </td>
            <td>
              <input type="text" v-model="formVar.testCode" placeholder="Test Code" />
            </td>
            <td>
              <Select v-model="formVar.labSample" :options="sampleOptions" @selected="handleSelectedOption"
                placeholder="Select Sample"></Select>
            </td>
            <td>
              <Select v-model="formVar.container" :options="containerOptions" @selected="handleSelectedOption"
                placeholder="Select Container"></Select>
            </td>
            <td>
              <div class="sample-input">
                <input type="number" v-model="formVar.sampleSize" placeholder="1" />
                <Select v-model="formVar.sampleSizeType" :options="sampleSizeTypeOptions" @selected="handleSelectedOption"
                  placeholder="Select Container"></Select>
              </div>
            </td>
            <td>
              <input type="number" v-model="formVar.price" placeholder="Price" />
            </td>
            <td>
              <label class="toggle-control">
                <input type="checkbox" v-model="formVar.homeCollection" />
                <span class="control"></span>
              </label>
            </td>
            <td>
              <div class="sample-input">
                <input type="number" v-model="formVar.reportWithin" placeholder="1" />
                <Select v-model="formVar.reportWithinType" :options="reportWithinTypeOptions"
                  @selected="handleSelectedOption" placeholder="Select Container"></Select>

              </div>
            </td>
            <td>
              <input type="number" placeholder="Reference" @click.prevent="formVar.referenceModal = true" />
              <span v-for="(item, index) in formVar.referenceData" :key="item">
                <span v-if="item.gender && item.minAge && item.maxAge">{{ index +1 }}. <span>{{ item.gender }}</span> </span>

              </span>
            </td>
            <td>
              <input type="text" v-model="formVar.printNote" placeholder="Print Note"
                @click.prevent="formVar.noteModal = true" />
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
      <button type="button" class="btn black-btn" @click="onSubmitTest">Save</button>
    </div>
  </Modal>
  <Modal v-model:show="formVar.referenceModal" class="add-test-modal" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">Add Lab Test</div>
      <div class="close-btn" @click.prevent="formVar.referenceModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="test-table mb-16">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Gender</th>
          <th>Min. Age</th>
          <th>max. Age</th>
          <th>Age</th>
          <th>Lower Value</th>
          <th>Upper Value</th>
          <th>Unit</th>
          <th>Reference Note</th>
          <th class="text-center">Option</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in formVar.referenceData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>
              <SingleSelect v-model="item.gender" :options="genderOptions" @selected="handleSelectedTestName"
                placeholder="Select Gender"></SingleSelect>
            </td>
            <td>
              <input type="number" v-model="item.minAge" placeholder="Min. Age" />
            </td>
            <td>
              <input type="number" v-model="item.maxAge" placeholder="Max Age" />
            </td>
            <td>
              <SingleSelect v-model="item.ageType" :options="ageTypeOptions" @selected="handleSelectedTestName"
                placeholder="Select Age type"></SingleSelect>
            </td>
            <td>
              <input type="number" v-model="item.lower" placeholder="Lower Value" />
            </td>
            <td>
              <input type="number" v-model="item.upper" placeholder="Upper Value" />
            </td>
            <td>
              <input type="number" v-model="item.unit" placeholder="Unit" />
            </td>
            <td>
              <input type="text" v-model="item.note" placeholder="Note" />
            </td>
            <td class="text-center">
              <div class="option-btns" >
                <div class="" @click="removeTr(item.ids)">
                  <img src="/src/assets/images/png/delete.png" alt="" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="add-ref mb-16" @click="addMoreReference">
      + Add New Reference
    </div>
    <div class="save-btn">
      <button type="button" class="btn black-btn" @click.prevent="formVar.referenceModal = false">Save</button>
    </div>
  </Modal>
  <Modal v-model:show="formVar.noteModal" class="add-test-modal" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">Note</div>
      <div class="close-btn" @click.prevent="formVar.noteModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <vue-editor :editor-toolbar="customToolbar" v-model="formVar.printNote"></vue-editor>
    <div class="save-btn">
      <button type="button" class="btn black-btn" @click="formVar.noteModal=false">Save</button>
    </div>
  </Modal>
</template> 

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { VueEditor } from "vue3-editor";
import { stringifyQuery } from "vue-router";

const store = useStore();
const storeVar = computed(() => store.state.Labtest);

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
  { id: 'Urine Microalbumin', name: "Urine Microalbumin" },
  { id: "Dengue Ig G & Ig M Antibody Rapid, Serum", name: "Dengue Ig G & Ig M Antibody Rapid, Serum" },
  { id: "Salmonella Typhoid IgG/IgM Rapid Test", name: "Salmonella Typhoid IgG/IgM Rapid Test" },
  { id: "Leukocyte esterase, Urine", name: "Leukocyte esterase, Urine" },
  { id: "Specific Gravity, Urine", name: "Specific Gravity, Urine" },
  { id: "Platelet Morphology", name: "Platelet Morphology" },
  { id: "Free/Total PSA Ratio", name: "Free/Total PSA Ratio" },
  { id: "Blood Culture Bottle Type", name: "Blood Culture Bottle Type" },
  { id: "Blood Volume Collected", name: "Blood Volume Collected" },
  { id: "Mean Normal Prothrombin Time (PT)", name: "Mean Normal Prothrombin Time (PT)" },
  { id: "Sputum Culture Aerobic", name: "Sputum Culture Aerobic" },
  { id: "Anti Thyroid Peroxidase Antibody (Anti TPO)", name: "Anti Thyroid Peroxidase Antibody (Anti TPO)" },
];
const categoryOptions = [
  { id: 'Hematology', name: 'Hematology' },
  { id: 'Biochemistry', name: 'Biochemistry' },
  { id: 'Immunology & Serology', name: 'Immunology & Serology' },
  { id: 'Microbiology', name: 'Microbiology' },
  { id: 'Molecular Genetics', name: 'Molecular Genetics' },
  { id: 'Radiology and Imaging', name: 'Radiology and Imaging' },
  { id: 'Clinical Pathology', name: 'Clinical Pathology' },
]

const ageTypeOptions =[
  {id:'Years',name:'Years'},
  {id:'Months',name:'Months'},
  {id:'Weeks',name:'Weeks'},
  {id:'Days',name:'Days'},
]

const genderOptions =[
  {id:'Male',name:'Male'},
  {id:'Female',name:'Female'},
  {id:'Other',name:'Other'},
]

const sampleSizeTypeOptions = [
  { id: 'ml', name: 'ml' },
  { id: 'Test amount', name: 'Test amount' },
  { id: 'g', name: 'g' },
  { id: 'swab', name: 'swab' },
  { id: 'Cotton swab', name: 'Cotton swab' },
  { id: 'gauze', name: 'gauze' },
]

const reportWithinTypeOptions = [
  { id: 'Hrs', name: 'Hrs' },
  { id: 'Days', name: 'Days' },
  { id: 'Weeks', name: 'Weeks' },
]
const deptOptions = [
{ id: 'Pharmacy', name: "Pharmacy" },
];
const sampleOptions = [ 
  { id: 'Urine', name: "Urine" },
  { id: 'Blood', name: "Blood" },
  { id: 'Serum', name: "Serum" },
];
const containerOptions = [
  { id: "Urine Container", name: "Urine Container" },
  { id: "Urine", name: "Urine" },
  { id: "Red Top", name: "Red Top" },
  { id: "Lavender Top (EDTA) tube", name: "Lavender Top (EDTA) tube" },
  { id: "Tube", name: "Tube" },
];

const formVar = reactive({
  referenceModal: false,
  noteModal: false,

  title: null,
  package: null,
  titleDisplayStatus: 'Yes',
  labCategory: categoryOptions[0],
  labDepartment: deptOptions[0],
  testCode: null,
  labSample: sampleOptions[0],
  container: containerOptions[0],
  sampleSize: null,
  sampleSizeType: sampleSizeTypeOptions[0],
  price: null,
  discount: null,
  homeCollection: false,
  reportWithin: null,
  reportWithinType: reportWithinTypeOptions[0],
  printNote: null,
  type: null,
  labReference: [],

  referenceData: [{
    ids:getRandomInt(1,1000000),
    gender:null,
    minAge:null,
    maxAge:null,
    ageType:null,
    lower:null,
    upper:null,
    unit:null,
    note:null,
  }],
  testTableData: [{
    id: 1,
  }]
})

const handleSelectedTestName = (option) => {
  if (option) {
    // formVar.testTableData.push({id:option})
  }
};
const addMoreReference = () => {
  formVar.referenceData.push({
    ids:getRandomInt(1,1000000),
    gender:genderOptions[0],
    minAge:null,
    maxAge:null,
    ageType:ageTypeOptions[0],
    lower:null,
    upper:null,
    unit:null,
    note:null,
  })
}


/* Functions/Methods */

const onSubmitTest = () => {
  if (
    titleValid.value ||
    priceValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Labtest/addLabtest", {
    title: formVar.title,
    packageName: formVar.package,
    titleDisplayStatus: formVar.titleDisplayStatus,
    labCategory: formVar.labCategory?.id,
    labDepartment: formVar.labDepartment?.id,
    testCode: formVar.testCode,
    labSample: formVar.labSample?.id,
    container: formVar.container?.id,
    sampleSize: formVar.sampleSize,
    sampleSizeType: formVar.sampleSizeType?.id,
    price: formVar.price,
    discount: formVar.discount,
    homeCollection: formVar.homeCollection?'Yes':'No',
    reportWithin: formVar.reportWithin,
    reportWithinType: formVar.reportWithinType?.id,
    printNote: formVar.printNote,
    type: 'Test',
    labReference: formVar.referenceData[0].gender && formVar.referenceData[0].minAge?formVar.referenceData:formVar.labReference,
  })
}
function removeTr(id){
  const objIndex = formVar.referenceData.findIndex((obj) => obj.ids === id);
  if(objIndex>=0){
    formVar.referenceData.splice(objIndex,1)
  }
}
function getRandomInt(min,max) {
  return Math.random() * (max - min) + min;
}
/* Functions/Methods */
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

/* Validation */
const titleValid = computed(() => {
  if (!formVar.title) {
    return "Please enter title!";
  }
});
const priceValid = computed(() => {
  if (!formVar.price) {
    return "Please enter price!";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please enter city!";
  }
});
const passingYearValid = computed(() => {
  if (!formVar.passingYear) {
    return "Please enter Passing Year!";
  }
});
/* Validation */
</script>

<style></style>