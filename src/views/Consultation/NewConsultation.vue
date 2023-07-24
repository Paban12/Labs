<template>
  <section class="new-consultation-page">
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
                    <input type="number" class="bp-input" placeholder="0" /> /
                    <input type="number" class="bp-input" placeholder="0" />
                  </div>
                  <div class="err-msg">Enter</div>
                </div>
                <div class="form-item mb-16">
                  <div class="title">Pulse</div>
                  <input type="number" placeholder="Per Minute" />
                  <div class="err-msg">Enter</div>
                </div>
              </div>
              <div class="bottom flex gap-16 w-100">
                <div class="form-item mb-16">
                  <div class="title">Height</div>
                  <input type="number" placeholder="In CM" />
                  <div class="err-msg">Enter</div>
                </div>
                <div class="form-item mb-16">
                  <div class="title">Weight</div>
                  <input type="number" placeholder="In KG" />
                  <div class="err-msg">Enter</div>
                </div>
                <div class="form-item mb-16">
                  <div class="title">Temperature</div>
                  <input type="number" placeholder="In Fahrenheit" />
                  <div class="err-msg">Enter</div>
                </div>
              </div>
            </div>
            <div class="other-details">
              <div class="row">
                <div class="col-5 form-item mb-16">
                  <div class="title">Complaints</div>
                  <MultiSelect
                    :options="complaintOtions"
                    :tabs="tab"
                    @specific="handleSelectOption"
                    @selected="handleSelectedOption"
                  />
                  <div class="err-msg">Please select</div>
                </div>
                <div class="col-5 form-item mb-16">
                  <div class="title">Quick Notes</div>
                  <input type="text" placeholder="Note" />
                  <div class="err-msg">Please enter</div>
                </div>
              </div>
              <div class="row">
                <div class="col-5 form-item mb-16">
                  <div class="title">Past History</div>
                  <MultiSelect
                    :options="historyOptions"
                    :tabs="tab"
                    @specific="handleSelectOption"
                    @selected="handleSelectedOption"
                  />
                  <div class="err-msg">Please select</div>
                </div>
                <div class="col-5 form-item mb-16">
                  <div class="title">Advice</div>
                  <input type="text" placeholder="Advice" />
                  <div class="err-msg">Please enter</div>
                </div>
              </div>
              <div class="row">
                <div class="col-5 form-item mb-16">
                  <div class="title">Past Medication</div>
                  <MultiSelect
                    :options="medicationOptions"
                    :tabs="tab"
                    @specific="handleSelectOption"
                    @selected="handleSelectedOption"
                  />
                  <div class="err-msg">Please select</div>
                </div>
                <div class="col-5 form-item mb-16">
                  <div class="title">Tests Require</div>
                  <MultiSelect
                    :options="testOptions"
                    :tabs="tab"
                    @specific="handleSelectOption"
                    @selected="handleSelectedOption"
                  />
                  <div class="err-msg">Please select</div>
                </div>
              </div>
              <div class="row">
                <div class="col-5 form-item mb-16">
                  <div class="title">Other Notes</div>
                  <MultiSelect
                    :options="noteOptions"
                    :tabs="tab"
                    @specific="handleSelectOption"
                    @selected="handleSelectedOption"
                  />
                  <div class="err-msg">Please select</div>
                </div>
                <div class="col-5 form-item mb-16">
                  <div class="title">Next Visit</div>
                  <div class="row two-inputs">
                    <div class="col-7 form-item mb-16">
                      <div class="date-input">
                        <input type="date" />
                        <div class="icon">
                          <img
                            src="/src/assets/images/icons/calender.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-3 form-item mb-16">
                      <input
                        type="text"
                        class="bg-blue"
                        value="5 Days"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="err-msg"></div>
                </div>
              </div>
            </div>
          </div>

          <table
            class="consultation-cards-table table mb-16"
            ref="tableRef"
            @click="handleTableClick"
          >
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
              <tr
                class="val-row"
                v-for="(item, index) in formVar.consultData"
                :key="index"
              >
                <td data-label="Sr. No.">{{ index + 1 }}</td>
                <td data-label="Medicine">
                  <SingleSelect
                    v-model="item.medicine_name"
                    @selected="addNewRow(index + 1)"
                    :options="medicineOptions"
                    :outside="formVar.outside"
                    placeholder=""
                  ></SingleSelect>
                </td>
                <td data-label="Dose">
                  <SingleSelect
                    v-model="item.tab.duration"
                    :options="doseOptions"
                    :outside="formVar.outside"
                    placeholder=""
                  ></SingleSelect>
                </td>
                <td data-label="Timing">
                  <SingleSelect
                    v-model="item.tab.frequency"
                    :options="timeOptions"
                    :outside="formVar.outside"
                    placeholder=""
                  ></SingleSelect>
                </td>
                <td data-label="When">
                  <SingleSelect
                    v-model="item.tab.instruction"
                    :options="whenOptions"
                    :outside="formVar.outside"
                    placeholder=""
                  ></SingleSelect>
                </td>
                <td data-label="Action">
                  <div class="option-btns pointer" @click.prevent="formVar.confirmModal = true">
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
                  <input type="text" placeholder="Refered by" />
                </div>
                <div class="err-msg">Enter doctor name</div>
              </div>
              <div class="col-5 form-item mb-16">
                <div class="title">Select Speciality</div>
                <SingleSelect
                  v-model="formVar.keyword1"
                  :options="specialityOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select Speciality"
                ></SingleSelect>
                <div class="err-msg">Select speciality</div>
              </div>
            </div>
            <div class="two-inputs col-4">
              <div class="col-5 form-item mb-16">
                <div class="title">Phone No</div>
                <div class="dr-input">
                  <div class="dr-tag">+91</div>
                  by
                  <input type="number" placeholder="Phone no" />
                </div>
                <div class="err-msg">Enter phone no</div>
              </div>
              <div class="col-5 form-item mb-16">
                <div class="title">Email Id</div>
                <div class="dr-input">
                  <div class="dr-tag">M</div>
                  <input type="text" placeholder="Email" />
                </div>
                <div class="err-msg">Enter email</div>
              </div>
            </div>
          </div>
          <div class="save-btns row justify-center align-center">
            <div class="col-25">
              <button class="btn black-btn">Add Investigation</button>
            </div>
            <div class="col-25">
              <button
                type="button"
                class="btn black-btn"
                @click.prevent="onSubmit"
              >
                Save
              </button>
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
        <button class="btn confirm-btn">Confirm</button>
      </div>      
    </Modal>
  </section>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, reactive, ref } from "vue";

const tableRef = ref(null);

const formVar = reactive({
  keyword1: "",
  keyword2: "",
  keyword3: "",
  keyword4: "",
  keyword5: "",
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
  outside: false,
  confirmModal: false,
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
const onSubmit = () => {
  console.log(formVar.consultData);
};

const handleDocumentClick = (event) => {
  const isClickedInsideTable = tableRef.value.contains(event.target);
  if (!isClickedInsideTable) {
    // const clickedElement = event.target;
    console.log(isClickedInsideTable);
    const elements = document.getElementsByClassName("single-select");
    console.log(elements);
    const elementsArray = Array.from(elements);
    console.log(elementsArray);

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
};
const handleSelectOption = (option) => {
  console.log("Selected option:", option);
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

//search select
</script>

<style></style>
