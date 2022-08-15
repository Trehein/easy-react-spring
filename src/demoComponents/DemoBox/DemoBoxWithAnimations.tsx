import React, {useState} from 'react'
import { AnimatedComponent } from '../../components'
import { ActiveSpringsArray, SpringTypeEnum } from '../../components/AnimatedComponent/AnimatedComponentTypes'
import { DemoBox } from './DemoBox'

export const DemoBoxWithAnimation: React.FC = () => {
    const [isPassive, setIsPassive] = useState(true)
    const springs: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.BackgroundColorSpring,
            activeBackgroundColor: 'rebeccapurple',
            passiveBackgroundColor: 'salmon',
        },
        {
            springType: SpringTypeEnum.TextColorSpring,
            activeTextColor: 'salmon',
            passiveTextColor: 'rebeccapurple'
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