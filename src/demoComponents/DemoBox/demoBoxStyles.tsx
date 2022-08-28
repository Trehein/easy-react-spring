export type DemoBoxStylesParams = {
    height?: string | undefined,
    width?: string | undefined,
    fontSize?: string | undefined,
    backgroundColor?: string | undefined,
    color?: string | undefined,
    borderWidth?: string | undefined,
    borderStyle?: string | undefined,
    borderColor?: string | undefined,
    borderRadius?: string | undefined
}

export const demoBoxStyles = (): any => {

    return {
        demoBox: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif',
        }
    }
}