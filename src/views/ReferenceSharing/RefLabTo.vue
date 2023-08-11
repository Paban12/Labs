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
        <div class="title">Reference Lab Test</div>
      </div>
    </div>
    <div class="sub-tabs-content aaa" v-if="reference.tab === 1">
      <RefLabToBilling />
    </div>
    <div class="sub-tabs-content" v-if="reference.tab === 2">
      <RefLabToTest />
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