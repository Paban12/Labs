<template>
  <section class="notes-page">
    <div class="container">
      <div class="card search-btn-head flex align-center justify-space mb-16">
        <div class="search flex align-center gap-16">
          <div class="text f-w-bold">Remembered Medicine Notes</div>
          <div class="input">
            <input type="text" placeholder="Search...">
            <!-- <icon-search></icon-search> -->
          </div>
          <div class="no text-small">1-89 of 89</div>
        </div>
        <div class="btns flex align-center gap-16">
          <div class="btn black-btn" @click.prevent="formVar.addModal = true">Add Note</div>
          <div class="btn clear-btn" @click.prevent="formVar.confirmModal = true">Delete Note</div>
        </div>
      </div>
      <div class="card">
        <div class="table-outer box-shadow">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Medicine Name</th>
              <th>Used Count</th>
              <th>Last Used</th>
              <th class="text-center">Actions</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in textData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.med_name }}</td>
                <td>{{ item.use_count }}</td>
                <td>{{ item.last_use }}</td>
                <td class="text-center">
                  <div class="option-btns">
                    <router-link to="/" class="">
                      <img src="/src/assets/images/png/star2.png" alt="">
                    </router-link>
                    <router-link to="/" class="edit-icon">
                      <img src="/src/assets/images/png/edit.png" alt="">
                    </router-link>
                    <div class="pointer" @click.prevent="formVar.confirmModal = true">
                      <img src="/src/assets/images/png/delete.png" alt="">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot class="no-data">
              <tr>
                <td colspan="10" rowspan="1">No records Found!</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="table-footer">
          <div class="entries">
            Showing <span>0</span> to <span>0</span> of <span>0</span> entries
          </div>
          <div class="pagination">
            <span>First</span>
            <span>Previous</span>
            <div class="page">1</div>
            <span>Next</span>
            <span>Last</span>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="formVar.confirmModal" class="confirm-modal">
      <h4>
        Are you sure want to Delete
      </h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="formVar.confirmModal = false">Cancel</button>
        <button class="btn confirm-btn">Confirm</button>
      </div>
    </Modal>
    <Modal v-model:show="formVar.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">
          Add Note
        </div>
        <div class="close-btn" @click.prevent="formVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="onSubmitNote">
        <div class="form-item mb-16 mt-16">
          <input type="text" v-model="formVar.note" placeholder="Text">
          <div class="err-msg" v-if="formVar.submit && noteValid">{{ noteValid }}</div>
        </div>
        <button type="submit" class="btn black-btn w-100 mt-16">Add</button>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  confirmModal: false,
  addModal: false,
  submit: false,
  note: null,
})

const textData = reactive([
  {
    med_name: 'Corosine',
    use_count: '2 Tabs daily',
    last_use: '15 days ago'
  },
])

/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitNote = () => {
  if (
    noteValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/verifyUser", {
    userId: 10563543453,
    password: 4532453,
  });
};
/* Functions/Methods */

/* Validation */
const noteValid = computed(() => {
  if (!formVar.note) {
    return "Please enter note!";
  }
});

/* Validation */
</script>

<style></style>