'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthFormContainer from '@/components/auth/AuthFormContainer'
import AuthFormHeader from '@/components/auth/AuthFormHeader'
import AuthFormInput from '@/components/auth/AuthFormInput'
import AuthFormButton from '@/components/auth/AuthFormButton'
import AuthFormFooter from '@/components/auth/AuthFormFooter'
import AuthError from '@/components/auth/AuthError'
import MailIcon from '@/components/auth/icons/MailIcon'
import LockIcon from '@/components/auth/icons/LockIcon'
import styles from './styles.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  if (typeof window !== "undefined" && window.localStorage.getItem('isAuthenticated')) {
    router.push('/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
 
    try {
      // Simple hardcoded credentials check
      if ((email === 'user@example.com' && password === 'password') || (email === 'hiraali0335@gmail.com' && password === 'IHateAnas') || (email === 'almackayj@gmail.com' && password === 'Cougar') || (email ==="Ashakeel0901@my.msutexas.edu" && password ==="Lion")) {
        // Set authentication flag in localStorage
        window.localStorage.setItem('isAuthenticated', 'true')
        // Set user data if needed
        window.localStorage.setItem('user', JSON.stringify({
          email: 'user@example.com',
          name: 'Test User'
        }))
        router.push('/dashboard')
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthFormContainer>
      <AuthFormHeader 
        title="Welcome back" 
        subtitle="Sign in to access your account" 
      />
      
      {error && <AuthError error={error} />}
      
      <form onSubmit={handleSubmit}>
        <AuthFormInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          IconComponent={MailIcon}
        />
        
        <AuthFormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          IconComponent={LockIcon}
        />
        
        <AuthFormButton isLoading={isLoading}>
          Sign In
        </AuthFormButton>
      </form>

      <AuthFormFooter
        text="Don't have an account?"
        linkText="Sign up"
        onLinkClick={() => router.push('/signup')}
      />
    </AuthFormContainer>
  )
}