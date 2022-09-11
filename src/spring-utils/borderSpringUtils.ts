import { useSpring } from 'react-spring'
import { SpringConfigEnum, springConfigsSwitch } from './springConfigUtils'

export const borderRadiusSpring = (
        isPassive: boolean, 
        activeBorderRadius: string, 
        passiveBorderRadius: string,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        // from: {
        //     borderRadius: isPassive ? passiveBorderRadius : activeBorderRadius 
        // },
        to: { 
            borderRadius: isPassive ? passiveBorderRadius : activeBorderRadius
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive,
        // loop: isPassive    
    })
} 

export const borderSpring = (
        isPassive: boolean, 
        activeBorderWidth: string, 
        passiveBorderWidth: string, 
        activeBorderStyle: string,
        passiveBorderStyle: string,
        activeBorderColor: string,
        passiveBorderColor: string,
        springConfig?: SpringConfigEnum
    ): object => {
    return useSpring({
        to: { 
            borderWidth: isPassive ? passiveBorderWidth : activeBorderWidth,
            borderStyle: isPassive ? passiveBorderStyle : activeBorderStyle,
            borderColor: isPassive ? passiveBorderColor : activeBorderColor
        },
        config: springConfig ? springConfigsSwitch(springConfig) : { duration: 500 },
        reverse: isPassive,
    })
}