import React, {useState} from 'react'
import { AnimatedComponent } from '../../components'
import { DemoBox } from './DemoBox'

export const DemoBoxWithAnimation: React.FC = () => {
    const [isPassive, setIsPassive] = useState(true)

    return (
        <div 
            onClick={() => setIsPassive(!isPassive)}
            style={{cursor: 'pointer', height: '200px', width: '200px'}}
        >
            <AnimatedComponent 
                isPassive={isPassive}
            >
                <DemoBox>
                    <div>Test Component</div>
                </DemoBox>
            </AnimatedComponent>
        </div>
    )
}