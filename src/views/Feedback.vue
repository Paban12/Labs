<template>
  <section class="feedback-page">
    <div class="container">
      <div class="card">
        <div class="card-header">Feedback's</div>
        <div class="card-body">
          <div class="top-heading mb-16">
            <div class="select-dropdown">
              <select name="" id="">
                <option value="">Diagnostic Feedback</option>
                <option value="">Doctor Feedback</option>
                <option value="">Online Consult Feedback</option>
              </select>
            </div>
            <div class="dr-name">Dr. Rohith</div>
          </div>
          <div class="tabs mb-16">
            <div
              class="tab"
              @click.prevent="feedback.tab = 1"
              :class="feedback.tab === 1 ? 'active' : ''"
            >
              <div class="title">All Feedback</div>
            </div>
            <div
              class="tab"
              @click.prevent="feedback.tab = 2"
              :class="feedback.tab === 2 ? 'active' : ''"
            >
              <div class="title">Replied Feedback</div>
            </div>
            <div
              class="tab"
              @click.prevent="feedback.tab = 3"
              :class="feedback.tab === 3 ? 'active' : ''"
            >
              <div class="title">Not Replied Feedback</div>
            </div>
            <div
              class="tab"
              @click.prevent="feedback.tab = 4"
              :class="feedback.tab === 4 ? 'active' : ''"
            >
              <div class="title">Positive Feedback</div>
            </div>
            <div
              class="tab"
              @click.prevent="feedback.tab = 5"
              :class="feedback.tab === 5 ? 'active' : ''"
            >
              <div class="title">Negative Feedback</div>
            </div>
            <div
              class="tab"
              @click.prevent="feedback.tab = 6"
              :class="feedback.tab === 6 ? 'active' : ''"
            >
              <div class="title">Published Feedback</div>
            </div>
            <div
              class="tab"
              @click.prevent="feedback.tab = 7"
              :class="feedback.tab === 7 ? 'active' : ''"
            >
              <div class="title">Blocked Feedback</div>
            </div>
          </div>
          <div class="tab-content" v-if="feedback.tab === 1">
            <div class="search-header">
              <div class="title">Patient Experience</div>
              <div class="search-select">
                <div class="searchbar">
                  <input type="text" placeholder="Search By Feedback" />
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Chat</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="feedback-content">
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/rating.png" alt="">
                </div>
                <div class="text">(0 Recommended)</div>
              </div>
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/star2.png" alt="">
                </div>
                <div class="text">(0 Reviews)</div>
              </div>
              <div class="feed-list">
                <div class="list">Diagnostic Hygiene</div>
                <div class="list">Staff Politeness</div>
                <div class="list">Ambience & Amenities</div>
                <div class="list">Sample & Report</div>
                <div class="list">Value For Money</div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="feedback.tab === 2">
            <div class="search-header">
              <div class="title">Patient Experience</div>
              <div class="search-select">
                <div class="searchbar">
                  <input type="text" placeholder="Search By Feedback" />
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Chat</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="feedback-content">
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/rating.png" alt="">
                </div>
                <div class="text">(0 Recommended)</div>
              </div>
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/star2.png" alt="">
                </div>
                <div class="text">(0 Reviews)</div>
              </div>
              <div class="feed-list">
                <div class="list">Diagnostic Hygiene</div>
                <div class="list">Staff Politeness</div>
                <div class="list">Ambience & Amenities</div>
                <div class="list">Sample & Report</div>
                <div class="list">Value For Money</div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="feedback.tab === 3">
            <div class="search-header">
              <div class="title">Patient Experience</div>
              <div class="search-select">
                <div class="searchbar">
                  <input type="text" placeholder="Search By Feedback" />
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Chat</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="feedback-content">
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/rating.png" alt="">
                </div>
                <div class="text">(0 Recommended)</div>
              </div>
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/star2.png" alt="">
                </div>
                <div class="text">(0 Reviews)</div>
              </div>
              <div class="feed-list">
                <div class="list">Diagnostic Hygiene</div>
                <div class="list">Staff Politeness</div>
                <div class="list">Ambience & Amenities</div>
                <div class="list">Sample & Report</div>
                <div class="list">Value For Money</div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="feedback.tab === 4">
            <div class="search-header">
              <div class="title">Patient Experience</div>
              <div class="search-select">
                <div class="searchbar">
                  <input type="text" placeholder="Search By Feedback" />
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Chat</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="feedback-content">
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/rating.png" alt="">
                </div>
                <div class="text">(0 Recommended)</div>
              </div>
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/star2.png" alt="">
                </div>
                <div class="text">(0 Reviews)</div>
              </div>
              <div class="feed-list">
                <div class="list">Diagnostic Hygiene</div>
                <div class="list">Staff Politeness</div>
                <div class="list">Ambience & Amenities</div>
                <div class="list">Sample & Report</div>
                <div class="list">Value For Money</div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="feedback.tab === 5">
            <div class="search-header">
              <div class="title">Patient Experience</div>
              <div class="search-select">
                <div class="searchbar">
                  <input type="text" placeholder="Search By Feedback" />
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Chat</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="feedback-content">
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/rating.png" alt="">
                </div>
                <div class="text">(0 Recommended)</div>
              </div>
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/star2.png" alt="">
                </div>
                <div class="text">(0 Reviews)</div>
              </div>
              <div class="feed-list">
                <div class="list">Diagnostic Hygiene</div>
                <div class="list">Staff Politeness</div>
                <div class="list">Ambience & Amenities</div>
                <div class="list">Sample & Report</div>
                <div class="list">Value For Money</div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="feedback.tab === 6">
            <div class="search-header">
              <div class="title">Patient Experience</div>
              <div class="search-select">
                <div class="searchbar">
                  <input type="text" placeholder="Search By Feedback" />
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Chat</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="feedback-content">
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/rating.png" alt="">
                </div>
                <div class="text">(0 Recommended)</div>
              </div>
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/star2.png" alt="">
                </div>
                <div class="text">(0 Reviews)</div>
              </div>
              <div class="feed-list">
                <div class="list">Diagnostic Hygiene</div>
                <div class="list">Staff Politeness</div>
                <div class="list">Ambience & Amenities</div>
                <div class="list">Sample & Report</div>
                <div class="list">Value For Money</div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="feedback.tab === 7">
            <div class="search-header">
              <div class="title">Patient Experience</div>
              <div class="search-select">
                <div class="searchbar">
                  <input type="text" placeholder="Search By Feedback" />
                  <img src="/src/assets/images/png/search.png" alt="" />
                </div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Chat</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="feedback-content">
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/rating.png" alt="">
                </div>
                <div class="text">(0 Recommended)</div>
              </div>
              <div class="data">
                <div class="img">
                  <img src="/src/assets/images/png/star2.png" alt="">
                </div>
                <div class="text">(0 Reviews)</div>
              </div>
              <div class="feed-list">
                <div class="list">Diagnostic Hygiene</div>
                <div class="list">Staff Politeness</div>
                <div class="list">Ambience & Amenities</div>
                <div class="list">Sample & Report</div>
                <div class="list">Value For Money</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const feedback = reactive({
  tab: 1,
})
</script>

<style>

</style>