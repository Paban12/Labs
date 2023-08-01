<template>
  <section class="total-visits-page">
    <div class="visit-section"> 
      <div class="header-section">
        <h3>2 VISITS</h3>
        <span>Since 2022-11-25</span>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="left">
            <div class="date">20-Feb-2023</div>
            <div class="dr-name">By Dr. Harish Pandaya</div>
          </div>
          <div class="right-options">
            <div class="data">
              <img src="/src/assets/images/png/help.png" alt="image">
              <div class="text">Email</div>
            </div>
            <div class="data">
              <img src="/src/assets/images/png/help.png" alt="image">
              <div class="text">Share</div>
            </div>
            <div class="data">
              <img src="/src/assets/images/png/help.png" alt="image">
              <div class="text">PDF</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="top-details">
            <div class="data-col">
              <div class="data">
                <div class="title">
                  Vitals :
                </div>
                <div class="val">
                  <div class="sub-data">
                    <strong>Weight : </strong>
                    <span>98 KG</span>
                  </div>
                  <div class="sub-data">
                    <strong>Pulse : </strong>
                    <span>99/120</span>
                  </div>
                  <div class="sub-data">
                    <strong>Temp : </strong>
                    <span>99/120</span>
                  </div>
                  <div class="sub-data">
                    <strong>SPO2 : </strong>
                    <span>99/120</span>
                  </div>
                </div>
              </div>
              <div class="data">
                <div class="title">
                  Diagnosis :
                </div>
                <div class="val">
                  SEE AFTER 3 MONTHS ECHO ECG CBC CREATININE
                </div>
              </div>
            </div>
            <div class="data-col">
              <div class="data">
                <div class="title">
                  Complaints :
                </div>
                <div class="val">
                  ON MED TREATMENT FOR LOW EF RX AS PER DR PANDE 3 MONTHLY FOLLOW UP
                </div>
              </div>
              <div class="data">
                <div class="title">
                  Quick Note :
                </div>
                <div class="val">
                  adv influenza + pneumovac vaccine
                </div>
              </div>
            </div>
          </div>
          <div class="table-row">
            <div class="table-col">
              <div class="table-outer">
                <table class="table">
                  <thead>
                    <th>Sr. No.</th>
                    <th>Medicine</th>
                    <th>Dose</th>
                    <th>Timing</th>
                    <th>When</th>
                    <th>Frequency</th>
                    <th>Duration</th>
                    <th>Note</th>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in visitData" :key="item">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.med_name }}</td>
                      <td>{{ item.dose }}</td>
                      <td>{{ item.time }}</td>
                      <td>{{ item.when }}</td>
                      <td>{{ item.freq }}</td>
                      <td>{{ item.duration }}</td>
                      <td>{{ item.note }}</td>
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
            <div class="test-table">
              <div class="table-outer">
                <table class="table">
                  <thead>
                    <th>Test</th>
                    <th>09 Dec 2022</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in visitData" :key="item">
                      <td>ECG</td>
                      <td class="f-w-bold">Done</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="table-no-data">
                <div >No records Found!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const visitData = reactive([
    {
      med_name: 'Corocine',
      dose: '1-1-1',
      time: '12:30',
      when: 'after meal',
      freq: 'daily',
      duration: '15 Days',
      note: 'please take care of your health'
    }
  ])

</script>

<style>

</style>