# OpenSpec 项目概览

一个最小化的 CLI 工具，帮助开发者设置 OpenSpec 文件结构并保持 AI 指令更新。AI 工具本身通过直接处理 markdown 文件来处理所有变更管理的复杂性。

> **重要提示**：本规范文档中文为主，关键名词保留英文。请参照 `openspec/CHINESE_MAPPING.md` 了解中英文对应关系。

## Technology Stack
- Language: TypeScript
- Runtime: Node.js (≥20.19.0, ESM modules)
- Package Manager: pnpm
- CLI Framework: Commander.js
- User Interaction: @inquirer/prompts
- Distribution: npm package

## Project Structure
```
src/
├── cli/        # CLI 命令实现
├── core/       # 核心 OpenSpec 逻辑（模板、结构）
└── utils/      # 共享工具（文件操作、回滚）

dist/           # 编译输出（gitignored）
```

## Conventions
- TypeScript strict mode enabled
- Async/await for all asynchronous operations
- Minimal dependencies principle
- Clear separation of CLI, core logic, and utilities
- AI-friendly code with descriptive names

## Error Handling
- Let errors bubble up to CLI level for consistent user messaging
- Use native Error types with descriptive messages
- Exit with appropriate codes: 0 (success), 1 (general error), 2 (misuse)
- No try-catch in utility functions, handle at command level

## Logging
- Use console methods directly (no logging library)
- console.log() for normal output
- console.error() for errors (outputs to stderr)
- No verbose/debug modes initially (keep it simple)

## Testing Strategy
- Manual testing via `pnpm link` during development
- Smoke tests for critical paths only (init, help commands)
- No unit tests initially - add when complexity grows
- Test commands: `pnpm test:smoke` (when added)

## Development Workflow
- Use pnpm for all package management
- Run `pnpm run build` to compile TypeScript
- Run `pnpm run dev` for development mode
- Test locally with `pnpm link`
- Follow OpenSpec's own change-driven development process