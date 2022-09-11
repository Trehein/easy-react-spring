import { useSpring } from "react-spring"
import { SpringConfigEnum } from "./springConfigUtils"
import { springConfigsSwitch } from "./springConfigUtils"

export const rotateZSpring = (
        isPassive: boolean, 
        activeRotateZ: number, 
        passiveRotateZ: number,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            rotateZ: isPassive ? passiveRotateZ : activeRotateZ
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive
    })
} 