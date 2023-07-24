<template>
  <section class="medicine-list-table">
    <div class="container">
      <div class="card search-btn-head flex align-center justify-space mb-16">
        <div class="search flex align-center gap-16">
          <div class="text f-w-bold">Medicine Database</div>
          <div class="input">
            <input type="text" placeholder="Search...">
            <!-- <icon-search></icon-search> -->
          </div>
          <div class="no text-small">1-89 of 89</div>
        </div>
        <router-link to="/add-medicine" class="btn black-btn">Add new Medicine</router-link>
      </div>
      <div class="card">
        <div class="table-outer box-shadow">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Medicine Name</th>
              <th>generic Name</th>
              <th>Dosage</th>
              <th>Timing</th>
              <th>When</th>
              <th>Frequency</th>
              <th>Duration</th>
              <th>Notes</th>
              <th class="text-center">Actions</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in textData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.med_name }}</td>
                <td>{{ item.gener }}</td>
                <td>{{ item.dosage }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.when }}</td>
                <td>{{ item.freq }}</td>
                <td>{{ item.duration }}</td>
                <td>{{ item.notes }}</td>
                <td class="text-center">
                  <div class="option-btns">
                    <router-link to="/" class="">
                      <img src="/src/assets/images/png/star2.png" alt="">
                    </router-link>
                    <router-link to="/" class="edit-icon">
                      <img src="/src/assets/images/png/edit.png" alt="">
                    </router-link>
                    <div class="pointer" @click.prevent="addText.confirmModal = true">
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
    <Modal v-model:show="addText.confirmModal" class="confirm-modal">
      <h4>
        Are you sure want to Delete
      </h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="addText.confirmModal = false">Cancel</button>
        <button class="btn confirm-btn">Confirm</button>
      </div>      
    </Modal>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const addText = reactive({
    confirmModal: false,
  })

  const textData = reactive([
    {
      med_name: 'Corosine',
      gener: 'Generic',
      dosage: '1-0-1',
      time: '12:30',
      when: 'After meal',
      freq: '15 Days',
      duration: '1 Month',
      notes: 'You need to take rest'
    },
  ])
</script>

<style>

</style>