export interface ProjectContext {
  projectName?: string;
  description?: string;
  techStack?: string[];
  conventions?: string;
}

export const projectTemplate = (context: ProjectContext = {}) => `# ${context.projectName || '项目'} 上下文

> **重要提示**：本规范文档中文为主，关键名词保留英文。请参照 \`openspec/CHINESE_MAPPING.md\` 了解中英文对应关系。

## AI 对话指南

**重要**：AI 助手在与用户对话时必须使用中文回复。所有解释、说明、代码注释和文档都应使用中文，除非是代码中的关键字或 CLI 命令（这些必须保持英文格式）。

## Purpose
${context.description || '[描述项目的目标和目的]'}

## Tech Stack
${context.techStack?.length ? context.techStack.map(tech => `- ${tech}`).join('\n') : '- [列出主要技术栈]\n- [例如：TypeScript, React, Node.js]'}

## Project Conventions

### Code Style
[描述代码风格偏好、格式化规则和命名约定]

### Architecture Patterns
[记录架构决策和模式]

### Testing Strategy
[说明测试方法和要求]

### Git Workflow
[描述分支策略和提交约定]

## Domain Context
[添加 AI 助手需要理解的领域特定知识]

## Important Constraints
[列出任何技术、业务或监管约束]

## External Dependencies
[记录关键外部服务、API 或系统]
`;