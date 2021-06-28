<!--
 * @Author: your name
 * @Date: 2021-06-27 17:30:12
 * @LastEditTime: 2021-06-28 22:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pomelo-design/src/ConditionTooltip/index.md
-->
## ConditionTooltip
##### 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。
在固定宽度下，超出宽度则会出现悬浮提示，没有超出宽度则没有提示
##### 代码演示
Demo:

```tsx
import React from 'react';
import { ConditionTooltip } from 'pomelo-design';
const TooltipDemo=()=>{
    return (
    <div style={{width:'150px'}}>
        <div>
            <h5>鼠标悬浮没有提示的</h5>
            <ConditionTooltip  title="提示组件"/>
        </div>
        <div style={{paddingTop:'20px'}}>
            <h5>鼠标悬浮有提示的</h5>
            <ConditionTooltip  title="提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了提示组件太难了"/>
        </div>
    </div>
)
}
export default () => <TooltipDemo  />;
```
##### 其他使用
参考antd的Tooltip组件的相关配置： https://ant.design/components/tooltip-cn/
###### Demo1:更改背景颜色和触发方式
```tsx
import React from 'react';
import { ConditionTooltip } from 'pomelo-design';
const TooltipDemo2=()=>{
    const tooltipProps={
      color:'#f00',
      trigger:'click',
      placement:'bottom'
    }
    return (
        <div style={{width:'100px'}}>
           
            <ConditionTooltip  title='tooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipPropstooltipProps' tooltipProps={tooltipProps} />
        </div>
    )
}
export default () => <TooltipDemo2  />;
```
###### Demo2:多行省略号
```tsx
import React from 'react';
import { ConditionTooltip } from 'pomelo-design';
const TooltipDemo3=()=>{
    const content="哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈啊";
    return (
        <div style={{width:'100px'}}>
            <ConditionTooltip  title='我们' isMutipleLine={{line:3}}>
                {content}
            </ConditionTooltip>
        </div>
    )
}
export default () => <TooltipDemo3  />;
```

##### 属性
|属性名称|属性说明|属性类型|是否必填|
|:-----------  |:----------- |:--------- |:-------- |
|title|提示文字|ReactNode () => ReactNode|是
|tooltipProps|antd组件Tooltip的属性(除了title)|Object|否
|isMutipleLine|是否多行显示|boolean或者Object|否


##### 注意事项
1. 当希望多行显示的时候,ConditionTooltip的children只能是string