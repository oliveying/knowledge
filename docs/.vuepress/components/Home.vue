<template>
  <div class="home">开心哟</div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {}
    },
    mounted() {
      this.tongji_ga();
    },
    methods: {
      // ga统计
      tongji_ga() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-137025177-1');

        var userAgent = navigator.userAgent;
        if (userAgent.indexOf('ignore') < 0) {
          var ga = document.createElement("script");
          ga.async = true;
          ga.src = "//www.googletagmanager.com/gtag/js?id=UA-137025177-1";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(ga, s);
        }
      }
    }
  }
</script>

<style scoped>

</style>