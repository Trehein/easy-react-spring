import { ActiveSpringsArray, SpringTypeEnum } from "../components/AnimatedComponent/AnimatedComponentTypes"
import { borderRadiusSpring } from "./borderSpringUtils"
import { backgroundColorSpring, textColorSpring } from "./colorSpringUtils"
import { fontSizeSpring, heightSpring, scaleSpring, widthSpring } from "./sizeSpringUtils"
import { rotateZSpring } from "./positionSpringUtils"

export type SpringStylesConstructorParams = {
    springs: ActiveSpringsArray,
    isPassive: boolean
} 

export const springStylesConstructor = (params: SpringStylesConstructorParams): object => {
    const {isPassive, springs} = params
    let springStylesObj: object = {}

    springs.forEach((spring: any) => {
        const springStylesConstructorObj = springStylesConstructorTypeSwitch({isPassive, spring})
        springStylesObj = {...springStylesObj, ...springStylesConstructorObj}
    })
    return springStylesObj
}

export type AvailableSpringParams = {
    springType?: SpringTypeEnum,
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
    passiveRotateZ? : number
}

export type SpringStylesConstructorTypeSwitchParams = {isPassive: boolean, spring: AvailableSpringParams}

export const springStylesConstructorTypeSwitch = (params: SpringStylesConstructorTypeSwitchParams) => {
    const {isPassive, spring} = params
    switch (spring.springType) {
        case SpringTypeEnum.BackgroundColorSpring : 
            return backgroundColorSpring(isPassive, spring.activeBackgroundColor, spring.passiveBackgroundColor)
        case SpringTypeEnum.TextColorSpring :
            return textColorSpring(isPassive, spring.activeTextColor, spring.passiveTextColor)
        case SpringTypeEnum.ScaleSpring : 
            return scaleSpring(isPassive, spring.activeScale, spring.passiveScale)
        case SpringTypeEnum.FontSizeSpring :
            return fontSizeSpring(isPassive, spring.activeFontSize, spring.passiveFontSize)
        case SpringTypeEnum.HeightSpring :
            return heightSpring(isPassive, spring.activeHeight, spring.passiveHeight)
        case SpringTypeEnum.WidthSpring :
            return widthSpring(isPassive, spring.activeWidth, spring.passiveWidth)
        case SpringTypeEnum.BorderRadiusSpring :
            return borderRadiusSpring(isPassive, spring.activeBorderRadius, spring.passiveBorderRadius)
        case SpringTypeEnum.RotateZSpring :
            return rotateZSpring(isPassive, spring.activeRotateZ, spring.passiveRotateZ)
        default : 
            return {}
    }
}