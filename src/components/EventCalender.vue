<template>
  <div class="event-calendar-section">
    <div class="top-row">
      <div class="left">
        <div class="date-input">
          <input type="date" v-model="inputDate" @change="onDateChange" />
          <div class="icon">
            <img src="/src/assets/images/icons/calender.svg" alt="">
          </div>
        </div>
        <div class="arrows">
          <div class="icon">
            <icon-left-arrow></icon-left-arrow>
          </div>
          <div class="icon">
            <icon-right-arrow></icon-right-arrow>
          </div>
        </div>
      </div>
      <div class="btns">
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
    </div>
    <div class="calender-content">
      <!-- <div class="days-row days-row-month">
        <ul>
          <li class="list-item"></li>
          <li class="list-item">Mon 19/7</li>
          <li class="list-item">Tue 20/7</li>
          <li class="list-item">Wed 21/7</li>
          <li class="list-item">Thu 22/7</li>
          <li class="list-item">Fri 23/7</li>
          <li class="list-item">Sat 24/7</li>
          <li class="list-item">Sun 25/7</li>
        </ul>
      </div> -->
      <!-- <div class="days-row days-row-day">
        <ul>
          <li class="list-item">Mon 19/7</li>
        </ul>
      </div> -->
      <ul :class="typeIndex" class="main-list">
        <li class="main-list-item" v-for="item in gridList" :key="item.time">
          <div class="main-list-time">{{ item.time }}</div>
          <ul class="sub-list">
            <li
              class="sub-list-item"
              v-for="event in checkKeyInEventList(item.date)"
              :key="event.title"
            >
              {{ event.title }}
              <div class="p-info-card card card1">
                <div class="top">
                  <div class="p-img">
                    <img src="/src/assets/images/png/user.png" alt="">
                  </div>
                  <div class="p-info">
                    <div class="name">Mrs Rekha
                      <div class="edit-btn">
                        <img src="/src/assets/images/png/edit.png" alt="">
                      </div>
                    </div>
                    <div class="about">
                      <span>Female</span>-
                      <span>49 Years</span>-
                      <span>A+</span>
                    </div>
                    <div class="p-id">PID : 189</div>
                    <div class="amt">₹00</div>
                  </div>
                  
                </div>
                <div class="contact-info">
                  <span>
                    <icon-mobile></icon-mobile>
                    +91 8888888888
                  </span>
                  <span>
                    <icon-mail></icon-mail>
                    company@mail.com
                  </span>
                </div>
                <div class="message">
                  <span>Feedback Message</span>
                  <span>Thanks Message</span>
                </div>
                <div class="schedule">
                  <div class="time">10:45 AM For 5 Min</div>
                  <div class="dr">Dr. Self</div>
                </div>
                <div class="data flex gap-5">
                  <strong>Barcode : </strong>
                  <div class="val">206LL68</div>
                  <img src="/src/assets/images/png/printer.png" alt="">
                </div>
                <div class="data flex gap-5">
                  <strong>Collection at : </strong>
                  <div class="val">Lab Address</div>
                </div>
                <div class="data">
                  <strong>Tests : </strong>
                  <div class="val">
                    <div class="list">Fasting Blood Glucose</div>
                    <div class="list">Fasting Blood Glucose</div>
                  </div>
                </div>
                <div class="message">
                  <router-link to="/new-prescription" class="span">Prescription</router-link>
                  <router-link to="/patient/profile" class="span">Profile</router-link>
                </div>
              </div>
            </li>
            <!-- after click more btn -->
            <!-- <div class="more-list-card">
              <div class="icon">
                <icon-cross></icon-cross>
              </div>
              <div class="more-list">
                <div class="more-list-item">
                  xvashshasgxj
                </div>
                <div class="more-list-item">
                  xvashshasgxj
                </div>
                <div class="more-list-item">
                  xvashshasgxj
                </div>
                <div class="more-list-item">
                  xvashshasgxj
                </div>
                <div class="more-list-item">
                  xvashshasgxj
                </div>
              </div>
            </div> -->
            <!-- <div class="date-no-found">
              <div class="no-found-card">
                <img src="/src/assets/images/png/calender.png" alt="image">
                <div class="text">No appointments for the selected date!</div>
              </div>
            </div> -->
          </ul>
        </li>
      </ul>
      <!-- dummy for week -->
      <!-- <div class="week-time">
        <div class="week-time-row">
          <div class="item">00:00 AM</div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">
                Mrs Jyoti
                <div class="p-info-card card card1">
                  <div class="top">
                    <div class="p-img">
                      <img src="/src/assets/images/png/user.png" alt="">
                    </div>
                    <div class="p-info">
                      <div class="name">Mrs Rekha
                        <div class="edit-btn">
                          <img src="/src/assets/images/png/edit.png" alt="">
                        </div>
                      </div>
                      <div class="about">
                        <span>Female</span>-
                        <span>49 Years</span>-
                        <span>A+</span>
                      </div>
                      <div class="p-id">PID : 189</div>
                      <div class="amt">₹00</div>
                    </div>
                  </div>
                  <div class="contact-info">
                    <span>
                      <icon-mobile></icon-mobile>
                      +91 8888888888
                    </span>
                    <span>
                      <icon-mail></icon-mail>
                      company@mail.com
                    </span>
                  </div>
                  <div class="message">
                    <span>Feedback Message</span>
                    <span>Thanks Message</span>
                  </div>
                  <div class="schedule">
                    <div class="time">10:45 AM For 5 Min</div>
                    <div class="dr">Dr. Self</div>
                  </div>
                  <div class="data flex gap-5">
                    <strong>Barcode : </strong>
                    <div class="val">206LL68</div>
                    <img src="/src/assets/images/png/printer.png" alt="">
                  </div>
                  <div class="data flex gap-5">
                    <strong>Collection at : </strong>
                    <div class="val">Lab Address</div>
                  </div>
                  <div class="data">
                    <strong>Tests : </strong>
                    <div class="val">
                      <div class="list">Fasting Blood Glucose</div>
                      <div class="list">Fasting Blood Glucose</div>
                    </div>
                  </div>
                  <div class="message">
                    <router-link to="/new-prescription" class="span">Prescription</router-link>
                    <router-link to="/patient/profile" class="span">Profile</router-link>
                  </div>
                </div>
              </div>
              <div class="sub-list-item">
                Mrs Jyoti
              </div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
        </div>
        <div class="week-time-row">
          <div class="item">00:00 AM</div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">
                Mrs Jyoti
                <div class="p-info-card card card1">
                  <div class="top">
                    <div class="p-img">
                      <img src="/src/assets/images/png/user.png" alt="">
                    </div>
                    <div class="p-info">
                      <div class="name">Mrs Rekha
                        <div class="edit-btn">
                          <img src="/src/assets/images/png/edit.png" alt="">
                        </div>
                      </div>
                      <div class="about">
                        <span>Female</span>-
                        <span>49 Years</span>-
                        <span>A+</span>
                      </div>
                      <div class="p-id">PID : 189</div>
                      <div class="amt">₹00</div>
                    </div>
                  </div>
                  <div class="contact-info">
                    <span>
                      <icon-mobile></icon-mobile>
                      +91 8888888888
                    </span>
                    <span>
                      <icon-mail></icon-mail>
                      company@mail.com
                    </span>
                  </div>
                  <div class="message">
                    <span>Feedback Message</span>
                    <span>Thanks Message</span>
                  </div>
                  <div class="schedule">
                    <div class="time">10:45 AM For 5 Min</div>
                    <div class="dr">Dr. Self</div>
                  </div>
                  <div class="data flex gap-5">
                    <strong>Barcode : </strong>
                    <div class="val">206LL68</div>
                    <img src="/src/assets/images/png/printer.png" alt="">
                  </div>
                  <div class="data flex gap-5">
                    <strong>Collection at : </strong>
                    <div class="val">Lab Address</div>
                  </div>
                  <div class="data">
                    <strong>Tests : </strong>
                    <div class="val">
                      <div class="list">Fasting Blood Glucose</div>
                      <div class="list">Fasting Blood Glucose</div>
                    </div>
                  </div>
                  <div class="message">
                    <router-link to="/new-prescription" class="span">Prescription</router-link>
                    <router-link to="/patient/profile" class="span">Profile</router-link>
                  </div>
                </div>
              </div>
              <div class="sub-list-item">
                Mrs Jyoti
              </div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
          <div class="item">
            <div class="sub-list">
              <div class="sub-list-item">bsvsb</div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
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
const typeList = ["Today", "Day", "Week", "Month"];
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
            : currentInterval.format("ddd"),
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