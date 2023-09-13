<template>
  <section class="dr-expertise">
    <form action="" class="form" @submit.prevent="onSubmitDoctor">
      <div class="row">
        <div class="form-item col-16 mb-16">
          <div class="title">Expertise</div>
          <textarea name="" id="" rows="5" v-model="formVar.expertise" placeholder=""></textarea>
          <div class="err-msg" v-if="formVar.submit && nameValid">
              {{ nameValid }}
            </div>

        </div>
        <!-- <div class="form-item col-5 mb-16">
          <div class="title">Associated Hospital</div>
          <textarea name="" id="" rows="5" placeholder=""></textarea>
          <div class="err-msg">Please enter associated hospital</div>
        </div> -->
        <div class="quaTable">
        <div class="table">
        <table>
          <thead>
            <th>Sl no</th>
            <th>Expertise</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in storeVar.doctorExpertise" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.expertise }}</td>
              <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click="DeleteExpertise(item.id)">
                        <img src="/src/assets/images/png/delete.png" alt="" />
                      </div>
                    </div>
                  </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </div>
      <!-- <div class="form-item mb-16">
        <div class="title">Specialization</div>
        <MultiSelect
          :options="specialityOptions"
          :tabs="tab"
          @selected="handleSelectedOption"
          placeholder="Select Specialization"
        />
        <div class="err-msg">Please select specialization</div>
      </div> -->
      <div class="save-btn">
        <button type="submit" class="btn black-btn w-10-r">Save</button>
      </div>
 
    </form>
  </section>
</template>

<script setup>
import moment from "moment";
import { reactive, computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import router from "../../router";
import { useRoute } from "vue-router";

/* Constants */
const store = useStore()
const route = useRoute();
const storeVar = computed(() => store.state.Doctor);
const formVar = reactive({
  expertise:null

})

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  // getDoctor(formVar.limit, formVar.offset, formVar.keyword, formVar.status, formVar.role, formVar.cPage)
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getDoctor(limit, offset, keyword, status, role, cPage) {
  store.dispatch("Doctor/getDoctor", { limit, offset, keyword, status, role, cPage });
}

const onSubmitDoctor = () => {
  if (
    nameValid.value 
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Doctor/addExpertise", {
    expertise:formVar.expertise,
    doctorDetailId:storeVar.value.id,
  });
  formVar.expertise=null
};

function DeleteExpertise(id){
  store.dispatch("Doctor/deleteExpertise", {
    id
  });
}
/* Functions/Methods */

/* Validation */
const nameValid = computed(() => {
  if (!formVar.expertise) {
    return "Please enter expertise!";
  }
});

/* Validation */

</script>

<style>

</style>