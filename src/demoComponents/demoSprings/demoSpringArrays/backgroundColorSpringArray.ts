import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const backgroundColorSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeBackgroundColor, 
        passiveBackgroundColor, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.BackgroundColorSpring,
            activeBackgroundColor: activeBackgroundColor,
            passiveBackgroundColor: passiveBackgroundColor,
        },
    ]

    return activeSpringsArray
}
