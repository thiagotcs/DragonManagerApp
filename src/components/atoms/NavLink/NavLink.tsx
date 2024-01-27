import { LinkProps, useLocation } from 'react-router-dom'
import { StyledLink } from './styles'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return <StyledLink data-current={pathname === props.to} {...props} />
}
