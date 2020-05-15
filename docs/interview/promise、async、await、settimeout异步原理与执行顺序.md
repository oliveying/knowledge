# promise、async、await、settimeout异步原理与执行顺序

## 一道经典的前端笔试题，你能一眼写出他们的执行结果吗？


```js
async function async1() {
            console.log("async1 start");
            await  async2();
            console.log("async1 end");

          }
          async  function async2() {
            console.log( 'async2');
          }
          console.log("script start");
          setTimeout(function () {
            console.log("settimeout");
          },0);
          async1();
          new Promise(function (resolve) {
            console.log("promise1");
            resolve();
          }).then(function () {
            console.log("promise2");
          });
          console.log('script end');
```

首先第一个问题: JavaScript运行机制是什么？

详细可参考：https://baijiahao.baidu.com/s?id=1615713540466951098&wfr=spider&for=pc

总结几点就是：

JavaScript语言是单线程的，同一个时间只能做一件事；

遵循事件循环机制，当JS解析执行时，会被引擎分为两类任务，同步任务（synchronous） 和 异步任务（asynchronous）。对于同步任务来说，会被推到执行栈按顺序去执行这些任务。对于异步任务来说，当其可以被执行时，会被放到一个 任务队列（task queue） 里等待JS引擎去执行。当执行栈中的所有同步任务完成后，JS引擎才会去任务队列里查看是否有任务存在，并将任务放到执行栈中去执行，执行完了又会去任务队列里查看是否有已经可以执行的任务。这种循环检查的机制，就叫做事件循环(Event Loop)。对于任务队列，其实是有更细的分类。其被分为 微任务（microtask）队列 & 宏任务（macrotask）队列。
 

第二个问题：Promise的原理和运行机制是什么？

古人云：“君子一诺千金”，这种“承诺将来会执行”的对象在JavaScript中称为Promise对象。

Promise 是异步编程的一种解决方案，其实是一个构造函数，自己身上有all、reject、resolve这几个方法，原型上有then、catch等方法。

参考：https://blog.csdn.net/qq_37860963/article/details/81539118

这里扩展一个问题：什么是异步呢？

同步就是一件事一件事的执行。只有前一个任务执行完毕，才能执行后一个任务。

js代码只能一行一行的执行，不能在同一时间执行多个js代码任务，这就导致如果有一段耗时较长的计算，或者是一个ajax请求等IO操作，如果没有异步的存在，就会出现用户长时间等待，并且由于当前任务还未完成，所以这时候所有的其他操作都会无响应，这时候就需要异步任务。

参考：https://blog.csdn.net/li123128/article/details/80650256

Promise运行顺序总结：

promise的构造函数是同步执行，promise.then中的函数是异步执行。
构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用。promise状态一旦改变则不能再变。
promise 的 .then 或者 .catch 可以被调用多次，但这里 Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续每次调用 .then 或者 .catch 都会直接拿到该值。
如果在一个then（）中没有返回一个新的promise，则 return 什么下一个then就接受什么，如果then中没有return，则默认return的是 undefined.
then()的嵌套会先将内部的then()执行完毕再继续执行外部的then();
catch和then的连用，如果每一步都有可能出现错误，那么就可能出现catch后面接上then的情况。如果在catch中也抛出了错误，则后面的then的第一个函数不会执行，因为返回的 promise状态已经为rejected了
 

第三个问题：async、await执行顺序？

什么是Async/Await?

async/await是写异步代码的新方式，以前的方法有回调函数和Promise。

async/await是基于Promise实现的，它不能用于普通的回调函数。
async/await与Promise一样，是非阻塞的。

async/await使得异步代码看起来像同步代码，这正是它的魔力所在。

await关键字只能用在aync定义的函数内。async函数会隐式地返回一个promise，该promise的reosolve值就是函数return的值。
执行顺序：

使用 async 定义的函数，当它被调用时，它返回的其实是一个 Promise 对象。（当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。）

await是一个让出线程的标志。await后面的函数会先执行一遍，然后就会跳出整个async函数来执行后面js栈的代码，等本轮事件循环执行完了之后又会跳回到async函数中等待await后面表达式的返回值，如果返回值为非promise则继续执行async函数后面的代码，否则将返回的promise放入promise队列。

参考：https://segmentfault.com/a/1190000011296839

 

问题四：setTimeout的执行？

setTimeout和Promise一样也是异步的

 

宏任务一般包括：整体代码script，setTimeout，setInterval。

 

微任务：Promise，process.nextTick

微任务执行优先级高于宏任务，所以Promise比setTimeout优先执行。

 

理解了以上4个问题，那么这道笔试题也就容易理解了
```js
// 同步任务顺序：
1. console.log('script start')
2. console.log('async1 start')
3. console.log('async2') // 然后跳出整个async1 函数来执行后面的js栈的代码
4. console.log('promise1')

// 异步任务
1. 回到async1函数中等待的await后面表达式的返回值
2. promise的.then()
3. setTimeOut
```

```js
script start
async1 start
async2
promise1
script end
async1 end
promise2
undefined
settimeout
```
> https://www.cnblogs.com/cristina-guan/p/11487403.html