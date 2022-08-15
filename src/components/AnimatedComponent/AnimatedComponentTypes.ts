import { availableSpringParams } from "../../spring-utils/springStylesConstructor"

export type BackgroundColorSpringParams = {
    springType: SpringTypeEnum,
    activeBackgroundColor: string,
    passiveBackgroundColor: string,
}

export type TextColorSpringParams = {
    springType: SpringTypeEnum,
    activeTextColor: string,
    passiveTextColor: string
}

export enum SpringTypeEnum {
    BackgroundColorSpring = 'BackgroundColorSpring',
    TextColorSpring = 'TextColorSpring'

}

export type ActiveSpringsArray = Array<availableSpringParams>