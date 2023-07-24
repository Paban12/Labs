<template>
  <section class="rating-page">
    <div class="container">
      <div class="rating-card card">
        <div class="clinic-details">
          <div class="c-name">
            Divya Drishiti Doctor Cliic 
          </div>
          <div class="star-info">
            <div class="star">
              <div class="text">3.7</div>
              <icon-star></icon-star>
            </div>
            <div class="text">252 Ratings</div>
          </div>
        </div>
        <form action="" class="form">
          <div class="rate">
              <div class="heading">Rate this product</div>
              <div class="rating">
                <div class="stars">
                  <icon-star
                    v-for="i in 5"
                    :key="i"
                    class="box"
                    @mouseover="hovered(i)"
                    :class="rateVar.hoverItem >= i ? 'fill-red' : ''"
                  >
                  </icon-star>
                </div>
              </div>
            </div>
            <div class="review">
              <div class="heading">Review this product</div>
              <div class="input">
                <div class="title">Title</div>
                <input type="text">
                <div class="err-msg">Please enter title</div>
              </div>
              <div class="input">
                <div class="title">Description</div>
                <textarea name="" id=""></textarea>
                <div class="err-msg">Please enter description</div>
              </div>
            </div>
            <div class="submit-btn">
              <button class="btn black-btn">Submit</button>
            </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const rateVar = reactive({
  hoverItem: 3,
});

// const rates = [{ rate: 'a' }, { rate: 'b' }, { rate: 'c' }, { rate: 'd' }, { rate: 'e' }];

function hovered(num) {
  rateVar.hoverItem = num;
}
</script>

<style>

</style>