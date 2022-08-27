import { ActiveSpringsArray, SpringTypeEnum } from "../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../spring-utils"

export const everySpring = (params: AvailableSpringParams) => {
    const { 
        activeBackgroundColor, 
        passiveBackgroundColor, 
        activeTextColor, 
        passiveTextColor, 
        activeFontSize, 
        passiveFontSize, 
        activeHeight,
        passiveHeight, 
        activeWidth, 
        passiveWidth,
        activeBorderRadius,
        passiveBorderRadius,
        activeRotateZ,
        passiveRotateZ,
        activeScale,
        passiveScale,
    } = params
    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.BackgroundColorSpring,
            activeBackgroundColor: activeBackgroundColor ? activeBackgroundColor : 'rebeccapurple',
            passiveBackgroundColor: passiveBackgroundColor ? passiveBackgroundColor : 'salmon',
        },
        {
            springType: SpringTypeEnum.TextColorSpring,
            activeTextColor: activeTextColor ? activeTextColor : 'salmon',
            passiveTextColor: passiveTextColor ? passiveTextColor : 'rebeccapurple'
        },
        {
            springType: SpringTypeEnum.FontSizeSpring,
            activeFontSize: activeFontSize ? activeFontSize : '1.5em',
            passiveFontSize: passiveFontSize ? passiveFontSize : '1em'
        },
        {
            springType: SpringTypeEnum.HeightSpring,
            activeHeight: activeHeight ? activeHeight : '250px',
            passiveHeight: passiveHeight ? passiveHeight : '200px'
        },
        {
            springType: SpringTypeEnum.WidthSpring,
            activeWidth: activeWidth ? activeWidth : '250px',
            passiveWidth: passiveWidth ? passiveWidth : '200px'
        },
        {
            springType: SpringTypeEnum.BorderRadiusSpring,
            activeBorderRadius: activeBorderRadius ? activeBorderRadius : '50% 0% 0% 50%',
            passiveBorderRadius: passiveBorderRadius ? passiveBorderRadius : '50% 50% 50% 50%'
        },
        {
            springType: SpringTypeEnum.RotateZSpring,
            activeRotateZ: activeRotateZ ? activeRotateZ : 180,
            passiveRotateZ: passiveRotateZ ? passiveRotateZ : 0
        },
        {
            springType: SpringTypeEnum.ScaleSpring,
            activeScale: activeScale ? activeScale : 1.2,
            passiveScale: passiveScale ? passiveScale : 1
        }
    ]

    return activeSpringsArray
}
