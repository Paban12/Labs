<template>
  <div class="single-select">
    <input type="text" ref="inputField" v-model="searchQuery" :placeholder="placeholder" @keydown.enter="selectSearch"
      @click="handleKeyDown" @keyup="startType" />
    <ul class="dropdown-options">
      <li v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)">
        {{ option.name }} {{ selectOption2 }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance, onBeforeMount, onBeforeUnmount, ref } from "vue";
defineEmits(["update:modelValue", "selected"]);
// import {}

const props = defineProps({
  modelValue: {
    type: String,
    defaukt: null,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
  options: {
    type: Array,
    required: true,
  },
  outside: {
    type: Boolean,
    default: true
  },
  selectData: {
    type: Object,
    default: {}
  }
});

let searchQuery = ref("");
let inputField = ref(null);

const instance = getCurrentInstance();

const filteredOptions = computed(() => {
  return props.options.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
const selectOption2 = computed(() => {
  if (props.selectData.name) {
    selectOption(props.selectData)
  }
});
const selectOption = (option) => {
  searchQuery.value = option.name;
  instance.emit("update:modelValue", option.name);
  instance.emit("selected", option);
  focusNextInput();
};
const selectSearch = () => {
  instance.emit("selected", { id: null, name: searchQuery.value });
  focusNextInput();
};
const startType = (event) => {
  instance.emit("onType", searchQuery.value);
};
const focusNextInput = () => {
  if (!props.selectData.name) {
    const inputs = document.querySelector("body").querySelectorAll("input");
    const currentIndex = Array.from(inputs).indexOf(inputField.value);
    inputs[currentIndex].parentNode.classList.remove("show-drop");
    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();
      inputs[currentIndex + 1].parentNode.classList.add("show-drop");
    }
  }
};
const handleKeyDown = () => {
  const inputs = document.querySelector("body").querySelectorAll("input");
  const currentIndex = Array.from(inputs).indexOf(inputField.value);
  if (currentIndex >= 0) {
    inputs[currentIndex].parentNode.classList.add("show-drop");
  }
};

// this is if required click outside to display none dropdown-options
onBeforeMount(() => {
  // searchQuery.value = props.modelValue;
  if (props.outside) {
    window.addEventListener("click", handleClickOutside);
  }
});

onBeforeUnmount(() => {
  if (props.outside) {
    window.removeEventListener("click", handleClickOutside);
  }
});

const handleClickOutside = (event) => {
  const clickedElement = event.target;
  const parentClassList = inputField.value.parentNode;
  if (!parentClassList.contains(clickedElement)) {
    parentClassList.classList.remove("show-drop");
  }
};
</script>
