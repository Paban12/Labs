<template>
  <section class="consult-form-page">
    <div class="container">
      <div class="row container-row">
        <div class="consult-table-data">
          <div class="card stat-card mb-16">
            <div class="stats">
              <div class="stat card1">
                <img src="/src/assets/images/png/mobile.png" alt="image">
                <div class="vals">
                  <div class="no">25</div>
                  <div class="text">Completed</div>
                </div>
              </div>
              <div class="stat card2">
                <img src="/src/assets/images/png/mobile.png" alt="image">
                <div class="vals">
                  <div class="no">25</div>
                  <div class="text">Pending</div>
                </div>
              </div>
              <div class="stat card3">
                <img src="/src/assets/images/png/mobile.png" alt="image">
                <div class="vals">
                  <div class="no">25</div>
                  <div class="text">Waiting</div>
                </div>
              </div>
            </div> 
            <div class="search-section">
              <div class="row">
                <div class="col-25">
                  <input type="text" placeholder="Search by name">
                </div>
                <div class="col-25">
                  <div class="date-input">
                    <input type="date">
                    <div class="icon">
                      <img src="/src/assets/images/icons/calender.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-25">
                  <button class="btn yellow-btn">Today</button>
                </div>
                <div class="col-25">
                  <button class="btn black-btn">Search</button>
                </div>
              </div>

            </div>
          </div>
          <div class="card table-card"> 
            <div class="date-no-found">
              <div class="no-found-card">
                <img src="/src/assets/images/png/calender.png" alt="image">
                <div class="text">No appointments for the selected date!</div>
              </div>
            </div>
            <div class="consult-table">
              <div class="title-header mb-16">
                <div class="title">Consultation Logs</div>
              </div>
              <div class="table-outer">
                <table class="table">
                  <thead>
                    <th>Sr. No.</th>
                    <th>ID</th>
                    <th>#Token</th>
                    <th>Name</th>
                    <th>Recent Visit</th>
                    <th>#Visits</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Purpose</th>
                    <th class="text-center">Actions</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in consultData" :key="item">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.id }}</td>
                      <td>
                        <span class="token">{{ item.token }}</span>
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.recent_visit }}</td>
                      <td>{{ item.total_visits }}</td>
                      <td>{{ item.time }}</td>
                      <td>
                        <div class="tag green-tag">Booked</div>
                      </td>
                      <td>{{ item.purpose }}</td>
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
        <div class="consult-form card">
          <form action="" class="form">
            <h3>Book Consultation</h3>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quod!
            </span>
            <div class="form-item mb-16">
              <input type="number" placeholder="Enter Phone no">
              <div class="err-msg">Enter mobile no</div>
            </div>
            <div class="row mb-16">
              <div class="col-25 form-item">
                <SingleSelect
                  v-model="consult.prefix"
                  :options="prefixOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select Prefix"
                ></SingleSelect>
                <div class="err-msg">Select</div>
              </div>
              <div class="col-75 form-item">
                <input type="text" placeholder="Patient Name">
                <div class="err-msg">Enter patient name</div>
              </div>
            </div>
            <div class="two-inputs">
              <div class="col-25 form-item mb-16">
                <SingleSelect
                  v-model="consult.gender"
                  :options="genderOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select Gender"
                ></SingleSelect>
                <div class="err-msg">Select gender</div>
              </div>
              <div class="col-5 form-item mb-16">
                <div class="date-input">
                  <input type="date">
                  <div class="icon">
                    <img src="/src/assets/images/icons/calender.svg" alt="">
                  </div>
                </div>
                <div class="err-msg">Select DOB</div>
              </div>
              <div class="col-25 form-item mb-16">
                <input type="text" class="bg-blue" value="25 Year" disabled>
              </div>
            </div>
            <div class="two-inputs">
              <div class="col-5 form-item mb-16">
                <SingleSelect
                  v-model="consult.blood"
                  :options="bloodOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select Blood Group"
                ></SingleSelect>
                <div class="err-msg">Select blood group</div>
              </div>
              <div class="col-5 form-item mb-16">
                <SingleSelect
                  v-model="consult.language"
                  :options="langOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select Language"
                ></SingleSelect>
                <div class="err-msg">Select language</div>
              </div>
            </div>
            <div class="form-item mb-16">
              <input type="text" placeholder="Enter Email">
              <div class="err-msg">Enter email</div>
            </div>
            <div class="form-item mb-16">
              <input type="text" placeholder="Enter Address">
              <div class="err-msg">Enter address</div>
            </div>
            <div class="two-inputs">
              <div class="col-5 form-item mb-16">
                <SingleSelect
                  v-model="consult.state"
                  :options="stateOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select State"
                ></SingleSelect>
                <div class="err-msg">Select state</div>
              </div>
              <div class="col-5 form-item mb-16">
                <SingleSelect
                  v-model="consult.city"
                  :options="cityOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select City"
                ></SingleSelect>
                <div class="err-msg">Select city</div>
              </div>
            </div>
            <div class="two-inputs">
              <div class="col-5 form-item mb-16">
                <div class="dr-input">
                  <div class="dr-tag">Dr</div>
                  <input type="text" placeholder="Refered by">
                </div>
              </div>
              <div class="col-5 form-item mb-16">
                <SingleSelect
                  v-model="consult.speciality"
                  :options="specialityOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select Speciality"
                ></SingleSelect>
                <div class="err-msg">Select speciality</div>
              </div>
            </div>
            <div class="save-btn flex justify-cente">
              <button class="btn black-btn">Book Consultation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const consult = reactive({
    prefix: "",
    gender: "",
    blood: "",
    state: "",
    city: "",
    speciality: "",
    language: "",
  })

  const consultData = reactive([
    {
      id: 125,
      token: 25478,
      name: 'Prakash Jhaa',
      recent_visit: '20 Days ago',
      total_visits: 10,
      purpose: 'Consultation',
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