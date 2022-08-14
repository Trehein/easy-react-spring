import React from 'react'
import { backgroundColorSpring, heightSpring, fontSizeSpring, scaleSpring, textColorSpring, widthSpring, borderRadiusSpring } from '../../spring-utils'
import { animated } from 'react-spring'

export type AnimatedComponentProps = {
    children: React.ReactNode,
    isActive: boolean
}

export const AnimatedComponent: React.FC<AnimatedComponentProps> = (props) => {
    const {isActive} = props
    const backgroundColorSpringStyles = backgroundColorSpring(isActive, '#333333', '#999999')
    const textColorSpringStyles = textColorSpring(isActive, 'black', 'yellow')
    const scaleSpringStyles = scaleSpring(isActive, 1.25)
    const fontSizeSpringStyles = fontSizeSpring(isActive, '1.25em')
    const heightSpringStyles = heightSpring(isActive, '400px')
    const widthSpringStyles = widthSpring(isActive, '400px')
    const borderRadiusSpringStyles = borderRadiusSpring(isActive, '50% 0% 0% 50%')
    
    const {children} = props
    
    return (
        <animated.div style={{
            ...backgroundColorSpringStyles, 
            ...textColorSpringStyles, 
            ...fontSizeSpringStyles, 
            ...heightSpringStyles, 
            ...widthSpringStyles,
            ...borderRadiusSpringStyles
        }}>
            {children}
        </animated.div>
    )
}