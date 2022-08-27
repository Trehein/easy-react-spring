import React from 'react';
import { DemoBoxWithAnimation } from '../demoComponents/DemoBox/DemoBoxWithAnimations';

export default {
    title: 'DemoBoxWithAnimation',
    component: DemoBoxWithAnimation,
    argTypes: {
        activeBorderRadius: '20% 0% 0% 10%',
        passiveBorderRadius: '50% 50% 50% 50%',
        activeBackgroundColor: 'rebeccapurple', 
        passiveBackgroundColor: 'salmon',
        activeTextColor: 'salmon', 
        passiveTextColor: 'rebeccapurple', 
        activeFontSize: '1em', 
        passiveFontSize: '1.5em', 
        activeHeight: '200px',
        passiveHeight: '300px', 
        activeWidth: '200px:', 
        passiveWidth: '300px'
    },
}

const Template = (args: any) => {
    return (
        <DemoBoxWithAnimation 
            activeBorderRadius={args.activeBorderRadius}
            passiveBorderRadius={args.passiveBorderRadius}
            activeBackgroundColor={args.activeBackgroundColor}
            passiveBackgroundColor={args.passiveBackgroundColor}
            activeTextColor={args.activeTextColor}
            passiveTextColor={args.passiveTextColor} 
            activeFontSize={args.activeFontSize}
            passiveFontSize={args.passiveFontSize}
            activeHeight={args.activeHeight}
            passiveHeight={args.passiveHeight} 
            activeWidth={args.activeWidth} 
            passiveWidth={args.passiveWidth}
        />
    )
}

const defaultArgs = {
        // activeBorderRadius: '20% 0% 0% 10%',
        passiveBorderRadius: '50% 50% 50% 50%',
        activeBackgroundColor: 'red', 
        passiveBackgroundColor: 'orange',
        // activeTextColor: 'salmon', 
        // passiveTextColor: 'rebeccapurple', 
        activeFontSize: '1em', 
        passiveFontSize: '1.5em', 
        activeHeight: '200px',
        passiveHeight: '250px', 
        activeWidth: '200px:', 
        passiveWidth: '250px'
    }

export const Primary = Template.bind({});
Primary.args = {
    ...defaultArgs,
    activeBorderRadius: '20% 0% 0% 10%',
};
