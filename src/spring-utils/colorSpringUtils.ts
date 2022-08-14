import { useSpring } from "react-spring"

export const textColorSpring = (isPassive: boolean, activeColor: string, passiveColor: string): object => {
    return useSpring({
        to: { 
            color: isPassive ? passiveColor : activeColor
        },
        config: {
            duration: 500
        },
        reverse: isPassive
    })
} 

export const backgroundColorSpring = (isPassive: boolean, activeColor: string, passiveColor: string): object => {
    return useSpring({
        to: { 
            backgroundColor: isPassive ? passiveColor : activeColor, 
        },
        config: {
            duration: 500
        },
        reverse: isPassive
    })
}
