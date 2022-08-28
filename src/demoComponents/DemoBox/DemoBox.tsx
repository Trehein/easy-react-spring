import React from 'react'
import { demoBoxStyles} from './demoBoxStyles'

export const DemoBox = (props: {children: React.ReactNode}) => {
    const {children} = props

    const demoBoxClasses = demoBoxStyles()
    return (
        <div style={demoBoxClasses.demoBox}>
            {children}
        </div>
    )
}