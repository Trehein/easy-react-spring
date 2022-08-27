import { AvailableSpringParams } from "../../spring-utils";
import { backgroundColorSpringArray } from "./backgroundColorSpringArray";
import { DemoSpringArray } from "./demoSpringEnums";
import { everySpring } from "./everySpring";

export const demoSpringSwitch = (demoSpringArrayEnum: DemoSpringArray, args: AvailableSpringParams) => {
    switch (demoSpringArrayEnum) {
        case DemoSpringArray.EverySpring :
            return everySpring(args)
        case DemoSpringArray.BackgroundColorSpring :
            console.log('args in backgroundColorSpring', args)
            return backgroundColorSpringArray(args)
        default :
            return []
    }
}