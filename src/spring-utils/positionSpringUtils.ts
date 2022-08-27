import { useSpring } from "react-spring"

export const rotateZSpring = (
        isPassive: boolean, 
        activeRotateZ: number, 
        passiveRotateZ: number
    ): object => {
    return useSpring({
        to: { 
            rotateZ: isPassive ? passiveRotateZ : activeRotateZ
        },
        config: {
            duration: 500
        },
        reverse: isPassive
    })
} 