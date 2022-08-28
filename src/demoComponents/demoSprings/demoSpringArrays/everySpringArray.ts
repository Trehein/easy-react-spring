import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const everySpringArray = (params: AvailableSpringParams) => {

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
        activeOpacity,
        passiveOpacity,
        activeBorderWidth,
        passiveBorderWidth,
        activeBorderStyle,
        passiveBorderStyle,
        activeBorderColor,
        passiveBorderColor
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
        },
        {
            springType: SpringTypeEnum.OpacitySpring,
            activeOpacity: activeOpacity > 0 ? activeOpacity : 0, // seems superfluous but it need the > for some reason...
            passiveOpacity: passiveOpacity ? passiveOpacity : 1
        },
        {
            springType: SpringTypeEnum.BorderSpring,
            activeBorderWidth: activeBorderWidth ? activeBorderWidth : '.1em',
            passiveBorderWidth: passiveBorderWidth ? passiveBorderWidth : '.25em',
            activeBorderStyle: activeBorderStyle ? activeBorderStyle : 'dashed',
            passiveBorderStyle: passiveBorderStyle ? passiveBorderStyle : 'solid',
            activeBorderColor: activeBorderColor ? activeBorderColor : 'white',
            passiveBorderColor: passiveBorderColor ? passiveBorderColor : 'blue'
        }
    ]

    return activeSpringsArray
}
