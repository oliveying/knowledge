```js
// good
const a: Array<string | number> = ['a', 1];
const b: Array<{ prop: string }> = [{ prop: 'a' }];
const c: Array<() => void> = [() => {}];
const d: MyType[] = ['a', 'b'];
const e: string[] = ['a', 'b'];
const f: readonly string[] = ['a', 'b'];
```


【强制】类型断言必须使用 as Type @typescript-eslint/consistent-type-assertions
类型断言（type assertiions）也可称作类型转换（type casting），本质上是对 TypeScript 类型系统的人为干预：
强制对类型的断言统一使用 as Type 风格而非 <Type> ，后者容易与 JSX 产生混淆。
对象字面量禁止类型断言，断言成 any 除外，对象字面量应该直接声明。
TypeScript 3.4 中引入的 const 断言在本规则中不受约束，let x = 'hello' as const; 和 let x = <const>'hello'; 都是允许的。

```js
// bad
const foo = <string>'bar';

// good
const foo = 'bar' as string;

// bad
const x = { ... } as T;
const y = { ... } as object;

// good
const x: T = { ... };
const y = { ... } as any;
const z = { ... } as unknown;
```

