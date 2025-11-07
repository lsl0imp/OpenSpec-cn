export const chineseMappingTemplate = `# OpenSpec 中英文对应关系

本文档列出了 OpenSpec 中所有没有直接定义到 CLI 里的指令和关键字的中英文对应关系，供 AI 助手和开发者参考。

## 重要说明

**本规范文档中文为主，关键名词保留英文**。以下关键字在代码中被硬编码识别，必须保持英文格式，但在文档说明和 AI 读取时需要知道对应的中文含义。

## Delta 操作（变更操作）

这些关键字用于标识规范变更的类型，在 \`changes/[change-id]/specs/[capability]/spec.md\` 文件中使用：

- \`## ADDED Requirements\` = \`添加需求\` / \`新增需求\`
- \`## MODIFIED Requirements\` = \`修改需求\` / \`更新需求\`
- \`## REMOVED Requirements\` = \`删除需求\` / \`移除需求\`
- \`## RENAMED Requirements\` = \`重命名需求\`

## 规范结构关键字

这些关键字用于构建规范文档的结构：

- \`## Purpose\` = \`目的\` / \`目标\`
- \`## Requirements\` = \`需求\` / \`需求规范\`
- \`### Requirement: [Name]\` = \`需求：[名称]\`
- \`#### Scenario: [Name]\` = \`场景：[名称]\`

## 变更提案结构关键字

这些关键字用于变更提案文档（\`proposal.md\`）：

- \`## Why\` = \`原因\` / \`背景\` / \`为什么\`
- \`## What Changes\` = \`变更内容\` / \`变更说明\`
- \`## Impact\` = \`影响\` / \`影响范围\`

## 规范关键字（行为描述）

这些关键字用于描述需求的行为，必须保留英文以确保验证逻辑正常工作：

- \`SHALL\` = \`应\` / \`应当\`
- \`MUST\` = \`必须\`
- \`WHEN\` = \`当\` / \`当...时\`
- \`THEN\` = \`则\` / \`那么\`
- \`GIVEN\` = \`给定\` / \`假设\`
- \`AND\` = \`并且\` / \`同时\`

## 使用示例

### 在变更提案中（proposal.md）

可以使用中文描述：

\`\`\`markdown
## 变更提案：新增用户登录功能

## 背景
系统目前只支持桌面客户端登录。为了支持移动和 web 端，需要新增 HTTP 接口。

## 变更内容
- 新增 \`POST /api/login\` 接口
- 请求体：{ "username": "string", "password": "string" }
- 响应体：{ "token": "string", "expires": "int" }
- 状态码：200（成功），401（凭证错误）

## 实施任务
- [ ] 新建 LoginController
- [ ] 实现 AuthService.ValidateUser()
- [ ] 更新 UserRepository 根据用户名查询
- [ ] 编写单元测试 AuthTests.cs
\`\`\`

### 在规范增量文件中（spec.md）

**必须使用双语格式**：Requirement 文本第一行必须包含英文的 SHALL/MUST（用于验证），第二行添加中文说明。WHEN/THEN 关键字保持英文，但后面的说明文字可以中文。

\`\`\`markdown
## ADDED Requirements
### Requirement: 用户登录 API
The system SHALL issue a token when valid credentials are provided.
系统应在提供有效凭证时颁发令牌。

#### Scenario: 有效凭证
- **WHEN** 用户提交有效凭证
- **THEN** 返回令牌
\`\`\`

**完整双语格式示例**：

\`\`\`markdown
## ADDED Requirements
### Requirement: 用户登录 API
The system SHALL issue a token when valid credentials are provided.
系统应在提供有效凭证时颁发令牌。

#### Scenario: 有效凭证
- **WHEN** 用户提交有效凭证
- **THEN** 返回令牌

#### Scenario: 无效凭证
- **WHEN** 用户提交无效凭证
- **THEN** 返回 401 错误
- **AND** 显示错误消息

## MODIFIED Requirements
### Requirement: 现有功能
The system SHALL provide enhanced authentication with two-factor support.
系统应提供增强的认证功能，支持双因素认证。

#### Scenario: 双因素认证流程
- **WHEN** 用户启用双因素认证
- **THEN** 系统要求输入验证码
\`\`\`

## CLI 命令（必须保留英文）

以下命令在代码中被硬编码识别，必须保持英文：

- \`openspec init\` - 初始化 OpenSpec
- \`openspec list\` - 列出变更
- \`openspec list --specs\` - 列出规范
- \`openspec show [item]\` - 显示详情
- \`openspec validate [item]\` - 验证
- \`openspec archive <change-id>\` - 归档变更
- \`openspec spec list --long\` - 列出所有规范（详细）
- \`openspec update [path]\` - 更新指令文件

## Slash Commands（必须保留英文）

以下 slash commands 在代码中被识别，必须保持英文：

- \`/openspec-proposal\` - 创建变更提案
- \`/openspec-apply\` - 应用变更
- \`/openspec-archive\` - 归档变更

## 注意事项

1. **代码识别的关键字必须保留英文**：所有在代码中被正则表达式或字符串匹配识别的关键字都必须保持英文格式，否则工具无法正常工作。

2. **文档说明可以使用中文**：在 \`proposal.md\`、\`tasks.md\`、\`design.md\` 等文档中，说明性文字可以使用中文。

3. **规范文件中的关键字必须英文**：在 \`spec.md\` 和 \`changes/[id]/specs/[capability]/spec.md\` 文件中，所有结构关键字（如 \`## ADDED Requirements\`、\`### Requirement:\`、\`#### Scenario:\`）和规范关键字（如 \`SHALL\`、\`MUST\`、\`WHEN\`、\`THEN\`）必须保持英文。

4. **Requirement 文本必须使用双语格式**：在 Requirement 的文本描述中，必须使用双语格式，第一行英文（包含 SHALL/MUST，用于验证），第二行中文说明。WHEN/THEN 关键字保持英文，但后面的说明文字可以中文。
`;

