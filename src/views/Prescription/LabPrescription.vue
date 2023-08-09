<template>
  <section class="visit-prescription">
    <a ref="contentToPrint" id="content-to-print">
      <div class="wrapper">
        <div class="invoice_wrapper">
          <div class="header">
            <!-- <div class="logo_invoice_wrap">
              <div class="logo_sec">
                <img src="/src/assets/images/png/logo.png" alt="code logo" />
                <div class="title_wrap">
                  <p class="title bold">Coding Boss</p>
                  <p class="sub_title">Privite Limited</p>
                </div>
              </div>
              <div class="invoice_sec">
                <p class="invoice bold">INVOICE</p>
                <p class="invoice_no">
                  <span class="bold">Invoice</span>
                  <span>#3488</span>
                </p>
                <p class="date">
                  <span class="bold">Date</span>
                  <span>08/Jan/2022</span>
                </p>
              </div>
            </div> -->
            <div class="bill_total_wrap">
              <div class="bill_sec">
                <span class="name">Name :</span>
                <span class="val">Mrs. Devika Pandaye</span>
              </div>
              <div class="bill_sec">
                <span class="name">Phone :</span>
                <span class="val">+91 8888888888</span>
              </div>
              <div class="bill_sec">
                <span class="name">Age/Gender :</span>
                <span class="val">29Y / Female</span>
              </div>
            </div>
            <div class="bill_total_wrap">
              <div class="bill_sec">
                <span class="name">Weight :</span>
                <span class="val">52 kg</span>
              </div>
              <div class="bill_sec">
                <span class="name">Height :</span>
                <span class="val">175 cm</span>
              </div>
              <div class="bill_sec">
                <span class="name">Date :</span>
                <span class="val">23 June 2023 8:45 PM</span>
              </div>
              
              
              <!-- <div class="total_wrap">
                <span>Total Due</span>
                <span class="bold price">USD: $1200</span>
              </div>
              <div class="total_wrap">
                <span>Total Due</span>
                <span class="bold price">USD: $1200</span>
              </div> -->
            </div>
            <div class="bill_total_wrap">
              <div class="bill_sec">
                <span class="name">Diagnostic :</span>
                <span class="val">Fever, Vomiting, Cough, Hyper tension, Sugar</span>
              </div>
              <div class="bill_sec">
                <span class="name">Past History :</span>
                <span class="val"> CABG DONE ON 12/03/2014</span>
              </div>
              <div class="bill_sec">
                <span class="name">Complaints :</span>
                <span class="val">Throat Sour</span>
              </div>
            </div>
            <div class="bill_total_wrap">
              
              <div class="bill_sec_note">
                <span class="name">Note :</span>
                <span class="val">DIABETES . CT CORONARY ANGIO - 3 DAYS PROLOMET XL 12.5 ONCE</span>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="main_table">
              <div class="table_header">
                <div class="table_row">
                  <div class="col col_no bold">NO.</div>
                  <div class="col col_des bold">ITEM DESCRIPTION</div>
                  <div class="col col_price bold">PRICE</div>
                  <div class="col col_qty bold">QTY</div>
                  <div class="col col_total bold">TOTAL</div>
                </div>
              </div>
              <div class="table_body">
                <div class="table_row">
                  <div class="col col_no">
                    <p>01</p>
                  </div>
                  <div class="col col_des">
                    <p class="name">Web Design</p>
                    <p class="desc">Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>₹350</p>
                  </div>
                  <div class="col col_qty">
                    <p>2</p>
                  </div>
                  <div class="col col_total">
                    <p>₹700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>02</p>
                  </div>
                  <div class="col col_des">
                    <p class="name">Web Development</p>
                    <p class="desc">Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>₹350</p>
                  </div>
                  <div class="col col_qty">
                    <p>2</p>
                  </div>
                  <div class="col col_total">
                    <p>₹700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>03</p>
                  </div>
                  <div class="col col_des">
                    <p class="name">GitHub</p>
                    <p class="desc">Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>₹120</p>
                  </div>
                  <div class="col col_qty">
                    <p>1</p>
                  </div>
                  <div class="col col_total">
                    <p>₹700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>04</p>
                  </div>
                  <div class="col col_des">
                    <p class="name">Backend Design</p>
                    <p class="desc">Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>₹350</p>
                  </div>
                  <div class="col col_qty">
                    <p>2</p>
                  </div>
                  <div class="col col_total">
                    <p>₹700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>05</p>
                  </div>
                  <div class="col col_des">
                    <p class="name">Backend Development</p>
                    <p class="desc">Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>₹150</p>
                  </div>
                  <div class="col col_qty">
                    <p>1</p>
                  </div>
                  <div class="col col_total">
                    <p>₹700.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="paymethod_grandtotal_wrap">
              <div class="paymethod_sec">
                <p class="bold">Payment Method</p>
                <p>Visa, master Card and We accept Cheque</p>
              </div>
              <div class="grandtotal_sec">
                <p class="bold">
                  <span>SUB TOTAL</span>
                  <span>₹7500</span>
                </p>
                <p>
                  <span>Tax Vat 18%</span>
                  <span>₹200</span>
                </p>
                <p>
                  <span>Discount 10%</span>
                  <span>-₹700</span>
                </p>
                <p class="total">
                  <span>Grand Total</span>
                  <span>₹7000.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
    <div class="share-btns">
      <div class="btn grade-btn" @click="printContent()">
        <img src="/src/assets/images/png/print.png" alt="image" />
        <div class="text">Print</div>
      </div>
      <div class="btn grade-btn" @click="share()">
        <img src="/src/assets/images/png/share.png" alt="image" />
        <div class="text">Share</div>
      </div>
      <div class="btn grade-btn" @click="pdfDownload()">
        <img src="/src/assets/images/png/file.png" alt="image" />
        <div class="text">Download</div>
      </div>
      <!-- <download-button dom="#content-to-print" name="PdfSample" /> -->
      <div class="btn grade-btn" @click="navigate('/hospital-prescription')">
        <img src="/src/assets/images/png/share.png" alt="image" />
        <div class="text">Hospital</div>
      </div>
      <div class="btn grade-btn" @click="navigate('/lab-prescription')">
        <img src="/src/assets/images/png/share.png" alt="image" />
        <div class="text">Lab</div>
      </div>
      <div class="btn grade-btn" @click="navigate('/doctor-prescription')">
        <img src="/src/assets/images/png/share.png" alt="image" />
        <div class="text">Doctor</div>
      </div>
      <div class="btn grade-btn" @click="navigate('/prescription')">
        <img src="/src/assets/images/png/share.png" alt="image" />
        <div class="text">Clinic</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import html2pdf from "html2pdf.js";

const router = useRouter();
const medData = reactive([
  {
    med_name: "Crocine",
    when: "1-0-1",
    frequency: "15 Days",
    note: "Please take care",
  },
]);

async function share() {
  // Get HTML to print from element
  var prtHtml = document.querySelector('#content-to-print');
  const pdfOptions = {
    margin: 0,
    filename: 'generated.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };
  const pdf = await html2pdf().from(prtHtml).set(pdfOptions).outputPdf();
  // var data = new Blob([pdf], { type: 'application/pdf' })
  const formData = new FormData();
  formData.append('pdf', new Blob([pdf], { type: 'application/pdf' }), 'generated.pdf');
  for (let [key, value] of formData) {
  console.log({key,value})
}
}
async function pdfDownload() {
  // Get HTML to print from element
  var prtHtml = document.querySelector('#content-to-print');
  var opt = {
    margin: 0,
    filename: 'samplePdf',
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(prtHtml).set(opt).save();
}
function printContent() {
  // Get HTML to print from element
  const prtHtml = document.getElementById('content-to-print').innerHTML;

  // Get all stylesheets HTML
  let stylesHtml = '';
  for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
    stylesHtml += node.outerHTML;
  }

  // Open the print window
  const WinPrint = window.open('', '', 'left=0,width=1800,height=1900,top=0,toolbar=0,scrollbars=0,status=0');

  WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  // WinPrint.close();
}
function navigate(link, id) {
  router.push({ path: link, query: { id } })
}
</script>
<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;400;900&display=swap");

$primary: #002e6b;
$secondary: #3d3d3d;
$white: #fff;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}


// body {
//   background: $secondary;
//   padding: 50px;
//   color: $secondary;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
// }

.bold {
  font-weight: 900;
}

.light {
  font-weight: 100;
}

.wrapper {
  background-image: url(/src/assets/images/png/lab-image.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    height: 100%;
  // background: $white;
  padding: 50px;
}
#content-to-print{
    
    width: 45%;
    height: 107vh;
}
.invoice_wrapper {
  // border: 2px solid $primary;
  height: 100%;
  width: 100%;
  max-width: 100%;

  .header {
    margin-top: 15%;
    .logo_invoice_wrap,
    .bill_total_wrap {
      // border: 2px solid $primary;
      display: flex;
      justify-content: space-between;
      padding: 5px;
    }

    .logo_sec {
      display: flex;
      align-items: center;

      .title_wrap {
        margin-left: 5px;

        .title {
          text-transform: uppercase;
          font-size: 18px;
          color: $primary;
        }

        .sub_title {
          font-size: 12px;
        }
      }
    }

    .invoice_sec,
    .bill_total_wrap .total_wrap {
      text-align: right;
    }

    .invoice_sec {
      .invoice {
        font-size: 28px;
        color: $primary;
      }

      .invoice_no,
      .date {
        display: flex;
        width: 100%;

        span:first-child,
        span:last-child {
          width: 70px;
          text-align: left;
        }

        span:last-child {
          width: calc(100% - 70px);
        }
      }
    }

    .bill_total_wrap {
      width: 100%;
      .bill_sec_note{
        width: 100%;
        padding-bottom: 10px;
        .name {
          // color: $primary;
          font-weight: 700;
          font-size: 12px;
        }
        .val{
          font-size: 12px;
        }
      }
      .bill_sec{
          width: 33%;
        .name {
          // color: $primary;
          font-weight: 700;
          font-size: 12px;
        }
        .val{
          font-size: 12px;
        }
      }
      .total_wrap {

        .price,
        .bill_sec{
          width: 33%;
        .name {
          color: $primary;
          font-size: 20px;
        }
      }
      }
    }
  }

  .body {
    height: 35rem;
    margin-bottom: 6rem;
    .main_table {
      .table_header {
        background: $primary;

        .table_row {
          color: $white;
          font-size: 12px;
          font-weight: bold;
          border-bottom: none;
          background: $primary;
          border: 1px solid $secondary;
        }
      }

      .table_row {
        display: flex;
        border: 1px solid $secondary;
        border-top: none;

        .col {
          padding: 3px;
          .name{
            font-weight: 900;
            font-size: 12px;
          }
          .desc{
            font-size: 12px;
          }
        }

        .col_no {
          width: 5%;
          .bold{
            font-size: 12px;
          }
        }

        .col_des {
          width: 45%;
        }

        .col_price {
          width: 20%;
          text-align: center;
          font-size: 13px;
        }

        .col_qty {
          width: 10%;
          text-align: center;
        }

        .col_total {
          width: 20%;
          text-align: right;
          font-size: 13px;
          padding: 3px;
        }
      }
    }

    .paymethod_grandtotal_wrap {
      display: flex;
      justify-content: space-between;
      padding: 5px 0 30px;
      align-items: flex-end;

      .paymethod_sec {
        padding-left: 2px;
      }

      .grandtotal_sec {
        width: 40%;
        .total{
          font-weight: 900;
          font-size: 16px;
        }

        p {
          display: flex;
          width: 100%;
          padding-bottom: 5px;
          font-size: 14px;

          span {
            padding: 0 10px;

            &:first-child {
              width: 60%;
            }

            &:last-child {
              width: 40%;
              text-align: right;
            }
          }

          &:last-child span {
            background: $primary;
            padding: 10px;
            color: #fff;
          }
        }
      }
    }
  }

  .footer {
    padding: 30px;

    >p {
      color: $primary;
      text-decoration: underline;
      font-size: 18px;
      padding-bottom: 5px;
    }

    .terms {
      .tc {
        font-size: 16px;
      }
    }
  }
}
</style>
