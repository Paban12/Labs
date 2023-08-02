<template>
  <section class="apt-overview-page">
    <div class="container">
      <div class="card">
        <div class="heading">
          <div class="barcode">
            <div class="no">Case ID WASS987987898</div>
            <img src="/src/assets/images/png/barcode.png" alt="" />
          </div>
          <div class="doctor-info">
            <h3 class="name">Dr. Abhinav Bindra</h3>
            <div class="deg">MBBS, MD GYNOCOLOGIST</div>
          </div>
        </div>
        <div class="detail-card">
          <div class="card-head">
            <img src="/src/assets/images/png/operator.png" alt="" />
            <h5>Basic Details</h5>
          </div>
          <div class="card-body">
            <div class="detail-row">
              <div class="data">
                <div class="title">Name :</div>
                <div class="val">Mrs. Janki Swami Ayer</div>
              </div>
              <div class="data">
                <div class="title">Phone no :</div>
                <div class="val">+918888888888</div>
              </div>
            </div>
            <div class="detail-row">
              <div class="data">
                <div class="title">Age :</div>
                <div class="val">39 years 3 month</div>
              </div>
              <div class="data">
                <div class="title">Gender</div>
                <div class="val">Female</div>
              </div>
            </div>
            <div class="detail-row">
              <div class="data w-100">
                <div class="title">Address :</div>
                <div class="val">
                  4th floor near silver line eye hospital Jodhpur Park jadahavpur
                  Kolkata West Bengal Indian
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-card">
          <div class="card-head">
            <img src="/src/assets/images/png/test-tube.png" alt="" />
            <h5>Clinical Details</h5>
          </div>
          <div class="card-body">
            <div class="detail-row">
              <div class="data">
                <div class="title">Height :</div>
                <div class="val">170 CM</div>
              </div>
              <div class="data">
                <div class="title">Pulse :</div>
                <div class="val">85 PM</div>
              </div>
            </div>
            <div class="detail-row">
              <div class="data">
                <div class="title">Weight :</div>
                <div class="val">60 KG</div>
              </div>
              <div class="data">
                <div class="title">Saturation :</div>
                <div class="val">5874</div>
              </div>
            </div>
            <div class="detail-row">
              <div class="data">
                <div class="title">BP :</div>
                <div class="val">120/190</div>
              </div>
              <div class="data">
                <div class="title">Temperature :</div>
                <div class="val">89 degree</div>
              </div>
            </div>
            <div class="detail-row">
              <div class="data">
                <div class="title">Oxygen :</div>
                <div class="val">95 PM</div>
              </div>
              <div class="data">
                <div class="title">Cough :</div>
                <div class="val">Dry Cough</div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-card">
          <div class="card-head">
            <img src="/src/assets/images/png/weight.png" alt="" />
            <h5>Clinical Details</h5>
          </div>
          <div class="card-body">
            <div class="text">Having vomiting since 3 days</div>
            <div class="text">Left Leg knee pain since 2 years</div>
            <div class="text">
              Throat infection with saur problem for speaking
            </div>
            <div class="text">Dry cough since many year with lungs infection</div>
            <div class="text">Dry cough since many year with lungs infection</div>
          </div>
        </div>
        <div class="detail-card">
          <div class="card-head">
            <img src="/src/assets/images/png/confirm.png" alt="" />
            <h5>Primery Complaints</h5>
          </div>
          <div class="card-body">
            <div class="text">Fever since 2 days</div>
            <div class="text">Body pain every night</div>
            <div class="text">Throat sar</div>
          </div>
        </div>
        <div class="btns">
          <router-link to="/" class="btn yellow-btn">Edit</router-link>
          <router-link to="/" class="btn green-btn">Change</router-link>
          <router-link to="/new-prescription" class="btn black-btn">Prescribe</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>