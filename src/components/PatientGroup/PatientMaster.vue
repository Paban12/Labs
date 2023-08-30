<template>
  <section class="patient-group">
    <div class="add-search-row mb-16">
      <div class="searchbar">
        <input type="text" placeholder="Search By Name" />
        <img src="/src/assets/images/png/search.png" alt="" />
      </div>
      <div class="add-btn">
        <button class="btn black-btn" @click.prevent="group.addModal = true">
          + Add
        </button>
      </div>
    </div>
    <div class="table-outer mb-16">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Type</th>
          <th>No. Of Patient</th>
          <th>Options</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in groupData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.patients }}</td>
            <td class="text-center">
              <div class="option-btns">
                <div class="" @click.prevent="group.confirmModal = true">
                  <img src="/src/assets/images/png/delete.png" alt="" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-no-data">
      <div>No records Found!</div>
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
    <!-- Modals -->
    <Modal v-model:show="group.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button
          class="btn grey-btn cancel-btn"
          @click.prevent="group.confirmModal = false"
        >
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal v-model:show="group.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Patient Master</div>
        <div class="close-btn" @click.prevent="group.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <div class="title">Select Type</div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">Caste</option>
              <option value="">SubCaste</option>
              <option value="">Religion</option>
              <option value="">Nationality</option>
              <option value="">Reservation Category</option>
            </select>
          </div>
          <div class="err-msg">Please select type</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Select</div>
          <SingleSelect
            v-model="group.category"
            :options="categoryOptions"
            @selected="handleSelectedOption"
            placeholder="Select"
          ></SingleSelect>
          <div class="err-msg">Please select</div>
        </div>
        <div class="save-btn">
          <button class="btn black-btn w-100">Save</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const group = reactive({
  addModal: false,
  confirmModal: false,
  category: null,
});

const groupData = reactive([
  {
    name: "Afghans",
    type: "Nationality",
    patients: 200,
  },
]);

//multi select
const categoryOptions = [
  { id: 1, name: "ENT" },
  { id: 2, name: "General Surgen" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>