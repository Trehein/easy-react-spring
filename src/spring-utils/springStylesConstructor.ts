import { ActiveSpringsArray, SpringTypeEnum } from "../components/AnimatedComponent/AnimatedComponentTypes"
import { borderRadiusSpring, borderSpring } from "./borderSpringUtils"
import { backgroundColorSpring, opacitySpring, textColorSpring } from "./colorSpringUtils"
import { fontSizeSpring, heightSpring, scaleSpring, widthSpring } from "./sizeSpringUtils"
import { rotateZSpring } from "./positionSpringUtils"
import { SpringConfigEnum } from "./springConfigUtils"

export type SpringStylesConstructorParams = {
    springs: ActiveSpringsArray,
    isPassive: boolean,
    springConfig?: SpringConfigEnum
} 

export const springStylesConstructor = (params: SpringStylesConstructorParams): object => {
    const {isPassive, springs, springConfig} = params
    let springStylesObj: object = {}

    springs.forEach((spring: any) => {
        const springStylesConstructorObj = springStylesConstructorTypeSwitch({isPassive, spring, springConfig})
        springStylesObj = {...springStylesObj, ...springStylesConstructorObj}
    })
    return springStylesObj
}

export type AvailableSpringParams = {
    springType?: SpringTypeEnum,
    springConfig?: SpringConfigEnum,
    activeBackgroundColor? : string,
    passiveBackgroundColor? : string,
    activeTextColor? : string,
    passiveTextColor? : string,
    activeScale? : number,
    passiveScale? : number,
    activeFontSize? : string,
    passiveFontSize? : string,
    activeWidth? : string,
    passiveWidth? : string,
    activeHeight? : string,
    passiveHeight? : string,
    activeBorderRadius? : string,
    passiveBorderRadius? : string,
    activeRotateZ? : number,
    passiveRotateZ? : number,
    activeOpacity? : number,
    passiveOpacity? : number,
    activeBorderWidth? : string,
    passiveBorderWidth? : string,
    activeBorderStyle? : string,
    passiveBorderStyle? : string,
    activeBorderColor? : string,
    passiveBorderColor? : string
}

export type SpringStylesConstructorTypeSwitchParams = {isPassive: boolean, spring: AvailableSpringParams, springConfig: SpringConfigEnum}

export const springStylesConstructorTypeSwitch = (params: SpringStylesConstructorTypeSwitchParams) => {

    const {isPassive, spring, springConfig} = params
    switch (spring.springType) {
        case SpringTypeEnum.BackgroundColorSpring : 
            return backgroundColorSpring(isPassive, spring.activeBackgroundColor, spring.passiveBackgroundColor, springConfig)
        case SpringTypeEnum.TextColorSpring :
            return textColorSpring(isPassive, spring.activeTextColor, spring.passiveTextColor, springConfig)
        case SpringTypeEnum.ScaleSpring : 
            return scaleSpring(isPassive, spring.activeScale, spring.passiveScale, springConfig)
        case SpringTypeEnum.FontSizeSpring :
            return fontSizeSpring(isPassive, spring.activeFontSize, spring.passiveFontSize, springConfig)
        case SpringTypeEnum.HeightSpring :
            return heightSpring(isPassive, spring.activeHeight, spring.passiveHeight, springConfig)
        case SpringTypeEnum.WidthSpring :
            return widthSpring(isPassive, spring.activeWidth, spring.passiveWidth, springConfig)
        case SpringTypeEnum.BorderRadiusSpring :
            return borderRadiusSpring(isPassive, spring.activeBorderRadius, spring.passiveBorderRadius, springConfig)
        case SpringTypeEnum.RotateZSpring :
            return rotateZSpring(isPassive, spring.activeRotateZ, spring.passiveRotateZ, springConfig)
        case SpringTypeEnum.OpacitySpring :
            return opacitySpring(isPassive, spring.activeOpacity, spring.passiveOpacity, springConfig)
        case SpringTypeEnum.BorderSpring :
            return borderSpring(
                isPassive, 
                spring.activeBorderWidth, 
                spring.passiveBorderWidth,
                spring.activeBorderStyle,
                spring.passiveBorderStyle,
                spring.activeBorderColor,
                spring.passiveBorderColor,
                springConfig
            )
        default : 
            return {}
    }
}