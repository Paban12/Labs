<template>
  <section class="apt-page bills-page">
    <div class="card">
      <div class="card-body">
        <div class="bill-table">
          <div class="title-header">
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