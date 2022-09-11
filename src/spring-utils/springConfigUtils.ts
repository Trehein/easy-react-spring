import { config } from 'react-spring'

export enum SpringConfigEnum {
    DEFAULT = 'default',
    GENTLE = 'gentle',
    WOBBLY = 'wobbly',
    STIFF = 'stiff',
    SLOW = 'slow',
    MOLASSES = 'molasses'
}

export const springConfigsSwitch = (springConfig: SpringConfigEnum) => {
    return config[springConfig]
}