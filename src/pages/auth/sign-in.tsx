import { SignInFields } from '@components/molecules/SignInFields'
import { Helmet } from 'react-helmet-async'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <SignInFields />
    </>
  )
}
