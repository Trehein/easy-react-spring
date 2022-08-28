import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const widthSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeWidth, 
        passiveWidth, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.WidthSpring,
            activeWidth: activeWidth,
            passiveWidth: passiveWidth,
        },
    ]

    return activeSpringsArray
}