<template>
  <section class="labtest-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="main">
            <div class="title">Tests</div>
            <button class="btn black-btn" @click="openModal()">
              Add
            </button>
          </div>
          <div class="tabs">
            <div class="tab" @click.prevent="formVar.tab = 1" :class="formVar.tab === 1 ? 'active' : ''">
              Lab
            </div>
            <div class="tab" @click.prevent="formVar.tab = 2" :class="formVar.tab === 2 ? 'active' : ''">
              Panel
            </div>
            <div class="tab" @click.prevent="formVar.tab = 3" :class="formVar.tab === 3 ? 'active' : ''">
              Package
            </div>
            <div class="tab" @click.prevent="formVar.tab = 4" :class="formVar.tab === 4 ? 'active' : ''">
              Template
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="tab-content" v-if="formVar.tab === 1">
            <div class="search-row row">
              <div class="col-4 form-item mb-16">
                <input type="text" placeholder="Search By Name/Dept" />
              </div>
              <!-- <div class="col-3 form-item mb-16">
                <MultiSelect v-model="formVar.tests" :options="testOptions" :tabs="tab" />
              </div> -->
              <div class="col-4 form-item mb-16">
                <!-- <Select v-model="formVar.changeRole" :options="postOptions" @change.prevent="onChange"></Select> -->
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Active Test</option>
                    <option value="">Deleted Test</option>
                  </select>
                </div>
              </div>
              <div class="col-4 form-item mb-16">
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Test List</option>
                    <option value="">Price List</option>
                    <option value="">Validator Rules</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Test Name</th>
                  <th>Test Name Display In Print/Share</th>
                  <th>Category</th>
                  <th>Department</th>
                  <th>Test Code</th>
                  <th>Sample</th>
                  <th>Container</th>
                  <th>Sample Size</th>
                  <th>Price (₹)</th>
                  <th>Home Collection</th>
                  <th>Report Within</th>
                  <th class="text-center">View</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in storeVar.labtestData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.test_name }}</td>
                    <td>{{ item.display }}</td>
                    <td>{{ item.cat }}</td>
                    <td>{{ item.dept }}</td>
                    <td>{{ item.test_code }}</td>
                    <td>{{ item.sample }}</td>
                    <td>{{ item.container }}</td>
                    <td>{{ item.sample_size }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.home_collection }}</td>
                    <td>{{ item.report_within }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <div class="" @click.prevent="storeVar.addTestModal = true">
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
            <div class="table-no-data" v-if="storeVar.labtestData.length<=0">
              <div>No records Found!</div>
            </div>
            <div class="table-footer" v-if="storeVar.labtestData.length>0">
              <div class="entries">
                Showing <span>0</span> to <span>0</span> of
                <span>0</span> entries
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
          <div class="tab-content" v-if="formVar.tab === 2">
            <div class="search-row row">
              <div class="col-4 form-item mb-16">
                <input type="text" placeholder="Search By Name/Dept" />
              </div>
              <!-- <div class="col-3 form-item mb-16">
                <MultiSelect v-model="formVar.panel" :options="panelOptions" :tabs="tab" />
              </div> -->
              <div class="col-4 form-item mb-16">
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Active Panel</option>
                    <option value="">Deleted Panel</option>
                  </select>
                </div>
              </div>
              <div class="col-4 form-item mb-16">
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Panel List</option>
                    <option value="">Price List</option>
                    <option value="">Validator Rules</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Panel Name</th>
                  <th>Test Name Display In Print/Share</th>
                  <th>Category</th>
                  <th>Department</th>
                  <th>Test Code</th>
                  <th>Sample</th>
                  <th>Container</th>
                  <th>Sample Size</th>
                  <th>Price (₹)</th>
                  <th>Home Collection</th>
                  <th>Report Within</th>
                  <th class="text-center">View</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in panelData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.panel_name }}</td>
                    <td>{{ item.display }}</td>
                    <td>{{ item.cat }}</td>
                    <td>{{ item.dept }}</td>
                    <td>{{ item.test_code }}</td>
                    <td>{{ item.sample }}</td>
                    <td>{{ item.container }}</td>
                    <td>{{ item.sample_size }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.home_collection }}</td>
                    <td>{{ item.report_within }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <div class="" @click.prevent="storeVar.addPanelModal = true">
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
              <div>No records Found!</div>
            </div>
            <div class="table-footer">
              <div class="entries">
                Showing <span>0</span> to <span>0</span> of
                <span>0</span> entries
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
          <div class="tab-content" v-if="formVar.tab === 3">
            <div class="search-row row">
              <div class="col-3 form-item mb-16">
                <input type="text" placeholder="Search By Name" />
              </div>
              <div class="col-3 form-item mb-16">
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Package List</option>
                    <option value="">Price List</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Package Name</th>
                  <th>Test/Panel Name</th>
                  <th>Price (₹)</th>
                  <th>Sample</th>
                  <th>Container</th>
                  <th>Home Collection</th>
                  <th>Report Within</th>
                  <th class="text-center">View</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in packageData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.package_name }}</td>
                    <td>{{ item.test_panel_name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.sample }}</td>
                    <td>{{ item.container }}</td>
                    <td>{{ item.home_collection }}</td>
                    <td>{{ item.report_within }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <div class="" @click.prevent="storeVar.addPackageModal = true">
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
              <div>No records Found!</div>
            </div>
            <div class="table-footer">
              <div class="entries">
                Showing <span>0</span> to <span>0</span> of
                <span>0</span> entries
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
          <div class="tab-content" v-if="formVar.tab === 4">
            <div class="search-row row">
              <div class="col-3 form-item mb-16">
                <input type="text" placeholder="Search By Title/Test" />
              </div>
              <div class="col-3 form-item mb-16">
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Template</option>
                    <option value="">Sub Template</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Title</th>
                  <th>Test</th>
                  <th>Date</th>
                  <th class="text-center">View</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in templateData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.test }}</td>
                    <td>{{ item.date }}</td>
                    <td class="text-center">
                      <div class="option-btns">
                        <div class="" @click.prevent="storeVar.addTemplateModal = true">
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
              <div>No records Found!</div>
            </div>
            <div class="table-footer">
              <div class="entries">
                Showing <span>0</span> to <span>0</span> of
                <span>0</span> entries
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
    <!-- components -->
    <AddTestModal />
    <AddPanelModal />
    <AddPackageModal />
    <AddTemplateModal />
  </section>
</template>

<script setup>
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Labtest);
const formVar = reactive({
  limit: 10,
  offset: 0,
  keyword: '',
  submit: false,
  tab: 1,
  tests: null,
  panel: null,
  confirmModal: false,
  cPage: 1,
})


/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getLabtest(formVar.limit, formVar.offset, formVar.keyword,formVar.cPage)
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getLabtest(limit, offset, keyword, cPage) {
  store.dispatch("Labtest/getLabtest", { limit, offset, keyword, cPage });
}

const testData = reactive([
  {
    test_name: "Dengue Ig G & Ig M Antibody Rapid, Serum",
    display: "Yes",
    cat: "Fever",
    dept: "Immunology & Serology",
    test_code: 25478,
    sample: "Serum",
    container: "Urine Container",
    sample_size: 3,
    price: 2000,
    home_collection: "yes",
    report_within: "4 Hrs",
  },
]);

const panelData = reactive([
  {
    panel_name: "Dengue Ig G & Ig M Antibody Rapid, Serum",
    display: "Yes",
    cat: "Fever",
    dept: "Immunology & Serology",
    test_code: 25478,
    sample: "Serum",
    container: "Urine Container",
    sample_size: 3,
    price: 2000,
    home_collection: "yes",
    report_within: "4 Hrs",
  },
]);

const packageData = reactive([
  {
    package_name: "Dengue Ig ",
    test_panel_name: "Dengue Ig G & Ig M Antibody Rapid, Serum",
    price: 2000,
    sample: "Serum",
    container: "Urine Container",
    home_collection: "yes",
    report_within: "4 Hrs",
  },
]);

const templateData = reactive([
  {
    title: "BLOOD CULTURE REPORT",
    test: "Glycosylated Hemoglobin(GHb/HbA1c)",
    date: "30, May 2023",
  },
]);

//multi select
const testOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const panelOptions = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const tab = [];

function openModal(){
  if(formVar.tab === 1){
    storeVar.value.addTestModal=true
  }else if(formVar.tab === 2){
    storeVar.value.addPanelModal=true
  }else if(formVar.tab === 3){
    storeVar.value.addPackageModal=true
  }else if(formVar.tab === 4){
    storeVar.value.addTemplateModal=true
  }
}
</script>

<style></style>