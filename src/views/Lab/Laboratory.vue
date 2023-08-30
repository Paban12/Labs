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
            <!-- <div class="select-dropdown"> -->
            <Select v-model="formVar.status" :options="statusOptions" @change="statusChange"></Select>
            <!-- </div> -->
            <div class="add-btn">
              <button class="btn black-btn" @click="addLab">
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
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.laboratoryData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item?.phone }}</td>
                  <td>{{ item?.emailId }}</td>
                  <td>{{ item.address }}</td>
                  <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click="editLab(item)">
                        <img src="/src/assets/images/png/edit.png" alt="" />
                      </div>
                      <div class="" @click.prevent="formVar.confirmModal = true">
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                      <div class="" @click="statusLab(item.id,item.status)">
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.laboratoryData.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer">
            <div class="entries">
              Showing <span>{{ formVar.offset }}</span> to <span>{{ formVar.limit + formVar.offset }}</span> of <span>{{
                storeVar.totalLaboratory }}</span> entries
            </div>
            <div class="pagination">
              <span @click="clickFirst">First</span>
              <span @click="lowerClick(storeVar.lowerPage)">Previous</span>
              <div class="page" @click="lowerClick(storeVar.lowerPage)">{{ storeVar.lowerPage }}</div>
              <!-- <div v-if="storeVar.upperPage" class="page" @click="upperClick(storeVar.upperPage)">{{ storeVar.upperPage }}</div> -->
              <span @click="upperClick(storeVar.lowerPage)">Next</span>
              <span @click="clickLast">Last</span>
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
    <Modal v-model:show="formVar.statusModal" class="confirm-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Status Change</div>
        <div class="close-btn" @click.prevent="formVar.statusModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="redio-section">
        <div class="radio">
          <label class="">
            <input class="" type="radio" name="inlineRadioOptions" v-model="formVar.cStatus" value="PENDING" />
            PENDING
          </label>
        </div>
        <div class="radio">
          <label class="">
            <input class="" type="radio" name="inlineRadioOptions" v-model="formVar.cStatus" value="VERIFIED" />
            VERIFIED
          </label>
        </div>
        <div class="radio">
          <label class="">
            <input class="" type="radio" name="inlineRadioOptions" v-model="formVar.cStatus" value="SUSPENDED" />
            SUSPENDED
          </label>
        </div>
      </div>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="formVar.statusModal = false">
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal v-model:show="storeVar.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div v-if="formVar.editMode" class="title" showHeader="true">Edit Laboratory</div>
        <div v-else class="title" showHeader="true">Add Laboratory</div>
        <div class="close-btn" @click.prevent="storeVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitLab">
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.lab_name" placeholder="Enter Lab Name" />
          <div class="err-msg" v-if="formVar.submit && labValid">{{ labValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.phone" placeholder="Enter Phone no" v-on:keypress="isNumber($event)"
            v-on:keyup="phnum($event.target.value)" />
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
          <SingleSelect v-model="formVar.state" :options="stateOptions" @selected="handleSelectedOption"
            :placeholder="formVar.state ? formVar.state : 'Select State'"></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && stateValid">{{ stateValid }}</div>
        </div>
        <div class="form-item mb-16">
          <SingleSelect v-model="formVar.city" :options="cityOptions" @selected="handleSelectedOption"
            :placeholder="formVar.city ? formVar.city : 'Select City'"></SingleSelect>
          <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
        </div>
        <div class="form-item mb-16">
          <input type="text" v-model="formVar.pincode" placeholder="Enter Pincode" />
          <div class="err-msg" v-if="formVar.submit && pinValid">{{ pinValid }}</div>
        </div>
        <div class="save-btn flex justify-end">
          <button type="button" class="btn black-btn w-10-r load-btn" v-if="storeVar.loaderButton">
            <icon-login-loader></icon-login-loader>
          </button>
          <button v-else type="submit" class="btn black-btn w-10-r">Submit</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'

/* Constants */
const statusOptions = [
  { id: 'PENDING', name: 'PENDING' },
  { id: 'VERIFIED', name: 'VERIFIED' },
  { id: 'SUSPENDED', name: 'SUSPENDED' },
]

const store = useStore();
const storeVar = computed(() => store.state.Laboratory);
const formVar = reactive({
  limit: 10,
  offset: 0,
  keyword: '',
  status: statusOptions[0],
  cStatus: null,
  submit: false,
  confirmModal: false,
  statusModal: false,
  editMode: false,
  id: null,
  state: "",
  city: "",
  phone: null,
  email: null,
  address: null,
  lab_name: null,
  pincode: null,
  cPage: 1,
})


const labData = reactive([
  {
    lab_name: 'DEXTOR LABS',
    address: 'Gangai amman kovil street, vadakupattu',
  },
]);

//search select start//
const stateOptions = [
  { id: 1, name: "West Bengal" },
  { id: 2, name: "Pune" },
];
const cityOptions = [
  { id: 1, name: "Kolkata" },
  { id: 2, name: "Durgapur" },
];



//search select end//

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getLaboratory(formVar.limit, formVar.offset, formVar.keyword, formVar.status?.id, formVar.cPage)
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getLaboratory(limit, offset, keyword, status, cPage) {
  store.dispatch("Laboratory/getLaboratory", { limit, offset, keyword, status, cPage });
}
function lowerClick(page) {
  if (page > 1) {
    formVar.offset = formVar.offset - formVar.limit
    getLaboratory(formVar.limit, formVar.offset, formVar.keyword, formVar.status?.id, page <= 1 ? 1 : page - 1)
    storeVar.value.lowerPage = page <= 1 ? 1 : page - 1
  }
}
function upperClick(page) {
  if (storeVar.value.upperStatus) {
    formVar.offset = formVar.offset + formVar.limit
    getLaboratory(formVar.limit, formVar.offset, formVar.keyword, formVar.status?.id, page + 1)
    storeVar.value.lowerPage = page + 1
  }
}
function clickFirst() {
  if (storeVar.value.lowerPage > 1) {
    formVar.offset = 0
    getLaboratory(formVar.limit, formVar.offset, formVar.keyword, formVar.status?.id, 1)
    let pageNumber = storeVar.value.totalDoctor / formVar.limit
    if (Number.isInteger(pageNumber)) {
      storeVar.value.lowerPage = pageNumber
    }
    else {
      storeVar.value.lowerPage = Number(pageNumber.toFixed(0)) + 1
    }
  }
}
function clickLast() {
  if (storeVar.value.upperStatus) {
    let remainder = storeVar.value.totalDoctor % formVar.limit
    formVar.offset = storeVar.value.totalDoctor - remainder
    getLaboratory(formVar.limit, formVar.offset, formVar.keyword, formVar.status?.id, 1)
    let pageNumber = storeVar.value.totalDoctor / formVar.limit
    if (Number.isInteger(pageNumber)) {
      storeVar.value.lowerPage = pageNumber
    }
    else {
      storeVar.value.lowerPage = Math.trunc(pageNumber) + 1
    }
  }
}
function statusChange() {
  getLaboratory(formVar.limit, formVar.offset, formVar.keyword, formVar.status?.id, formVar.cPage)
}
function editLab(item) {
  formVar.editMode = true
  storeVar.value.addModal = true
  formVar.lab_name = item.name
  formVar.address = item.address
  formVar.pincode = item.pincode
  formVar.state = item.state
  formVar.city = item.city
  formVar.phone = item.phone
  formVar.email = item.emailId
  formVar.id = item.id
}
function addLab() {
  formVar.editMode = false
  storeVar.value.addModal = true
  formVar.lab_name = null
  formVar.address = null
  formVar.pincode = null
  formVar.state = null
  formVar.city = null
  formVar.phone = null
  formVar.email = null
  formVar.id = null
}
function statusLab(id,status){
  formVar.id=id
  formVar.cStatus=status
  formVar.statusModal=true
}
const onSubmitLab = () => {
  if (
    phoneValid.value ||
    emailValid.value ||
    addressValid.value ||
    stateValid.value ||
    cityValid.value ||
    labValid.value ||
    pinValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if (formVar.editMode) {
    store.dispatch("Laboratory/updateLaboratory", {
      id: formVar.id,
      name: formVar.lab_name,
      emailId: formVar.email,
      phone: formVar.phone,
      address: formVar.address,
      state: formVar.state,
      city: formVar.city,
      pincode: formVar.pincode,
    })
  } else {
    store.dispatch("Laboratory/addLaboratory", {
      name: formVar.lab_name,
      emailId: formVar.email,
      phone: formVar.phone,
      address: formVar.address,
      state: formVar.state,
      city: formVar.city,
      pincode: formVar.pincode,
    });
  }

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
const pinValid = computed(() => {
  if (!formVar.pincode) {
    return "Please enter pincode!";
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