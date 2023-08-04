<template>
  <section class="lab-report-page">
    <div class="cards">
      <div class="card">
        <div class="date">04 Aung 23</div>
        <div class="card-data">
          <div class="card-header">
            <div class="left">
              <div class="time">
                <div class="">03:52 PM</div>
                <div class="">5 Minuts</div>
              </div>
              <div class="info">
                <div class="">Self</div>
                <div class="">9 Test (DEXTOR LABS - Lab Address)</div>
              </div>
            </div>
            <div class="right">
              <div class="img">
                <img src="/src/assets/images/png/print.png" alt="" />
              </div>
              <div class="img">
                <img src="/src/assets/images/png/share.png" alt="" />
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="test-table mb-16">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Test</th>
                  <th>Sample</th>
                  <th>Label</th>
                  <th>Collection</th>
                  <th>Process</th>
                  <th>Pay</th>
                  <th>Result</th>
                  <th class="text-center">Option</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in testTableData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.test_name }}</td>
                    <td>
                      <div class="sample-input">
                        <input type="text" placeholder="Urin" />
                        <input type="number" placeholder="Size" />
                        <div class="select-dropdown">
                          <select name="" id="">
                            <option value="">Select Unit</option>
                            <option value="">ml</option>
                            <option value="">Test amount</option>
                            <option value="">g</option>
                            <option value="">swab</option>
                            <option value="">gauze</option>
                            <option value="">Cotton swab</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td><input type="text" placeholder="Label" /></td>
                    <td>
                      <input type="text" placeholder="Collection" />
                    </td>
                    <td>
                      <div class="time-input">
                        <input type="number" placeholder="start">
                        <input type="number" placeholder="end">
                      </div>
                    </td>
                    <td>
                      <div class="pay">
                        <div class="text-red">{{ item.paid_status }}</div>
                        <div class="amt">640</div>
                      </div>
                    </td>
                    <td>
                      <div class="text-green f-w-bolc">View Result</div>
                    </td>
                    <td class="text-center">
                      <div class="option-btns">
                        <div class="icon">
                          <icon-vert-dots></icon-vert-dots>
                        </div>
                        <div class="hover-list card">
                          <div class="list-item">Print</div>
                          <div class="list-item">Share</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="form-item mb-16 test-drop">
              <SingleSelect
                v-model="formVar.tableTest"
                :options="tableTestOptions"
                @selected="handleSelectedOption"
                placeholder="Search Test"
              ></SingleSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  tableTest: null,
})

const testTableData = reactive([
  {
    test_name: "CBC",
    total: 2000,
  },
]);

//for table data
const tableTestOptions = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
];
const handleSelectedOption = (option) => {
  console.log("Selected option:", option);
};
</script>

<style>
</style>