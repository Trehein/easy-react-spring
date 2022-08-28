import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const opacitySpringArray = (params: AvailableSpringParams) => {
    const { 
        activeOpacity, 
        passiveOpacity, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.OpacitySpring,
            activeOpacity: activeOpacity,
            passiveOpacity: passiveOpacity,
        },
    ]

    return activeSpringsArray
}
