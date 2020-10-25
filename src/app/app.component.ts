import { Component } from '@angular/core'; // 从 @angular 中导入组件方法

@Component({
  selector: 'app-root', // 使用这个组件的名称
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.scss'] // css
})

// 暴露 AppComponent 模块
export class AppComponent {
  title = 'a-ts-project'; //定义属性

  constructor() {/*构造函数*/}
}
