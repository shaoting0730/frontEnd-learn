<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>
<<script>
  export default {
    data(){
      return{
        msg:'Error 404'
      }
    },
    beforeRouteEnter:(to,from,next)=>{
      console.log("准备进入路由模板");
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开路由模板");
      next();
    }
  }
</script>
