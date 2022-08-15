import { useSpring } from 'react-spring'

export const borderRadiusSpring = (isPassive: boolean, activeBorderRadius: string, passiveBorderRadius: string): object => {
    return useSpring({
        to: { 
            borderRadius: isPassive ? passiveBorderRadius : activeBorderRadius
        },
        config: {
            duration: 500
        },
        reverse: isPassive    
    })
} 