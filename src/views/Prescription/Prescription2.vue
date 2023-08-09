<template>
  <div>
    <a ref="contentToPrint" id="content-to-print">
      <div class="wrapper">
        <div class="invoice_wrapper">
          <div class="header">
            <div class="logo_invoice_wrap">
              <div class="logo_sec">
                <img src="/src/assets/images/png/print.png" alt="code logo" />
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
            </div>
            <div class="bill_total_wrap">
              <div class="bill_sec">
                <p>Bill To</p>
                <p class="bold name">Alex Deo</p>
                <span>
                  123 walls street, Townhall<br />
                  +111 222345667
                </span>
              </div>
              <div class="total_wrap">
                <p>Total Due</p>
                <p class="bold price">USD: $1200</p>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="main_table">
              <div class="table_header">
                <div class="table_row">
                  <div class="col col_no">NO.</div>
                  <div class="col col_des">ITEM DESCRIPTION</div>
                  <div class="col col_price">PRICE</div>
                  <div class="col col_qty">QTY</div>
                  <div class="col col_total">TOTAL</div>
                </div>
              </div>
              <div class="table_body">
                <div class="table_row">
                  <div class="col col_no">
                    <p>01</p>
                  </div>
                  <div class="col col_des">
                    <p class="bold">Web Design</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>$350</p>
                  </div>
                  <div class="col col_qty">
                    <p>2</p>
                  </div>
                  <div class="col col_total">
                    <p>$700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>02</p>
                  </div>
                  <div class="col col_des">
                    <p class="bold">Web Development</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>$350</p>
                  </div>
                  <div class="col col_qty">
                    <p>2</p>
                  </div>
                  <div class="col col_total">
                    <p>$700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>03</p>
                  </div>
                  <div class="col col_des">
                    <p class="bold">GitHub</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>$120</p>
                  </div>
                  <div class="col col_qty">
                    <p>1</p>
                  </div>
                  <div class="col col_total">
                    <p>$700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>04</p>
                  </div>
                  <div class="col col_des">
                    <p class="bold">Backend Design</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>$350</p>
                  </div>
                  <div class="col col_qty">
                    <p>2</p>
                  </div>
                  <div class="col col_total">
                    <p>$700.00</p>
                  </div>
                </div>
                <div class="table_row">
                  <div class="col col_no">
                    <p>05</p>
                  </div>
                  <div class="col col_des">
                    <p class="bold">Backend Development</p>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div class="col col_price">
                    <p>$150</p>
                  </div>
                  <div class="col col_qty">
                    <p>1</p>
                  </div>
                  <div class="col col_total">
                    <p>$700.00</p>
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
                  <span>$7500</span>
                </p>
                <p>
                  <span>Tax Vat 18%</span>
                  <span>$200</span>
                </p>
                <p>
                  <span>Discount 10%</span>
                  <span>-$700</span>
                </p>
                <p class="bold">
                  <span>Grand Total</span>
                  <span>$7000.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <button @click="printContent">Print Content</button>
  </div>
</template>
<script setup>
import { reactive,onBeforeMount } from "vue";

const scssText = reactive({
  confirmModal: false,
  addModal: false,

})

onBeforeMount(() => {
});
function printContent() {
                // Get HTML to print from element
const prtHtml = document.getElementById('content-to-print').innerHTML;

// Get all stylesheets HTML
let stylesHtml = '';
for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
  stylesHtml += node.outerHTML;
}

// Open the print window
// const WinPrint = window.open('', '', 'left=0,top=0,toolbar=0,scrollbars=0,status=0');
const WinPrint = window.open();

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


</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;400;900&display=swap");

$primary: #0000ff;
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
  background: $white;
  padding: 30px;
}

.invoice_wrapper {
  border: 3px solid $primary;
  width: 700px;
  max-width: 100%;

  .header {

    .logo_invoice_wrap,
    .bill_total_wrap {
      display: flex;
      justify-content: space-between;
      padding: 30px;
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
      .total_wrap {

        .price,
        .bill_sec .name {
          color: $primary;
          font-size: 20px;
        }
      }
    }
  }

  .body {
    .main_table {
      .table_header {
        background: $primary;

        .table_row {
          color: $white;
          font-size: 18px;
          border-bottom: 0px;
        }
      }

      .table_row {
        display: flex;
        border-bottom: 1px solid $secondary;

        .col {
          padding: 10px;
        }

        .col_no {
          width: 5%;
        }

        .col_des {
          width: 45%;
        }

        .col_price {
          width: 20%;
          text-align: center;
        }

        .col_qty {
          width: 10%;
          text-align: center;
        }

        .col_total {
          width: 20%;
          text-align: right;
        }
      }
    }

    .paymethod_grandtotal_wrap {
      display: flex;
      justify-content: space-between;
      padding: 5px 0 30px;
      align-items: flex-end;

      .paymethod_sec {
        padding-left: 30px;
      }

      .grandtotal_sec {
        width: 30%;

        p {
          display: flex;
          width: 100%;
          padding-bottom: 5px;

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
}</style>