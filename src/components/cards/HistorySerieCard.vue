<script setup lang="ts">
import { onMounted } from 'vue';

defineProps<{
	title: String,
	image: String,
	id: Number
}>()

const mounted = () => {
};

onMounted(mounted);

</script>

<template>
  <h1 class="event-link">HISTORY</h1>
	<router-link
    class="event-link"
    :to="`/detail/${id}`"
	>
    <div class="event-card">
      <img :src="image.toString()" alt="Card image" />
      <div class="container-data">
        <span class="middle">
          {{ title }}
        </span>
      </div>
    </div>
	</router-link>
</template>

<style scoped>
.event-link {
	padding: 20px 0px 0px 10px;
}
.middle{
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
	justify-content: center;
}
.container-data {
  width: 80%;
  text-align: center;
  line-height: 100px;
}

.large-text {
	padding: 20px 0px 0px 10px;
	font-size: large;
	width: 100px;
}

.source-tag {
	padding: 0px 0px 0px 10px;
}

.event-card {
	width: 100%;
	height: 100px;
	background: rgb(60, 62, 68);
	border-radius: 20px;
	overflow: hidden;
	transition: all 0.2s linear;
	cursor: pointer;
	color: white;
	padding: 0px 0px 15px 0px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}
.status {
	display: flex;
	justify-content: center;
}
.status-icon-r,
.status-icon-g {
	margin: auto 0;
	height: 0.5rem;
	width: 0.5rem;
	margin-right: 0.375rem;
	background: rgb(214, 61, 46);
	border-radius: 50%;
}
.status-icon-g {
	background: rgb(92 199 12);
}
img {
	max-height: 100px;
  width: 20%;
	border: 2px outset;
	border-color: rgb(124, 124, 124);
}
.event-card > .title {
	margin: 0;
}
</style>

