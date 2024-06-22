import { globalStyle, style} from "@vanilla-extract/css";

export const header = style({
    padding: 20,
    backgroundColor: '#222831',
    display: 'flex'
})

export const navHeader = style({
    margin: '0 auto 0 auto',
})

export const list = style({
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 35,
    listStyle: 'none',
})

export const item1 = style({
    ':hover': {
        color: 'red',
    }
})

export const item2 = style({
    ':hover': {
        color: '#00BF00'
    }
})

export const item3 = style({
    ':hover': {
        color: '#0040BF'
    }
})

globalStyle(`${list} li a`, {
    textDecoration: 'none',
    color: 'color-mix(in lch, canvasText 50%, canvas)',
    cursor: 'pointer'
})

export const h1 = style({
    color: "#FFFFFF",
    fontSize: '1.5rem',
    ':hover': {
        color: "red",
        cursor: 'pointer'
    }
})