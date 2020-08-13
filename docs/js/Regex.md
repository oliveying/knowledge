# JS中常用的正则表达式

> 译文：[https://juejin.im/post/5cc64083f265da038a1480bd?utm_medium=fe&utm_source=weixinqun](https://juejin.im/post/5cc64083f265da038a1480bd?utm_medium=fe&utm_source=weixinqun)
> 原文：[https://dev.to/emmawedekind/regex-cheat-sheet-2j2a](https://dev.to/emmawedekind/regex-cheat-sheet-2j2a)

* 强烈建议使用常量，如`/^a*b+/g$/` 来定义正则表达式，这样不仅语法简单，执行效率也更高。RegExp()有时还是很有用的，比如动态定义正则表达式值
```js
var name = 'kyle';
var namePattern = new RegExp('\\b(?:)' + name + ')+\\b', 'ig');

var matches = someText.match(namePattern);
```

* 正则表达式或“regex”用于匹配字符串的各个部分 下面是我创建正则表达式的备忘单。

## 匹配正则
* 使用 .test() 方法
```js
let testString = "My test string";
let testRegex = /string/;
testRegex.test(testString);
```
## 匹配多个模式
* 使用操作符号 |
```js
const regex = /yes|no|maybe/;
```

## 忽略大小写
* 使用i标志表示忽略大小写
```js
const caseInsensitiveRegex = /ignore case/i;
const testString = 'We use the i flag to iGnOrE CasE';
caseInsensitiveRegex.test(testString); // true
```
## 提取变量的第一个匹配项
* 使用 .match() 方法
```js
const match = "Hello World!".match(/hello/i); // [ 'Hello', index: 0, input: 'Hello World!' ]
```
## 提取数组中的所有匹配项
* 使用 g 标志
```js
const testString = "Repeat repeat rePeAT";
const regexWithAllMatches = /Repeat/gi;
testString.match(regexWithAllMatches); // ["Repeat", "repeat", "rePeAT"]
```
## 匹配任意字符
* 使用通配符. 作为任何字符的占位符
```js
// To match "cat", "BAT", "fAT", "mat"
const regexWithWildcard = /.at/gi;
const testString = "cat BAT cupcake fAT mat dog";
const allMatchingWords = testString.match(regexWithWildcard); // ["cat", "BAT", "fAT", "mat"]
```
## 用多种可能性匹配单个字符

* 使用字符类，你可以使用它来定义要匹配的一组字符
* 把它们放在方括号里 []
```js
//匹配 "cat" "fat" and "mat" 但不匹配 "bat"
const regexWithCharClass = /[cfm]at/g;
const testString = "cat fat bat mat";
const allMatchingWords = testString.match(regexWithCharClass); // ["cat", "fat", "mat"]
```
## 匹配字母表中的字母
* 使用字符集内的范围 [a-z]
```js
const regexWidthCharRange = /[a-e]at/;

const regexWithCharRange = /[a-e]at/;
const catString = "cat";
const batString = "bat";
const fatString = "fat";

regexWithCharRange.test(catString); // true
regexWithCharRange.test(batString); // true
regexWithCharRange.test(fatString); // false
```
## 匹配特定的数字和字母
你还可以使用连字符来匹配数字
```js
const regexWithLetterAndNumberRange = /[a-z0-9]/ig;
const testString = "Emma19382";
testString.match(regexWithLetterAndNumberRange) // true
```
### 匹配单个未知字符
* 要匹配您不想拥有的一组字符，使用否定字符集  ^
```js
const allCharsNotVowels = /[^aeiou]/gi;
const allCharsNotVowelsOrNumbers = /[^aeiou0-9]/gi;
```
## 匹配一行中出现一次或多次的字符
* 使用 + 标志
```js
const oneOrMoreAsRegex = /a+/gi;
const oneOrMoreSsRegex = /s+/gi;
const cityInFlorida = "Tallahassee";

cityInFlorida.match(oneOrMoreAsRegex); // ['a', 'a', 'a'];
cityInFlorida.match(oneOrMoreSsRegex); // ['ss'];
```
## 匹配连续出现零次或多次的字符
* 使用星号 *
```js
const zeroOrMoreOsRegex = /hi*/gi;
const normalHi = "hi";
const happyHi = "hiiiiii";
const twoHis = "hiihii";
const bye = "bye";

normalHi.match(zeroOrMoreOsRegex); // ["hi"]
happyHi.match(zeroOrMoreOsRegex); // ["hiiiiii"]
twoHis.match(zeroOrMoreOsRegex); // ["hii", "hii"]
bye.match(zeroOrMoreOsRegex); // null
```
## 惰性匹配

* 字符串中与给定要求匹配的最小部分
* 默认情况下，正则表达式是贪婪的（匹配满足给定要求的字符串的最长部分）
* 使用 ? 阻止贪婪模式(惰性匹配 )
```js
    const testString = "catastrophe";
    const greedyRexex = /c[a-z]*t/gi;
    const lazyRegex = /c[a-z]*?t/gi;

    testString.match(greedyRexex); // ["catast"]
    testString.match(lazyRegex); // ["cat"]
```
## 匹配起始字符串模式
* 要测试字符串开头的字符匹配，请使用插入符号^，但要放到开头，不要放到字符集中
```js
const emmaAtFrontOfString = "Emma likes cats a lot.";
const emmaNotAtFrontOfString = "The cats Emma likes are fluffy.";
const startingStringRegex = /^Emma/;

startingStringRegex.test(emmaAtFrontOfString); // true
startingStringRegex.test(emmaNotAtFrontOfString); // false
```
## 匹配结束字符串模式
* 使用 $ 来判断字符串是否是以规定的字符结尾
```js
const emmaAtBackOfString = "The cats do not like Emma";
const emmaNotAtBackOfString = "Emma loves the cats";
const startingStringRegex = /Emma$/;

startingStringRegex.test(emmaAtBackOfString); // true
startingStringRegex.test(emmaNotAtBackOfString); // false
```
## 匹配所有字母和数字
* 使用\word 简写
```js
const longHand = /[A-Za-z0-9_]+/;
const shortHand = /\w+/;
const numbers = "42";
const myFavoriteColor = "magenta";

longHand.test(numbers); // true
shortHand.test(numbers); // true
longHand.test(myFavoriteColor); // true
shortHand.test(myFavoriteColor); // true
```
## 除了字母和数字，其他的都要匹配
* 用\W 表示 \w 的反义
```js
const noAlphaNumericCharRegex = /\W/gi;
const weirdCharacters = "!_$!!";
const alphaNumericCharacters = "ab283AD";

noAlphaNumericCharRegex.test(weirdCharacters); // true
noAlphaNumericCharRegex.test(alphaNumericCharacters); // false
```
## 匹配所有数字
* 你可以使用字符集[0-9]，或者使用简写 \d
```js
const digitsRegex = /\d/g;
const stringWithDigits = "My cat eats $20.00 worth of food a week.";

stringWithDigits.match(digitsRegex); // ["2", "0", "0", "0"]
```
## 匹配所有非数字
* 用\D 表示 \d 的反义
```js
const nonDigitsRegex = /\D/g;
const stringWithLetters = "101 degrees";

stringWithLetters.match(nonDigitsRegex); // [" ", "d", "e", "g", "r", "e", "e", "s"]
```
## 匹配空格
* 使用 \s 来匹配空格和回车符
```js
const sentenceWithWhitespace = "I like cats!"
var spaceRegex = /\s/g;
whiteSpace.match(sentenceWithWhitespace); // [" ", " "]
```
## 匹配非空格
* 用\S 表示 \s 的反义
```js
const sentenceWithWhitespace = "C a t"
const nonWhiteSpaceRegex = /\S/g;
sentenceWithWhitespace.match(nonWhiteSpaceRegex); // ["C", "a", "t"]
```
## 匹配的字符数
* 你可以使用 {下界，上界} 指定一行中的特定字符数
```js
const regularHi = "hi";
const mediocreHi = "hiii";
const superExcitedHey = "heeeeyyyyy!!!";
const excitedRegex = /hi{1,4}/;

excitedRegex.test(regularHi); // true
excitedRegex.test(mediocreHi); // true
excitedRegex.test(superExcitedHey); //false
```
## 匹配最低个数的字符数
* 使用{下界, }定义最少数量的字符要求,下面示例表示字母 i 至少要出现2次
```js
const regularHi = "hi";
const mediocreHi = "hiii";
const superExcitedHey = "heeeeyyyyy!!!";
const excitedRegex = /hi{2,}/;

excitedRegex.test(regularHi); // false
excitedRegex.test(mediocreHi); // true
excitedRegex.test(superExcitedHey); //false
```
## 匹配精确的字符数
* 使用{requiredCount}指定字符要求的确切数量
```js
const regularHi = "hi";
const bestHi = "hii";
const mediocreHi = "hiii";
const excitedRegex = /hi{2}/;

excitedRegex.test(regularHi); // false
excitedRegex.test(bestHi); // true
excitedRegex.test(mediocreHi); //false
```
## 匹配0次或1次
* 使用 ? 匹配字符 0 次或1次
```js
const britishSpelling = "colour";
const americanSpelling = "Color";
const languageRegex = /colou?r/i;

languageRegex.test(britishSpelling); // true
languageRegex.test(americanSpelling); // true
```
## 匹配中文字符

[\u4e00-\u9fa5]

## 表示由大小写英文字母和数字混合组成的6到20个字符的字符串，常见密码验证
/(?!^[0-9]+$)(?!^[A-Z]+$)(?!^[a-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/ 

## 输入8-20位字母/数字/符号（除空格）的至少两种，常见密码验证
/^(?![0-9]+$)(?![a-zA-Z]+$)(?![^(0-9a-zA-Z)]+$)(.{8,20})$/

## 验证手机号码格式
/^((1[0-9]{1})\d{9})$/;

## e.keyCode === 8 删除键
## e.keyCode === 13 回车键

## 手机号格式化
```js
val.replace(/^(.{3})(.{4})(.*)$/g, '$1 $2 $3').substr(0, 13)
```
## 去除空格
```js
if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }
// \s：空格

// \uFEFF：字节次序标记字符（Byte Order Mark），也就是BOM,它是es5新增的空白符

// \xA0：禁止自动换行空白符，相当于html中的&nbsp;

// input校验 
 if (input) {
      input = input.trim();
      if (input.indexOf('.') == 0)
        input = input.replace('.', '');
      return input.replace(/#/gi, '').replace(/\!/gi, '').replace(/\\/gi, '')
        .replace(/\%/gi, '').replace(/\=/gi, '')
        .replace(/\;/gi, '').replace(/\?/gi, '');
```
## 登录流程
打开页面，