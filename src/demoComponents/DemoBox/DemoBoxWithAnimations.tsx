import React, {useState} from 'react'
import { AnimatedComponent } from '../../components'
import { DemoSpringArray } from '../../stories/AnimatedComponentV3.stories'
import { demoSpringSwitch } from '../demoSprings/demoSpringSwitch'
import { DemoBox } from './DemoBox'

export type DemoBoxWithAnimationArgs = {
    activeBackgroundColor?: string,
    passiveBackgroundColor?: string,
    activeTextColor?: string,
    passiveTextColor?: string,
    activeFontSize?: string,
    passiveFontSize?: string,
    activeHeight?: string,
    passiveHeight?: string,
    activeWidth?: string,
    passiveWidth?: string,
    activeBorderRadius?: string,
    passiveBorderRadius?: string,
    activeRotateZ?: number,
    passiveRotateZ?: number,
    activeScale?: number,
    passiveScale?: number,
    demoSpringArrayEnum: DemoSpringArray
}

export const DemoBoxWithAnimation: React.FC<DemoBoxWithAnimationArgs> = (args) => {
    const [isPassive, setIsPassive] = useState(true)
    const springs = demoSpringSwitch(args.demoSpringArrayEnum, args)

    return (
        <div 
            onClick={() => setIsPassive(!isPassive)}
            style={{cursor: 'pointer', height: '200px', width: '200px'}}
        >
            <AnimatedComponent 
                isPassive={isPassive}
                springs={springs}
            >
                <DemoBox>
                    <div>Test Component</div>
                </DemoBox>
            </AnimatedComponent>
        </div>
    )
}