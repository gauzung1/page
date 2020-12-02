<template>
	<div 
		class="home" 
		:class="{'lightMode': lightMode, }" 
		@click="lightMode=!lightMode">
		<div class="btnWrapper" @click.stop>
			<div 
				v-if="hasStart"
				@click="stop"
			>  
				停止
			</div>
			<div v-else @click="startCount">
				开始
			</div>
		</div>

		<div class="time">
			{{formatTime}}
		</div>
		
	</div>
</template>

<script>
// @ is an alias to /src
	import { formatSeconds } from "../utils";

	const MAX_TIME = 30*60;
	
	export default {
		name: "Home",
		components: {},

		data(){
			return({
				lightMode: false,
				time: MAX_TIME,
				hasStart: false,
			})
		},

		computed: {
			formatTime: vm => formatSeconds(vm.time)

		},

		methods: {
			startCount(){
				this.hasStart = true;
				this.timer = setInterval(() => {
					if(this.time <= 0){
						this.hasStart = false;
						clearInterval(this.timer);
					}else{
						
						this.time --;
					}
				}, 1000);
			},

			stop(){
				this.time = MAX_TIME;
				this.hasStart = false;
				clearInterval(this.timer);
			}
		},
	};
</script>


<style scoped>
	.darkMode, .home{
		background: black;
		color: white;
		height: 100vh;
		width: 100vw;
		transition: background .5s, color .5s;
	}
	.lightMode {
		background: white;
		color: black;
	}

	.btnWrapper {
		position: fixed;
		right: 2vw;
		top: 2vh;
	}

	.time {
		width: 100%;
		height: 100%;
		font-size: 20vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>