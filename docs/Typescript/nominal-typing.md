# Nominal Typing

在 TypeScript 中，大多数类型都是**结构化类型（Structural Typing）**：  
只要两个类型的结构一致（属性名和类型相同），编译器就认为它们是兼容的。

这在大多数场景下非常方便，但有时候——**太宽松了**。

比如：

```ts
type Point3d = { x: number; y: number; z: number }
type Dot = { x: number; y: number; z: number }

function acceptPoint(p: Point3d) {}

const data: Dot = { x: 1, y: 2, z: 3 }

acceptPoint(data) // ✅ 编译通过
```

从语义上看，`Point3d` 可能代表“欧几里得空间坐标”，
而 `Dot` 可能代表“屏幕像素坐标”。
两者结构相同，但意义完全不同。
我们并不希望它们能互相混用。

这时候，**品牌类型（Nominal Typing）** 就派上用场了。

---

## 一、什么是品牌类型（Branded Type）

品牌类型的核心思想是：

> 给一个类型打上“隐藏的标签”，
> 让编译器把它当成**独立的类型**，即使结构相同也不能互换。

在 TypeScript 中可以通过一个小技巧实现：
为类型添加一个只存在于**类型系统中**的字段。

```ts
type NominalTyped<T, Brand> = T & { __brand?: Brand }
```

这段代码定义了一个通用的 “打品牌” 工具类型。
`__brand` 字段不会出现在运行时，只用于编译期类型区分。

---

## 二、定义品牌类型

使用 `unique symbol` 确保每个品牌唯一：

```ts
declare const EUCLIDEAN_BRAND: unique symbol
declare const SCREEN_BRAND: unique symbol

type EuclideanPoint = NominalTyped<{ x: number; y: number; z: number }, typeof EUCLIDEAN_BRAND>
type ScreenPoint    = NominalTyped<{ x: number; y: number; z: number }, typeof SCREEN_BRAND>
```

---

## 三、使用对比

### ✅ 使用品牌类型（Nominal Typing）

```ts
function acceptEuclidean(p: EuclideanPoint) {
  console.log('欧几里得点：', p)
}

const raw = { x: 1, y: 2, z: 3 }

// ❌ 报错：普通对象不是 EuclideanPoint
acceptEuclidean(raw)

// ✅ 正确做法：通过工厂函数显式打品牌
function makeEuclidean(p: { x: number; y: number; z: number }): EuclideanPoint {
  return p as EuclideanPoint
}

const ep = makeEuclidean(raw)
acceptEuclidean(ep) // ✅ 正确
```

### 🚫 不使用品牌类型（Structural Typing）

```ts
type Point3d = { x: number; y: number; z: number }
type Dot      = { x: number; y: number; z: number }

function acceptPoint(p: Point3d) {}

const data: Dot = { x: 1, y: 2, z: 3 }

// ✅ 编译通过，但语义上可能错误
acceptPoint(data)
```

---

## 四、品牌类型的意义

| 特性     | 结构化类型   | 品牌类型             |
| ------ | ------- | ---------------- |
| 比较方式   | 按结构（字段） | 按“身份”（品牌）        |
| 编译时安全性 | 容易混用    | 可防止误用            |
| 运行时开销  | 无       | 无                |
| 典型用途   | 普通数据结构  | ID、坐标、单位制、防止混淆类型 |

---

## 五、结合工厂函数使用（最佳实践）

品牌字段只是类型层面的“幻影”，
所以推荐用工厂函数集中管理“打品牌”的动作：

```ts
function makeScreenPoint(p: { x: number; y: number; z: number }): ScreenPoint {
  return p as ScreenPoint
}

const sp = makeScreenPoint({ x: 10, y: 20, z: 0 })
```

这样能在运行时保持纯净（无多余字段），
又在编译期防止类型混用。
