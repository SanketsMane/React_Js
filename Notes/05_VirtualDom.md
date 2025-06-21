## Virtual Dom 

1. very less used in react 

2. React Fiber -    https://github.com/acdlite/react-fiber-architecture

3. react use fiber algorithm for virtual dom

4. it has ability to pause, abort and reuse work as new update done

5. Reconciliation is the algorithm behind the virtual DOM 

Notes -


# 🔬 React Fiber Architecture – Explained

> A simplified and beginner-friendly guide to understanding the internals of React Fiber — React's modern rendering engine.

---

## 🧠 What is React Fiber?

**React Fiber** is a reimplementation of React’s core reconciliation algorithm, designed for:

- **Incremental rendering**
- **Smoother animations**
- **Better responsiveness**
- **Advanced scheduling and concurrency**

It allows rendering work to be split into units, paused, resumed, prioritized, and even canceled.

---

## 🚀 Key Features

- 🔁 **Incremental rendering** (spreads rendering over multiple frames)
- 🧠 **Pause / Abort / Reuse** work
- 🧩 **Assign priority** to updates
- 🎯 **Concurrency support**
- ⚙️ **Improved scheduling**

---

## 📘 About This Guide

This is an unofficial documentation created to help developers understand React Fiber’s core concepts in a simple and structured way.  
The content is based on hands-on exploration and React's open-source codebase.

---

## 📚 Prerequisites

Before diving in, you should understand:

- ✅ React Components, Elements, and Instances  
- 🔁 React Reconciliation  
- 🧱 React Design Principles (especially scheduling)

---

## 🔁 Reconciliation in React

> Reconciliation is how React compares and updates the virtual DOM efficiently.

- React pretends the entire UI re-renders on every update.
- Uses **diffing** and **keys** to optimize updates.
- Reconciliation is separated from **rendering**, enabling React DOM and React Native to share logic.

---

## 🗓️ Scheduling

**Scheduling** is deciding when and in what order rendering work should happen.

- React Fiber enables React to delay, prioritize, or batch rendering.
- High-priority tasks (like animations) can interrupt low-priority ones (like background data).
- React uses a **pull-based model** where it decides what and when to compute.

---

## 🧩 What is a Fiber?

A **fiber** is a re-implementation of a stack frame in JavaScript.

> It represents a single **unit of work** in the rendering process.

Fiber allows React to:
- Pause and resume rendering
- Abort unnecessary work
- Assign priorities
- Reuse previous results

---

## 📦 Structure of a Fiber

| Field | Description |
|-------|-------------|
| `type` & `key` | Describe the component and help with diffing |
| `child`, `sibling`, `return` | Build the recursive fiber tree |
| `pendingProps`, `memoizedProps` | Track inputs and decide if work is needed |
| `pendingWorkPriority` | Priority level of the update |
| `alternate` | Link between current and work-in-progress fibers |
| `output` | Final rendered element (e.g., DOM node) |

---

## 🔧 Key Terms

- **Flush**: Committing the rendered output to the screen
- **Work-in-progress**: A fiber that’s being worked on but not committed
- **Host components**: Native elements like `div`, `span`, etc.
- **CloneFiber**: Clones or reuses existing fibers for optimization

---

## 📅 What’s Next?

Planned sections to add:

- 🧠 How scheduling works internally  
- 🧩 How priority is propagated  
- 🔁 How pausing/resuming is handled  
- ✅ How updates are committed (flush phase)  
- ⚡ Lifecycle and side-effect handling  
- 🌀 Advanced features like context and coroutines  

---
