<template>
  <section class="contact-page">
    <div class="bread-crumb">
      <div class="content">
        <h3 class="title">Contact Us</h3>
        <div class="path">
          <router-link to="/">Home</router-link>
          >>
          <div class="text">Contact Us</div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="form-row">
        <div class="card">
          <h2>Send Us a Message</h2>
          <span>Your details will not be published</span>
          <form action="" class="form">
            <div class="form-item mb-16">
              <div class="input">
                <input type="text" placeholder="Name" />
                <div class="icon">
                  <icon-user></icon-user>
                </div>
              </div>
              <div class="err-msg">Please enter</div>
            </div>
            <div class="form-item mb-16">
              <div class="input">
                <input type="text" placeholder="Email" />
                <div class="icon">
                  <icon-mail></icon-mail>
                </div>
              </div>
              <div class="err-msg">Please enter email</div>
            </div>
            <div class="form-item mb-16">
              <div class="input">
                <textarea name="" placeholder="Message"></textarea>
                <div class="icon">
                  <icon-message></icon-message>
                </div>
              </div>
              <div class="err-msg mt-0">Please enter message</div>
            </div>
            <div class="submit-btn">
              <button class="btn black-btn">Send Message</button>
            </div>
          </form>
        </div>
        <div class="available-chart">
          <h3>Contact Details</h3>
          <span>
            Please contact us, We will be happy to help you
          </span>
          <div class="data">
            <div class="icon">
              <icon-phone></icon-phone>
            </div>
            <div class="val">8888888888</div>
          </div>
          <div class="data">
            <div class="icon">
              <icon-mail></icon-mail>
            </div>
            <div class="val">companyinfo@gmail.com</div>
          </div>
          <div class="data">
            <div class="icon">
              <icon-location></icon-location>
            </div>
            <div class="val">Amrut Colony, Cidco, Nashik, Maharashtra - 422222</div>
          </div>
          <span>You can also follow us on social platforms</span>
          <div class="social-icons">
            <a href="#" class="icon">
              <icon-facebook></icon-facebook>
            </a>
            <a href="#" class="icon">
              <icon-google></icon-google>
            </a>
            <a href="#" class="icon">
              <icon-telegram></icon-telegram>
            </a>
            <a href="#" class="icon">
              <icon-twitter></icon-twitter>
            </a>
            <a href="#" class="icon">
              <icon-instagram></icon-instagram>
            </a>
          </div>
        </div>
      </div>
      <div class="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.2168978238!2d88.26495129652356!3d22.53556493596121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1689458114084!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>