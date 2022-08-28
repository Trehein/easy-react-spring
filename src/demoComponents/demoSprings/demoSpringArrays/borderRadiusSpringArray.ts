import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const borderRadiusSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeBorderRadius, 
        passiveBorderRadius, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.BorderRadiusSpring,
            activeBorderRadius: activeBorderRadius,
            passiveBorderRadius: passiveBorderRadius,
        },
    ]

    return activeSpringsArray
}
