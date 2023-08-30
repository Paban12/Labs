<template>
  <section class="patient-group">
    <div class="add-search-row mb-16">
      <div class="searchbar">
        <input type="text" placeholder="Search By Group Name" />
        <img src="/src/assets/images/png/search.png" alt="" />
      </div>
      <div class="add-btn">
        <button class="btn black-btn" @click.prevent="group.addModal = true">+ Add</button>
      </div>
    </div>
    <div class="table-outer mb-16">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Group Name</th>
          <th>Group Type</th>
          <th>No. Of Members</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in groupData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>{{ item.group_name }}</td>
            <td>{{ item.group_type }}</td>
            <td>{{ item.members }}</td>
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
    <Modal
      v-model:show="group.addModal"
      class="big-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Patient Groups</div>
        <div
          class="close-btn"
          @click.prevent="group.addModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <div class="title">Group Name</div>
          <input type="text" placeholder="group Name">
          <div class="err-msg">Please enter group name</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Group Members</div>
          <MultiSelect
            :options="memberOptions"
            :tabs="tab"
            @selected="handleSelectedOption"
            placeholder="Select Members"
          />
          <div class="err-msg">Please select group members</div>
        </div>
        <div class="save-btn">
          <button class="btn black-btn">Save</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const group = reactive({
  addModal: false,
})

const groupData = reactive([
  {
    group_name: "All Female",
    group_type: "Smart",
    members: 200,
  },
]);


//multi select
const memberOptions = [
  { id: 1, name: "ENT" },
  { id: 2, name: "General Surgen" },
];
const tab = [];
</script>

<style>
</style>