import React from 'react'
import { springStylesConstructor } from '../../spring-utils'
import { animated } from 'react-spring'
import { ActiveSpringsArray } from './AnimatedComponentTypes'
import { DemoBoxStylesParams } from '../../demoComponents/DemoBox/demoBoxStyles'

export type AnimatedComponentProps = {
    children: React.ReactNode,
    isPassive: boolean,
    springs: ActiveSpringsArray,
    demoBoxStyleParams: DemoBoxStylesParams
}

export const AnimatedComponent: React.FC<AnimatedComponentProps> = (props) => {
    const {isPassive, springs, children, demoBoxStyleParams} = props
    const springStyles = springStylesConstructor({isPassive, springs})
        
    return (
        <animated.div style={{
            ...springStyles,
            ...demoBoxStyleParams
        }}>
            {children}
        </animated.div>
    )
}