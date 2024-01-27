import React from 'react'
import { StyleErrorMessage } from './styles'

interface ErrorMessageProps {
  error?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return error ? <StyleErrorMessage>{error}</StyleErrorMessage> : null
}
