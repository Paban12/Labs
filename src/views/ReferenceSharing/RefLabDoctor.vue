<template>
  <section class="ref-lab-doctor">
    <div class="sub-tabs-row">
      <div
        class="sub-tab"
        @click.prevent="reference.tab = 1"
        :class="reference.tab === 1 ? 'active' : ''"
      >
        <div class="title">Billing</div>
      </div>
      <div
        class="sub-tab"
        @click.prevent="reference.tab = 2"
        :class="reference.tab === 2 ? 'active' : ''"
      >
        <div class="title">Test</div>
      </div>
      <div
        class="sub-tab"
        @click.prevent="reference.tab = 3"
        :class="reference.tab === 3 ? 'active' : ''"
      >
        <div class="title">Default Sharing</div>
      </div>
      <div
        class="sub-tab"
        @click.prevent="reference.tab = 4"
        :class="reference.tab === 4 ? 'active' : ''"
      >
        <div class="title">Default Setting</div>
      </div>
    </div>
    <div class="sub-tabs-content aaa" v-if="reference.tab === 1">
      <RefLabDoctorBilling />
    </div>
    <div class="sub-tabs-content" v-if="reference.tab === 2">
      <RefLabDoctorTest />
    </div>
    <div class="sub-tabs-content" v-if="reference.tab === 3">
      <RefLabDoctorSharing />
    </div>
    <div class="sub-tabs-content" v-if="reference.tab === 4">
      <RefLabDoctorSetting />
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const reference = reactive({
  tab: 1,
});
</script>

<style>
</style>