<template>
  <section class="laboratory-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">All Laboratories</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Laboratory" />
              <img src="/src/assets/images/png/search.png" alt="" />
            </div>
            <div class="add-btn">
              <button class="btn black-btn" @click.prevent="formVar.addModal = true">
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
                <th>Lab Name</th>
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
                  <td>{{ item.lab_name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.speciality }}</td>
                  <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click.prevent="formVar.viewModal = true">
                        <img src="/src/assets/images/png/eye.png" alt="" />
                      </div>
                      <div class="" @click.prevent="formVar.addModal = true">
                        <img src="/src/assets/images/png/edit.png" alt="" />
                      </div>
                      <div class="" @click.prevent="formVar.confirmModal = true">
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
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
    <!-- modals -->
    <Modal v-model:show="formVar.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="formVar.confirmModal = false">
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal v-model:show="formVar.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Add Laboratory</div>
        <div class="close-btn" @click.prevent="formVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitLab">
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.lab_name" placeholder="Enter Lab Name" />
          <div class="err-msg" v-if="formVar.submit && labValid">{{ labValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.licence_number" placeholder="Enter Lab Licence Number" />
          <div class="err-msg" v-if="formVar.submit && licenceValid">{{ licenceValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.phone" placeholder="Enter Phone no" 
          v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)" />
          <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.email" placeholder="Enter Email" />
          <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.address" placeholder="Enter Address" />
          <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
        </div>
        <div class="col-5 form-item mb-16">
          <SingleSelect v-model="formVar.speciality" :options="specialityOptions" @selected="handleSelectedOption"
            placeholder="Select Lab Speciality"></SingleSelect>
            <div class="err-msg" v-if="formVar.submit && specialityValid">{{ specialityValid }}</div>
        </div>
        <div class="two-inputs">
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
              placeholder="Select State"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && stateValid">{{ stateValid }}</div>
          </div>
          <div class="col-5 form-item mb-16">
            <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
              placeholder="Select City"></SingleSelect>
              <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
          </div>
        </div>
        <div class="save-btn form-item">
          <button class="btn black-btn">Add</button>
        </div>
      </form>
    </Modal>
    <Modal v-model:show="formVar.viewModal" class="view-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Laboratory Details</div>
        <div class="close-btn" @click.prevent="formVar.viewModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="data">
        <div class="title">Lab Name : </div>
        <div class="val">Sai Tech Lab</div>
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
        <div class="title">Lab Speciality : </div>
        <div class="val">ENT</div>
      </div>
      <div class="data">
        <div class="title">Address : </div>
        <div class="val">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quod perferendis</div>
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
import { reactive, computed } from 'vue';
import { useStore } from 'vuex'

/* Constants */

const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  confirmModal: false,
  addModal: false,
  viewModal: false,
  state: "",
  city: "",
  speciality: "",
  licence_number:null,
  phone: null,
  email: null,
  address: null,
  lab_name: null,
})


const doctorData = reactive([
  {
    id: 125,
    name: "Prakash Jhaa",
    phone: 8888888888,
    email: "patient@mail.com",
    appointments: 12,
    lab_tests: 15,
  },
]);

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


//search select end//

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitLab = () => {
  if (
    phoneValid.value ||
    emailValid.value ||
    addressValid.value ||
    stateValid.value ||
    cityValid.value ||
    specialityValid.value ||
    labValid.value ||
    licenceValid.value
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
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};

/* Functions/Methods */

/* Validation */

const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/
  if (!formVar.phone) {
    return "Please enter phone no!";
  } else if (!phoneValid.test(formVar.phone)) {
    return "Please enter valid phone no!";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  if (!formVar.email) {
    return "Please enter email!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please enter valid email!";
  }
});

const specialityValid = computed(() => {
  if (!formVar.speciality) {
    return "Please select lab speciality!";
  }
});

const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please enter address!";
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
const labValid = computed(() => {
  if (!formVar.lab_name) {
    return "Enter lab name!";
  }
});
const licenceValid = computed(() => {
  if (!formVar.licence_number) {
    return "Enter lab licence number";
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

<style></style>