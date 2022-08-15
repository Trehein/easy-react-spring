import React from 'react'
import { springStylesConstructor } from '../../spring-utils'
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
    
    const {children} = props
    
    return (
        <animated.div style={{
            ...springStyles
        }}>
            {children}
        </animated.div>
    )
}