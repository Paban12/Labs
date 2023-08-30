<template>
  <section class="patient-group-share">
    <div class="container">
      <div class="card p-0">
        <div class="card-header-bg">Patient Groups Share</div>
        <div class="card-body">
          <div class="card-sub-tabs mb-16">
            <div
              class="tab"
              @click.prevent="group.tab = 1"
              :class="group.tab === 1 ? 'active' : ''"
            >
              <div class="title">Patient Group</div>
            </div>
            <div
              class="tab"
              @click.prevent="group.tab = 2"
              :class="group.tab === 2 ? 'active' : ''"
            >
              <div class="title">Patient Master</div>
            </div>
            <div
              class="tab"
              @click.prevent="group.tab = 3"
              :class="group.tab === 3 ? 'active' : ''"
            >
              <div class="title">Patient Sticker</div>
            </div>
          </div>
          <div class="tab-content" v-if="group.tab === 1">
            <PatientGroup />
          </div>
          <div class="tab-content" v-if="group.tab === 2">
            <PatientMaster />
          </div>
          <div class="tab-content" v-if="group.tab === 3">
            <PatientSticker />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const group = reactive({
  tab: 1,
})
</script>

<style>

</style>