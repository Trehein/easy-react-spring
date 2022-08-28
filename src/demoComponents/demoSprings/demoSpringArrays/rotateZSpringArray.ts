import { ActiveSpringsArray, SpringTypeEnum } from "../../../components/AnimatedComponent/AnimatedComponentTypes"
import { AvailableSpringParams } from "../../../spring-utils"

export const rotateZSpringArray = (params: AvailableSpringParams) => {
    const { 
        activeRotateZ, 
        passiveRotateZ, 
    } = params

    const activeSpringsArray: ActiveSpringsArray = [
        {
            springType: SpringTypeEnum.RotateZSpring,
            activeRotateZ: activeRotateZ,
            passiveRotateZ: passiveRotateZ,
        },
    ]

    return activeSpringsArray
}
