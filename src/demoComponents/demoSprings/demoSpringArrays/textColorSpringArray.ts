import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const textColorSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeTextColor, 
        passiveTextColor, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.TextColorSpring,
            activeTextColor: activeTextColor,
            passiveTextColor: passiveTextColor
        },

    ]

    return activeSpringsArray
}
