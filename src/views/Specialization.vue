<template>
  <section class="speciality-page common-list-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="title">Specializations</div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Specialization" />
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
                <th>Name</th>
                <th>Description</th>
                <th class="text-center">View</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in specialityData" :key="item">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.desc }}</td>
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
        <div class="title" showHeader="true">Add Specialization</div>
        <div class="close-btn" @click.prevent="patient.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <input type="text" placeholder="Enter Specialization" />
          <div class="err-msg">Enter Specialization</div>
        </div>
        <div class="form-item mb-16">
          <textarea name="" id="" placeholder="Enter Description"></textarea>
          <div class="err-msg">Enter description</div>
        </div>
        <div class="save-btn form-item">
          <button class="btn black-btn">Add</button>
        </div>
      </form>
    </Modal>
    <Modal v-model:show="patient.viewModal" class="view-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Specialization Details</div>
        <div class="close-btn" @click.prevent="patient.viewModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="data">
        <div class="title">Specialization : </div>
        <div class="val">Gynacologist</div>
      </div>
      <div class="data">
        <div class="title">Description : </div>
        <div class="val">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quod perferendis</div>
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

const specialityData = reactive([
  {
    name: "Gynacologist",
    desc: '8 years of experience in this feild'
  },
]);

const specialityAdd = reactive({
  speciality: "",
});

//search select start//
const specialityOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
//search select end//
</script>

<style lang="css">
/* .a{
  position: relative;
} */
.a{
  display: flex;
  justify-content: flex-end;
}
.tooltip {
  position: absolute;
  background-color: #f0f0f0;
  padding: 8px;
  border: 1px solid #ccc;
  z-index: 9999;
  max-width: 200px; /* Adjust this to your desired width */
}
</style>