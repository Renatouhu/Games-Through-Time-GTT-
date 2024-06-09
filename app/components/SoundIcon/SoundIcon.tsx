import * as react from 'react'
import { LucideProps } from 'lucide-react'
import { soundButton, soundButtonVariant } from './SoundIcon.css'

interface soundIconProps {
    variantStyle: keyof typeof soundButtonVariant,
    VariantIcon: react.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & react.RefAttributes<SVGSVGElement>>,
    onClickFn: react.MouseEventHandler<SVGElement>
}

export function SoundIcon({ variantStyle, VariantIcon, onClickFn } : soundIconProps){
    return (
        <VariantIcon className={`${soundButton} ${soundButtonVariant[variantStyle]}`} onClick={onClickFn}/>
    )
}