import { globalStyle, style } from "@vanilla-extract/css";

export const statisticsSection = style({
    width: '100%',
    height: '60vh',
    position: 'relative',
    background: 'linear-gradient(to left, #000000, #101010, #1b1a1a, #242423, #2e2e2d)',
})

export const canvasCollection = style({
    position: 'absolute',
})

export const statisticText = style({
    color: '#EEEEEE',
    fontSize: '3.5rem',
    fontWeight: '700',
    position: 'absolute',
    top: '40%',
    left: '25%'
})