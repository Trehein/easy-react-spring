import React from 'react';
import { DemoBoxWithAnimation } from '../demoComponents/DemoBox/DemoBoxWithAnimations';
import { DemoSpringArray } from '../demoComponents/demoSprings/demoSpringEnums';

export default {
    title: 'Animated Component Examples',
    component: DemoBoxWithAnimation,
    argTypes: {},
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
            passiveScale={args.passiveScale}
            activeOpacity={args.activeOpacity}
            passiveOpacity={args.passiveOpacity}
            activeBorderWidth={args.activeBorder}
            passiveBorderWidth={args.passiveBorder}
            activeBorderStyle={args.activeBorderStyle}
            passiveBorderStyle={args.passiveBorder}
            activeBorderColor={args.activeBorderColor}
            passiveBorderColor={args.passiveBorderColor}
            demoSpringArrayEnum={args.demoSpringArrayEnum}
        />
    )
}

const backgroundColorArgs = {
        activeBackgroundColor: 'red', 
        passiveBackgroundColor: 'orange',
        demoSpringArrayEnum: DemoSpringArray.BackgroundColorSpring
    }

export const BackgroundColorSpring = Template.bind({});
BackgroundColorSpring.args = {
    ...backgroundColorArgs,
};

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
        activeOpacity: 0,
        passiveOpacity: 1,
        activeBorderWidth: '2px',
        passiveBorderWidth: '5px',
        activeBorderStyle: 'dashed',
        passiveBorderStyle: 'solid',
        activeBorderColor: 'green',
        passiveBorderColor: 'black',
        demoSpringArrayEnum: DemoSpringArray.EverySpring
    }

export const EverythingNotRecommended = Template.bind({});
EverythingNotRecommended.args = {
    ...everyArgs,
};
