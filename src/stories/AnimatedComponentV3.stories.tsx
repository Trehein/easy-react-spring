import React from 'react';
import { DemoBoxWithAnimation } from '../demoComponents/DemoBox/DemoBoxWithAnimations';

export default {
    title: 'DemoBoxWithAnimation',
    component: DemoBoxWithAnimation,
    argTypes: {},
}

export enum DemoSpringArray {
    EverySpring = 'EverySpring'
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
            activeRotateZ={args.activeRotateZ}
            passiveRotateZ={args.passiveRotateZ}
            activeScale={args.activeScale}
            demoSpringArrayEnum={args.demoSpringArrayEnum}
        />
    )
}

const everyArgs = {
        activeBorderRadius: '20% 0% 0% 10%',
        passiveBorderRadius: '50% 50% 50% 50%',
        activeBackgroundColor: 'red', 
        passiveBackgroundColor: 'orange',
        activeTextColor: 'rebeccapurple',
        passiveTextColor: 'salmon',
        activeFontSize: '1em', 
        passiveFontSize: '1.5em', 
        activeHeight: '200px',
        passiveHeight: '250px', 
        activeWidth: '200px:', 
        passiveWidth: '250px',
        activeRotateZ: 270,
        passiveRotateZ: 0,
        activeScale: .5,
        passiveScale: 1,
        demoSpringArrayEnum: DemoSpringArray.EverySpring
    }

export const EverythingNotRecommended = Template.bind({});
EverythingNotRecommended.args = {
    ...everyArgs,
};
