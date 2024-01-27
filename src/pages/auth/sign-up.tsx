import { Helmet } from 'react-helmet-async'
import { SignUpFields } from '../../components/molecules/SignUpFields'

export function SignUp() {
  return (
    <>
      <Helmet title="Login" />
      <SignUpFields />
    </>
  )
}
