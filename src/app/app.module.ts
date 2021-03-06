/*这个文件是 Angular 根模块， 告诉 Angular 如何组装应用*/

// BrowserModule 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';

// Angular 核心模块
import { NgModule } from '@angular/core';

// 组件模块 路由组件模块 根组件模块 自定义组件模块
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

// @NgModule装饰器 @NgModule接受一个元数据对象（就当做一个方法），告诉Angular如何编译和启动应用
@NgModule({
  declarations: [  // 配置当前项目运行的组件
    AppComponent,
    NewsComponent
  ],
  imports: [  // 配置当前模块运行依赖的其他模块
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  // 配置项目所需要的服务
  bootstrap: [AppComponent] // 指定应用的主视图(称为根组件) 通过引导根 AppModule 来启动应用， 这里一般写的是根组件
})

// 暴露根模块  跟模块不需要导出任何东西， 因为其他组件不需要导入根模块
export class AppModule { }
