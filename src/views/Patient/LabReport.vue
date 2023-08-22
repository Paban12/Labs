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
              <div class="img" @click.prevent="openPrintModal">
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
                      <div class="text-green f-w-bold pointer" @click.prevent="formVar.resultModal = true">View Result</div>
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
    <!-- Modals -->
    <Modal
      v-model:show="formVar.resultModal"
      class="mid-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Test Report</div>
        <div class="close-btn" @click.prevent="formVar.resultModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <input type="text" placeholder="Test Heading">
        </div>
        <div class="table-outer mb-16">
          <table class="table">
            <thead>
              <th>Investigation</th>
              <th>Observed Value</th>
              <th>Result Highlight</th>
              <th>Reference Interval</th>
              <th>Unit</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="test-name mb-5">17 Hydroxyprogesterone</div>
                  <input type="text" placeholder="Methodology/Sub Heading">
                </td>
                <td>
                  <input type="number" placeholder="Result Value">
                </td>
                <td>
                  <div class="check-input flex align-center gap-10">
                    <input type="checkbox" class="w-max min-w-max">
                    <div class="select-dropdown w-100">
                      <select name="" id="">
                        <option value="">Low</option>
                        <option value="">High</option>
                        <option value="">Borderline</option>
                        <option value="">Very Low</option>
                        <option value="">Very High</option>
                        <option value="">Critical</option>
                      </select>
                    </div>
                  </div>
                </td>
                <td>0.3 - 1</td>
                <td>ng/mL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="form-item mb-16">
          <input type="text" placeholder="Template">
        </div>
        <vue-editor :editor-toolbar="customToolbar" class="mb-16"></vue-editor>
        <div class="save-btn flex justify-space">
          <div class="checks flex align-center">
            <div class="data flex align-center gap-10">
              <input type="checkbox">
              <div class="text">Result Verify</div>
            </div>
            <div class="data flex align-center gap-10">
              <input type="checkbox">
              <div class="text">Result Duality Check</div>
            </div>
          </div>
          <button class="btn black-btn w-10-r">Save</button>
        </div>
      </form>
    </Modal>
    <Modal
      v-model:show="formVar.printModal"
      class="mid-modal print-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Print</div>
        <div class="close-btn" @click.prevent="formVar.printModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="print-modal-content">
        <div class="print-content">
          
        </div>
        <div class="other-data">
          Other
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { VueEditor } from "vue3-editor";

const formVar = reactive({
  tableTest: null,
  resultModal: false,
  printModal: false,
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


function openPrintModal () {
  formVar.printModal = true;
}
</script>

<style>
</style>