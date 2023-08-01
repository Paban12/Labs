<template>
  <section class="doctors-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">All Doctors</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Doctors" />
              <img src="/src/assets/images/png/search.png" alt="" />
            </div>
            <div class="add-btn">
              <button
                class="btn black-btn"
                @click.prevent="patient.addModal = true"
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Sr. No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Speciality</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in doctorData" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.speciality }}</td>
                  <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click.prevent="patient.viewModal = true">
                        <img src="/src/assets/images/png/eye.png" alt="" />
                      </div>
                      <div class="" @click.prevent="patient.addModal = true">
                        <img src="/src/assets/images/png/edit.png" alt="" />
                      </div>
                      <div
                        class=""
                        @click.prevent="patient.confirmModal = true"
                      >
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                    </div>
                  </td>
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
    <!-- modals -->
    <Modal v-model:show="patient.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button
          class="btn grey-btn cancel-btn"
          @click.prevent="patient.confirmModal = false"
        >
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal v-model:show="patient.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Add Doctor</div>
        <div class="close-btn" @click.prevent="patient.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="row mb-16">
          <div class="col-25 form-item">
            <SingleSelect
              v-model="doctorAdd.prefix"
              :options="prefixOptions"
              @selected="handleSelectedOption"
              placeholder="Select Prefix"
            ></SingleSelect>
            <div class="err-msg">Select</div>
          </div>
          <div class="col-75 form-item">
            <input type="text" placeholder="Doctor Name" />
            <div class="err-msg">Enter doctor name</div>
          </div>
        </div>
        <div class="row">
          <div class="col-25 form-item mb-16">
            <SingleSelect
              v-model="doctorAdd.gender"
              :options="genderOptions"
              @selected="handleSelectedOption"
              placeholder="Select Gender"
            ></SingleSelect>
            <div class="err-msg">Select gender</div>
          </div>
          <div class="col-5 form-item mb-16">
            <div class="date-input">
              <input type="date" />
              <div class="icon">
                <img src="/src/assets/images/icons/calender.svg" alt="" />
              </div>
            </div>
            <div class="err-msg">Select DOB</div>
          </div>
          <div class="col-2 form-item mb-16">
            <input type="text" class="bg-blue" value="25 Year" disabled />
          </div>
        </div>
        <div class="form-item mb-16">
          <input type="number" placeholder="Enter Phone no" />
          <div class="err-msg">Enter phone no</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" placeholder="Enter Email" />
          <div class="err-msg">Enter email</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" placeholder="Enter Address" />
          <div class="err-msg">Enter address</div>
        </div>
        <div class="col-5 form-item mb-16">
          <SingleSelect
            v-model="doctorAdd.speciality"
            :options="specialityOptions"
            @selected="handleSelectedOption"
            placeholder="Select Speciality"
          ></SingleSelect>
          <div class="err-msg">Select speciality</div>
        </div>
        <div class="two-inputs">
          <div class="col-5 form-item mb-16">
            <SingleSelect
              v-model="doctorAdd.state"
              :options="stateOptions"
              @selected="handleSelectedOption"
              placeholder="Select State"
            ></SingleSelect>
            <div class="err-msg">Select state</div>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect
              v-model="doctorAdd.city"
              :options="cityOptions"
              @selected="handleSelectedOption"
              placeholder="Select City"
            ></SingleSelect>
            <div class="err-msg">Select city</div>
          </div>
        </div>
        <div class="save-btn form-item">
          <button class="btn black-btn">Add</button>
        </div>
      </form>
    </Modal>
    <Modal v-model:show="patient.viewModal" class="view-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Patient Details</div>
        <div class="close-btn" @click.prevent="patient.viewModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="data">
        <div class="title">Doctor Name : </div>
        <div class="val">Mrs. Rani Thakur</div>
      </div>
      <div class="data">
        <div class="title">Phone Number : </div>
        <div class="val">+91 8888888888</div>
      </div>
      <div class="data">
        <div class="title">Email : </div>
        <div class="val">patient@mai.com</div>
      </div>
      <div class="data">
        <div class="title">Speciality : </div>
        <div class="val">ENT</div>
      </div>
      <div class="data">
        <div class="title">Address : </div>
        <div class="val">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quod perferendis</div>
      </div>
      <div class="two-data">
        <div class="data">
          <div class="title">Gender : </div>
          <div class="val">Female</div>
        </div>
        <div class="data">
          <div class="title">DOB : </div>
          <div class="val">25/11/2000 23 Years</div>
        </div>
      </div>
      <div class="two-data">
        <div class="data">
          <div class="title">State : </div>
          <div class="val">Maharashtra</div>
        </div>
        <div class="data">
          <div class="title">City : </div>
          <div class="val">Nashik</div>
        </div>
      </div>
      
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const patient = reactive({
  confirmModal: false,
  addModal: false,
  viewModal: false,
});

const doctorData = reactive([
  {
    id: 125,
    name: "Prakash Jhaa",
    phone: 8888888888,
    email: "patient@mail.com",
    speciality: 'ENT'
  },
]);

const doctorAdd = reactive({
  prefix: "",
  gender: "",
  state: "",
  city: "",
  speciality: "",
});

//search select start//
const stateOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const cityOptions = [
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

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
//search select end//
</script>

<style>
</style>