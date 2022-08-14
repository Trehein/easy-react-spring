import { useSpring } from "react-spring"

export const scaleSpring = (isActive: boolean, activeScale: number): object => {
    return useSpring({
        from: { scale: 1 },
        to: { scale: activeScale},
        config: {
            duration: 500
        },
        reverse: isActive    
    })
} 

export const fontSizeSpring = (isActive: boolean, activeFontSize: string): object => {
    return useSpring({
        from: { fontSize: '1em' },
        to: { fontSize: activeFontSize },
        config: {
            duration: 500
        },
        reverse: isActive    
    })
}

export const heightSpring = (isActive: boolean, activeHeight: string): object => {
    return useSpring({
        from: { 
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        to: { 
            height: activeHeight, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        config: {
            duration: 500
        },
        reverse: isActive  
    })
}

export const widthSpring = (isActive: boolean, activeWidth: string): object => {
    return useSpring({
        from: { 
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        to: { 
            width: activeWidth, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif'
        },
        config: {
            duration: 500
        },
        reverse: isActive  
    })
}