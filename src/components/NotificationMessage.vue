<template>
  <div
    :class="typeClass"
    class="notiAlert alert-dismissible fade show"
    role="alert"
  >
    <div class="text-success">{{ notification.message }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['notification'],

  data() {
    return {
      timeout: null
    }
  },

  computed: {
    typeClass() {
      return `notiAlert-${this.notification.type}`
    }
  },

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification)
    }, 5000)
  },

  beforeUnmount() {
    clearTimeout(this.timeout)
  },

  methods: mapActions(['removeNotification'])
}
</script>
<style>

.notiAlert {
  padding: 15px;
  border: 1px solid transparent;
  border-top-left-radius: 20px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 2px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.11);
}

.notiAlert h4 {
  margin-top: 0;
  color: inherit;
}

.notiAlert .alert-link {
  font-weight: bold;
}

.notiAlert > p,
.notiAlert > ul {
  margin-bottom: 0;
}

.notiAlert > p + p {
  margin-top: 5px;
}

.alert-dismissable {
  padding-right: 35px;
}

.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.notiAlert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}

.notiAlert-success hr {
  border-top-color: #c9e2b3;
}

.notiAlert-success .alert-link {
  color: #2b542c;
}

.notiAlert-danger {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
}

.notiAlert-danger hr {
  border-top-color: #e4b9c0;
}

.notiAlert-danger .alert-link {
  color: #843534;
}

.notiAlert .sign {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  width: 25px;
  display: inline-block;
}

.alert-white {
  background-image: linear-gradient(to bottom, #ffffff, #f9f9f9);
  border-top-color: #d8d8d8;
  border-bottom-color: #bdbdbd;
  border-left-color: #cacaca;
  border-right-color: #cacaca;
  color: #404040;
  padding-left: 20px;
  position: relative;
}

.alert-white .icon {
  text-align: center;
  width: 5px;
  height: 104%;
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid #bdbdbd;
}

.alert-white.rounded {
  border-radius: 3px;
  -webkit-border-radius: 3px;
}

.alert-white.rounded .icon {
  border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
}

.alert-white .icon i {
  font-size: 20px;
  color: #fff;
  left: 12px;
  margin-top: -10px;
  position: absolute;
  top: 50%;
}

.alert-white.notiAlert-danger .icon,
.alert-white.notiAlert-danger .icon:after {
  border-color: #ca452e;
  background: #da4932;
}

.alert-white.notiAlert-success .icon,
.alert-white.notiAlert-success .icon:after {
  border-color: #54a754;
  background: #60c060;
}
</style>