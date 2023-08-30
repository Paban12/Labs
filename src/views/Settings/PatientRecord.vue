<template>
  <section class="patient-record-page">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">Patient Records Share</div>
        <div class="card-body">
          <div class="card-sub-tabs mb-16">
            <div
              class="tab"
              @click.prevent="record.tab = 1"
              :class="record.tab === 1 ? 'active' : ''"
            >
              <div class="title">LAB</div>
            </div>
          </div>
          <div class="tab-content" v-if="record.tab === 1">
            <div class="data flex align-center gap-10 mb-16">
              <input type="checkbox">
              <div class="text">Test Result Share With Patients</div>
            </div>
            <div class="data flex align-center gap-10 mb-16">
              <input type="checkbox">
              <div class="text">Patient Feedback Collection</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const record = reactive({
  tab: 1,
})
</script>

<style>

</style>