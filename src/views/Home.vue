<template>
	<div 
		class="home" 
		ref="home"
	
	>
		<!-- <div class="btnWrapper" @click.stop>
			<div 
				v-if="hasStart"
				@click="stop"
			>  
				停止
			</div>
			<div v-else @click="startCount">
				开始
			</div>
		</div> -->

		<div 
			class="time"
			:class="viewMode"
			ref="time"
		>
			{{formatTime}}
		</div>

		<transition  name="slide">
			<div class="settingBoard" v-show="settingBoardShow">
				<input type="text" placeholder="专注时间" v-model="focusTimeInput">
				<input type="text" placeholder="休息时间" v-model="breakTimeInput">
				<button @click="start">开始</button>
			</div>
		</transition>
		
	</div>
</template>

<script>
// @ is an alias to /src
	import { formatSeconds } from "../utils";
	import { DISABLED, ENABLED, DIGIT, } from "../constant";
	import BScroll from "better-scroll";

	const MAX_TIME = localStorage.breakTime || 25*60;
	// const MAX_TIME = 10;
	
	export default {
		name: "Home",
		components: {},

		created(){
			this.$nextTick(()=>{
				this.initScroll();
			})
			
		},

		watch: {
			focusTimeInput(v){
				localStorage.focusTimeInput = v;
				
			},
			breakTimeInput(v){
				localStorage.breakTimeInput = v;
			},

		},
		data(){
			return({
				lightMode: localStorage.lightMode,
				time: (localStorage.focusTimeInput || 25)*60,
				hasStart: false,
				settingBoardShow: false, // 设置面板
				focusTimeInput: localStorage.focusTimeInput || 25, // 专注时间，默认为25分钟
				breakTimeInput: localStorage.breakTimeInput || 5, // 休息时间，默认为5分钟
				viewMode: localStorage.viewMode || DIGIT, // 视图模式
				scroll: null,
				focus: true, // 当前是专注还是休息

			})
		},

		computed: {
			formatTime: vm => {
				document.title = formatSeconds(vm.time);

				return formatSeconds(vm.time);
			},
			focusTime: vm => vm.focusTimeInput * 60,
			breakTime: vm => vm.breakTimeInput * 60,


		},

		methods: {
			switchLightMode(){
				console.log(this.lightMode);
				const lightMode = this.lightMode === DISABLED ? ENABLED : DISABLED;
				this.lightMode = lightMode;
				console.log(this.lightMode);
				localStorage.setItem("lightMode", lightMode);
			},
			start(){
				if(this.hasStart) return;
				this.hasStart = true;
				this.time = this.focusTime;
				this.timer = setInterval(() => {
					if(this.time <= 0){
						// this.reset()
						this.switch();
					}else{
						
						this.time --;
					}
				}, 1000);
			},

			stop(){
				this.reset();
			},
			switch(){
				if(this.focus){
					this.time = this.breakTime;
				}else{
					this.time = this.focusTime;
				}
				this.focus = !this.focus;
			},
			// 重置
			reset(){
				this.time = MAX_TIME;
				this.hasStart = false;
				clearInterval(this.timer);
			},

			initScroll(){
				// console.log("this.$refs");
				// console.log(this.$refs);
				this.scroll = new BScroll(
					this.$refs.home,
					{
						// movingDirectionX: x => {
						// 	console.log(x)
						// }
					}
				)
				const hooks = this.scroll.scroller.actionsHandler.hooks
				hooks.on('move', ({ deltaX }) => {
					// console.log("deltaX");
					// console.log(deltaX);
					if(deltaX > 0){
						this.settingBoardShow = true;
					}else if(deltaX < 0){
						this.settingBoardShow = false;
					}
				})


			},

		},
	};
</script>


<style scoped>
	.home{
		height: 100vh;
		width: 100vw;
		transition: background .5s, color .5s;
	}
	.DARK {
		background: black;
		color: white;
	}
	.DIGIT {
		background: #b1c8b1;
		color: #020c07;
		filter: blur(2px);
	}
	.LIGHT {
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
		height: 150vh;
		font-size: 20vw;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "DS-DIGIT";
		z-index: 1;
	}


	.settingBoard {
		z-index: 999;
		width: 30vw;
		height: 100vh;
		background: rgba(255, 255, 255, 0.8);
		position: fixed;
		left: 0;
		top: 0;
		box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.settingBoard .hide {

	}

	.slide-enter-active {
		transition: all .5s ease;
	}
	.slide-leave-active {
		transition: all .3s ease;
	}
	.slide-enter {
		transform: translateX(-30vw);
		/* opacity: 0; */
	}
	.slide-leave-to {
		transform: translateX(-30vw);
		/* opacity: 0; */
	}
</style>