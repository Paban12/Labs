<template>
  <section class="staff-permission-page">
    <div class="permission-list">
      <div class="list-item">
        <div class="left">
          <div class="title f-w-bold">Permissions
            <input type="checkbox" v-model="formVar.statusAll" @change="chackedall"/>
          </div>
        </div>
        <div class="right">
          <div class="input">
            Create
            <input type="checkbox" v-model="formVar.statusCreate" @change="chacke('Create')"/>
          </div>
          <div class="input">
            Read
            <input type="checkbox" v-model="formVar.statusRead" @change="chacke('Read')"/>
          </div>
          <div class="input">
            Update
            <input type="checkbox" v-model="formVar.statusUpdate" @change="chacke('Update')"/>
          </div>
          <div class="input">
            Delete
            <input type="checkbox" v-model="formVar.statusDelete" @change="chacke('Delete')"/>
          </div>
        </div>
      </div>
      <div class="list-item" v-for="(item, index) in storeVar.permissiondata" :key="index">
        <div class="left">
          <div class="details">
            <div class="title">{{ item.title }}</div>
            <!-- <div class="text">This permission allows the user to add a new patient in to the system.</div> -->
          </div>
        </div>
        <div class="right">
          <div class="input" v-for="(items, index) in item.userPermission" :key="index">
            <span class="name">{{ items.permission?.name }}</span>
            <input type="checkbox" v-model="items.status">
          </div>
        </div>
      </div>
      <div class="save-btn flex justify-center">
        <button type="button" class="btn black-btn w-50" @click="submit">Save</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from "vue-router"

const store = useStore()
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.Staff);

const formVar = reactive({
  id: null,
  permissionid: null,
  permission: [],
  menu: [],
  statusAll: false,
  statusCreate:false,
  statusRead:false,
  statusDelete:false,
  statusUpdate:false,
});

onBeforeMount(() => {
  if (route.query.id) {
    formVar.id = route.query.id
    loadIdFromUrl()
  }
})

function loadIdFromUrl() {
  store.dispatch('Staff/getPermission', { id: formVar.id })
}
function submit() {
  store.dispatch('Staff/savePermission', { id: formVar.id, menu: storeVar.value.permissiondata })
}

// const 
const chackedall = () => {
  if (formVar.statusAll==true) {
    for (let index = 0; index < storeVar.value.permissiondata.length; index++) {
		const element = storeVar.value.permissiondata[index].userPermission;
		for (let index = 0; index < element.length; index++) {
      formVar.statusCreate=true
      formVar.statusRead=true
      formVar.statusDelete=true
      formVar.statusUpdate=true
			 element[index].status=true;
		}
	}
  } else if(formVar.statusAll==false){
	for (let index = 0; index < storeVar.value.permissiondata.length; index++) {
		const element = storeVar.value.permissiondata[index].userPermission;
		for (let index = 0; index < element.length; index++) {
      formVar.statusCreate=false
      formVar.statusRead=false
      formVar.statusDelete=false
      formVar.statusUpdate=false
			 element[index].status=false;
		}
	}
  }
}

const chacke = (data) => {
  if (formVar.statusCreate || formVar.statusRead ||formVar.statusUpdate || formVar.statusDelete) {
    for (let index = 0; index < storeVar.value.permissiondata.length; index++) {
		const element = storeVar.value.permissiondata[index].userPermission;
		for (let index = 0; index < element.length; index++) {
      let NameElement=element[index].permission.name
      if(NameElement===data){
        element[index].status=true;
      }
		}
	}
  } else if (!formVar.statusCreate || !formVar.statusRead ||
  !formVar.statusUpdate || !formVar.statusDelete) {
	for (let index = 0; index < storeVar.value.permissiondata.length; index++) {
		const element = storeVar.value.permissiondata[index].userPermission;
		for (let index = 0; index < element.length; index++) {
      let NameElement=element[index].permission.name
      if(NameElement===data){
        element[index].status=false;
      }
		}
	}
  }
}
</script>

<style></style>