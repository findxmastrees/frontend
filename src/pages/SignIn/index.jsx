import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'
import { setActiveUser } from '../../store/slices/authSlice'

export const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  const from = location.state?.from?.pathname || '/'

  const handleSignin = async (e) => {
    e.preventDefault()
    const { user } = await signInWithGoogle()
    dispatch(
      setActiveUser({
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
      }),
    )
    navigate(from, { replace: true })
  }

  return (
    <form>
      <button onClick={handleSignin}>Google로 로그인</button>
    </form>
  )
}
