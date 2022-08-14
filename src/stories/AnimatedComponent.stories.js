import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { AnimatedComponent } from '../components'
import {DemoBox} from '../demoComponents'

const stories = storiesOf('Animated Component Test', module)

stories.add('Animated Component', () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div 
            onClick={() => setIsActive(!isActive)}
            style={{cursor: 'pointer', height: '200px', width: '200px'}}
        >
            <AnimatedComponent 
                isActive={isActive}
            >
                <DemoBox>
                    <div>Test Component</div>
                </DemoBox>
            </AnimatedComponent>
        </div>
    )
})