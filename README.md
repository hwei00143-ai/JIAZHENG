# Community Group Buying Platform

一个基于微信小程序和 NestJS 的社区团购平台。

## 项目结构

这是一个 monorepo 项目，使用 pnpm workspaces 管理：

```
community-group-buying/
├── apps/
│   └── mini-program/          # 微信小程序前端 (Taro + React)
├── services/
│   └── api/                   # 后端 API 服务 (NestJS + TypeScript)
├── packages/
│   └── shared/                # 共享类型和工具
├── docker/
│   └── mysql/                 # MySQL 初始化脚本
├── docker-compose.yml         # Docker Compose 配置
├── package.json              # 根项目配置
└── tsconfig.json             # TypeScript 配置
```

## 技术栈

### 前端 (微信小程序)
- **框架**: Taro 3.x + React
- **语言**: TypeScript
- **状态管理**: React Hooks
- **UI**: 自定义组件

### 后端 (API)
- **框架**: NestJS
- **语言**: TypeScript
- **数据库**: MySQL 8.0
- **ORM**: Prisma
- **缓存**: Redis
- **认证**: JWT
- **文档**: Swagger

### 开发工具
- **包管理**: pnpm
- **代码规范**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **容器化**: Docker + Docker Compose

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Docker & Docker Compose

### 1. 安装依赖

```bash
# 安装 pnpm (如果尚未安装)
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 2. 环境配置

```bash
# 复制环境变量模板
cp .env.example .env
cp services/api/.env.example services/api/.env

# 编辑环境变量，填入你的配置
vim .env
vim services/api/.env
```

### 3. 启动数据库服务

```bash
# 启动 MySQL 和 Redis
pnpm docker:up

# 等待服务启动完成
docker-compose logs -f
```

### 4. 数据库初始化

```bash
# 生成 Prisma 客户端
pnpm db:generate

# 运行数据库迁移
pnpm db:migrate
```

### 5. 启动开发服务器

```bash
# 启动后端 API 服务
pnpm dev:api

# 启动小程序开发服务 (新终端)
pnpm dev:mini
```

## 开发脚本

### 根项目脚本

```bash
pnpm dev:api          # 启动 API 开发服务器
pnpm dev:mini         # 启动小程序开发服务器
pnpm build            # 构建所有包
pnpm lint             # 代码检查
pnpm format           # 代码格式化
pnpm typecheck        # TypeScript 类型检查
pnpm docker:up        # 启动 Docker 服务
pnpm docker:down      # 停止 Docker 服务
```

### API 服务脚本

```bash
pnpm --filter api dev              # 启动开发服务器
pnpm --filter api build            # 构建项目
pnpm --filter api test             # 运行测试
pnpm --filter api db:migrate       # 运行数据库迁移
pnpm --filter api db:generate      # 生成 Prisma 客户端
pnpm --filter api db:studio        # 打开 Prisma Studio
```

### 小程序脚本

```bash
pnpm --filter mini-program dev     # 启动开发服务器
pnpm --filter mini-program build   # 构建小程序
```

## API 文档

启动 API 服务后，访问以下地址查看 API 文档：

- Swagger UI: http://localhost:3000/api/v1/docs
- Health Check: http://localhost:3000/health

## 数据库管理

### Prisma Studio

```bash
# 打开数据库管理界面
pnpm --filter api db:studio
```

### 创建新的迁移

```bash
# 修改 prisma/schema.prisma 后创建迁移
pnpm --filter api db:migrate
```

## 微信小程序配置

1. 在 `apps/mini-program/project.config.json` 中填入你的 `appid`
2. 在 `services/api/.env` 中配置微信相关参数：
   - `WECHAT_APP_ID`: 微信小程序 AppID
   - `WECHAT_APP_SECRET`: 微信小程序 AppSecret
   - `WECHAT_PAY_MCH_ID`: 微信支付商户号
   - `WECHAT_PAY_KEY`: 微信支付密钥

## 部署

### Docker 部署

```bash
# 构建所有服务
pnpm build

# 使用 Docker Compose 部署
docker-compose -f docker-compose.prod.yml up -d
```

### 生产环境注意事项

1. 修改默认的 JWT 密钥
2. 配置正确的微信小程序参数
3. 设置强密码的数据库用户
4. 配置 HTTPS
5. 设置适当的 CORS 策略

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 支持

如果你遇到任何问题或有建议，请提交 [Issue](https://github.com/your-username/community-group-buying/issues)。