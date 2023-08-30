<template>
  <section class="ref-test-page common-list-page">
    <div class="card">
      <div class="heading">
        <div class="title">Reference Lab Test</div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search By Test/Ref Lab" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
          <div class="add-btn">
            <button
              class="btn black-btn"
              @click.prevent="formVar.addModal = true"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Test/Panel</th>
              <th>Reference Lab</th>
              <th>Price</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in testData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.test_name }}</td>
                <td>{{ item.ref_lab }}</td>
                <td>{{ item.price }}</td>
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
      </div>
    </div>
    <!-- modals -->
    <Modal
      v-model:show="formVar.addModal"
      class="big-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Reference Doctor Test</div>
        <div class="close-btn" @click.prevent="formVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="table-outer mb-16">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Test/Panel Name</th>
              <th>Reference Lab</th>
              <th>Price</th>
              <th>Options</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in testData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>
                  <SingleSelect
                    v-model="formVar.test"
                    :options="testOptions"
                    @selected="handleSelectedOption"
                    placeholder="Select Test/Panel"
                  ></SingleSelect>
                </td>
                <td>
                  <SingleSelect
                    v-model="formVar.lab"
                    :options="labOptions"
                    @selected="handleSelectedOption"
                    placeholder="Select Reference Lab"
                  ></SingleSelect>
                </td>
                <td>
                  <input type="number" placeholder="00" />
                </td>
                <td class="text-center">
                  <div class="option-btns">
                    <div class="">
                      <img src="/src/assets/images/png/delete.png" alt="" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-row flex justify-end">
          <button class="btn black-btn">Save</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  addModal: false,
  test: null,
  lab: null,
});

const testData = reactive([
  {
    test_name: "CBC",
    ref_lab: "Shree Lab",
    price: 2000,
  },
]);

const addTestData = reactive([{}]);

//search select
const testOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const labOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];

const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>