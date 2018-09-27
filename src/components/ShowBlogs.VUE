 <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!--[if lt IE 9]>
 　　　　<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
　　<![endif]-->
 

<template>

   <div id="show-blogs">
    <!--   <h1>博客总览</h1>
    <input type="text" name="" placeholder="搜索" v-model="search">
    <div v-for="blog in blogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>
        {{blog.body | snippet}}
      </article>
    </div>   -->

<div class="nav-search">
          <label for="search"><span class="fa-search fa-inverse "></span></label>
          <input type="text" name="search" id="search" v-model="search">
          <input type="button" name="search-bt" id="search-bt" value="搜索">
          <!-- <a  class="login-main" id="login-main">登录</a> -->
        </div>
  

 <form action="#" class="login_form">
    <div class="container-1" >
<div>
        <a href="#" title="关闭" class="close "><span class="fa-close "></span></a><br>
   </div>
        <div class="login_div">
            <!--<img src="#" class="logo"><br>
             <label>帐号</label>-->
             <div class="user_input">
            <input type="text" name="user" class="user" placeholder="用户名" maxlength="20" tabindex="1" ></input>
            <span class="user_tips"></span>
            </div>
        
            <!--<label>密码</label>-->
            <div class="pawd_input">
            <input type="password" name="pawd"  class="pawd" placeholder="密码" maxlength="20" tabindex="2" ></input>
            <span class="pawd_tips"></span>
            </div>
         <input type="submit" value="登录" name="login" class="login" tabindex="3"  >

            <!--<span style="padding-left: 10px"><input type="submit" value="注册" name="registe"  tabindex="5" ></span>-->
        </div>
        <div class="r_l_link" >
            <span>没有帐号？<a href="#" class="regist_a">注册</a></span>
        </div>
    </div>

</form>

<form action="#" style="" class="regist_form" method="get"">
    <div class="container-2" >
<div>
        <a href="#" title="关闭" class="close "><span class="fa-close "></span></a><br>
   </div>
        <div class="regist_div">
            <!--<img src="#" class="logo"><br>
             <label>帐号</label>-->
             <div> 
            <input type="text" name="r_user" class="r_user" placeholder="用户名" maxlength="20" tabindex="1" ></input>
            <span class="r_user_tips"></span>
            </div>
            <!--<label>密码</label>-->
            <div class="pawd_input">
            <input type="password" name="r_pawd"  class="r_pawd" placeholder="密码" maxlength="20" tabindex="2" ></input>
            <span class="r_pawd_tips"></span>
            </div>
            <div class="pawd_input">
            <input type="password" name="C_pawd"  class="C_pawd" placeholder="确认密码" maxlength="20" tabindex="3" ></input>
            <span class="C_pawd_tips"></span>
            </div>
             
           <input type="button" value="注册" name="regist" class="regist" tabindex="4" " >

            <!--<span style="padding-left: 10px"><input type="submit" value="注册" name="registe"  tabindex="5" ></span>-->
        </div>
         <div class="r_l_link" >
            <span>已有帐号？<a href="#" class="login_a">登录</a></span>
        </div>
    </div>
</form>






  
    <!-- <header>
      <nav>
        <ul class="nav-li-left">
          <li class="active"><a href="index.html" ><span class="fa fa-home "></span>首页</a></li>
          <li><a href="content.html"><span class="fa-align-right"></span>分类</a></li>
          <li><a href=""><span class="fa-pencil-square-o"></span>发布</a></li>
          <li><a href=""><span class="fa-user"></span>关于</a></li>

        </ul>
       <div class="nav-search">
          <label for="search"><span class="fa-search fa-inverse "></span></label>
          <input type="text" name="search" id="search" v-model="search">
          <input type="button" name="search-bt" id="search-bt" value="搜索">
          <a  class="login-main" id="login-main">登录</a>
        </div>
          
        //<ul class="nav-li-right">
          //<li ><a href="">退出</a></li>
         // <li ><a href="">yonghuming123</a></li>
          //<li><img class="u-logo" src="static/img/
          //u-logo.jpg"></li>
          
          
          
        </ul> 
        
      </nav>
    </header> -->

  <section class="first-section " id="first-section">
    <div class="first-div">
    <div class="inner">
      <h1>Hello Blog</h1>
      <p>WWF's mission is to stop the degradation of our planet's natural </p>
      <button type="button">了解一下</button>
      <div class="more"><strong>更多</strong><br/>
        <span><a href="#banner" class="fa-hand-o-down fa-2x "
      style="color: #fff"></a></span>
      </div>


    </div>
    </div>
  </section>





  <div id="banner">
   <img src="../assets/img/banner1.jpg"> 
  </div>
  <div class="content">
    <section class="content-main-left">
      <article id="show-blogs-hideen">
       <p class="article-content">
         没查询到相关的内容！<br>
         请尝试其他的关键词！
        </p>
        

      </article> 
       <article v-for="blog in filteredBlogs" id="show-blogs">
        <router-link v-bind:to ="'/blog/' + blog.id"><p class="article-title">{{blog.title}}</p></router-link>
        <p class="article-content">
          {{blog.content }}
        </p>
        <div class="xinxi">
        <p class="article-times">
          <small>阅读</small>
          <small>作者：USER</small>
          <small>9月10日</small>
          <small v-for="i in blog.categories">{{i}}</small>
        </p>
        
<button type="button" id="content-button">阅读全文</button>
</div>
<hr>
      </article> 
     
    </section>
     <!-- <section class="Page">
      <ul class="pagination">
        <li><a href="">«</a></li>
        <li><a href="" class="active">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">»</a></li>
      </ul>
     </section> -->
    <section class="section-two">
      <div class="artucle-pre">
        <div class="img-section">
       <img src="../assets/img/banner2.jpg" alt="">
        </div>
        <div class="text-section">
          <h2>Markdown方式来写文章的Vue插件</h2>
          <p>cdn地址:marked;
            这个是用来解析marked成html的
            然后再来一个：hightlightjs;
            这个是用来给代码上色的
          </p>
        </div>
      </div>
      <div class="artucle-pre">
        
        <div class="text-section">
          <h2>又一个标题</h2>
          <p>
            ironment, and build a future in which humans live in harmony with nature.WWF's mission is to stop the degradation of our planet's natural environment, and build a future in which humans live in harmony with nature.environment, and build a future in which humans live in harmony with nature.WWF's mission is to stop the degradation of our planet'sdegradation of our planet's natural environment, and build
          </p>
        </div>
        <div class="img-section" style="float: right;">
          <img src="../assets/img/banner3.jpg" alt=""> 
        </div>
      </div>
    </section>
  </div>
  <div id="topAnchor"><a href="#first-section" style="position:fixed;right:10%;bottom:0;color:#111;"><span class="fa-arrow-circle-up fa-3x "></span></a></div>
    
  
  <!-- <footer>
    <ul class="share-group">
      <li><a href=""><i class="fa fa-envelope-o fa-inverse fa-fw fa-2x"></i></a></li>
      <li><a href=""><i class="fa fa-github fa-2x"></i></a></li>
      <li><a href=""><i class="fa fa-qq fa-inverse fa-2x"></i></a></li>
      <li><a href=""><i class="fa fa-weibo fa-2x"></i></a></li>
      <li><a href=""><i class="fa fa-google fa-inverse fa-2x"></i></a></li>
    </ul>
    <div class="copy">
      &copy Blog
    </div>
  </footer> -->
  </div> 
</template>

<script type="text/javascript" src="../assets/lx.js"></script>
<script>
export default {
 name:'show-blogs',
 data(){
  return{
    blogs:[],
    search:""
  }
 },
 created(){
  this.$http.get('https://blog-demo-5478d.firebaseio.com/posts.json')
  .then(function(data){
    return data.json();
    // console.log(data);
    // this.blogs=data.body.slice(0,6);
    // console.log(this.blogs);
  })
  .then(function(data){
    var blogsArray=[];
    for(let key in data){
      console.log(key);
      console.log(data[key]);
      data[key].id=key;
      blogsArray.push(data[key])
    }
    this.blogs=blogsArray;
  })
 },
 computed:{
  filteredBlogs:function(){
     //  return this.blogs.filter(function(blog){
     //   return blog.title.match(this.search);
     // });
     var filtered=this.blogs.filter((blog)=>{
            return blog.title.match(this.search);
        })
      console.log(filtered);
        if(filtered==""){
          $("#show-blogs-hideen").show();
        }else {
          $("#show-blogs-hideen").hide();
          return filtered;
        }   
  }
 }
}

</script>

<style scoped> 
@import './../static/css/main.css'

#show-blog{

}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  -webkit-box-sizing:border-box;
  background: #eee;
}
.nav-search{
  z-index: 11;
  position: fixed;
  top: 0;
  right:3%;
}
</style>
