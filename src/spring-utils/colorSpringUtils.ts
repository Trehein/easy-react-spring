import { useSpring } from "react-spring"

export const textColorSpring = (
        isPassive: boolean, 
        activeTextColor: string, 
        passiveTextColor: string
    ): object => {
    return useSpring({
        to: { 
            color: isPassive ? passiveTextColor : activeTextColor
        },
        config: {
            duration: 500
        },
        reverse: isPassive
    })
} 

export const backgroundColorSpring = (
        isPassive: boolean, 
        activeBackgroundColor: string, 
        passiveBackgroundColor: string
    ): object => {
    return useSpring({
        to: { 
            backgroundColor: isPassive ? passiveBackgroundColor : activeBackgroundColor, 
        },
        config: {
            duration: 500
        },
        reverse: isPassive
    })
}

export const opacitySpring = (
        isPassive: boolean, 
        activeOpacity: number, 
        passiveOpacity: number
    ): object => {
    // console.log('in opacity spring', passiveOpacity, activeOpacity)
    return useSpring({
        to: { 
            opacity: isPassive ? passiveOpacity : activeOpacity, 
        },
        config: {
            duration: 500
        },
        reverse: isPassive
    })
}
