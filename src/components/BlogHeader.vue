<template>
 <header>
      <nav>
        <ul class="nav-li-left">
          <li class=""><router-link to="/"  exact><span class="fa fa-home "></span>首页</router-link></li>
          <li><a href="content.html"><span class="fa-align-right"></span>分类</a></li>
          <li><router-link to="/add" exact><span class="fa-pencil-square-o"></span>发布</router-link></li>
          <li><a href=""><span class="fa-user"></span>关于</a></li>

        </ul>
       <!-- <div class="nav-search">
          <label for="search"><span class="fa-search fa-inverse "></span></label>
          <input type="text" name="search" id="search" v-model="search">
          <input type="button" name="search-bt" id="search-bt" value="搜索">
          <a  class="login-main" id="login-main">登录</a>
        </div> -->
          
<!--         <ul class="nav-li-right">
          <li ><a href="">退出</a></li>
         <li ><a href="">yonghuming123</a></li>
          <li><img class="u-logo" src="static/img/
          u-logo.jpg"></li> -->
          
          
          
        </ul> 
        
      </nav>
    </header> 
	
</template>
<script >
	export default{
		name:'BlogHeader'
	}
</script>
<style >
	.router-link-active{
	background-color: #666;
    border-radius: 10px;
	}
</style>