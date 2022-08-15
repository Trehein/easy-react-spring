import { useSpring } from "react-spring"

export const scaleSpring = (isPassive: boolean, activeScale: number, passiveScale: number): object => {
    return useSpring({
        to: { 
            scale: isPassive ? passiveScale : activeScale
        },
        config: {
            duration: 500
        },
        reverse: isPassive    
    })
} 

export const fontSizeSpring = (isPassive: boolean, activeFontSize: string, passiveFontSize: string): object => {
    return useSpring({
        to: { 
            fontSize: isPassive ? passiveFontSize : activeFontSize 
        },
        config: {
            duration: 500
        },
        reverse: isPassive    
    })
}

export const heightSpring = (isPassive: boolean, activeHeight: string, passiveHeight: string): object => {
    return useSpring({
        to: { 
            height: isPassive ? passiveHeight : activeHeight, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        config: {
            duration: 500
        },
        reverse: isPassive  
    })
}

export const widthSpring = (isActive: boolean, activeWidth: string, passiveWidth: string): object => {
    return useSpring({
        to: { 
            width: isActive ? passiveWidth : activeWidth, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        config: {
            duration: 500
        },
        reverse: isActive  
    })
}