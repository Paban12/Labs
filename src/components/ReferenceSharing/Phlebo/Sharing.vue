<template>
  <section class="ref-sharing-page common-list-page">
    <div class="card">
      <div class="heading">
        <div class="title">Default Sharing</div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search By Name" />
            <img src="/src/assets/images/png/search.png" alt="" />
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Type</th>
              <th>Sharing</th>
              <th>Options</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in sharingData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.sharing }}</td>
                <td class="text-center">
                  <div class="option-btns">
                    <div class="" @click.prevent="formVar.editModal = true">
                      <img src="/src/assets/images/png/edit.png" alt="" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data">
          <div>No records Found!</div>
        </div>
        <div class="table-footer">
          <div class="entries">
            Showing <span>0</span> to <span>0</span> of <span>0</span> entries
          </div>
          <div class="pagination">
            <icon-left-double-arrow></icon-left-double-arrow>
            <div class="page">1</div>
            <div class="page active">2</div>
            <div class="page">3</div>
            <icon-right-double-arrow></icon-right-double-arrow>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <Modal
      v-model:show="formVar.editModal"
      class="big-modall"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Satish Sir</div>
        <div class="close-btn" @click.prevent="formVar.editModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="form-item mb-16">
          <div class="title">Sharing</div>
          <input type="number" placeholder="Sharing (₹)" />
        </div>
        <div class="save-btn flex justify-end">
          <button class="btn black-btn w-10-r">Save</button>
        </div>
      </form>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  editModal: false,
});

const sharingData = reactive([
  {
    name: "Rohith Sir",
    type: "Staff",
    sharing: 5,
  },
]);
</script>

<style>
</style>