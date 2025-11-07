export const agentsRootStubTemplate = `# OpenSpec 指令

面向 AI 编程助手的 OpenSpec 规范驱动开发指令。

在以下情况下，请始终打开 \`@/openspec/AGENTS.md\`：
- 请求涉及规划或提案（如 proposal、spec、change、plan 等词）
- 引入新功能、破坏性变更、架构调整或重大性能/安全工作
- 请求不明确，需要在编码前查看权威规范

使用 \`@/openspec/AGENTS.md\` 了解：
- 如何创建和应用变更提案
- 规范格式和约定
- 项目结构和指南

保留此托管块，以便 'openspec update' 可以刷新指令。
`;
