import React, {useState} from 'react'
import { AnimatedComponent } from '../../components'
import { DemoSpringArray } from '../demoSprings/demoSpringEnums'
import { demoSpringSwitch } from '../demoSprings/demoSpringSwitch'
import { DemoBox } from './DemoBox'
import { DemoBoxStylesParams } from './demoBoxStyles'

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
    activeOpacity?: number,
    passiveOpacity?: number,
    activeBorderWidth?: string,
    passiveBorderWidth?: string,
    activeBorderStyle?: string,
    passiveBorderStyle?: string,
    activeBorderColor?: string,
    passiveBorderColor?: string,
    demoSpringArrayEnum: DemoSpringArray,
    animationButtonText: string,
    demoBoxText: string,
    demoBoxStyleParams: DemoBoxStylesParams
}

export const DemoBoxWithAnimation: React.FC<DemoBoxWithAnimationArgs> = (args) => {
    const [isPassive, setIsPassive] = useState(true)
    const springs = demoSpringSwitch(args.demoSpringArrayEnum, args)
    const {animationButtonText, demoBoxText, demoBoxStyleParams} = args

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <button 
                onClick={() => setIsPassive(!isPassive)}
                style={{width: 'fit-content'}}
            >
                {animationButtonText} 
            </button>
            <AnimatedComponent 
                isPassive={isPassive}
                springs={springs}
                demoBoxStyleParams={demoBoxStyleParams}
            >
                <DemoBox>
                    <div>{demoBoxText}</div>
                </DemoBox>
            </AnimatedComponent>
        </div>

    )
}