<template>
  <section class="faq-create-page">
    <div class="container">
      <div class="card">
        <div class="card-header">FAQ's</div>
        <div class="card-body">
          <div class="tabs">
            <div
              class="tab"
              @click.prevent="faq.tab = 1"
              :class="faq.tab === 1 ? 'active' : ''"
            >
              <div class="title">FAQ's</div>
            </div>
            <div
              class="tab"
              @click.prevent="faq.tab = 2"
              :class="faq.tab === 2 ? 'active' : ''"
            >
              <div class="title">Common FAQ's</div>
            </div>
          </div>
          <div class="tab-content" v-if="faq.tab === 1">
            <div class="search-row mb-16">
              <div class="searchbar">
                <input type="text" placeholder="Search By FAQ" />
                <img src="/src/assets/images/png/search.png" alt="" />
              </div>
              <div class="add-btn">
                <button class="btn black-btn w-10-r" @click.prevent="faq.addModal = true">
                  Add
                </button>
              </div>
            </div>
            <div class="faq-list">
              <div class="list">
                <div class="left">
                  <div class="que">Is porta semper MedService primis?</div>
                  <div class="ans">
                    Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien
                  </div>
                </div>
                <div class="option-btn">

                  <div class="icon">
                    <icon-vert-dots></icon-vert-dots>
                  </div>
                  <div class="hover-list card">
                    <div class="list-item" @click.prevent="faq.addModal = true">Edit</div>
                    <div class="list-item" @click.prevent="faq.confirmModal = true">Delete</div>
                  </div>
                </div>
              </div>
              <div class="list">
                <div class="left">
                  <div class="que">Is porta semper MedService primis?</div>
                  <div class="ans">
                    Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien
                  </div>
                </div>
                <div class="option-btn">

                  <div class="icon">
                    <icon-vert-dots></icon-vert-dots>
                  </div>
                  <div class="hover-list card">
                    <div class="list-item" @click.prevent="faq.addModal = true">Edit</div>
                    <div class="list-item" @click.prevent="faq.confirmModal = true">Delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="faq.tab === 2">
            <div class="sample-list">
              <h4>Most helpful FAQs for Patients</h4>
              <div class="list">
                <div class="list-item">How many patients can be seated at the waiting area at a time of Sample Collection?</div>
                <div class="list-item">Are you provide Sample Home Collection Facility?</div>
                <div class="list-item">Are you provide E-report Facility?</div>
                <div class="list-item">How many Collection centers you have?</div>
                <div class="list-item">Are you Share My Report on WhatsApp?</div>
                <div class="list-item">Are you provide medicine Home delivery Facility?</div>
                <div class="list-item">Are you provide E-Bill Facility?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <Modal v-model:show="faq.confirmModal" class="confirm-modal">
      <h4>Are you sure want to Delete</h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="faq.confirmModal = false">
          Cancel
        </button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal
      v-model:show="faq.addModal"
      class=""
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">FAQ's</div>
        <div class="close-btn" @click.prevent="faq.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <div class="title">Question</div>
          <input type="text" placeholder="Enter">
          <div class="err-msg">Please enter question</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Answer</div>
          <textarea name="" id="" rows="4" placeholder="Enter"></textarea>
          <div class="err-msg">Please enter answer</div>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const faq = reactive({
  tab: 1,
  addModal: false,
  confirmModal: false,
})
</script>

<style>

</style>