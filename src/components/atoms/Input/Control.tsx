import { forwardRef, InputHTMLAttributes } from 'react'
import { ControlStyled } from './styles'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Control = forwardRef<HTMLInputElement, ControlProps>(
  (props, ref) => {
    return <ControlStyled ref={ref} {...props} />
  },
)
Control.displayName = 'Control'
