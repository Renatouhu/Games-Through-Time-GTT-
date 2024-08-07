import { style, globalStyle } from '@vanilla-extract/css'

export const section = style({
    width: '100%',
    height: '30%',
    display: 'flex',
    gap: 15,
    backgroundColor: '#222831',
    padding: 40
})

globalStyle(`${section} div`, {
    height: '100%'
})

export const title = style({
    color: '#FFFFFF',
    marginBottom: 15
})

export const list = style({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 15
})

globalStyle(`${list} li`, {
    display: 'flex',
    gap: 5,
    alignItems: 'center'
})

export const icon = style({
    color: '#FFFFFF'
})

globalStyle(`${list} li a,${list} li p`, {
    fontSize: '0.9rem',
    fontWeight: '700',
    textDecoration: 'none',
    color: '#FFFFFF',
    cursor: 'pointer'
})

export const division = style({
    width: 1,
    height: '80%',
    backgroundColor: '#363F4E'
})