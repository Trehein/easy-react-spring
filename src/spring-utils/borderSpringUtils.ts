import { useSpring } from 'react-spring'

export const borderRadiusSpring = (isPassive: boolean, activeBorderRadius: string, passiveBorderRadius: string): object => {
    // console.log('isPassive borderRadius', isPassive)
    return useSpring({
        // from: {
        //     borderRadius: isPassive ? passiveBorderRadius : activeBorderRadius 
        // },
        to: { 
            borderRadius: isPassive ? passiveBorderRadius : activeBorderRadius
        },
        config: {
            duration: 500
        },
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
        passiveBorderColor: string
    ): object => {
    return useSpring({
        to: { 
            borderWidth: isPassive ? passiveBorderWidth : activeBorderWidth,
            borderStyle: isPassive ? passiveBorderStyle : activeBorderStyle,
            borderColor: isPassive ? passiveBorderColor : activeBorderColor
        },
        config: {
            duration: 500
        },
        reverse: isPassive,
    })
}