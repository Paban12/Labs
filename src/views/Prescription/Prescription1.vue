 <template>
  <section class="visit-prescription">
    <div class="card preview-card" id="preview-card">
      <div class="card-content">
        <div class="logo">
          <img src="/src/assets/images/png/logo.png" alt="image" />
        </div>
        <div
          class="clinic-details"
        >
          <div class="info">
            <h4 class="name mb-5">
              Divya Drishiti Doctor Cliic
            </h4>
            <div class="time">
              <div class="day">Monday</div>
              <div class="val">09:00 AM - 11:00 AM</div>
            </div>
            <div class="time">
              <div class="day">Thursday</div>
              <div class="val">09:00 AM - 11:00 AM</div>
            </div>
          </div>
          <div class="clinic-logo">
            <img
              src="/src/assets/images/png/logo.png"
              alt="image"
            />
          </div>
          <div
            class="info dr-info"
          >
            <h4 class="name mb-5">Dr. Abhijit Banaarajee</h4>
            <div class="deg">MBBS, MD GYNOCOLOGIST</div>
            <div class="reg">Reg: 98989809098</div>
          </div>
        </div>
        <div class="patient-content">
          <div
            class="p-details"
          >
            <div
              class="row mb-10"
            >
              <div class="col-33 flex">
                <div class="title f-w-bold">Name</div>
                <div class="val">
                  Mrs. Devika Pandaye
                </div>
              </div>
              <div class="col-33 flex">
                <div class="title f-w-bold">Phone</div>
                <div class="val">
                  +91 8888888888
                </div>
              </div>
              <div class="col-33 flex">
                <div class="title f-w-bold">Age</div>
                <div class="val">
                  29Y 6M Female
                </div>
              </div>
            </div>
            <div
              class="row mb-10"
            >
              <div class="col-33 flex">
                <div class="title f-w-bold">Date</div>
                <div class="val">
                  23 June 2023 8:45:12 PM
                </div>
              </div>
              <div class="col-33 flex">
                <div class="title f-w-bold">Weight</div>
                <div class="val">
                  29Y 6M Female
                </div>
              </div>
              <div class="col-33 flex">
                <div class="title f-w-bold">Height</div>
                <div class="val">170 cm</div>
              </div>
            </div>
          </div>
          <div
            class="p-details"
          >
            <div
              class="row mb-10"
            >
              <div class="col-5 flex">
                <div class="title f-w-bold">Diagnostic</div>
                <div class="val">
                  Fever, Vomiting, Cough, Hyper tension, Sugar
                </div>
              </div>
              <div class="col-5 flex">
                <div class="title f-w-bold">Complaints</div>
                <div class="val">
                  Throat Sour
                </div>
              </div>
            </div>
            <div
              class="row mb-10"
            >
              <div class="col-5 flex">
                <div class="title f-w-bold">Past History</div>
                <div class="val">
                  CABG DONE ON 12/03/2014
                </div>
              </div>
              <div class="col-5 flex">
                <div class="title f-w-bold">Note</div>
                <div class="val">
                  DIABETES . CT CORONARY ANGIO - 3 DAYS PROLOMET XL 12.5 ONCE
                </div>
              </div>
            </div>
          </div>
          <div class="med-table">
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Sr. No.</th>
                  <th>Medicine Name</th>
                  <th>When</th>
                  <th>Frequency</th>
                  <th>Note</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in medData" :key="item">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.med_name }}</td>
                    <td>{{ item.when }}</td>
                    <td>{{ item.frequency }}</td>
                    <td>{{ item.note }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="bottom-content"
        >
          <div
            class="bottom-details"
          >
            <div class="left">
              <div class="id">
                Case ID WASS987987898
              </div>
              <img src="/src/assets/images/png/barcode.png" alt="" />
            </div>
            <div
              class="right"
            >
              <img
                src="/src/assets/images/png/sign.png"
                alt=""
              />
              <h4>Dr. Abhijit Banaarajee.</h4>
              <div class="deg">
                MBBS, MD GYNOCOLOGIST
              </div>
            </div>
          </div>
          <div class="contact-details">
            <div
              class="data-row"
            >
              <div
                class="data"
              >
                <icon-phone></icon-phone>
                <div class="val">
                  +91 9763500291 +91 9763500291
                </div>
              </div>
              <div
                class="data"
              >
                <icon-mail></icon-mail>
                <div class="val">
                  divyadrishitclicni@webappssoft.com
                </div>
              </div>
            </div>
            <div
              class="data-row"
            >
              <div
                class="data"
              >
                <icon-location
                ></icon-location>
                <div class="val">
                  128 jodhpur Garden, Ops South city Mall Lake Gardens ,
                  Jadhavpur Kolkata 700045
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="share-btns">
      <div class="btn grade-btn" @click="printPage()">
        <img src="/src/assets/images/png/print.png" alt="image" />
        <div class="text">Print</div>
      </div>
      <div class="btn grade-btn">
        <img src="/src/assets/images/png/share.png" alt="image" />
        <div class="text">Share</div>
      </div>
      <div class="btn grade-btn">
        <img src="/src/assets/images/png/file.png" alt="image" />
        <div class="text">Download</div>
      </div>
      <div class="btn grade-btn">
        <img src="/src/assets/images/png/share.png" alt="image" />
        <div class="text">Share</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const medData = reactive([
  {
    med_name: "Crocine",
    when: "1-0-1",
    frequency: "15 Days",
    note: "Please take care",
  },
]);

function printPage() {
  const printContents = document.getElementById("preview-card").innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();
  // window.close();

  document.body.innerHTML = originalContents;
  window.close();
  // window.print();
}
</script>

<style lang="css">
@media print {
  body *:not(.preview-card):not(.preview-card *) {
    /* visibility: hidden; */
  }
  .preview-card,
  .preview-card * {
    display: none !important;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>