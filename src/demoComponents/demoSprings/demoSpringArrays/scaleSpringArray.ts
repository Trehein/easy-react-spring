import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const scaleSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeScale, 
        passiveScale, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.ScaleSpring,
            activeScale: activeScale,
            passiveScale: passiveScale,
        },
    ]

    return activeSpringsArray
}
