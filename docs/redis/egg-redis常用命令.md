# redis 常用命令
## HINCRBY
* hincrby(key, field, increment)：将名称为key的hash中field的value增加increment

为哈希表 key 中的域 field 的值加上增量 increment 。

增量也可以为负数，相当于对给定域进行减法操作。

如果 key 不存在，一个新的哈希表被创建并执行 HINCRBY 命令。

如果域 field 不存在，那么在执行命令前，域的值被初始化为 0 。

对一个储存字符串值的域 field 执行 HINCRBY 命令将造成一个错误。

本操作的值被限制在 64 位(bit)有符号数字表示之内。
* 可用版本：>= 2.0.0
* 时间复杂度：O(1)
* 返回值：
执行 HINCRBY 命令之后，哈希表 key 中域 field 的值。

```js
this.redis.hincrby('user', 'info', 1)
```
> http://doc.redisfans.com/hash/hincrby.html

## EXISTS
EXISTS key
检查给定key是否存在，若 key 存在，返回 1 ，否则返回 0 。
```js
this.redis.exists('user')
```
## HSET
```JS
this.redis.hset(key, field, value)：向名称为key的hash中添加元素field<—>value
```

## HGET
`hget(key, field)`：返回名称为key的hash中field对应的value
当给定鱼不存在或是给定key 不存在时，返回nil

## SET
set(key, value)：给数据库中名称为key的string赋予值value

## INCR
incr(key)：名称为key的string增1操作

## DEL
del key:删除一个key。成功返回，失败返回0
## SCARD
scard(key) ：返回名称为key的set的基数(集合中元素的数量)
当 key 不存在时，返回 0 。

## EXPIRE和TTL
`expire key` ：限定key的生存时间，命令的一般形式如expire name 30,意思是值为name的key只能存活30秒
`ttl key`:返回key剩余存活时间

## SADD
SADD key member [member ...]

将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略。

假如 key 不存在，则创建一个只包含 member 元素作成员的集合。

当 key 不是集合类型时，返回一个错误。

返回值:
被添加到集合中的新元素的数量，不包括被忽略的元素。

## LPUSH
lpush(key, value)：在名称为key的list头添加一个值为value的 元素




