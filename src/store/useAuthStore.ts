import { create } from 'zustand'

interface User {
  email: string
  password: string
}

interface AuthState {
  user: User | null
  signIn: (credentials: SignInCredentials) => Promise<void>
  signUp: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
}

interface SignInCredentials {
  email: string
  password: string
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('@SouthSystem: user') || 'null'),

  signIn: async ({ email, password }: SignInCredentials) => {
    if (email === 'south@southsystem.com' && password === 'southsystem') {
      const user = { email, password }
      localStorage.setItem('@SouthSystem: user', JSON.stringify(user))
      set({ user })
      return
    }

    const users = JSON.parse(
      localStorage.getItem('@SouthSystem: users') || '[]',
    )

    const foundUser = users.find(
      (user: User) => user.email === email && user.password === password,
    )

    if (foundUser) {
      localStorage.setItem('@SouthSystem: user', JSON.stringify(foundUser))
      set({ user: foundUser })
    } else {
      throw new Error('Credenciais inválidas')
    }
  },

  signUp: async ({ email, password }: SignInCredentials) => {
    const newUser = { email, password }
    const users = JSON.parse(
      localStorage.getItem('@SouthSystem: users') || '[]',
    )
    const userExists = users.some((user: User) => user.email === email)

    if (userExists) {
      throw new Error('Usuário já cadastrado com este e-mail.')
    }

    users.push(newUser)
    localStorage.setItem('@SouthSystem: users', JSON.stringify(users))
    set({ user: newUser })
  },

  signOut: () => {
    localStorage.removeItem('@SouthSystem: user')
    set({ user: null })
  },
}))
