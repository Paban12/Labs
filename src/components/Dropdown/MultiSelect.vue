<template>
  <div class="multi-select">
    <div class="tab-input">
      <div class="tabs">
        <span v-for="(tab, index) in list" :key="index" class="tab">
          {{ tab }}
          <button @click.prevent="removeTab(tab, index)">⤫</button>
        </span>
      </div>
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="placeholder" 
        @input="performSearch"
        @focus="performSearch"
        @keydown.enter.prevent="handleTabCreation"
        @keyup.enter="clearTabCreation"
        v-click-outside="closeOptions"
      />
    </div>
    <ul class="search-results" v-if="showDropdown && searchResults.length > 0">
      <li
        v-for="result in searchResults"
        :key="result.id"
        @click="addTab(result)"
      >
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref } from "vue";

defineEmits(["update:modelValue", "selected", "specific", "removed"]);
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  tabs: {
    type: Array,
    default: [],
  },
  placeholder: {
    type: String,
    default: "Select",
  },
});

let searchQuery = ref("");
let list = ref([]);
let searchResults = ref([]);
let showDropdown = ref(false);
const instance = getCurrentInstance();

const handleTabCreation = () => {
  if (searchQuery.value !== "") {
    list.value.push(searchQuery.value);
    instance.emit("specific", { id: null, name: searchQuery.value });
    instance.emit("selected", list.value);
    searchQuery.value = "";
    showDropdown.value = false;
  }
};
const clearTabCreation = () => {
  searchQuery.value = "";
};
const removeTab = (tab, index) => {
  instance.emit("removed", tab);
  list.value.splice(index, 1);
  instance.emit("selected", list.value);
};
const addTab = (result) => {
  list.value.push(result.name);
  instance.emit("specific", result);
  instance.emit("selected", list.value);
  searchQuery.value = "";
  searchResults.value = [];
  showDropdown.value = false;
};
const performSearch = () => {
  const searchTerm = searchQuery.value.toLowerCase();
  searchResults.value = props.options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm)
  );
  showDropdown.value = true;
};
const closeOptions = () => {
  showDropdown.value = false;
};
</script>

<style></style>
