import { AvailableSpringParams } from "../../spring-utils/springStylesConstructor"

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

export type RotateZSpring = {
    springType: SpringTypeEnum,
    activeRotateZ: number,
    passiveRotateZ: number
}

export type OpacitySpring = {
    springType: SpringTypeEnum,
    activeOpacity: number,
    passiveOpacity: number
}

export type BorderSpring = {
    springType: SpringTypeEnum,
    // activeBorderWidth?: string,
    // passiveBorderWidth?: string,
    activeBorderWidth: string,
    passiveBorderWidth: string,
    activeBorderStyle: string,
    passiveBorderStyle: string,
    activeBorderColor: string,
    passiveBorderColor: string,
}

export enum SpringTypeEnum {
    BackgroundColorSpring = 'BackgroundColorSpring',
    BorderRadiusSpring = 'BorderRadiusSpring',
    BorderSpring = 'BorderSpring',
    TextColorSpring = 'TextColorSpring',
    ScaleSpring = 'ScaleSpring',
    FontSizeSpring = 'FontSizeSpring',
    HeightSpring = 'HeightSpring',
    WidthSpring = 'WidthSpring',
    RotateZSpring = 'RotateZSpring',
    OpacitySpring = 'OpacitySpring'
}

export type ActiveSpringsArray = Array<AvailableSpringParams>