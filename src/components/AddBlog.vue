<template>
  <div class="add-blog">
  

<div id="banner">
   <img src="../assets/img/banner1.jpg"> 
  </div>
  <div class="content">
    <section class="content-main-left">
      
    <form v-if="!submmited">
      <h1>发布博客</h1>
      <P>
  <!-- <label>标题</label> -->
  <input type="text" name="title" placeholder="直接在这里写标题" v-model="blog.title">
</P>
  <P>
  <!-- <label>博客内容</label> -->
  <textarea placeholder="把内容写进来" v-model="blog.content"></textarea>
  </P>
  <div id="checkboxs">
    <span>标签：</span>
    <label>Vue</label>
    <input type="checkbox" name="" value="Vue"  v-model="blog.categories">
    <label>Python</label>
    <input type="checkbox" name="" value="Python" v-model="blog.categories">
    <label>Js</label>
    <input type="checkbox" name="" value="Js" v-model="blog.categories">
    <label>HTML+CSS</label>
    <input type="checkbox" name="" value="HTML+CSS" v-model="blog.categories">
    </div>
    <div style="display: inline;">
    <label>作者：</label>
    <select v-model="blog.author">
      <option v-for="author in authors">
        {{author}}
      </option>
    </select>
  </div>
    <button v-on:click.prevent="post">添加博客</button>
  </form>

<div class="suceess" v-if="submmited">
  <h3>发布成功</h3>
</div>

      

</section>
   </div>
 </div>







</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
     blog:{
      title:"",
     content:"",
     categories:[],
     author:""
     },
     authors:["Tim","Hello","Tai"],
     submmited:false
    }
  },
  methods:{
    post:function(){
      this.$http.post("https://blog-demo-5478d.firebaseio.com/posts.json",this.blog)
      .then(function(data){
        console.log(data);
        alert("nice");
        this.submmited=true;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
  width: 75%;
  margin: 0 auto;
}
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin:0 auto;
  max-width: 600px;
  padding: 20px;
}
label{

  margin:20px 0 20px; 
}
input[type="text"],textarea{
  display: block;
  width: 100%;
  padding: 10px;
  letter-spacing: 1px;

}
textarea{
 min-height: 270px;
 font-size: 15px;
 letter-spacing: 1px;

}
#checkboxs {
  margin-top: 3%;
}
#checkboxs label {
  display: inline-block;
  margin-top: 0;
}
#checkboxs input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px auto;
  border-radius: 4px;
  padding: 14px;
  font-size: 18px;
  background: crimson;
  color: #fff;
  border:0 ;
  text-align: center;
}
#xs{
  padding: 10px;
  border: 1px solid #666;
}
.suceess{
  margin:0 auto;
  text-align: center;
  height: 600px;
}
</style>
