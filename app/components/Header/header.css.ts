import { globalStyle, style, createVar } from "@vanilla-extract/css";

export const accentVar = createVar()

export const header = style({
    padding: 20,
    backgroundColor: '#222831',
    display: 'flex'
})

export const navHeader = style({
    margin: '0 auto 0 auto',
})

globalStyle(`${navHeader} ul`, {
    display: 'flex',
    gap: 35,
    position: 'relative',
    flexWrap: 'nowrap',
    touchAction: 'none'
})

globalStyle(`${navHeader} ul li`, {
    listStyleType: 'none',
    textDecoration: 'none',
})

globalStyle(`${navHeader} ul li a`, {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    textDecoration: 'none'
})

export const h1 = style({
    color: "#FFFFFF",
    fontSize: '1.5rem',
    ':hover': {
        color: "red",
        cursor: 'pointer'
    }
})