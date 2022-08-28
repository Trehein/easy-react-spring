import { AvailableSpringParams } from "../../spring-utils";
import { DemoSpringArray } from "./demoSpringEnums";
import { 
    backgroundColorSpringArray, 
    textColorSpringArray, 
    everySpringArray,
    fontSizeSpringArray,
    heightSpringArray
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
        default :
            return []
    }
}