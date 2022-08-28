import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const heightSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeHeight, 
        passiveHeight, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.HeightSpring,
            activeHeight: activeHeight,
            passiveHeight: passiveHeight,
        },
    ]

    return activeSpringsArray
}