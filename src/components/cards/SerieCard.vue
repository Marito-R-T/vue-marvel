<script setup lang="ts">

import { onMounted } from 'vue';
import { inject } from 'vue'
const axios = inject('axios')

defineProps<{
  title: String,
  type: String,
  image: String,
  years: Number,
  relatedResources: String,
  id: Number
}>()

const mounted = () => {
  axios.get('v1/public/series', {
    params: {
      titleStartsWith:"Hulk"
    }
  }).then((res: any) => {
    console.log(res)
  })
  
  // Your mounted method logic here
  console.log("holas")
};

onMounted(mounted);

</script>

<template>
  <router-link
		class="event-link"
		:to="`detail/${id}`"
	>
		<div class="event-card">
      <!--<img :src="image" alt="Card image" />-->
      <h2>{{ title }}</h2>
      <p>{{ type }}</p>
      <p>{{ years }}</p>
      <p>{{ relatedResources }}</p>
    </div>
	</router-link>
</template>

<style scoped>
.event-card {
	width: 320px;
	height: auto;
	min-height: 450px;
	background: rgb(60, 62, 68);
	border-radius: 20px;
	overflow: hidden;
	padding: 10px 15px;
	margin-bottom: 24px;
	margin-right: 10px;
	transition: all 0.2s linear;
	cursor: pointer;
	color: white;
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
	margin-top: 5%;
}
.event-card:hover {
	transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
		0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
	margin: 0;
}
.event-link {
	color: black;
	text-decoration: none;
	font-weight: 100;
}
</style>
