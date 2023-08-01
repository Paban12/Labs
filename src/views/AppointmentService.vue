<template>
  <section class="appointment-service-page">
    <div class="container">
      <div class="card flex align-center justify-space mb-16">
        <div class="search flex align-center gap-16">
          <div class="text f-w-bold">Appointment Services</div>
        </div>
        <div class="btns flex align-center gap-16">
          <div class="btn black-btn" @click.prevent="notes.addModal = true">Add New</div>
        </div>
      </div>
      <div class="card">
        <div class="table-outer box-shadow">
          <table class="table">
            <thead>
              <th>Sr. No.</th>
              <th>Code</th>
              <th>Service ID</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>GST</th>
              <th>Priority</th>
              <th class="text-center">Actions</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in textData" :key="item">
                <td>{{ index + 1 }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.service_id }}</td>
                <td>{{ item.service_name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.gst }}</td>
                <td>{{ item.priority }}</td>
                <td class="text-center">
                  <div class="option-btns">
                    <router-link to="/" class="edit-icon">
                      <img src="/src/assets/images/png/edit.png" alt="">
                    </router-link>
                    <div class="pointer" @click.prevent="notes.confirmModal = true">
                      <img src="/src/assets/images/png/delete.png" alt="">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data">
          <div >No records Found!</div>
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
    <Modal v-model:show="notes.confirmModal" class="confirm-modal">
      <h4>
        Are you sure want to Delete
      </h4>
      <div class="btns">
        <button class="btn grey-btn cancel-btn" @click.prevent="notes.confirmModal = false">Cancel</button>
        <button class="btn confirm-btn">Confirm</button>
      </div>      
    </Modal>
    <Modal v-model:show="notes.addModal" class="" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true"> 
          Add Appointment Service
        </div>
        <div class="close-btn" @click.prevent="notes.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form">
        <div class="row">
          <div class="form-item col-5 mb-16">
            <div class="title">Code</div>
            <input type="number" placeholder="Enter Code">
            <div class="err-msg">Please enter code</div>
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">Service Code</div>
            <input type="number" placeholder="Enter Service Code">
            <div class="err-msg">Please enter service code</div>
          </div>
        </div>
        <div class="row">
          <div class="form-item col-5 mb-16">
            <div class="title">Charges / Fee</div>
            <input type="number" placeholder="Enter Charges">
            <div class="err-msg">Please enter charges</div>
          </div>
          <div class="form-item col-5 mb-16">
            <div class="title">GST (%)</div>
            <input type="number" placeholder="Enter GST (%)">
            <div class="err-msg">Please enter GST (%)</div>
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Service Type</div>
          <SingleSelect
            v-model="notes.service"
            :options="serviceOptions"
            @selected="handleSelectedOption"
            placeholder="Select"
          ></SingleSelect>
          <div class="err-msg">Please select service type</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Priority Type</div>
          <SingleSelect
            v-model="notes.priority"
            :options="priorityOptions"
            @selected="handleSelectedOption"
            placeholder="Select"
          ></SingleSelect>
          <div class="err-msg">Please select priority type</div>
        </div>
        <button class="btn black-btn w-100 mt-16">Add</button>
      </form>
    </Modal>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  const notes = reactive({
    confirmModal: false,
    addModal: false,
    priority: "",
    service: "",
  })

  const textData = reactive([
    {
      code: '89909',
      service_id: '1245',
      service_name: 'consultation',
      price: 2000,
      gst: '18%',
      priority: 'Urgent'
    },
  ])

  const serviceOptions = [
    { id: 1, name: "Service1" },
    { id: 2, name: "Service2" },
  ];
  const priorityOptions = [
    { id: 1, name: "Priority1" },
    { id: 2, name: "priority2" },
  ];
  const handleSelectedOption = (option) => {
    console.log("Selected option:", option);
  };
</script>

<style>

</style>