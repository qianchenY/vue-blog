<template>
	<div id="Header">
		<div class="hd">
			<div class="hd-box box">
				<router-link class="hd-title" to="/" title="">
					<span class="big">
						明夜
					</span>
					<span class="small">
						千辰的个人博客
					</span>
				</router-link>
			</div>
		</div>
		<div class="hd-nav">
			<div class="hd-nav-box box">
				<ul class="hd-nav-list">
					<li class="hd-nav-item">
						<router-link class="current" to="" title="">首页</router-link>
					</li>
					<li class="hd-nav-item" v-for="item in navbar">
						<router-link to="" :title="item.name">{{ item.name }}</router-link>
						<ul class="hd-subnav" v-if="item.child">
							<li class="hd-subnav-item" v-for="citem in item.child">
								<router-link to="" :title="citem.name">{{ citem.name }}</router-link>
							</li>
						</ul>
					</li>
					<div class="clear"></div>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
	name: 'Header',
	data(){
		return {

		}
	},
	computed: {
		...mapState(["navbar"])
	},
	mounted(){
		$(".hd-nav-list li").hover(function(e){
			var _this = $(this),
				$a = _this.children("a"),
				$list = _this.children("ul")
			
			if($list.is(":hidden")){
				$a.addClass("active");
				$list.show();
			}else{
				$a.removeClass("active");
				$list.hide();
			}
		})
	}
}
</script>

<style lang="scss" scoped>
	.hd{
		position: relative;
		z-index: 2;
		background-color: $color;
	}

	.hd-title{
		display: block;
		padding: {
			top: 20px;
			bottom: 30px;
		};
		text-align: center;
		color: white;
		
		.big{		
			position: relative;
			color: #fff;
			font-size: 54px;
			text-shadow: 0 0 1px rgba(66,154,171,0.8);
			letter-spacing: -2px;
			@include transition;
		}

		.small{
			position: relative;
			margin-left: 5px;
			color: #fff;
			font-weight: normal;
			font-size: 24px;
			text-shadow: 0 0 1px rgba(66,154,171,0.8);
			letter-spacing: 1px;
			z-index: 2;			
			@include transition;
		}

		&:hover{
			.big{
				letter-spacing: 10px;
			}

			.small{
				opacity: .5;
			}
		}
	}

	.hd-nav{
		position: relative;
		z-index: 9;
		background-color: $color2;
	}

	.hd-nav-box{
		overflow: inherit;
	}

	.hd-nav-list{
		padding: 5px 0;
	}

	.hd-nav-item{
		position: relative;
		float: left;
		margin: {
			right: 10px;
		};

		>a{
			display: block;
			padding: 10px 15px;
			line-height: 20px;
			@include font-size(16);
			color: white;
		}

		a{
			&:hover{
				background-color: white;
				color: $color2;
			}

			&.active{
				background-color: white;
				color: $color2;
			}

			&.current{
				background-color: white;
				color: $color2;
			}
		}
	}

	.hd-subnav{
		position: absolute;
		top: 100%;
		left: 0;
		background-color: $color2;
		display: none;
		width: 180px;
		padding: 10px;
	}

	.hd-subnav-item{
		a{
			display: block;
			padding: 5px;
			line-height: 20px;
			@include font-size(14);
			color: white;
		}
	}
</style>


