import { Helmet } from 'react-helmet-async'
import { SignInFields } from '../../components/molecules/SignInFields'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <SignInFields />
    </>
  )
}
