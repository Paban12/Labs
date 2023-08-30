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
            <div class="select-dropdown">
              <select name="" id="">
                <option value="">Active Collection Center</option>
                <option value="">Deleted Collection Center</option>
              </select>
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
                <th>Lab Name</th>
                <th>Address</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in labData" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.lab_name }}</td>
                  <td>{{ item.address }}</td>
                  <td class="text-center">
                    <div class="option-btns">
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
              <icon-left-double-arrow></icon-left-double-arrow>
              <div class="page">1</div>
              <div class="page active">2</div>
              <div class="page">3</div>
              <icon-right-double-arrow></icon-right-double-arrow>
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
          <input type="text" v-model="formVar.phone" placeholder="Enter Phone no" 
          v-on:keypress="isNumber($event)"  v-on:keyup="phnum($event.target.value)" />
          <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.email" placeholder="Enter Email" />
          <div class="err-msg" v-if="formVar.submit && emailValid">{{ emailValid }}</div>
        </div>
        <div class="form-item mb-16">
          <textarea name="" id="" rows="4" v-model="formVar.address" placeholder="Enter Address"></textarea>
          <div class="err-msg" v-if="formVar.submit && addressValid">{{ addressValid }}</div>
        </div>
        <div class="form-item mb-16">
          <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
            placeholder="Select City"></SingleSelect>
            <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
        </div>
        <div class="form-item mb-16">
          <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
            placeholder="Select State"></SingleSelect>
            <div class="err-msg" v-if="formVar.submit && stateValid">{{ stateValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="number" v-model="formVar.address" placeholder="Enter Pincode" />
        </div>
        <div class="save-btn flex justify-end">
          <button type="submit" class="btn black-btn w-10-r">Add</button>
        </div>
      </form>
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
  state: "",
  city: "",
  phone: null,
  email: null,
  address: null,
  lab_name: null,
})


const labData = reactive([
  {
    lab_name: 'DEXTOR LABS',
    address: 'Gangai amman kovil street, vadakupattu',
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
    labValid.value
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