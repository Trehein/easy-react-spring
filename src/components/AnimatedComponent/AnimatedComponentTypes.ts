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

export type ScaleSpringParams = {
    springType: SpringTypeEnum,
    activeScale: number,
    passiveScale: number
}

export type FontSizeSpringParams = {
    springType: SpringTypeEnum,
    activeFontSize: string,
    passiveFontSize: string
}

export type HeightSpringParams = {
    springType: SpringTypeEnum,
    activeHeight: string,
    passiveHeight: string
}

export type WidthSpringParams = {
    springType: SpringTypeEnum,
    activeWidth: string,
    passiveWidth: string
}

export type BorderRadiusSpring = {
    springType: SpringTypeEnum,
    activeBorderRadius: string,
    passiveBorderRadius: string
}

export enum SpringTypeEnum {
    BackgroundColorSpring = 'BackgroundColorSpring',
    TextColorSpring = 'TextColorSpring',
    ScaleSpring = 'ScaleSpring',
    FontSizeSpring = 'FontSizeSpring',
    HeightSpring = 'HeightSpring',
    WidthSpring = 'WidthSpring',
    BorderRadiusSpring = 'BorderRadiusSpring'
}

export type ActiveSpringsArray = Array<availableSpringParams>