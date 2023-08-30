<template>
  <Modal
    v-model:show="storeVar.aptBookModal"
    class="book-apt-modal"
    headerClasses="header-bg"
  >
    <template v-slot:header>
      <div class="title" showHeader="true">Book Appointment</div>
      <div class="close-btn" @click.prevent="storeVar.aptBookModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <form action="" class="form" @submit.prevent="onSubmitAppointment">
      <div class="two-inputs">
        <div class="form-item col-5 mb-16">
          <input
            type="number"
            v-model="formVar.phone"
            placeholder="Enter Phone no"
            v-on:keypress="isNumber($event)"
            v-on:keyup="phnum($event.target.value)"
          />
          <div class="err-msg" v-if="formVar.submit && phoneValid">
            {{ phoneValid }}
          </div>
        </div>
        <div class="form-item p-id col-5 mb-16">
          <div class="id">
            PID :
            <div class="tag green-tag">1254</div>
          </div>
          <div class="time">21 Jun, 2023 03:20 PM (44 Days)</div>
        </div>
      </div>
      <div class="row">
        <div class="col-25 form-item mb-16">
          <SingleSelect
            v-model="formVar.prefix"
            :options="prefixOptions"
            @selected="handleSelectedOption"
            placeholder="Select Prefix"
          ></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && prefixValid">
            {{ prefixValid }}
          </div>
        </div>
        <div class="col-75 form-item mb-16">
          <input
            type="text"
            v-model="formVar.name"
            placeholder="Patient Name"
          />
          <div class="err-msg" v-if="formVar.submit && nameValid">
            {{ nameValid }}
          </div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="col-25 form-item mb-16">
          <SingleSelect
            v-model="formVar.gender"
            :options="genderOptions"
            @selected="handleSelectedOption"
            placeholder="Select Gender"
          ></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && genderValid">
            {{ genderValid }}
          </div>
        </div>
        <div class="col-5 form-item mb-16">
          <div class="date-input">
            <input type="date" v-model="formVar.dob" :max="today()" />
            <div class="icon">
              <img src="/src/assets/images/icons/calender.svg" alt="" />
            </div>
          </div>
          <div>{{ ageCalculate }}</div>
          <div class="err-msg" v-if="formVar.submit && dobValid">
            {{ dobValid }}
          </div>
        </div>
        <div class="col-25 form-item mb-16">
          <input type="text" v-model="formVar.age" class="bg-blue" disabled />
        </div>
      </div>
      <div class="two-inputs">
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="formVar.blood"
            :options="bloodOptions"
            @selected="handleSelectedOption"
            placeholder="Select Blood Group"
          ></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && bloodValid">
            {{ bloodValid }}
          </div>
        </div>
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="formVar.language"
            :options="langOptions"
            @selected="handleSelectedOption"
            placeholder="Select Language"
          ></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && languageValid">
            {{ languageValid }}
          </div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="form-item mb-16">
          <input
            type="text"
            v-model="formVar.email"
            placeholder="Enter Email"
          />
          <div class="err-msg" v-if="formVar.submit && emailValid">
            {{ emailValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <input
            type="text"
            v-model="formVar.address"
            placeholder="Enter Address"
          />
          <div class="err-msg" v-if="formVar.submit && addressValid">
            {{ addressValid }}
          </div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="formVar.state"
            :options="stateOptions"
            @selected="handleSelectedOption"
            placeholder="Select State"
          ></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && stateValid">
            {{ stateValid }}
          </div>
        </div>
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="formVar.city"
            :options="cityOptions"
            @selected="handleSelectedOption"
            placeholder="Select City"
          ></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && cityValid">
            {{ cityValid }}
          </div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="col-5 form-item mb-16">
          <div class="dr-input">
            <div class="dr-tag">Dr</div>
            <SingleSelect
              v-model="formVar.doctor"
              :options="doctorOptions"
              @selected="handleSelectedOption"
              placeholder="Search Doctor"
            ></SingleSelect>
          </div>
          <div class="err-msg" v-if="formVar.submit && doctorValid">
            {{ doctorValid }}
          </div>
        </div>
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="formVar.speciality"
            :options="specialityOptions"
            @selected="handleSelectedOption"
            placeholder="Select Speciality"
          ></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && specialityValid">
            {{ specialityValid }}
          </div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="formVar.collectionAt"
            :options="collectionAtOptions"
            @selected="handleSelectedOption"
            placeholder="Sample Collection At"
          ></SingleSelect>
          <div class="err-msg"></div>
        </div>
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="formVar.collectionCategory"
            :options="collectionCategoryOptions"
            @selected="handleSelectedOption"
            placeholder="Category"
          ></SingleSelect>
          <div class="err-msg"></div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="col-33 form-item mb-16">
          <SingleSelect
            v-model="formVar.collectionCenter"
            :options="collectionCenterOptions"
            @selected="handleSelectedOption"
            placeholder="Collection Center"
          ></SingleSelect>
          <div class="err-msg"></div>
        </div>
        <div class="col-33 form-item mb-16">
          <SingleSelect
            v-model="formVar.collectionBy"
            :options="collectionByOptions"
            @selected="handleSelectedOption"
            placeholder="Collected By"
          ></SingleSelect>
          <div class="err-msg"></div>
        </div>
        <div class="col-33 form-item mb-16">
          <div class="date-input">
            <input type="date" />
            <div class="icon">
              <img src="/src/assets/images/icons/calender.svg" alt="" />
            </div>
          </div>
          <div class="err-msg"></div>
        </div>
      </div>
      <div class="two-inputs">
        <div class="col-33 form-item mb-16">
          <div class="title">Schedule On</div>
          <div class="date-input">
            <input type="date" />
            <div class="icon">
              <img src="/src/assets/images/icons/calender.svg" alt="" />
            </div>
          </div>
          <div class="err-msg"></div>
        </div>
        <div class="col-33 form-item mb-16">
          <div class="title">At</div>
          <SingleSelect
            v-model="formVar.scheduleAt"
            :options="scheduleAtOptions"
            @selected="handleSelectedOption"
            placeholder="Collection Center"
          ></SingleSelect>
          <div class="err-msg"></div>
        </div>
        <div class="col-33 form-item mb-16">
          <div class="title">For</div>
          <SingleSelect
            v-model="formVar.scheduleFor"
            :options="scheduleForOptions"
            @selected="handleSelectedOption"
            placeholder="Collected By"
          ></SingleSelect>
          <div class="err-msg"></div>
        </div>
      </div>
      <div class="test-table mb-16">
        <table class="table">
          <thead>
            <th>Sr. No.</th>
            <th>Test Name</th>
            <th>Unit</th>
            <th>Cost(₹)</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>Total</th>
            <th class="text-center">Option</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in testTableData" :key="item">
              <td>{{ index + 1 }}</td>
              <td>
                <SingleSelect
                  v-model="formVar.tableTest"
                  :options="tableTestOptions"
                  @selected="handleSelectedOption"
                  placeholder="Search Test"
                ></SingleSelect>
              </td>
              <td><input type="number" placeholder="1" /></td>
              <td><input type="number" placeholder="00" /></td>
              <td>
                <input type="number" placeholder="In %" />
              </td>
              <td>
                <!-- <SingleSelect
                  v-model="formVar.tableTax"
                  :options="tableTaxOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select Tax"
                ></SingleSelect> -->
                <MultiSelect
                  :options="tableTaxOptions"
                  :tabs="tab"
                  @selected="handleSelectedOption"
                  placeholder="Select Tax"
                />
              </td>
              <td>{{ item.total }}</td>
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
      <div class="charges-row flex align-start mb-16">
        <div class="data flex align-start">
          <input type="checkbox" />
          <div class="text">Home Collection Charge</div>
        </div>
        <div class="data flex align-start">
          <input type="checkbox" />
          <div class="text">Home Collection Charge</div>
        </div>
        <div class="data flex align-start">
          <input type="checkbox" />
          <div class="text">Home Collection Charge</div>
        </div>
      </div>
      <div class="total-tests">
        <h4 class="mb-10">Total : 1 Tests</h4>
        <div class="bill-table mb-16">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Billing</th>
              <th>Pay Mode</th>
              <th>Payable(₹)</th>
              <th>From Advance(₹)</th>
              <th>Pay Now(₹)</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in billTableData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>
                  <div class="select-dropdown">
                    <select name="" id="">
                      <option value="">Payment</option>
                      <option value="">Invoice</option>
                      <option value="">Appointment</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div class="select-dropdown">
                    <select name="" id="">
                      <option value="">Cash</option>
                      <option value="">Card</option>
                      <option value="">Cheque</option>
                      <option value="">Net Banking</option>
                      <option value="">Google Pay</option>
                      <option value="">Paytm</option>
                      <option value="">PhonePe</option>
                      <option value="">Credit Card</option>
                      <option value="">Debit Card</option>
                      <option value="">UPI</option>
                      <option value="">Amazon Pay</option>
                    </select>
                  </div>
                </td> 
                <td>{{ item.payable }}</td>
                <td>{{ item.advance }}</td>
                <td>
                  <input type="number" placeholder="00" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="form-item mb-16">
          <input type="text" placeholder="Note">
        </div>
      </div>
      <div class="save-btn flex justify-end">
        <button type="submit" class="btn black-btn w-10-r">Book</button>
      </div>
    </form>
  </Modal>
</template>

<script setup>
import moment from "moment";
import { reactive, computed } from 'vue';
import { useStore } from 'vuex'


/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  submit: false,
  date: new Date(),
  fromDate: moment().format("YYYY-MM-DD"),
  toDate: moment().format("YYYY-MM-DD"),
  tab: 1,
  aptModal: false,
  name: null,
  email: null,
  phone: null,
  address: null,
  doctor: null,
  prefix: null,
  gender: null,
  blood: null,
  state: null,
  city: null,
  speciality: null,
  language: null,
  dob: null,
  age: null,
  collectionAt: null,
  collectionCategory: null,
  collectionCenter: null,
  collectionBy: null,
  scheduleAt: null,
  scheduleFor: null,
  tableTest: null,
  tableTax: null,
});
/* Constants */

//search select start//
const stateOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const cityOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const langOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const doctorOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const specialityOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const genderOptions = [
  { name: "Male", id: "male" },
  { name: "Female", id: "female" },
  { name: "Other", id: "other" },
];
const prefixOptions = [
  { name: "Mr.", id: "mr" },
  { name: "Mrs.", id: "mrs" },
];
const collectionAtOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const collectionCategoryOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const collectionCenterOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const collectionByOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const scheduleAtOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const scheduleForOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const bloodOptions = [
  { name: "A+", id: "a+" },
  { name: "B+", id: "b+" },
  { name: "O+", id: "o+" },
  { name: "AB+", id: "ab+" },
  { name: "A-", id: "a-" },
  { name: "B-", id: "b-" },
  { name: "O-", id: "o-" },
  { name: "AB-", id: "ab-" },
];

//for table data
const tableTestOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const tableTaxOptions = [
  { id: 1, name: "28% IGST" },
  { id: 2, name: "18% IGST" },
  { id: 3, name: "12% IGST" },
  { id: 4, name: "5% IGST" },
  { id: 5, name: "14% SGST" },
  { id: 6, name: "9% SGST" },
  { id: 7, name: "6% SGST" },
  { id: 8, name: "3% SGST" },
  { id: 9, name: "14% CGST" },
  { id: 10, name: "9% CGST" },
  { id: 11, name: "6% CGST" },
  { id: 12, name: "3% CGST" },
  { id: 13, name: "28% GST" },
  { id: 14, name: "18% GST" },
  { id: 15, name: "12% GST" },
  { id: 16, name: "5% GST" },
];
const tab = [];

const testTableData = reactive([
  {
    total: 2000
  }
])

const billTableData = reactive([
  {
    payable: 2000,
    advance: 4000,
  }
])

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitAppointment = () => {
  if (
    nameValid.value ||
    prefixValid.value ||
    phoneValid.value ||
    emailValid.value ||
    dobValid.value ||
    bloodValid.value ||
    doctorValid.value ||
    genderValid.value ||
    addressValid.value ||
    specialityValid.value ||
    languageValid.value ||
    stateValid.value ||
    cityValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/register", { userId: 453245 });
};

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
function today() {
  var fullDate = new Date()
  var tDate = fullDate.getDate()
  var tYear = fullDate.getFullYear()
  var tMonth = fullDate.getMonth() + 1
  if (tMonth < 10) {
    tMonth = '0' + tMonth
  }
  if (tDate < 10) {
    tDate = '0' + tDate
  }
  var minDate = tYear + '-' + tMonth + '-' + tDate
  return minDate
}
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  var d = today.getDay() - birthDate.getDay();
  if (age === 0) {
    var total_age = `${m} m`
  } else {
    var total_age = `${age} y`
  }
  formVar.age = total_age;
}
const ageCalculate = computed(() => {
  if (formVar.dob) {
    getAge(formVar.dob)
  }
});
/* Functions/Methods */

/* Validation */
const prefixValid = computed(() => {
  if (!formVar.prefix) {
    return "Select prefix!";
  }
});
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Enter patient name!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter your phone no!";
  } else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter your email!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please select gender!";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Please enter DOB !";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please enter your address !";
  }
});
const specialityValid = computed(() => {
  if (!formVar.speciality) {
    return "Select speciality!";
  }
});
const bloodValid = computed(() => {
  if (!formVar.blood) {
    return "Select blood group!";
  }
});
const languageValid = computed(() => {
  if (!formVar.language) {
    return "Select language!";
  }
});
const stateValid = computed(() => {
  if (!formVar.state) {
    return "Please select state!";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please select city!";
  }
});
const doctorValid = computed(() => {
  if (!formVar.doctor) {
    return "Please enter doctor!";
  }
});
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
function phnum(e) {
  formVar.phone = e.slice(0, 10)
}
/* Validation */
</script>

<style>
</style>