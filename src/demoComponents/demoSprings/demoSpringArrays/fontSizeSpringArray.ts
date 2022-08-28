import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const fontSizeSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeFontSize, 
        passiveFontSize, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.FontSizeSpring,
            activeFontSize: activeFontSize,
            passiveFontSize: passiveFontSize,
        },
    ]

    return activeSpringsArray
}
