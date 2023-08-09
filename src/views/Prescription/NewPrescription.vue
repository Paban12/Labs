<template>
  <section class="new-prescription-page">
    <div class="container">
      <div class="visit-section">
        <div class="header-section">
          <h3>2 VISITS</h3>
          <span>Since 2022-11-25</span>
        </div>
        <div class="card form">
          <div class="card-header">
            <div class="left">
              <div class="date">20-Feb-2023</div>
              <div class="dr-name">By Dr. Harish Pandaya</div>
            </div>
            <div class="right-options">
              <div class="data">
                <img src="/src/assets/images/png/help.png" alt="image" />
                <div class="text">Email</div>
              </div>
              <router-link to="/" class="data">
                <img src="/src/assets/images/png/eye.png" alt="image" />
                <div class="text">View</div>
              </router-link>
              <div class="data">
                <img src="/src/assets/images/png/help.png" alt="image" />
                <div class="text">Share</div>
              </div>
              <div class="data">
                <img src="/src/assets/images/png/help.png" alt="image" />
                <div class="text">PDF</div>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="top-details">
              <div class="input-row two-inputs">
                <div class="top flex gap-16">
                  <div class="form-item w-max mb-16">
                    <div class="title">BP</div>
                    <div class="two-inputs align-center">
                      <input type="number" v-model="formVar.bp1" class="bp-input" placeholder="0" /> /
                      <input type="number" v-model="formVar.bp2" class="bp-input" placeholder="0" />
                    </div>
                    <div class="err-msg" v-if="formVar.submit && bpValid">{{ bpValid }}</div>
                  </div>
                  <div class="form-item mb-16">
                    <div class="title">Pulse</div>
                    <input type="number" v-model="formVar.pulse" placeholder="Per Minute" />
                    <div class="err-msg" v-if="formVar.submit && pulseValid">{{ pulseValid }}</div>
                  </div>
                </div>
                <div class="bottom flex gap-16 w-100">
                  <div class="form-item mb-16">
                    <div class="title">Height</div>
                    <input type="number" v-model="formVar.height" placeholder="In CM" />
                    <div class="err-msg" v-if="formVar.submit && heightValid">{{ heightValid }}</div>
                  </div>
                  <div class="form-item mb-16">
                    <div class="title">Weight</div>
                    <input type="number" v-model="formVar.weight" placeholder="In KG" />
                    <div class="err-msg" v-if="formVar.submit && weightValid">{{ weightValid }}</div>
                  </div>
                  <div class="form-item mb-16">
                    <div class="title">Temperature</div>
                    <input type="number" v-model="formVar.temperature" placeholder="In Fahrenheit" />
                    <div class="err-msg" v-if="formVar.submit && temperatureValid">{{ pulseValid }}</div>
                  </div>
                </div>
              </div>
              <div class="other-details">
                <div class="row">
                  <div class="col-5 form-item mb-16">
                    <div class="title">Complaints</div>
                    <MultiSelect v-model="formVar.complaints" :options="complaintOtions" :tabs="tab" @specific="handleSelectOption"
                      @selected="handleSelectedOption" />
                      <div class="err-msg" v-if="formVar.submit && complaintsValid">{{ complaintsValid }}</div>
                  </div>
                  <div class="col-5 form-item mb-16">
                    <div class="title">Quick Notes</div>
                    <input type="text" v-model="formVar.quick_notes" placeholder="Note" />
                    <div class="err-msg" v-if="formVar.submit && quickNotesValid">{{ quickNotesValid }}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-5 form-item mb-16">
                    <div class="title">Past History</div>
                    <MultiSelect v-model="formVar.past_history" :options="historyOptions" :tabs="tab" @specific="handleSelectOption"
                      @selected="handleSelectedOption" />
                      <div class="err-msg" v-if="formVar.submit && pastHistoryValid">{{ pastHistoryValid }}</div>
                  </div>
                  <div class="col-5 form-item mb-16">
                    <div class="title">Advice</div>
                    <input type="text" v-model="formVar.advice" placeholder="Advice" />
                    <div class="err-msg" v-if="formVar.submit && adviceValid">{{ adviceValid }}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-5 form-item mb-16">
                    <div class="title">Past Medication</div>
                    <MultiSelect v-model="formVar.past_medication" :options="medicationOptions" :tabs="tab" @specific="handleSelectOption"
                      @selected="handleSelectedOption" />
                      <div class="err-msg" v-if="formVar.submit && pastMedicationValid">{{ pastMedicationValid }}</div>
                  </div>
                  <div class="col-5 form-item mb-16">
                    <div class="title">Tests Require</div>
                    <MultiSelect v-model="formVar.tests_require" :options="testOptions" :tabs="tab" @specific="handleSelectOption"
                      @selected="handleSelectedOption" />
                      <div class="err-msg" v-if="formVar.submit && testsRequireValid">{{ testsRequireValid }}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-5 form-item mb-16">
                    <div class="title">Other Notes</div>
                    <MultiSelect v-model="formVar.other_notes" :options="noteOptions" :tabs="tab" @specific="handleSelectOption"
                      @selected="handleSelectedOption" />
                      <div class="err-msg" v-if="formVar.submit && otherNotesValid">{{ otherNotesValid }}</div>
                  </div>
                  <div class="col-5 form-item mb-16">
                    <div class="title">Next Visit</div>
                    <div class="row two-inputs">
                      <div class="col-7 form-item mb-16">
                        <div class="date-input">
                          <input type="date" v-model="formVar.next_visit" />
                          <div class="icon">
                            <img src="/src/assets/images/icons/calender.svg" alt="" />
                          </div>
                        </div>
                        <div class="err-msg" v-if="formVar.submit && nextVisitValid">{{ nextVisitValid }}</div>
                      </div>
                      <div class="col-3 form-item mb-16">
                        <input type="text" class="bg-blue" value="5 Days" disabled />
                      </div>
                    </div>
                    <div class="err-msg"></div>
                  </div>
                </div>
              </div>
            </div>

            <table class="prescription-cards-table table mb-16" ref="tableRef" @click="handleTableClick">
              <thead class="">
                <tr>
                  <th>Sr. No.</th>
                  <th>Medicine</th>
                  <th>Dose</th>
                  <th>Timing</th>
                  <th>When</th>
                  <th class="text-center">Action</th>
                  <!-- <th>Frequency</th>
                  <th>Duration</th>
                  <th>Note</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="val-row" v-for="(item, index) in formVar.consultData" :key="index">
                  <td data-label="Sr. No.">{{ index + 1 }}</td>
                  <td data-label="Medicine">
                    <SingleSelect v-model="item.medicine_name" @selected="addNewRow(index + 1)" :options="medicineOptions"
                      :outside="formVar.outside" placeholder=""></SingleSelect>
                  </td>
                  <td data-label="Dose">
                    <SingleSelect v-model="item.tab.duration" :options="doseOptions" :outside="formVar.outside"
                      placeholder=""></SingleSelect>
                  </td>
                  <td data-label="Timing">
                    <SingleSelect v-model="item.tab.frequency" :options="timeOptions" :outside="formVar.outside"
                      placeholder=""></SingleSelect>
                  </td>
                  <td data-label="When">
                    <SingleSelect v-model="item.tab.instruction" :options="whenOptions" :outside="formVar.outside"
                      placeholder=""></SingleSelect>
                  </td>
                  <td data-label="Action">
                    <div class="option-btns pointer" @click="deleteMadicine(index)">
                      <img src="/src/assets/images/png/delete.png" alt="">
                    </div>
                  </td>
                  <!-- <td data-label="Frequency">
                    <SingleSelect
                      v-model="formVar.keyword6"
                      :options="frequencyOptions"
                      @selected="handleSelectedOption"
                      placeholder=""
                    ></SingleSelect>
                  </td>
                  <td data-label="Duration">
                    <SingleSelect
                      v-model="formVar.keyword7"
                      :options="durationOptions"
                      @selected="handleSelectedOption"
                      placeholder=""
                    ></SingleSelect>
                  </td> -->
                  <!-- <td data-label="Note">
                    <div class="input">
                      <input ref="inputField" type="text" placeholder="Note" />
                    </div>
                  </td> -->
                </tr>
              </tbody>
            </table>
            <div class="row bottom-row">
              <div class="two-inputs col-6">
                <div class="col-5 form-item mb-16">
                  <div class="title">Refered By</div>
                  <div class="dr-input">
                    <div class="dr-tag">Dr</div>
                    <input type="text" v-model="formVar.refered_by" placeholder="Refered by" />
                  </div>
                  <div class="err-msg" v-if="formVar.submit && referedByValid">{{ referedByValid }}</div>
                </div>
                <div class="col-5 form-item mb-16">
                  <div class="title">Select Speciality</div>
                  <SingleSelect v-model="formVar.speciality" :options="specialityOptions" @selected="handleSelectedOption"
                    placeholder="Select Speciality"></SingleSelect>
                    <div class="err-msg" v-if="formVar.submit && specialityValid">{{ specialityValid }}</div>
                </div>
              </div>
              <div class="two-inputs col-4">
                <div class="col-5 form-item mb-16">
                  <div class="title">Phone No</div>
                  <div class="dr-input">
                    <div class="dr-tag">+91</div>
                    by
                    <input type="number" v-model="formVar.phone" placeholder="Phone no"
                    v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)" />
                  </div>
                  <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
                </div>
                <div class="col-5 form-item mb-16">
                  <div class="title">Email Id</div>
                  <div class="dr-input">
                    <div class="dr-tag">M</div>
                    <input type="text" v-model="formVar.email" placeholder="Email" />
                  </div>
                  <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
                </div>
              </div>
            </div>
            <div class="save-btns row justify-center align-center">
              <div class="col-25">
                <button class="btn black-btn">Add Investigation</button>
              </div>
              <div class="col-25">
                <button type="button" class="btn black-btn" @click.prevent="onSubmit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="formVar.confirmModal" class="confirm-modal">
      <h4>
        Are you sure want to Delete
      </h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="formVar.confirmModal = false">Cancel</button>
        <button type="button" class="btn confirm-btn" @click="confirmDelete">Confirm</button>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, reactive, ref, computed } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);

const tableRef = ref(null);

const formVar = reactive({
  keyword1: "",
  keyword6: "",
  keyword7: "",
  consultData: [
    {
      medicine_description: "",
      medicine_name: "",
      tab: {
        duration: "",
        durationType: "",
        frequency: "",
        instruction: "",
      },
    },
  ],
  madicinIndex:null,
  outside: false,
  confirmModal: false,
  submit:false,
  bp1:null,
  bp2:null,
  pulse:null,
  height:null,
  weight:null,
  temperature:null,
  complaints:null,
  quick_notes:null,
  past_history:null,
  advice:null,
  past_medication:null,
  tests_require:null,
  other_notes:null,
  next_visit:null,
  speciality:null,
  refered_by:null,
  phone:null,
  email:null,
});

const addNewRow = (index) => {
  if (formVar.consultData.length === index) {
    formVar.consultData.push({
      medicine_description: "",
      medicine_name: "",
      tab: {
        duration: "",
        durationType: "",
        frequency: "",
        instruction: "",
      },
    });
  }
};
const confirmDelete = computed(() => {
  if (formVar.consultData.length>1) {
    formVar.consultData.splice(formVar.madicinIndex,1)
  }else {
    formVar.consultData= [
    {
      medicine_description: "",
      medicine_name: "",
      tab: {
        duration: "",
        durationType: "",
        frequency: "",
        instruction: "",
      },
    },
    ]
  }
})
function deleteMadicine(index){
  formVar.madicinIndex=index
  formVar.confirmModal=true
  console.log({data:formVar.consultData,index});
}
function confirmDelete2(){
  formVar.consultData.splice(formVar.madicinIndex,1)
  formVar.confirmModal=false
}
const onSubmit = () => {
  if (
    bpValid.value ||
    pulseValid.value ||
    heightValid.value ||
    weightValid.value ||
    temperatureValid.value ||
    complaintsValid.value ||
    quickNotesValid.value ||
    pastHistoryValid.value ||
    adviceValid.value ||
    pastMedicationValid.value ||
    testsRequireValid.value ||
    otherNotesValid.value ||
    nextVisitValid.value ||
    referedByValid.value ||
    specialityValid.value ||
    phoneValid.value ||
    emailValid.value 
  ) {
    formVar.submit = true;
    return;
  }
  console.log(formVar.consultData);
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {     
    userId: 10563543453,
    password: 4532453, });
};

const handleDocumentClick = (event) => {
  const isClickedInsideTable = tableRef.value.contains(event.target);
  if (!isClickedInsideTable) {
    // const clickedElement = event.target;
    const elements = document.getElementsByClassName("single-select");
    const elementsArray = Array.from(elements);

    // Iterate over each element and remove the class from its class list
    elementsArray.forEach((element) => {
      element.classList.remove("show-drop");
    });
  }
};

onBeforeMount(() => {
  document.addEventListener("click", handleDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});

//search select
const medicineOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const doseOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const timeOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const whenOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const frequencyOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const durationOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const specialityOptions = [
  { id: 1, name: "ENT" },
  { id: 2, name: "General Surgen" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
  formVar.complaints=option
};
const handleSelectedComplaints = (option) => {
  formVar.complaints=option
};
const handleSelectedPastHistory = (option) => {
  formVar.past_history=option
};
const handleSelectOption = (option) => {
  console.log("Selected one option:", option);
};

//multi select
const complaintOtions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const historyOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const medicationOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const testOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const noteOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const tab = [];

/* Validation */
const bpValid = computed(() => {
  if (!formVar.bp1 || !formVar.bp2 ) {
    return "Please enter your BP!";
  }
});
const pulseValid = computed(() => {
  if (!formVar.pulse) {
    return "Please enter pulse!";
  }
});
const heightValid = computed(() => {
  if (!formVar.height) {
    return "Please enter height!";
  }
});
const weightValid = computed(() => {
  if (!formVar.weight) {
    return "Please enter weight!";
  }
});
const temperatureValid = computed(() => {
  if (!formVar.temperature) {
    return "Please enter temperature!";
  }
});
const complaintsValid = computed(() => {
  if (!formVar.complaints) {
    return "Please select complaints!";
  }
});
const quickNotesValid = computed(() => {
  if (!formVar.quick_notes) {
    return "Please enter quick notes!";
  }
});
const pastHistoryValid = computed(() => {
  if (!formVar.past_history) {
    return "Please select past history!";
  }
});
const adviceValid = computed(() => {
  if (!formVar.advice) {
    return "Please enter advice!";
  }
});
const pastMedicationValid = computed(() => {
  if (!formVar.past_medication) {
    return "Please select past medication!";
  }
});
const testsRequireValid = computed(() => {
  if (!formVar.tests_require) {
    return "Please select tests require!";
  }
});
const otherNotesValid = computed(() => {
  if (!formVar.other_notes) {
    return "Please select other notes!";
  }
});
const nextVisitValid = computed(() => {
  if (!formVar.next_visit) {
    return "Please select next visit!";
  }
});
const referedByValid = computed(() => {
  if (!formVar.refered_by) {
    return "Please enter doctor name!";
  }
});
const specialityValid = computed(() => {
  if (!formVar.speciality) {
    return "Please select speciality!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter your phone no!";
  }else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter your email!";
  }else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});

function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
function phnum(e) {
  formVar.loginId = e.slice(0, 10)
}
/* Validation */


//search select
</script>

<style></style>
