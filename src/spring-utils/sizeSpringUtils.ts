import { useSpring } from "react-spring"
import { SpringConfigEnum } from "./springConfigUtils"
import { springConfigsSwitch } from "./springConfigUtils"

export const scaleSpring = (
        isPassive: boolean, 
        activeScale: number, 
        passiveScale: number,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            scale: isPassive ? passiveScale : activeScale
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive    
    })
} 

export const fontSizeSpring = (
        isPassive: boolean, 
        activeFontSize: string, 
        passiveFontSize: string,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            fontSize: isPassive ? passiveFontSize : activeFontSize 
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive    
    })
}

export const heightSpring = (
        isPassive: boolean, 
        activeHeight: string, 
        passiveHeight: string,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            height: isPassive ? passiveHeight : activeHeight, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive  
    })
}

export const widthSpring = (
        isActive: boolean, 
        activeWidth: string, 
        passiveWidth: string,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            width: isActive ? passiveWidth : activeWidth, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isActive  
    })
}