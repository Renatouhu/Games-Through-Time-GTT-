import { style, styleVariants } from "@vanilla-extract/css"

export const soundButton = style({
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: '-70%',
    left: '40%',
    zIndex: 3,
    ':hover':{
        stroke: 'red'
    }
})

export const soundButtonVariant = styleVariants({
    soundOn: {
        ":hover": {
            stroke: 'green'
        }
    },
    soundOff: {
        ":hover":{
            stroke: 'red'
        }
    }
})