<template>
  <section class="medicine-page">
    <div class="container">
      <form action="" class="form">
        <div class="card">
          <h4 class="mb-16">Add Medicine to RX Group</h4>
          <div class="row gap-16">
            <div class="form-item name-input col-2 mb-16">
              <div class="title">Enter name of RX Group</div>
              <input type="text" placeholder="Enter" />
              <div class="err-msg">Please enter group name</div>
            </div>
          </div>
          <div class="row">
            <div class="two-inputs col-4">
              <div class="form-item col-5 mb-16">
                <div class="title">Type</div>
                <SingleSelect
                  v-model="medicine.medicine_type"
                  :options="medicineTypeOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select medicine type</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Medicine</div>
                <SingleSelect
                  v-model="medicine.medicine_name"
                  :options="medicineOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select medicine</div>
              </div>
            </div>
            <div class="form-item dose-row col-3 mb-16">
              <div class="title">Dosage (Morning-Afternoon-Evening)</div>
              <div class="row dose-inputs align-center">
                <div class="col-3">
                  <input type="number" class="text-center" placeholder="0" maxlength="1" />
                </div>
                -
                <div class="col-3">
                  <input type="number" class="text-center" placeholder="0" maxlength="1" />
                </div>
                -
                <div class="col-3">
                  <input type="number" class="text-center" placeholder="0" maxlength="1" />
                </div>
              </div>
              <div class="err-msg">Please enter dosage</div>
            </div>
            <div class="two-inputs col-3">
              <div class="form-item col-5 mb-16">
                <div class="title">Unit</div>
                <SingleSelect
                  v-model="medicine.unit"
                  :options="unitOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select units</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Time</div>
                <SingleSelect
                  v-model="medicine.time"
                  :options="timeOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select time</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="two-inputs col-6">
              <div class="form-item col-33 mb-16">
                <div class="title">When</div>
                <SingleSelect
                  v-model="medicine.when"
                  :options="whenOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select</div>
              </div>
              <div class="form-item col-33 mb-16">
                <div class="title">Generic Name</div>
                <SingleSelect
                  v-model="medicine.generic"
                  :options="genericOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select generic name</div>
              </div>
              <div class="form-item col-33 mb-16">
                <div class="title">Frequency</div>
                <SingleSelect
                  v-model="medicine.frequency"
                  :options="frequencyOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select frequency</div>
              </div>
            </div>
            <div class="two-inputs col-4">
              <div class="form-item col-5 mb-16">
                <div class="title">Duration</div>
                <SingleSelect
                  v-model="medicine.duration"
                  :options="durationOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect>
                <div class="err-msg">Please select duration</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Note</div>
                <!-- <SingleSelect
                  v-model="medicine.note"
                  :options="noteOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select"
                ></SingleSelect> -->
                <input type="text" placeholder="Note">
                <div class="err-msg">Please enter note</div>
              </div>
            </div>
          </div>
          <div class="save-btn flex justify-center row">
            <button class="btn black-btn">Save Medicine</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const medicine = reactive({
  medicine_type: "",
  medicine_name: "",
  unit: "",
  time: "",
  when: "",
  generic: "",
  frequency: "",
  duration: "",
  note: "",
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
const noteOptions = [
  { id: 1, name: "ENT" },
  { id: 2, name: "General Surgen" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>