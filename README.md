# 🎉 Fake Error Generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

**`fake-error-generator`** is a lightweight, fun npm package that lets you generate **fake console errors, warnings, logs, and info messages** — perfect for **pranking your friends, demos, or just for laughs**! 😎

> ⚠️ Note: This package is purely for **fun and educational purposes**. Don’t use it in production for real error handling.

---

## 🚀 Features

* Generate **fake errors, warnings, logs, or info messages**
* Customizable messages, types, count, and delay
* Randomized messages for maximum fun
* Works in **Node.js** (and can be bundled for the browser)
* Lightweight and zero dependencies

---

## 💿 Installation

```bash
npm install fake-error-generator
```

---

## 🧩 Usage

### 1. Generate a single fake error

```js
const { fakeError } = require("fake-error-generator");

fakeError({ message: "Something went wrong!", type: "error" });
```

### 2. Generate multiple warnings with a delay

```js
fakeError({ message: "Watch out!", type: "warn", count: 3, delay: 500 });
```

### 3. Generate random fake errors

```js
const { randomFakeError } = require("fake-error-generator");

randomFakeError({
  messages: ["Oops!", "Crash!", "404 Not Found!"],
  count: 5,
  delay: 300
});
```

---

## 🎨 Message Types

| Type    | Console Output |
| ------- | -------------- |
| `log`   | ✅ Normal log   |
| `warn`  | ⚠️ Warning     |
| `error` | ❌ Error        |
| `info`  | ℹ️ Info        |

---

## 😎 Example

```js
const { fakeError, randomFakeError } = require("fake-error-generator");

fakeError({ message: "Server failed to respond!", type: "error" });
fakeError({ message: "Check your input!", type: "warn", count: 3, delay: 1000 });
randomFakeError({ messages: ["Crash!", "Oops!", "Fail!"], count: 5, delay: 500 });
```

Output in console:

```
❌ Server failed to respond!
⚠️ Check your input!
⚠️ Check your input!
⚠️ Check your input!
⚠️ Crash!
❌ Oops!
ℹ️ Fail!
...
```

---

## 💡 Tips for Fun

* Use in **demo projects** to fake errors for UI testing
* **Prank friends** with funny “critical errors”
* Combine with `setInterval` for continuous chaos 😏

---

## 📄 License

MIT License © 2025 Menula De Silva

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---