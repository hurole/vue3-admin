# Vue 3 + TypeScript + Vite + Ant-Design-Vue

## docker

### 部署
- 运行`npm run build`生成打包目录dist
- 创建Dockerfile文件，以nginx:stable镜像生成我们的项目镜像。
- 生成镜像：运行 `docker build -t hurole/vue3-admin:1.0.0` 生成镜像名为`hurole/vue3-admin`版本为1.0.0的本地镜像。
- 创建容器：运行 `docker run -d -p 8081:80 --name vue3_admin hurole/vue3-admin:1.0.0` 以上面生成的镜像创建容器，在后台运行，讲本机的8081端口与容器的80端口映射，指定容器名字为`vue3_admin`
- 验证: 浏览器访问`http://localhost:8081/`；运行docker ps 查看所有进程中是否存在刚刚的容器`vue3_admin`
- 进入容器查看我们的dist文件
运行`docker exec -it vue3_admin bash` 执行容器的bash命令，`-it` 指定交互式
### 自动化
- 设置脚本 `deploy`