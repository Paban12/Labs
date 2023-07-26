<template>
  <div>
    <event-time
      :date="formVar.date"
      :eventList="data"
      @update:changeDate="onDateChange($event)"
    ></event-time>
  </div>
</template>

<script setup>
import moment from "moment";
import { reactive } from "vue";
import EventTime from "../components/EventCalender.vue";

const data = [
  {
    id: 3,
    title: "asdas",
    date: "2023-07-26 07:25 PM",
    patient: {
      id: 1,
      name: "ajk",
    },
  },
  {
    id: 1,
    title: "alsndlkasd",
    date: "2023-07-26 07:25 PM",
    patient: {
      id: 1,
      name: "ajk",
    },
  },
  {
    id: 2,
    title: "asndkalsdnsd",
    date: "2023-07-25 07:25 PM",
    patient: {
      id: 1,
      name: "asdasinwd",
    },
  },
  {
    id: 1,
    title: "asdas",
    date: "2023-07-30 07:25 PM",
    patient: {
      id: 1,
      name: "asdsad",
    },
  },
  {
    id: 1,
    title: "lajsdlkasd",

    date: "2023-07-26 07:25 PM",
    patient: {
      id: 1,
      name: "Ainimdd",
    },
  },
  {
    id: 1,
    title: 'asdas',
    date: "2023-07-27 07:25 PM",
    patient: {
      id: 1,
      name: "ASdasd",
    },
  },
];

const formVar = reactive({
  date: new Date(),
  fromDate: moment().format("YYYY-MM-DD"),
  toDate: moment().format("YYYY-MM-DD"),
});

const onDateChange = (date) => {
  console.log(date);
};
</script>