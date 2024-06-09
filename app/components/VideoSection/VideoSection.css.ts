import { style } from '@vanilla-extract/css'

export const videoSection = style({
    backgroundColor: '#31363F',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: '20vw',
    width: '100%',
    height: '60vh',
    padding: 50,
})

export const retroTV = style({
    position: 'relative',
    width: 300,
    height: 200,
    marginBottom: '25%'
})

export const videoScreen = style({
    position: 'absolute',
    top: '14%',
    left: '9%',
    width: 365,
    zIndex: 1
})

export const tvImage = style({
    position: 'absolute',
    zIndex: 0
})

export const gameSelection = style({
    position: 'relative',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    gap: 20,
    bottom: '10%',
    left: '10%'
})

export const gameToSelect = style({
    cursor: 'pointer'
})

export const pauseButton = style({
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: '-70%',
    left: '50%',
    zIndex: 3,
})

export const playButton = style({
        position: 'absolute',
        width: 20,
        height: 20,
        bottom: '-70%',
        left: '60%',
        zIndex: 3,
})

export const pauseClickedOn = style({
    stroke: 'red'
})

export const pauseClickedOff = style({
    stroke: 'black'
})

export const playClickedOn = style({
    stroke: 'green'
})

export const playClickedOff = style({
    stroke: 'black'
})

export const interection = style({
    display: 'flex',
    columnGap: 100
})

export const textSection = style({
    color: '#EEEEEE',
    fontSize: '2.5rem',
    fontWeight: 800,
})