import React from 'react'
import { backgroundColorSpring, heightSpring, fontSizeSpring, scaleSpring, textColorSpring, widthSpring, borderRadiusSpring, springStylesConstructor } from '../../spring-utils'
import { animated } from 'react-spring'
import { ActiveSpringsArray } from './AnimatedComponentTypes'

export type AnimatedComponentProps = {
    children: React.ReactNode,
    isPassive: boolean,
    springs: ActiveSpringsArray
}

export const AnimatedComponent: React.FC<AnimatedComponentProps> = (props) => {
    const {isPassive, springs} = props

    const springStyles = springStylesConstructor({isPassive, springs})

    const backgroundColorSpringStyles = backgroundColorSpring(isPassive, 'salmon', 'rebeccapurple')
    const textColorSpringStyles = textColorSpring(isPassive, 'rebeccapurple', 'salmon')
    const scaleSpringStyles = scaleSpring(isPassive, 1, 1.25)
    const fontSizeSpringStyles = fontSizeSpring(isPassive, '1em', '1.25em')
    const heightSpringStyles = heightSpring(isPassive, '200px', '400px')
    const widthSpringStyles = widthSpring(isPassive, '200px', '400px')
    const borderRadiusSpringStyles = borderRadiusSpring(isPassive, '50% 50% 50% 50%', '50% 0% 0% 50%')


    
    const {children} = props
    
    return (
        <>
            {
                <animated.div style={{
                    // ...backgroundColorSpringStyles, 
                    ...textColorSpringStyles, 
                    ...fontSizeSpringStyles, 
                    ...heightSpringStyles, 
                    ...widthSpringStyles,
                    ...borderRadiusSpringStyles,
                    ...springStyles
                }}>
                    {children}
                </animated.div>
            }
        </>
    )
}