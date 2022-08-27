import { AvailableSpringParams } from "../../spring-utils";
import { DemoSpringArray } from "../../stories/AnimatedComponentV3.stories";
import { everySpring } from "./everySpring";

export const demoSpringSwitch = (demoSpringArrayEnum: DemoSpringArray, args: AvailableSpringParams) => {
    switch (demoSpringArrayEnum) {
        case DemoSpringArray.EverySpring :
            return everySpring(args)
        default :
            return []
    }
}