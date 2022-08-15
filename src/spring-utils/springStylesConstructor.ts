import { ActiveSpringsArray, BackgroundColorSpringParams, SpringTypeEnum } from "../components/AnimatedComponent/AnimatedComponentTypes"
import { backgroundColorSpring } from "./colorSpringUtils"

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

export type SpringStylesConstructorTypeSwitchParams = {isPassive: boolean, spring: BackgroundColorSpringParams}

export const springStylesConstructorTypeSwitch = (params: SpringStylesConstructorTypeSwitchParams) => {
    const {isPassive, spring} = params
    switch (spring.springType) {
        case SpringTypeEnum.BackgroundSpring: 
            return backgroundColorSpring(isPassive, spring.passiveBackgroundColor, spring.activeBackgroundColor)
        default : 
            return {}
    }
}