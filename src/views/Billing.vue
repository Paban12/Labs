<template>
  <section class="billing-page">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <div class="tabs">
            <div class="tab" @click.prevent="formVar.tab = 1" :class="formVar.tab === 1 ? 'active' : ''">
              <div class="text">Tax</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 2" :class="formVar.tab === 2 ? 'active' : ''">
              <div class="text">Pay Modes</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 3" :class="formVar.tab === 3 ? 'active' : ''">
              <div class="text">Expense Type</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 4" :class="formVar.tab === 4 ? 'active' : ''">
              <div class="text">Integration</div>
            </div>
            <div class="tab" @click.prevent="formVar.tab = 5" :class="formVar.tab === 5 ? 'active' : ''">
              <div class="text">Default Setting</div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="tab-content" v-if="formVar.tab === 1">
            <BillingTax />
          </div>
          <div class="tab-content" v-if="formVar.tab === 2">
            <BillingPayMode />
          </div>
          <div class="tab-content" v-if="formVar.tab === 3">
            <BillingExpense />
          </div>
          <div class="tab-content" v-if="formVar.tab === 4">
            <BillingIntegration />
          </div>
          <div class="tab-content" v-if="formVar.tab === 5">
            <BillingSetting />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
/* Constants */

const store = useStore();
const storeVar = computed(() => store.state.Settings);

const formVar = reactive({
  tab: 1
})

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getSettings()
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getSettings() {
  store.dispatch("Settings/getSettings");
}
/* Functions/Methods */

/* Validation */

function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  if (/^[0-9]+$/.test(char)) return true;
  else e.preventDefault();
}
function phnum(e) {
  formVar.phone = e.slice(0, 10)
}

/* Validation */
</script>

<style></style>