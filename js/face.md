1. 检测下拉到底部

        $(document).ready(function() {
          var nScrollHight = 0; //滚动距离总长
          var nScrollTop = 20;   //滚动到的当前位置
          var nDivHight = 500;
          $(".company-comment-list").scroll(function(){
            nScrollHight = $(this)[0].scrollHeight;
            nScrollTop = $(this)[0].scrollTop;

            if(nScrollTop + nDivHight >= nScrollHight)
              alert("滚动条到底部了");
          });
        });