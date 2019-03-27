### Date

+ Date.UTC()  //方法接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。
+ Date.now()  // 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。

+ new Date().getDate() // 根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从1--31）。
+ new Date().getDay() // 根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。
+ new Date().getFullYear() // 根据本地时间，返回指定日期的年份。
+ new Date().getHours() // 根据本地时间，返回一个指定的日期对象的小时。
+ new Date().getMinutes() // 根据本地时间，返回一个指定的日期对象的分钟数。
+ new Date().getMonth() // 根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。
+ new Date().getSeconds() // 根据本地时间，返回一个指定的日期对象的秒数。
+ new Date().getTime() // 方法返回一个时间的格林威治时间数值。你可以使用这个方法把一个日期时间赋值给另一个Date 对象。这个方法的功能和 valueOf() 方法一样。
+ new Date().getUTCDate() // 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天
+ new Date().getUTCDay() // 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。
+ new Date().getUTCFullYear() // 以世界时为标准，返回一个指定的日期对象的年份。
+ new Date().getUTCHours() 方法以世界时为标准，返回一个指定的日期对象的小时数。

+ new Date().setDate() // 方法根据本地时间来指定一个日期对象的天数。
+ new Date().setFullYear() // 方法根据本地时间为一个日期对象设置年份。
+ new Date().setTime() // 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。
+ new Date().valueOf() // 方法返回一个 Date 对象的原始值。  与Date.prototype.getTime() 方法一样。


        function checkTime(i) {
            if(i < 10)i = '0' + i;
            return i;
        }
1. 获取当前日期

        function getNewDate() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            month = checkTime(month);
            day = checkTime(day);
            hour = checkTime(hour);
            minute = checkTime(minute);
            second = checkTime(second);
            return (year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second)
        }

2. 实现倒计时

            var futureTime = new Date().setDate(20190313);
            function remainingTime(futureTime) {
                var leftTime = (new Date(futureTime)) - (Date.now()); //计算剩余的毫秒数
                var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
                var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
                var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
                var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
                days = checkTime(days);
                hours = checkTime(hours);
                minutes = checkTime(minutes);
                seconds = checkTime(seconds);
                if (leftTime > 0) {
                setTimeout(function () {
                  remainingTime();
                }, 1000);
                $("#remainingTime").html(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
                } else {

                }
            }


参考：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)




