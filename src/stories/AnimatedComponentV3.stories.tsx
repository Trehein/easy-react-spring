import React from 'react';
import { DemoBoxStylesParams } from '../demoComponents/DemoBox/demoBoxStyles';
import { DemoBoxWithAnimation } from '../demoComponents/DemoBox/DemoBoxWithAnimations';
import { DemoSpringArray } from '../demoComponents/demoSprings/demoSpringEnums';
import { SpringConfigEnum } from '../spring-utils';

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
            activeBorderWidth={args.activeBorderWidth}
            passiveBorderWidth={args.passiveBorderWidth}
            activeBorderStyle={args.activeBorderStyle}
            passiveBorderStyle={args.passiveBorderStyle}
            activeBorderColor={args.activeBorderColor}
            passiveBorderColor={args.passiveBorderColor}
            demoSpringArrayEnum={args.demoSpringArrayEnum}
            animationButtonText={args.animationButtonText}
            demoBoxText={args.demoBoxText}
            demoBoxStyleParams={args.demoBoxStyleParams}
            springConfig={args.springConfig}
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
        demoBoxStyleParams: backgroundColorBoxStyleParams,
        springConfig: SpringConfigEnum.DEFAULT
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
        demoBoxStyleParams: textColorBoxStyleParams,
        springConfig: SpringConfigEnum.DEFAULT
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
        demoBoxStyleParams: fontSizeBoxStyleParams,
        springConfig: SpringConfigEnum.WOBBLY
    }

export const FontSizeSpring = Template.bind({});
FontSizeSpring.args = {
    ...fontSizeArgs,
};

// Height Animation
const heightBoxStyleParams: DemoBoxStylesParams = {
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
        demoBoxStyleParams: heightBoxStyleParams,
        springConfig: SpringConfigEnum.WOBBLY
    }

export const HeightSpring = Template.bind({});
HeightSpring.args = {
    ...heightArgs
}

// Width Animation
const widthBoxStyleParams: DemoBoxStylesParams = {
    height: '250px',
    backgroundColor: 'orange',
    color: 'white'
}

const widthArgs = {
        activeWidth: '250px', 
        passiveWidth: '100px',
        demoSpringArrayEnum: DemoSpringArray.WidthSpring,
        animationButtonText: 'Change Width',
        demoBoxText: 'Width',
        demoBoxStyleParams: widthBoxStyleParams,
        springConfig: SpringConfigEnum.WOBBLY
    }

export const WidthSpring = Template.bind({});
WidthSpring.args = {
    ...widthArgs
}

// Border Radius Animation
const borderRadiusBoxStyleParams: DemoBoxStylesParams = {
    height: '200px',
    width: '200px',
    borderWidth: '.5em',
    borderStyle: 'solid',
    borderColor: 'black'
}

const borderRadiusArgs = {
        activeBorderRadius: '20% 0% 0% 10%',
        passiveBorderRadius: '50% 50% 50% 50%',
        demoSpringArrayEnum: DemoSpringArray.BorderRadiusSpring,
        animationButtonText: 'Change Border Radius',
        demoBoxText: 'Border Radius',
        demoBoxStyleParams: borderRadiusBoxStyleParams,
        springConfig: SpringConfigEnum.WOBBLY
    }

export const BorderRadiusSpring = Template.bind({});
BorderRadiusSpring.args = {
    ...borderRadiusArgs
}

// Rotate Z Animation
const rotateZBoxStyleParams: DemoBoxStylesParams = {
    height: '200px',
    width: '200px',
    borderWidth: '.25em',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: '50% 0% 0% 0%'
}

const rotateZArgs = {
    activeRotateZ: 540,
    passiveRotateZ: 0,
    demoSpringArrayEnum: DemoSpringArray.RotateZSpring,
    animationButtonText: 'Change Rotate Z',
    demoBoxText: 'Rotate Z',
    demoBoxStyleParams: rotateZBoxStyleParams,
    springConfig: SpringConfigEnum.WOBBLY
}

export const RotateZSpring = Template.bind({})
RotateZSpring.args = {
    ...rotateZArgs
}

// Scale Spring Animation
const scaleBoxStyleParams: DemoBoxStylesParams = {
    height: '200px',
    width: '200px',
    borderWidth: '.25em',
    borderStyle: 'solid',
    borderColor: 'black',
    fontSize: '2em'
}

const scaleArgs = {
    activeScale: .5,
    passiveScale: 1,
    demoSpringArrayEnum: DemoSpringArray.ScaleSpring,
    animationButtonText: 'Change Scale',
    demoBoxText: 'Scale',
    demoBoxStyleParams: scaleBoxStyleParams,
    springConfig: SpringConfigEnum.WOBBLY
}

export const ScaleSpring = Template.bind({})
ScaleSpring.args = {
    ...scaleArgs
}

// Opacity Spring Animation
const opacityBoxStyleParams: DemoBoxStylesParams = {
    height: '200px',
    width: '200px',
    borderWidth: '.25em',
    borderStyle: 'solid',
    borderColor: 'black',
    fontSize: '2em',
    backgroundColor: 'orange'
}

const opacityArgs = {
    activeOpacity: .1,
    passiveOpacity: 1,
    demoSpringArrayEnum: DemoSpringArray.OpacitySpring,
    animationButtonText: 'Change Opacity',
    demoBoxText: 'Opacity',
    demoBoxStyleParams: opacityBoxStyleParams,
    springConfig: SpringConfigEnum.WOBBLY
}

export const OpacitySpring = Template.bind({})
OpacitySpring.args = {
    ...opacityArgs
}

// Border Spring Animations
const borderBoxStyleParams: DemoBoxStylesParams = {
    height: '200px',
    width: '200px',
    fontSize: '2em',
}

const borderArgs = {
    activeBorderWidth: '.1em',
    passiveBorderWidth: '.25em',
    activeBorderStyle: 'solid',
    passiveBorderStyle: 'solid',
    activeBorderColor: 'red',
    passiveBorderColor: 'blue',
    demoSpringArrayEnum: DemoSpringArray.BorderSpring,
    animationButtonText: 'Change Border',
    demoBoxText: 'Border',
    demoBoxStyleParams: borderBoxStyleParams,
    springConfig: SpringConfigEnum.WOBBLY
}

export const BorderSpring = Template.bind({})
BorderSpring.args = {
    ...borderArgs
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
        demoBoxStyleParams: everyBoxStyleParams,
        springConfig: SpringConfigEnum.WOBBLY
    }

export const Everything = Template.bind({});
Everything.args = {
    ...everyArgs,
};
