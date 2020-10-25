# Angular 组件开发

通过AngularCli 创建组件, 打开命令行工具 

## 创建组件
// 创建
ng g component 组件名称
> ng g component news

// 指定目录创建组件/
ng g component 指定目录+组件名称
> ng g component components/news

// 使用
在 app.module.ts 根组件中使用, 一般使用命令行工具创建会自动引入
> import { NewsComponent } from './components/news/news.component';
> 在根组件引入之后，可以在其他组件中使用，当html标签使用就行

// 在html中使用
直接当标签使用就行 "<app-news></app-news>"