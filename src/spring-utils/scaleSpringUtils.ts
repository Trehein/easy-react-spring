import { useSpring } from "react-spring"

export const scaleSpring = (isPassive: boolean, passiveScale: number, activeScale: number): object => {
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

export const fontSizeSpring = (isPassive: boolean, passiveFontSize: string, activeFontSize: string): object => {
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

export const heightSpring = (isPassive: boolean, passiveHeight: string, activeHeight: string): object => {
    return useSpring({
        // enter: { 
        //     height: !isActive ? passiveHeight : activeHeight, 
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     fontFamily: 'sans-serif'
        // },
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

export const widthSpring = (isActive: boolean, passiveWidth: string, activeWidth: string): object => {
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