import React, {useState} from 'react'
import { AnimatedComponent } from '../../components'
import { ActiveSpringsArray, SpringTypeEnum } from '../../components/AnimatedComponent/AnimatedComponentTypes'
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
    passiveBorderRadius?: string
}

export const DemoBoxWithAnimation: React.FC<DemoBoxWithAnimationArgs> = (args) => {
    const {
        activeBackgroundColor, 
        passiveBackgroundColor,
        activeTextColor, 
        passiveTextColor, 
        activeFontSize, 
        passiveFontSize, 
        activeHeight,
        passiveHeight, 
        activeWidth, 
        passiveWidth, 
        activeBorderRadius,
        passiveBorderRadius,
    } = args
    const [isPassive, setIsPassive] = useState(true)
    console.log(activeBorderRadius)
    const springs: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.BackgroundColorSpring,
            activeBackgroundColor: activeBackgroundColor ? activeBackgroundColor : 'rebeccapurple',
            passiveBackgroundColor: passiveBackgroundColor ? passiveBackgroundColor : 'salmon',
        },
        {
            springType: SpringTypeEnum.TextColorSpring,
            activeTextColor: activeTextColor ? activeTextColor : 'salmon',
            passiveTextColor: passiveTextColor ? passiveTextColor : 'rebeccapurple'
        },
        {
            springType: SpringTypeEnum.FontSizeSpring,
            activeFontSize: activeFontSize ? activeFontSize : '1.5em',
            passiveFontSize: passiveFontSize ? passiveFontSize : '1em'
        },
        {
            springType: SpringTypeEnum.HeightSpring,
            activeHeight: activeHeight ? activeHeight : '250px',
            passiveHeight: passiveHeight ? passiveHeight : '200px'
        },
        {
            springType: SpringTypeEnum.WidthSpring,
            activeWidth: activeWidth ? activeWidth : '250px',
            passiveWidth: passiveWidth ? passiveWidth : '200px'
        },
        {
            springType: SpringTypeEnum.BorderRadiusSpring,
            activeBorderRadius: activeBorderRadius ? activeBorderRadius : '50% 0% 0% 50%',
            passiveBorderRadius: passiveBorderRadius ? passiveBorderRadius : '50% 50% 50% 50%'
        }
    ]

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