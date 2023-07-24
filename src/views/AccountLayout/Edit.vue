<template>
  <section class="account-edit-page">
    <div class="card mb-16">
      <div class="header">
        <div class="date">(Reg. date: 05 Jun 23)</div>
        <div class="barcode">
          <div class="no">Case ID WASS987987898</div>
          <img src="/src/assets/images/png/barcode.png" alt="">
        </div>
      </div>
      <form action="" class="form acc-edit-form">
        <div class="row row1">
          <div class="col-5 two-inputs mb-16">
            <div class="col-25 form-item">
              <div class="title">Prefix</div>
              <SingleSelect
                v-model="profile.prefix"
                :options="prefixOptions"
                @selected="handleSelectedOption"
                placeholder="Select"
              ></SingleSelect>
              <div class="err-msg">Select</div>
            </div>
            <div class="col-75 form-item">
              <div class="title">Patient Name</div>
              <input type="text" placeholder="Patient name">
              <div class="err-msg">Enter patient name</div>
            </div>
          </div>

          <div class="col-5 two-inputs">
            <div class="col-3 form-item mb-16">
              <div class="title">Gender</div>
              <SingleSelect
                v-model="profile.gender"
                :options="genderOptions"
                @selected="handleSelectedOption"
                placeholder="Select Gender"
              ></SingleSelect>
              <div class="err-msg">Select gender</div>
            </div>
            <div class="col-4 form-item mb-16">
              <div class="title">Select DOB</div>
              <div class="date-input">
                <input type="date">
                <div class="icon">
                  <img src="/src/assets/images/icons/calender.svg" alt="">
                </div>
              </div>
              <div class="err-msg">Select DOB</div>
            </div>
            <div class="col-3 form-item mb-16">
              <div class="title">Age</div>
              <input type="text" class="bg-blue" value="25 Year" disabled>
            </div>
            
          </div>
        </div>
        <div class="row row2">
          <div class="col-4 two-inputs">
            <div class="col-5 form-item mb-16">
              <div class="title">Blood Group</div>
              <SingleSelect
                v-model="profile.blood"
                :options="bloodOptions"
                @selected="handleSelectedOption"
                placeholder="Select Blood Group"
              ></SingleSelect>
              <div class="err-msg">Select blood group</div>
            </div>
            <div class="col-5 form-item mb-16">
              <div class="title">Phone Number</div>
              <input type="number" placeholder="+918888888888">
              <div class="err-msg">Enter phone number</div>
            </div>
          </div>
          <div class="col-6 two-inputs">
            <div class="col-6 form-item mb-16">
              <div class="title">Address</div>
              <input type="text" placeholder="Address">
              <div class="err-msg">Enter address</div>
            </div>
            <div class="col-4 form-item mb-16">
              <div class="title">State</div>
              <SingleSelect
                v-model="profile.state"
                :options="stateOptions"
                @selected="handleSelectedOption"
                placeholder="Select State"
              ></SingleSelect>
              <div class="err-msg">Select state</div>
            </div>
          </div>
        </div>
        <div class="row row3">
          <div class="col-3 two-inputs">
            <div class="col-6 form-item mb-16">
              <div class="title">City</div>
              <SingleSelect
                v-model="profile.city"
                :options="cityOptions"
                @selected="handleSelectedOption"
                placeholder="Select City"
              ></SingleSelect>
              <div class="err-msg">Select city</div>
            </div>
            <div class="col-4 form-item mb-16">
              <div class="title">Pin Code</div>
              <input type="number" placeholder="6 digit code">
              <div class="err-msg">Enter pin code</div>
            </div>
          </div>
          <div class="col-7 two-inputs">
            <div class="col-4 form-item mb-16">
              <div class="title">Refered By</div>
              <div class="dr-input">
                <div class="dr-tag">Dr</div>
                <input type="text" placeholder="Refered by">
              </div>
              <div class="err-msg">Enter doctor name</div>
            </div>
            <div class="col-3 form-item mb-16">
              <div class="title">Select Speciality</div>
              <SingleSelect
                v-model="profile.speciality"
                :options="specialityOptions"
                @selected="handleSelectedOption"
                placeholder="Select Speciality"
              ></SingleSelect>
              <div class="err-msg">Select speciality</div>
            </div>
            <div class="col-3 form-item mb-16">
              <div class="title">Preferred Language</div>
              <SingleSelect
                v-model="profile.language"
                :options="langOptions"
                @selected="handleSelectedOption"
                placeholder="Select Language"
              ></SingleSelect>
              <div class="err-msg">Select language</div>
            </div>
          </div>
        </div>
        <div class="save-btn row flex justify-center">
          <button class="btn col-25 black-btn">Save</button>
        </div>
      </form>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="bill-table">
          <div class="title-header pt-0">
            <div class="title">Visiting Log</div>
            <router-link to="/account/visits" class="btn black-btn">Visit All</router-link>
          </div>
          <div class="table-body">
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Token No</th>
                  <th>Doctor Name</th>
                  <th>Patient Name</th>
                  <th>Remark</th>
                  <th>Date</th>
                  <th class="text-center">Options</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in visitData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.token }}</td>
                    <td>{{ item.doctor_name }}</td>
                    <td>{{ item.patient_name }}</td>
                    <td>
                      <input type="text" placeholder="Remark">
                    </td>
                    <td>{{ item.date }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <router-link to="/" class="">
                          <img src="/src/assets/images/png/printer.png" alt="">
                        </router-link>
                        <router-link to="/" class="">
                          <img src="/src/assets/images/icons/mail.svg" alt="">
                        </router-link>
                        <router-link to="/" class="">
                          <img src="/src/assets/images/png/eye.png" alt="">
                        </router-link>
                      </div>
                    </td>
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
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const profile = reactive({
    prefix: "",
    gender: "",
    blood: "",
    state: "",
    city: "",
    speciality: "",
    language: "",
  })

  const visitData = reactive([
    {
      token: 25478,
      doctor_name: 'Harish Verma',
      patient_name: 'Ravish Kumar',
      date: '15-05-2023'
    },
  ])

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
  const specialityOptions = [
    { id: 1, name: "Option1" },
    { id: 2, name: "Option2" },
  ];
  const genderOptions = [
    { name: 'Male', id: 'male' },  
    { name: 'Female', id: 'female' },  
    { name: 'Other', id: 'other' },  
  ];
  const prefixOptions = [
    { name: 'Mr.', id: 'mr' },  
    { name: 'Mrs.', id: 'mrs' },  
  ];
  const bloodOptions = [
    { name: 'A+', id: 'a+' },
    { name: 'B+', id: 'b+' },
    { name: 'O+', id: 'o+' },
    { name: 'AB+', id: 'ab+' },
    { name: 'A-', id: 'a-' },
    { name: 'B-', id: 'b-' },
    { name: 'O-', id: 'o-' },
    { name: 'AB-', id: 'ab-' },
  ]

  const handleSelectedOption = (option) => {
    console.log("Selected option:", option);
  };
  //search select end//

</script>

<style>

</style>