 <template>
  <section class="visit-prescription">
    <div class="card preview-card" id="preview-card" style="position: relative">
      <div class="card-content" style="padding-bottom: 12rem">
        <div class="logo">
          <img src="/src/assets/images/png/logo.png" alt="image" style="display: none;" />
        </div>
        <div
          class="clinic-details"
          style="
            color: var(--red);
            display: flex;
            margin-bottom: 1rem;
            border-bottom: 1px solid var(--red);
            padding-bottom: 0.5rem;
          "
        >
          <div class="info" style="width: calc(50% - 3rem); font-size: 0.8rem">
            <h4 class="name mb-5" style="font-size: 1rem">
              Divya Drishiti Doctor Cliic
            </h4>
            <div class="time" style="display: flex">
              <div class="day" style="width: 4rem">Monday</div>
              <div class="val">09:00 AM - 11:00 AM</div>
            </div>
            <div class="time" style="display: flex">
              <div class="day" style="width: 4rem">Thursday</div>
              <div class="val">09:00 AM - 11:00 AM</div>
            </div>
          </div>
          <div class="clinic-logo" style="width: 6rem">
            <img
              src="/src/assets/images/png/logo.png"
              style="width: 100%"
              alt="image"
            />
          </div>
          <div
            class="info dr-info"
            style="
              width: calc(50% - 3rem);
              display: flex;
              flex-direction: column;
              align-items: flex-end;
            "
          >
            <h4 class="name mb-5">Dr. Abhijit Banaarajee</h4>
            <div class="deg">MBBS, MD GYNOCOLOGIST</div>
            <div class="reg">Reg: 98989809098</div>
          </div>
        </div>
        <div class="patient-content">
          <div
            class="p-details"
            style="
              display: flex;
              flex-direction: row;
              width: 100%;
              font-size: 14px;
              margin-bottom: 1rem;
            "
          >
            <div
              class="row mb-10"
              style="
                display: flex;
                align-items: flex-start;
                width: 33.333%;
                gap: 1rem;
              "
            >
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 4rem">Name</div>
                <div class="val" style="width: calc(100% - 4rem)">
                  Mrs. Devika Pandaye
                </div>
              </div>
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 4rem">Phone</div>
                <div class="val" style="width: calc(100% - 4rem)">
                  +91 8888888888
                </div>
              </div>
            </div>
            <div
              class="row mb-10"
              style="
                display: flex;
                align-items: flex-start;
                width: 33.333%;
                gap: 1rem;
              "
            >
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 4rem">Age</div>
                <div class="val" style="width: calc(100% - 4rem)">
                  29Y 6M Female
                </div>
              </div>
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 4rem">Date</div>
                <div class="val" style="width: calc(100% - 4rem)">
                  23 June 2023 8:45:12 PM
                </div>
              </div>
            </div>
            <div
              class="row mb-10"
              style="
                display: flex;
                align-items: flex-start;
                width: 33.333%;
                gap: 1rem;
              "
            >
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 4rem">Weight</div>
                <div class="val" style="width: calc(100% - 4rem)">
                  29Y 6M Female
                </div>
              </div>
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 4rem">Height</div>
                <div class="val" style="width: calc(100% - 4rem)">170 cm</div>
              </div>
            </div>
          </div>
          <div
            class="p-details"
            style="
              display: flex;
              flex-direction: row;
              width: 100%;
              font-size: 12px;
              margin-bottom: 1rem;
            "
          >
            <div
              class="row mb-10"
              style="
                display: flex;
                align-items: flex-start;
                width: 50%;
                gap: 1rem;
              "
            >
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 5rem">Diagnostic</div>
                <div class="val" style="width: calc(100% - 5rem)">
                  Fever, Vomiting, Cough, Hyper tension, Sugar
                </div>
              </div>
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 5rem">Complaints</div>
                <div class="val" style="width: calc(100% - 5rem)">
                  +91 8888888888
                </div>
              </div>
            </div>
            <div
              class="row mb-10"
              style="
                display: flex;
                align-items: flex-start;
                width: 50%;
                gap: 1rem;
              "
            >
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 5rem">Past History</div>
                <div class="val" style="width: calc(100% - 5rem)">
                  CABG DONE ON 12/03/2014
                </div>
              </div>
              <div class="col-5 flex" style="display: flex; width: 100%">
                <div class="title f-w-bold" style="width: 5rem">Note</div>
                <div class="val" style="width: calc(100% - 5rem)">
                  DIABETES . CT CORONARY ANGIO - 3 DAYS PROLOMET XL 12.5 ONCE
                </div>
              </div>
            </div>
          </div>
          <div class="med-table" style="margin-bottom: 3rem">
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
          style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1rem;
          "
        >
          <div
            class="bottom-details"
            style="
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              gap: 1rem;
              padding: 1rem 0;
              border-bottom: 1px solid var(--red);
            "
          >
            <div class="left">
              <div class="id" style="font-size: 0.8rem; text-align: center">
                Case ID WASS987987898
              </div>
              <img src="/src/assets/images/png/barcode.png" alt="" />
            </div>
            <div
              class="right"
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
              "
            >
              <img
                src="/src/assets/images/png/sign.png"
                style="width: 4rem"
                alt=""
              />
              <h4 style="font-size: 1rem">Dr. Abhijit Banaarajee.</h4>
              <div class="deg" style="font-size: 0.8rem">
                MBBS, MD GYNOCOLOGIST
              </div>
            </div>
          </div>
          <div class="contact-details" style="margin-top: 1rem">
            <div
              class="data-row"
              style="
                margin-bottom: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.5rem;
              "
            >
              <div
                class="data"
                style="    display: flex;
                align-items: center;
                gap: 5px;
              }"
              >
                <icon-phone style="height: 1rem; width: 1rem"></icon-phone>
                <div class="val" style="font-size: 0.85rem">
                  +91 9763500291 +91 9763500291
                </div>
              </div>
              <div
                class="data"
                style="display: flex;
                  align-items: center;
                  gap: 5px;
              }"
              >
                <icon-mail style="height: 1rem; width: 1rem"></icon-mail>
                <div class="val" style="font-size: 0.85rem">
                  divyadrishitclicni@webappssoft.com
                </div>
              </div>
            </div>
            <div
              class="data-row"
              style="
                margin-bottom: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.5rem;
              "
            >
              <div
                class="data"
                style="display: flex; align-items: center; gap: 5px"
              >
                <icon-location
                  style="height: 1rem; width: 1rem"
                ></icon-location>
                <div class="val" style="font-size: 0.85rem">
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