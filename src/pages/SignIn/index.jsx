import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'

export const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  const handleSignin = (e) => {
    e.preventDefault()
    signInWithGoogle()
  }

  return (
    <form>
      <button onClick={handleSignin}>Google로 로그인</button>
    </form>
  )
}
