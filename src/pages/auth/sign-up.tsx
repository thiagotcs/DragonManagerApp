import { SignUpFields } from '@components/molecules/SignUpFields'
import { Helmet } from 'react-helmet-async'

export function SignUp() {
  return (
    <>
      <Helmet title="Login" />
      <SignUpFields />
    </>
  )
}
