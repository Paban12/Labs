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
              <tfoot class="no-data">
                <tr>
                  <td colspan="10" rowspan="1">No records Found!</td>
                </tr>
              </tfoot>
            </table>
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
        <form action="" class="form">
          <h3>Book Appointment</h3>
          <span class="text"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, expedita!
          </span>
          <div class="form-item mb-16">
            <SingleSelect
              v-model="appointment.doctor"
              :options="doctorOptions"
              @selected="handleSelectedOption"
              placeholder="Select Doctor"
            ></SingleSelect>
            <div class="err-msg">Please select doctor</div>
          </div>
          <div class="form-item mb-16">
            <SingleSelect
              v-model="appointment.service"
              :options="serviceOptions"
              @selected="handleSelectedOption"
              placeholder="Select Service"
            ></SingleSelect>
            <div class="err-msg">Please select service</div>
          </div>
          <div class="form-item mb-16">
            <div class="date-input">
              <input type="date">
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="">
              </div>
            </div>
            <div class="err-msg">Please select date</div>
          </div>
          <div class="row two-inputs">
            <div class="form-item col-5 mb-16">
              <SingleSelect
                v-model="appointment.time"
                :options="timeOptions"
                @selected="handleSelectedOption"
                placeholder="Select Time"
              ></SingleSelect>
              <div class="err-msg">Please select time</div>
            </div>
            <div class="form-item col-5 mb-16">
              <SingleSelect
                v-model="appointment.duration"
                :options="durationOptions"
                @selected="handleSelectedOption"
                placeholder="Select Duration"
              ></SingleSelect>
              <div class="err-msg">Please select duration</div>
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
  import { reactive } from 'vue';

  const appointment = reactive({
    doctor: "",
    service: "",
    time: "",
    duration: "",
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

</script>

<style>

</style>