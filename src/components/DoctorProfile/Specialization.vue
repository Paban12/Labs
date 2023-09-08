<template>
  <section class="doctor-specialization-details">
    <form action="" class="form" @submit.prevent="onSubmitDoctor">
      <div class="edu-row">
        <div class="input">
          <div class="title">Specialization Name</div>
          <Select v-model="formVar.speciality" :options="storeVar.specializationData" @selected="handleSelectedOption"
              placeholder="Select Speciality"></Select>
            <div class="err-msg" v-if="formVar.submit && specialityValid">
              {{ specialityValid }}
            </div>
        </div>
        <div class="speTable">
          <div class="table">
          <table>
            <thead>
              <th>Sl no</th>
              <th>Specialization Name</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storeVar.doctorSpecialization" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ item.specialization?.name }}</td>
                <td class="text-center">
                    <div class="option-btns">
                      <div class="" @click="DeleteSpecialization(item.id)">
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

      <div class="add-btn">
        <button class="btn black-btn w-10-r">Add</button>
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
  submit:false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: true,
  speciality: { id: null, name: 'Select Speciality' },

})

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getSpecialization(formVar.limit, formVar.offset, formVar.keyword, formVar.status)
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getSpecialization(limit, offset, keyword, status) {
  store.dispatch("Doctor/getSpecialization", { limit, offset, keyword, status });
}

const onSubmitDoctor = () => {
  if (
    specialityValid.value 
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Doctor/addSpeciality", {
    specializationId:formVar.speciality?.id,
    doctorDetailId:storeVar.value.id,
    data:formVar.speciality,
  });
};

function DeleteSpecialization(id){
  store.dispatch("Doctor/deleteSpeciality", {
    id
  });
}
/* Functions/Methods */

/* Validation */
const specialityValid = computed(() => {
  if (!formVar.speciality.id) {
    return "Please enter speciality!";
  }
});

/* Validation */

</script>

<style></style>