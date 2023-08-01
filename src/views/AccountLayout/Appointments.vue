<template>
  <section class="appointment-page">
    <div class="card p-10 mb-16">
      <div class="title-header p-0 border-none">
        <div class="title">Appointments</div>
        <div class="search">
          <div class="date-input">
            <input type="date">
            <div class="icon">
              <img src="/src/assets/images/icons/calender.svg" alt="">
            </div>
          </div>
          <button class="btn yellow-btn">All APT</button>
          <button class="btn black-btn">Search</button>
        </div>
      </div>
    </div>

    <div class="table-form row">
      <div class="card apt-table">
        <!-- <div class="table-header">
          <div class="title">All Appointments</div>
        </div> -->
        <div class="table-body p-0">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Sr. No.</th>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor Name</th>
                <th>Status</th>
                <th>Services</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in billData" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.time }}</td>
                  <td>{{ item.doctor_name }}</td>
                  <td>
                    <div class="tag green-tag">Booked</div>
                  </td>
                  <td>{{ item.service }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data">
            <div >No records Found!</div>
          </div>
          <div class="table-footer">
            <div class="entries">
              Showing <span>0</span> to <span>0</span> of <span>0</span> entries
            </div>
            <div class="pagination">
              <span>First</span>
              <span>Previous</span>
              <div class="page">1</div>
              <span>Next</span>
              <span>Last</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card apt-form">
        <form action="" class="form" @submit.prevent="onSubmitAppointment">
          <h3>Book Appointment</h3>
          <span class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, expedita!
          </span>
          <div class="form-item mb-16">
            <SingleSelect v-model="formVar.doctor" :options="doctorOptions" @selected="handleSelectedOption"
              placeholder="Select Doctor"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && doctorValid">{{ doctorValid }}</div>
          </div>
          <div class="form-item mb-16">
            <SingleSelect v-model="formVar.service" :options="serviceOptions" @selected="handleSelectedOption"
              placeholder="Select Service"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && serviceValid">{{ serviceValid }}</div>
          </div>
          <div class="form-item mb-16">
            <div class="date-input">
              <input type="date" v-model="formVar.dob">
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="">
              </div>
            </div>
            <div class="err-msg" v-if="formVar.submit && dobValid">{{ dobValid }}</div>
          </div>
          <div class="row two-inputs">
            <div class="form-item col-5 mb-16">
              <SingleSelect v-model="formVar.time" :options="timeOptions" @selected="handleSelectedOption"
                placeholder="Select Time"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && timeValid">{{ timeValid }}</div>
            </div>
            <div class="form-item col-5 mb-16">
              <SingleSelect v-model="formVar.duration" :options="durationOptions" @selected="handleSelectedOption"
                placeholder="Select Duration"></SingleSelect>
                <div class="err-msg" v-if="formVar.submit && durationValid">{{ durationValid }}</div>
            </div>
          </div>
          <div class="book-btn form-item flex justify-center">
            <button class="btn black-btn">Book</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  doctor: "",
  service: "",
  time: "",
  duration: "",
  dob: null,
})

const billData = reactive([
  {
    date: '12-05-2023',
    time: '12:45',
    doctor_name: 'Dr. Harish Verma',
    service: 'ENT'
  },
])

//search select start//
const doctorOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const serviceOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const timeOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const durationOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
//search select end//

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */ 

const onSubmitAppointment = () => {
  if (
    doctorValid.value ||
    serviceValid.value ||
    timeValid.value ||
    durationValid.value ||
    dobValid.value 
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {
    userId: 10563543453,
    password: 4532453,
  });
};
/* Functions/Methods */

/* Validation */
const doctorValid = computed(() => {
  if (!formVar.doctor) {
    return "Please select doctor!";
  }
});
const serviceValid = computed(() => {
  if (!formVar.service) {
    return "Please select service!";
  }
});
const timeValid = computed(() => {
  if (!formVar.time) {
    return "Please select time!";
  }
});
const durationValid = computed(() => {
  if (!formVar.duration) {
    return "Please select duration!";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Please select dob!";
  }
});

/* Validation */

</script>

<style></style>