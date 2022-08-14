import { useSpring } from 'react-spring'

export const borderRadiusSpring = (isActive: boolean, activeBorderRadius: string): object => {
    return useSpring({
        from: { 
            borderRadius: '50% 50% 50% 50%' 
        },
        to: { 
            borderRadius: activeBorderRadius
        },
        config: {
            duration: 500
        },
        reverse: isActive    
    })
} 