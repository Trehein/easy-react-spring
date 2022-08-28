import { AvailableSpringParams } from "../../spring-utils";
import { DemoSpringArray } from "./demoSpringEnums";
import { 
    backgroundColorSpringArray, 
    textColorSpringArray, 
    everySpringArray,
    fontSizeSpringArray,
    heightSpringArray,
    widthSpringArray,
    borderRadiusSpringArray,
    rotateZSpringArray,
    scaleSpringArray,
    opacitySpringArray,
    borderSpringArray
} from "./demoSpringArrays";

export const demoSpringSwitch = (demoSpringArrayEnum: DemoSpringArray, args: AvailableSpringParams) => {
    switch (demoSpringArrayEnum) {
        case DemoSpringArray.EverySpring :
            return everySpringArray(args)
        case DemoSpringArray.BackgroundColorSpring :
            return backgroundColorSpringArray(args)
        case DemoSpringArray.TextColorSpring :
            return textColorSpringArray(args)
        case DemoSpringArray.FontSizeSpring :
            return fontSizeSpringArray(args)
        case DemoSpringArray.HeightSpring :
            return heightSpringArray(args)
        case DemoSpringArray.WidthSpring :
            return widthSpringArray(args)
        case DemoSpringArray.BorderRadiusSpring :
            return borderRadiusSpringArray(args)
        case DemoSpringArray.RotateZSpring : 
            return rotateZSpringArray(args)
        case DemoSpringArray.ScaleSpring : 
            return scaleSpringArray(args)
        case DemoSpringArray.OpacitySpring :
            return opacitySpringArray(args)
        case DemoSpringArray.BorderSpring :
            return borderSpringArray(args)
        default :
            return []
    }
}