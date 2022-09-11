import { useSpring } from "react-spring"
import { SpringConfigEnum } from "./springConfigUtils"
import { springConfigsSwitch } from "./springConfigUtils"

export const textColorSpring = (
        isPassive: boolean, 
        activeTextColor: string, 
        passiveTextColor: string,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            color: isPassive ? passiveTextColor : activeTextColor
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive
    })
} 

export const backgroundColorSpring = (
        isPassive: boolean, 
        activeBackgroundColor: string, 
        passiveBackgroundColor: string,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            backgroundColor: isPassive ? passiveBackgroundColor : activeBackgroundColor, 
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive
    })
}

export const opacitySpring = (
        isPassive: boolean, 
        activeOpacity: number, 
        passiveOpacity: number,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            opacity: isPassive ? passiveOpacity : activeOpacity, 
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive
    })
}
