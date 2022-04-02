# 安装
`npm install wb-color`
# 引入
`const wbColor = require('wb-color');`
# 获取随机颜色
```js
wbColor.getColor();//返回单个字符串颜色'#66aab1'
wbColor.getColor(3);//返回单个字符串是三个颜色'#e121e1,#23a121,#43bb32'
wbColor.getColor('3');//返回单个字符串是三个颜色'#e121e1,#23a121,#43bb32'
wbColor.getColor('Arrary',3);//返回数组['#e121e1','#23a121','#43bb32'],参数不区分大小写
wbColor.getColor('Arr','3');//返回数组['#e121e1','#23a121','#43bb32']，,参数不区分大小写
```
# 控制台打印
```js
wbColor.consoleColor('Hello World!');//控制台打印带有特殊样式的文本'Hello World!'
wbColor.consoleColor('Hello World!','color:red;font-size:16px');//控制台打印自定义样式的文本'Hello World!'
```