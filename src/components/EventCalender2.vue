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
      <ul :class="typeIndex" class="main-list">
        <li class="main-list-item" v-for="item in gridList" :key="item.time">
          <div class="main-list-time">{{ item.time }}</div>
          <ul class="sub-list">
            <li
              class="sub-list-item hover-trigger"
              v-for="event in checkKeyInEventList(item.date)"
              :key="event.title"
              @mouseover="showTooltip"
              @mouseleave="hideTooltip"
              ref="button"
            >
              <div class="sub-list-item-title">{{ event.title }}</div>
              <div 
                class="p-info-card card card1 custom-tooltip"
                :class="{ active: isTooltipActive }"
                :style="tooltipStyle"
                ref="tooltip"
                @mouseenter="showTooltip"
                @mouseleave="hideTooltip"
              >
                <div class="top">
                  <div class="p-img">
                    <img src="/src/assets/images/png/user.png" alt="">
                  </div>
                  <div class="p-info">
                    <div class="name">Mrs Rekhaaaa
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
                  <router-link to="/patient/lab-report" class="span">Lab</router-link>
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
                    <router-link to="/patient/lab-report" class="span">Lab</router-link>
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
                    <router-link to="/patient/lab-report" class="span">Lab</router-link>
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

/////////////////////////Toolip////////////////////

const isTooltipActive = ref(false);

const showTooltip = () => {
  isTooltipActive.value = true;
  updateTooltipPosition();
};

const hideTooltip = () => {
  isTooltipActive.value = false;
};

const updateTooltipPosition = () => {
  const parentContainer = document.querySelector('.calender-content');
  const button = $refs.button;
  const tooltip = $refs.tooltip;

  const parentRect = parentContainer.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  // Calculate the position of the tooltip based on available space
  const tooltipStyle = {
    display: 'block',
  };

  // Check for available space within the parent container
  const spaceAbove = buttonRect.top - parentRect.top;
  const spaceBelow = parentRect.bottom - buttonRect.bottom;
  const spaceLeft = buttonRect.left - parentRect.left;
  const spaceRight = parentRect.right - buttonRect.right;

  // Determine the best direction to display the tooltip based on available space
  if (spaceAbove >= tooltipRect.height && spaceAbove >= spaceBelow) {
    // Display above the button
    tooltipStyle.top = `${buttonRect.top - parentRect.top - tooltipRect.height}px`;
    tooltipStyle.left = `${buttonRect.left - parentRect.left}px`;
  } else if (spaceBelow >= tooltipRect.height) {
    // Display below the button
    tooltipStyle.top = `${buttonRect.bottom - parentRect.top}px`;
    tooltipStyle.left = `${buttonRect.left - parentRect.left}px`;
  } else if (spaceLeft >= tooltipRect.width && spaceLeft >= spaceRight) {
    // Display to the left of the button
    tooltipStyle.top = `${buttonRect.top - parentRect.top}px`;
    tooltipStyle.left = `${buttonRect.left - parentRect.left - tooltipRect.width}px`;
  } else {
    // Display to the right of the button
    tooltipStyle.top = `${buttonRect.top - parentRect.top}px`;
    tooltipStyle.left = `${buttonRect.right - parentRect.left}px`;
  }

  // Apply the calculated style
  Object.assign(tooltip.style, tooltipStyle);
};

/////////////////////////Tooltip/////////////////////

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

.calender-content {
  position: relative;
  // width: 1000px;
  // height: 1000px;
}

.hover-trigger {
  // position: relative;
  // cursor: pointer;
  // padding: 10px 20px;
  // background-color: #007bff;
  // color: #fff;
  // border: none;
}

.custom-tooltip {
  position: absolute;
  // background-color: #f0f0f0;
  // padding: 10px;
  // border: 1px solid #ccc;
  // max-width: 500px;
  // text-align: center;
  display: none;
}

.custom-tooltip.active {
  display: block;
}
</style>