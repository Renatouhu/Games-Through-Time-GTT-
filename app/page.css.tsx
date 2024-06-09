import { style, globalStyle } from "@vanilla-extract/css";

export const page = style({
    width: '100%',
    height: '100vh'
})


globalStyle('*', {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
})

