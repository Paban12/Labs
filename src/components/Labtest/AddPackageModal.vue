<template>
  <Modal v-model:show="storeVar.addPackageModal" class="add-test-modal" headerClasses="header-bg">
    <template v-slot:header>
      <div class="title" showHeader="true">Tests Package</div>
      <div class="close-btn" @click.prevent="storeVar.addPackageModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="form">
      <div class="package-row row">
        <div class="form-item col-2 mb-16">
          <div class="title">Package Name</div>
          <input type="text" placeholder="Package Name">
        </div>
        <div class="form-item col-2 mb-16">
          <div class="title">Package Price</div>
          <input type="number" placeholder="00">
        </div>
        <div class="form-item col-2 mb-16">
          <div class="title">Report Within</div>
          <input type="number" placeholder="0">
        </div>
        <div class="form-item col-2 mb-16">
          <div class="title">.</div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">Hrs</option>
              <option value="">Days</option>
              <option value="">Weeks</option>
            </select>
          </div>
        </div>
        <div class="form-item col-2 mb-16">
          <div class="title">Home Collection</div>
          <label class="toggle-control mt-10">
            <input type="checkbox" checked="checked" />
            <span class="control"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="test-table mb-16">
      <table class="table">
        <thead>
          <th>Sr. No.</th>
          <th>Test Name</th>
          <th>Category</th>
          <th>Test Code</th>
          <th>Sample</th>
          <th>Container</th>
          <th>Sample Size</th>
          <th>Price(₹)</th>
          <th>Home Collection</th>
          <th>Report Within</th>
          <th>Reference Value</th>
          <th class="text-center">Option</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in testTableData" :key="item">
            <td>{{ index + 1 }}</td>
            <td>
              <SingleSelect
                v-model="formVar.test_panel"
                :options="Test_PanelOptions"
                @selected="handleSelectedOption"
                placeholder="Search Test"
              ></SingleSelect>
            </td>
            <td>{{ item.category }}</td>
            <td>{{ item.test_code }}</td>
            <td>{{ item.sample }}</td>
            <td>{{ item.container }}</td>
            <td>{{ item.sample_size }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.home_collection }}</td>
            <td>{{ item.report_within }}</td>
            <td>{{ item.ref_value }}</td>
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
    <div class="save-btn">
      <button class="btn black-btn">Save</button>
    </div>
  </Modal>
</template> 

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  test_panel: null,
})

const testTableData = reactive([
  {
    id: 2,
  }
])

//for table data
const Test_PanelOptions = [
  { id: 1, name: "Option111111111111" },
  { id: 2, name: "Option2" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>