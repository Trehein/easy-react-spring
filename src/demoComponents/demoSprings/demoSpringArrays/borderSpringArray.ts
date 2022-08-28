import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const borderSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeBorderWidth, 
        passiveBorderWidth, 
        activeBorderStyle,
        passiveBorderStyle,
        activeBorderColor,
        passiveBorderColor
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.BorderSpring,
            activeBorderWidth: activeBorderWidth,
            passiveBorderWidth: passiveBorderWidth,
            activeBorderStyle: activeBorderStyle,
            passiveBorderStyle: passiveBorderStyle,
            activeBorderColor: activeBorderColor,
            passiveBorderColor: passiveBorderColor
        },
    ]

    return activeSpringsArray
}
