import { useSpring } from "react-spring"

export const textColorSpring = (isActive: boolean, activeColor: string, passiveColor: string): object => {
    return useSpring({
        from: { color: passiveColor },
        to: { color: activeColor},
        config: {
            duration: 500

        },
        reverse: isActive
    })
} 

export const backgroundColorSpring = (isActive: boolean, activeColor: string, passiveColor: string): object => {
    return useSpring({
        from: { 
            backgroundColor: passiveColor, 
        },
        to: { 
            backgroundColor: activeColor, 
        },
        config: {
            duration: 500
        },
        reverse: isActive
    })
}
