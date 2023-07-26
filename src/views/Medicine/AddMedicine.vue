<template>
  <section class="medicine-page">
    <div class="container">
      <form action="" class="form" @submit.prevent="onSubmitAddMedicine">
        <div class="card">
          <div class="card-head flex align-center justify-space mb-16">
            <h4 class="">Medicine Library</h4>
            <router-link to="/medicine-list" class="btn black-btn">View Medicines</router-link>
          </div>
          <div class="row">
            <div class="two-inputs col-4">
              <div class="form-item col-5 mb-16">
                <div class="title">Type</div>
                <SingleSelect v-model="medicine.medicine_type" :options="medicineTypeOptions"
                  @selected="handleSelectedOption" placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && medicineTypeValid">{{ medicineTypeValid }}</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Medicine</div>
                <SingleSelect v-model="medicine.medicine_name" :options="medicineOptions" @selected="handleSelectedOption"
                  placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && medicineNameValid">{{ medicineNameValid }}</div>
              </div>
            </div>
            <div class="form-item dose-row col-3 mb-16">
              <div class="title">Dosage (Morning-Afternoon-Evening)</div>
              <div class="row dose-inputs align-center">
                <div class="col-3">
                  <input type="text" v-model="medicine.dosage1" class="text-center" id="dosage" placeholder="0" maxlength="1" v-on:keypress="isNumber($event)" />
                </div>
                -
                <div class="col-3">
                  <input type="text" v-model="medicine.dosage2" class="text-center" id="dosage" placeholder="0" maxlength="1" v-on:keypress="isNumber($event)" />
                </div>
                -
                <div class="col-3">
                  <input type="text" v-model="medicine.dosage3" class="text-center" id="dosage" placeholder="0" maxlength="1" v-on:keypress="isNumber($event)" />
                </div>
              </div>
              <div class="err-msg" v-if="medicine.submit && dosageValid">{{ dosageValid }}</div>
            </div>
            <div class="two-inputs col-3">
              <div class="form-item col-5 mb-16">
                <div class="title">Unit</div>
                <SingleSelect v-model="medicine.unit" :options="unitOptions" @selected="handleSelectedOption"
                  placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && unitValid">{{ unitValid }}</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Time</div>
                <SingleSelect v-model="medicine.time" :options="timeOptions" @selected="handleSelectedOption"
                  placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && timeValid">{{ timeValid }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="two-inputs col-6">
              <div class="form-item col-33 mb-16">
                <div class="title">When</div>
                <SingleSelect v-model="medicine.when" :options="whenOptions" @selected="handleSelectedOption"
                  placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && whenValid">{{ whenValid }}</div>
              </div>
              <div class="form-item col-33 mb-16">
                <div class="title">Generic Name</div>
                <SingleSelect v-model="medicine.generic" :options="genericOptions" @selected="handleSelectedOption"
                  placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && genericValid">{{ genericValid }}</div>
              </div>
              <div class="form-item col-33 mb-16">
                <div class="title">Frequency</div>
                <SingleSelect v-model="medicine.frequency" :options="frequencyOptions" @selected="handleSelectedOption"
                  placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && frequencyValid">{{ frequencyValid }}</div>
              </div>
            </div>
            <div class="two-inputs col-4">
              <div class="form-item col-5 mb-16">
                <div class="title">Duration</div>
                <SingleSelect v-model="medicine.duration" :options="durationOptions" @selected="handleSelectedOption"
                  placeholder="Select"></SingleSelect>
                <div class="err-msg" v-if="medicine.submit && durationValid">{{ durationValid }}</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Note</div>
                <input type="text" v-model="medicine.note" placeholder="Note">
                <div class="err-msg" v-if="medicine.submit && noteValid">{{ noteValid }}</div>
              </div>
            </div>
          </div>
          <div class="save-btn flex justify-center row">
            <button type="submit" class="btn black-btn col-2">Add medicine</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const medicine = reactive({
  submit:false,
  medicine_type: "",
  medicine_name: "",
  unit: "",
  time: "",
  when: "",
  generic: "",
  frequency: "",
  duration: "",
  note: "",
  dosage1:null,
  dosage2:null,
  dosage3:null,
});
 
//search select
const medicineTypeOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const medicineOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const genericOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const unitOptions = [
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

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */
const onSubmitAddMedicine = () => {
  if (
    medicineTypeValid.value ||
    medicineNameValid.value ||
    dosageValid.value ||
    unitValid.value ||
    timeValid.value ||
    whenValid.value ||
    genericValid.value ||
    frequencyValid.value ||
    durationValid.value ||
    noteValid.value 
  ) {
    medicine.submit = true;
    return;
  }
  medicine.submit = false;
  store.dispatch("Auth/verifyUser", {     
    userId: 10563543453,
    password: 4532453, });
  };
  const handleSelectedOption = (option) => {
    console.log("Selected option:", option);
  };

/* Functions/Methods */

/* Validation */
const medicineTypeValid = computed(() => {
  if (!medicine.medicine_type) {
    return "Please select medicine type!";
  }
});
const medicineNameValid = computed(() => {
  if (!medicine.medicine_name) {
    return "Please select medicine!";
  }
});
const dosageValid = computed(() => {
  if (!medicine.dosage1 || !medicine.dosage2 || !medicine.dosage3) {
    return "Please enter dosage!";
  }
});
const unitValid = computed(() => {
  if (!medicine.unit) {
    return "Please select units!";
  }
});
const timeValid = computed(() => {
  if (!medicine.time) {
    return "Please select!";
  }
});
const whenValid = computed(() => {
  if (!medicine.when) {
    return "Please select!";
  }
});
const genericValid = computed(() => {
  if (!medicine.generic) {
    return "Please select generic name!";
  }
});
const frequencyValid = computed(() => {
  if (!medicine.frequency) {
    return "Please select frequency!";
  }
});
const durationValid = computed(() => {
  if (!medicine.duration) {
    return "Please select duration!";
  }
});
const noteValid = computed(() => {
  if (!medicine.note) {
    return "Please enter note!";
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
</script>

<style></style>