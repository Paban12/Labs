<template>
  <section class="add-text-page">
    <div class="container">
      <div class="card search-btn-head flex align-center justify-space mb-16">
        <div class="search flex align-center gap-16">
          <div class="text f-w-bold">Custom Translation</div>
          <div class="input">
            <input type="text" placeholder="Search...">
            <!-- <icon-search></icon-search> -->
          </div>
          <div class="no text-small">1-89 of 87</div>
        </div>
        <button class="btn black-btn" @click.prevent="addText.addModal = true">Add new Text</button>
      </div>
      <div class="card">
        <div class="table-outer box-shadow">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>English</th>
              <th>Hindi</th>
              <th>Marathi</th>
              <th>Bengali</th>
              <th>Kanada</th>
              <th>Tamil</th>
              <th>Gujrati</th>
              <th>Malayalam</th>
              <th>Punjabi</th>
              <th class="text-center">Actions</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in textData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.english }}</td>
                <td>{{ item.hindi }}</td>
                <td>{{ item.marathi }}</td>
                <td>{{ item.bengali }}</td>
                <td>{{ item.kanada }}</td>
                <td>{{ item.tamil }}</td>
                <td>{{ item.gujrati }}</td>
                <td>{{ item.malayalam }}</td>
                <td>{{ item.punjabi }}</td>
                <td class="text-center">
                  <div class="option-btns">
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
    <Modal v-model:show="addText.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true"> 
          Add New Text
        </div>
        <div class="close-btn" @click.prevent="addText.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="modal-span text-center text-grey mb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatum.
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">English</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Hindi</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Marathi</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Bengali</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Kanada</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Tamil</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Gujrati</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Malayalam</div>
        <input type="text" placeholder="Text">
      </div>
      <div class="dr-input lang-input mb-10">
        <div class="dr-tag">Punjabi</div>
        <input type="text" placeholder="Text">
      </div>
      <button class="btn black-btn w-100 mt-16">Save</button>
    </Modal>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const addText = reactive({
    confirmModal: false,
    addModal: false,
  })

  const textData = reactive([
    {
      english: 'English',
      hindi: 'Hindi',
      marathi: 'Marathi',
      bengali: 'Bengali',
      kanada: 'Kanada',
      tamil: 'Tamil',
      gujrati: 'Gujrati',
      malayalam: 'Malayalam',
      punjabi: 'Punjabi'
    },
  ])
</script>

<style>

</style>