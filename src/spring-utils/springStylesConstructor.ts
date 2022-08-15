import { ActiveSpringsArray, BackgroundColorSpringParams, SpringTypeEnum, TextColorSpringParams } from "../components/AnimatedComponent/AnimatedComponentTypes"
import { backgroundColorSpring, textColorSpring } from "./colorSpringUtils"

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

export type availableSpringParams = {
    springType: SpringTypeEnum,
    passiveBackgroundColor? : string,
    activeBackgroundColor? : string,
    passiveTextColor? : string,
    activeTextColor? : string
}

export type SpringStylesConstructorTypeSwitchParams = {isPassive: boolean, spring: availableSpringParams}

export const springStylesConstructorTypeSwitch = (params: SpringStylesConstructorTypeSwitchParams) => {
    const {isPassive, spring} = params
    switch (spring.springType) {
        case SpringTypeEnum.BackgroundColorSpring : 
            return backgroundColorSpring(isPassive, spring.passiveBackgroundColor, spring.activeBackgroundColor)
        case SpringTypeEnum.TextColorSpring :
            return textColorSpring(isPassive, spring.passiveTextColor, spring.activeTextColor)
        default : 
            return {}
    }
}