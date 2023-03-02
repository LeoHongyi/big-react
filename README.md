从零实现 React v18 的核心功能，特点如下：

- 👬 与 React 源码最接近的实现
- 💪 功能完备，当前可跑通官方测试用例数量：34
- 🚶 按`Git Tag`划分迭代步骤，记录从 0 实现的每个功能

### 工程类需求

| 类型 | 内容                               | 完成情况 | 在哪个版本实现的                                  |
| ---- | ---------------------------------- | -------- | ------------------------------------------------- |
| 架构 | monorepo（pnpm 实现）              | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 规范 | eslint                             | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 规范 | prettier                           | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 规范 | commitlint + husky                 | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 规范 | lint-staged                        | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 规范 | tsc                                | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 测试 | jest 环境搭建                      | ✅       | [v4](https://github.com/BetaSu/big-react/tree/v4) |
| 规范 | tsc                                | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 构建 | babel 配置                         | ✅       | [v4](https://github.com/BetaSu/big-react/tree/v4) |
| 构建 | Dev 环境包的构建                   | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1) |
| 构建 | Prod 环境包的构建                  | ⬜️      |                                                   |
| 部署 | Github Action 执行 lint 与 test    | ⬜️      |                                                   |
| 部署 | Github Action 根据 tag 发布 npm 包 | ⬜️      |                                                   |

### 框架需求

| 类型       | 内容                                   | 完成情况 | 在哪个版本实现的                                    |
| ---------- | -------------------------------------- | -------- | --------------------------------------------------- |
| React      | JSX 转换                               | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1)   |
| React      | React.isValidElement                   | ✅       | [v4](https://github.com/BetaSu/big-react/tree/v4)   |
| ReactDOM   | 浏览器环境 DOM 的插入                  | ✅       | [v2](https://github.com/BetaSu/big-react/tree/v2)   |
| ReactDOM   | 浏览器环境 DOM 的移动                  | ✅       | [v7](https://github.com/BetaSu/big-react/tree/v7)   |
| ReactDOM   | 浏览器环境 DOM 的属性变化              | ⬜️      |                                                     |
| ReactDOM   | 浏览器环境 DOM 的删除                  | ✅       | [v5](https://github.com/BetaSu/big-react/tree/v5)   |
| ReactDOM   | ReactTestUtils                         | ✅       | [v4](https://github.com/BetaSu/big-react/tree/v4)   |
| ReactNoop  | ReactNoop Renderer                     | ✅       | [v10](https://github.com/BetaSu/big-react/tree/v10) |
| Reconciler | Fiber 架构                             | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1)   |
| Reconciler | 事件模型                               | ✅       | [v6](https://github.com/BetaSu/big-react/tree/v6)   |
| Reconciler | onClick 事件支持                       | ✅       | [v6](https://github.com/BetaSu/big-react/tree/v6)   |
| Reconciler | input 元素 onChange 事件支持           | ⬜️      |                                                     |
| Reconciler | Lane 模型                              | ✅       | [v8](https://github.com/BetaSu/big-react/tree/v8)   |
| Reconciler | 基础 Update 机制                       | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1)   |
| Reconciler | 带优先级的 Update 机制                 | ✅       | [v8](https://github.com/BetaSu/big-react/tree/v8)   |
| Reconciler | 插入单节点的 mount 流程                | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1)   |
| Reconciler | 插入多节点的 mount 流程                | ✅       | [v7](https://github.com/BetaSu/big-react/tree/v7)   |
| Reconciler | 插入单节点的 reconcile 流程            | ✅       | [v5](https://github.com/BetaSu/big-react/tree/v5)   |
| Reconciler | 插入多节点的 reconcile 流程            | ✅       | [v7](https://github.com/BetaSu/big-react/tree/v7)   |
| Reconciler | 删除节点的 reconcile 流程              | ✅       | [v5](https://github.com/BetaSu/big-react/tree/v5)   |
| Reconciler | HostText 类型支持                      | ✅       | [v2](https://github.com/BetaSu/big-react/tree/v2)   |
| Reconciler | HostComponent 类型支持                 | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1)   |
| Reconciler | HostRoot 类型支持                      | ✅       | [v1](https://github.com/BetaSu/big-react/tree/v1)   |
| Reconciler | FunctionComponent 类型支持             | ✅       | [v3](https://github.com/BetaSu/big-react/tree/v3)   |
| React      | Hooks 架构 mount 时实现                | ✅       | [v3](https://github.com/BetaSu/big-react/tree/v3)   |
| React      | Hooks 架构 update 时实现               | ✅       | [v5](https://github.com/BetaSu/big-react/tree/v5)   |
| Reconciler | useState 实现                          | ✅       | [v3](https://github.com/BetaSu/big-react/tree/v3)   |
| Reconciler | useEffect 实现                         | ✅       | [v9](https://github.com/BetaSu/big-react/tree/v9)   |
| Reconciler | useRef 实现                            | ⬜️      |                                                     |
| Reconciler | Legacy 调度流程（包含 batchedUpdates） | ✅       | [v8](https://github.com/BetaSu/big-react/tree/v8)   |
| Reconciler | Concurrent 调度流程                    | ✅       | [v11](https://github.com/BetaSu/big-react/tree/v11) |
| Reconciler | 异常处理流程                           | ⬜️      |                                                     |
| Reconciler | useErrorBoundary 实现                  | ⬜️      |                                                     |
