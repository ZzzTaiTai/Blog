<template>
	<div id="single-blog">
		<div id="banner">
   <img src="../assets/img/banner1.jpg"> 
  </div>
  <div class="content">
    <section class="content-main-left">
		<h1>{{blog.title}}</h1>
		 <p class="article-times">
          <small>阅读</small>
          <small>作者：USER</small>
          <small>9月10日</small>
          <span v-for="i in blog.categories"><span>{{i}}</span></span>
        </p>
		<article>{{blog.content}}</article>
		




	</section>
		</div>
	</div>
</template>
<script >
	export default{
		name:"single-blog",
		data(){
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			this.$http.get('https://blog-demo-5478d.firebaseio.com/posts/'+this.id+".json")
			.then(function(data) {
				return data.json();
				// console.log("nice");
				// this.blog=data.body;
			})
			.then(function(data){
				this.blog=data;
			})
		}
	}
</script>
<style scoped>
	.article-times{
		width: 300px;
		height: 22px;
		float: right;
		margin-top: 0;
	}
	.content-main-left article{
		margin-top: 30px;
	}
</style>