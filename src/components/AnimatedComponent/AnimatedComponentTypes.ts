export type BackgroundColorSpringParams = {
    springType: SpringTypeEnum,
    activeBackgroundColor: string,
    passiveBackgroundColor: string,
}

export enum SpringTypeEnum {
    BackgroundSpring = 'BackgroundSpring'
}

export type ActiveSpringsArray = [BackgroundColorSpringParams | undefined]
