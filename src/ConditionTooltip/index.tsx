/*
 * @Author: your name
 * @Date: 2021-06-27 17:30:07
 * @LastEditTime: 2021-06-28 22:28:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pomelo-design/src/ConditionTooltip/index.tsx
 */
import React,{useState,useRef,useEffect} from 'react';
import { Tooltip } from 'antd';
import type {TooltipProps} from 'antd';
import style from './index.less'

export interface ITooltipProps{
   title:string;  // 提示的文字
   tooltipProps?:TooltipProps,  // antd组件Tooltip的属性（除title)
   isMutipleLine?:boolean | {line:number}  // 是否多行显示
}
type ConditionTooltipProps = TooltipProps & ITooltipProps


const ConditionTooltip :React.FC<ConditionTooltipProps>=(props)=>{
    const {title} = props;
    const tooltipRef=useRef(null)
    const [visible,setVisible]=useState(false); // 是否显示提示
    const [isMultiple,setIsMultiple] = useState(false); // 是否显示多行
    const [mulLineCount,setMulLineCount]=useState(2); // 默认多行显示的行数
    const content = props.children?props.children:title;

    useEffect(()=>{
        const currentElement=tooltipRef?.current;
        if(tooltipRef && currentElement){
            const parentWidth = (currentElement as any).parentNode.offsetWidth;
            const contentWidth = (currentElement as any).offsetWidth;
            let isMultipleLine=false;
            let lineCount=1;
            if(props.isMutipleLine){ // 判断是否多行显示
                isMultipleLine=true
                lineCount=typeof props.isMutipleLine === 'boolean'?2:props.isMutipleLine.line;
            }
            // 判断是否开启tooltip功能
            if (contentWidth>parentWidth*lineCount) {
                setVisible(true);
            } else {
                setVisible(false);
            }
            setIsMultiple(isMultipleLine)
            setMulLineCount(lineCount)
        }
    },[props.isMutipleLine])
    // 合并之后的属性
    const mergeProps=props.tooltipProps?{
        ...props.tooltipProps,
        title
    }:{title};
    return  (
        <React.Fragment>
          {
              visible?
              <Tooltip {...mergeProps}>
                  <div 
                    className={isMultiple?`${style.tooltipMultiple}`:`${style.tooltipSingle}`}
                    style={{'WebkitLineClamp':mulLineCount}}
                  >
                      {content}
                  </div>
              </Tooltip>
              :
            <div
                className={isMultiple && !visible?`${style.tooltipMultiple}`:`${style.tooltipSingle}`}
                style={isMultiple?{'WebkitLineClamp':mulLineCount}:{}}
            >
                <span ref={tooltipRef}>{content}</span>
            </div>
          }
        </React.Fragment>
       
    )
}
export default ConditionTooltip