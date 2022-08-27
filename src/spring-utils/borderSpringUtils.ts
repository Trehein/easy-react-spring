import { useSpring } from 'react-spring'

export const borderRadiusSpring = (isPassive: boolean, activeBorderRadius: string, passiveBorderRadius: string): object => {
    console.log('isPassive borderRadius', isPassive)
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