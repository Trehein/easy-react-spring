import { useSpring } from 'react-spring'

export const borderRadiusSpring = (isPassive: boolean, passiveBorderRadius: string, activeBorderRadius: string): object => {
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