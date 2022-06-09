# Vue 3 + TypeScript + Vite + Ant-Design-Vue

## docker

### 部署

#### 构建生成前端产物

```bash
npm run build
```

#### 创建 Dockerfile 文件

```Dockerfile
FROM nginx:stable
COPY ./dist /usr/share/nginx/html
```

#### 根据 Dockerfile 生成镜像

```bash
docker build -t hurole/vue3-admin:1.0.0 .
```

`-t` tag 为镜像指定名字和标签（可选），当前镜像名字为 hurole/vue3-admin，tag 为 1.0.0

#### 创建容器并运行

```bash
docker run -d -p 8081:80 --name vue3_admin hurole/vue3-admin:1.0.0
```

`-d` 指定容器后台运行
`-p` 设置本机端口与容器端口的映射，当前为本机的 8081 与容器的 80 端口
`--name` 指定容器的名字

#### 验证

-   浏览器访问[http://localhost:8081](http://localhost:8081)
-   运行 `docker ps` 查看所有进程中是否存在刚刚的容器`vue3_admin`
-   进入容器查看我们的 dist 文件运行`docker exec -it vue3_admin bash` 执行容器的 bash 命令，`-it` 指定交互式

### 自动化

1. 设置脚本 `deploy`
