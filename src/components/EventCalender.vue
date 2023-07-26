<template>
  <div class="event-calendar">
    <h2>Event Scheduler</h2>
    <div>
      <input type="date" v-model="inputDate" @change="onDateChange" />
      <button
        type="button"
        v-for="item in typeList"
        :key="item"
        :class="`btn ${typeIndex === item ? 'active' : ''}`"
        @click="onTypeChange(item)"
      >
        {{ item }}
      </button>
    </div>
    <ul :class="typeIndex">
      <li v-for="item in gridList" :key="item.time">
        {{ item.time }}
        <ul>
          <li
            v-for="event in checkKeyInEventList(item.date)"
            :key="event.title"
          >
            {{ event.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import moment from "moment";
import { getCurrentInstance, onBeforeMount, ref } from "vue";

/** Constants **/
const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
  eventList: {
    type: Array,
    required: true,
  },
});

const instance = getCurrentInstance();
const gridList = ref([]);
const inputDate = ref(null);
const typeList = ["Day", "Week", "Month"];
const typeIndex = ref("Day");

let startOfDay = moment(inputDate).startOf(typeIndex.value);
let endOfDay = moment(inputDate).endOf(typeIndex.value);

/** Constants **/

/** Lifecycle/Hooks **/
onBeforeMount(() => {
  inputDate.value = moment(props.date).format("YYYY-MM-DD");

  generateGridList();
});
/** Lifecycle/Hooks **/

/** Functions/Methods **/
const onDateChange = () => {
  instance.emit("update:changeDate", {
    date: inputDate.value,
    type: typeIndex.value,
  });
};

const onTypeChange = (type) => {
  if (type !== typeIndex.value) {
    typeIndex.value = type;
    onDateChange();
    generateGridList();
  }
};

const checkKeyInEventList = (key) => {
  if (key) {
    if (typeIndex.value === "Day") {
      return props.eventList.filter((item) => item.date === key);
    } else {
      return props.eventList.filter(
        (item) =>
          moment(new Date(item.date)).format("YYYY-MM-DD").toString() === key
      );
    }
  }
};

const generateGridList = () => {
  startOfDay = moment(inputDate).startOf(typeIndex.value);
  endOfDay = moment(inputDate).endOf(typeIndex.value);

  // Create an array to store the intervals
  const intervals = [];
  let currentInterval = startOfDay.clone();
  while (currentInterval <= endOfDay) {
    if (typeIndex.value === "Day") {
      intervals.push({
        time: currentInterval.format("HH:mm A"),
        date: currentInterval.format("YYYY-MM-DD hh:mm A"),
      });
      currentInterval.add(5, "minutes");
    }
    if (typeIndex.value === "Week" || typeIndex.value === "Month") {
      intervals.push({
        time:
          typeIndex.value === "Month"
            ? currentInterval.format("DD")
            : currentInterval.format("dddd"),
        date: currentInterval.format("YYYY-MM-DD"),
      });
      currentInterval.add(1, "day");
    }
  }
  gridList.value = intervals;
};

/** Functions/Methods **/

/** Validation **/
/** Validation **/

let events = {
  "00:00 AM": [{ title: "Event 1" }, { title: "Event 2" }],
  "00:15 AM": [{ title: "Event 3" }],
};
</script>

<style lang="scss">
.event-calendar {
  .btn {
    padding: 1px 1px;
    background-color: azure;
  }
  .active {
    background-color: tomato !important;
  }
}
</style>