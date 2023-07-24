<template>
	<div :class="notification ? 'notificationAlert' : 'notificationAlert'">
		<notification-message v-if="notification" :notification="notification" />
	</div>
</template>

<script>
import NotificationMessage from './NotificationMessage.vue';
import { mapState } from 'vuex';
export default {
	components: {
		NotificationMessage,
	},
	computed: mapState(['notification']),
};
</script>

<style>
.notificationAlert {
	position: fixed;
	top: 11%;
	right: 0;
	margin-right: 3px;
	width: 320px;
	z-index: 999;
	animation-duration: 0.3s;
	animation-name: slidein;
}

.notificationAlert1 {
	position: fixed;
	top: 50px;
	right: 0;
	margin-right: 3px;
	width: 320px;
	z-index: 999;
	animation-duration: 5s;
	animation-name: slidein;
}

@media (max-width: 767px) {
	.notifications-list {
		margin-right: 5px;
		width: 250px;
		font-size: 0.9rem;
	}
}

@keyframes slidein {
	from {
		margin-right: -35%;
		width: 320px;
	}

	to {
		margin-right: 3px;
		width: 320px;
	}
}
</style>