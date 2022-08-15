import React from 'react';
import { DemoBoxWithAnimation } from '../demoComponents/DemoBox/DemoBoxWithAnimations';

export default {
    title: 'DemoBoxWithAnimation',
    component: DemoBoxWithAnimation,
    argTypes: {
        borderRadius: '25%'
    },
}

const Template = (args: any) => {
    return (
        <DemoBoxWithAnimation />
    )
}

export const Primary = Template.bind({});
Primary.args = {
    borderRadius: '50%',
};
