### Math

**是一个内置对象**


1. 得到一个两数之间的随机数
        function getRandomArbitrary(min, max) {
            Math.random() * (max-min) + min
        }
2. 返回数字的整数部分

        function toInteger(num) {
            return num < 0 ? Math.ceil(num) : Math.floor(num);
        }

3. 得到一个两数之间的随机整数

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
        }
4. 得到一个两数之间的随机整数，包括两个数在内

        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
        }


参考：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)