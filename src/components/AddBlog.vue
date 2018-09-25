<template>
  <div class="add-blog">
  <form v-if="!submmited">
  <label>博客</label>
  <input type="text" name="title" v-model="blog.title">
  <p>
  <label>博客内容</label>
  <textarea v-model="blog.content"></textarea>
  </p>
  <div id="checkboxs">
    <label>Vue</label>
    <input type="checkbox" name="" value="Vue" v-model="blog.categories">
    <label>Python</label>
    <input type="checkbox" name="" value="Python" v-model="blog.categories">
    <label>Js</label>
    <input type="checkbox" name="" value="Js" v-model="blog.categories">
    <label>HTML+CSS</label>
    <input type="checkbox" name="" value="HTML+CSS" v-model="blog.categories">
</div>
    <select v-model="blog.author">
      <option v-for="author in authors">
        {{author}}
      </option>
    </select>
    <button v-on:click.prevent="post">添加博客</button>
  </form>
<hr>
<div v-if="submmited">
  <h3>发布成功</h3>
</div>
<div id="xs">

  <h3>标题：{{blog.title}}</h3>
  <p>内容：{{blog.content}}</p>
  <p v-for="category in blog.categories">{{category}}</p>
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
      this.$http.post("http://jsonplaceholder.typicode.com/posts",{
        title:this.blog.title,
        body:this.blog.content,
        userId:1
      })
      .then(function(data){
        console.log(data);
        this.submmited=true
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin:0 auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin:20px 0 20px; 
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;

}
textarea{
  height: 200px;
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

</style>
