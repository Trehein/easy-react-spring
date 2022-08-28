import React from 'react';
import { DemoBoxStylesParams } from '../demoComponents/DemoBox/demoBoxStyles';
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
            animationButtonText={args.animationButtonText}
            demoBoxText={args.demoBoxText}
            demoBoxStyleParams={args.demoBoxStyleParams}
        />
    )
}

// Background Color Animation
const backgroundColorBoxStyleParams: DemoBoxStylesParams = {
    height: '300px',
    width: '400px',
    color: 'white'
}

const backgroundColorArgs = {
        activeBackgroundColor: 'red', 
        passiveBackgroundColor: 'orange',
        demoSpringArrayEnum: DemoSpringArray.BackgroundColorSpring,
        animationButtonText: 'Change Background Color',
        demoBoxText: 'Background Color',
        demoBoxStyleParams: backgroundColorBoxStyleParams
    }

export const BackgroundColorSpring = Template.bind({});
BackgroundColorSpring.args = {
    ...backgroundColorArgs,
};

// Text Color Animation
const textColorBoxStyleParams: DemoBoxStylesParams = {
    height: '200px',
    width: '200px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '.2em',
    fontSize: '2.5em'
}

const textColorArgs = {
        activeTextColor: 'orange', 
        passiveTextColor: 'black',
        demoSpringArrayEnum: DemoSpringArray.TextColorSpring,
        animationButtonText: 'Change Text Color',
        demoBoxText: 'Text Color',
        demoBoxStyleParams: textColorBoxStyleParams
    }

export const TextColorSpring = Template.bind({});
TextColorSpring.args = {
    ...textColorArgs,
};

// Font Size Animation
const fontSizeBoxStyleParams: DemoBoxStylesParams = {
    height: '200px',
    width: '200px',
}

const fontSizeArgs = {
        activeFontSize: '2.5em', 
        passiveFontSize: '1em',
        demoSpringArrayEnum: DemoSpringArray.FontSizeSpring,
        animationButtonText: 'Change Font Size',
        demoBoxText: 'Font Size',
        demoBoxStyleParams: fontSizeBoxStyleParams
    }

export const FontSizeSpring = Template.bind({});
FontSizeSpring.args = {
    ...fontSizeArgs,
};

// Height Animation
const heightSizeBoxStyleParams: DemoBoxStylesParams = {
    width: '200px',
    backgroundColor: 'orange',
    color: 'white'
}

const heightArgs = {
        activeHeight: '5em', 
        passiveHeight: '1em',
        demoSpringArrayEnum: DemoSpringArray.HeightSpring,
        animationButtonText: 'Change Height',
        demoBoxText: 'Height',
        demoBoxStyleParams: heightSizeBoxStyleParams
    }

export const HeightSpring = Template.bind({});
HeightSpring.args = {
    ...heightArgs
}

// Every available animation at once... Don't do this
const everyBoxStyleParams: DemoBoxStylesParams = {
    height: '250px',
    width: '250px'
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
        activeOpacity: 0,
        passiveOpacity: 1,
        activeBorderWidth: '2px',
        passiveBorderWidth: '5px',
        activeBorderStyle: 'dashed',
        passiveBorderStyle: 'solid',
        activeBorderColor: 'green',
        passiveBorderColor: 'black',
        demoSpringArrayEnum: DemoSpringArray.EverySpring,
        animationButtonText: 'Change Everything',
        demoBoxText: 'Everything',
        demoBoxStyleParams: everyBoxStyleParams
    }

export const Everything = Template.bind({});
Everything.args = {
    ...everyArgs,
};
