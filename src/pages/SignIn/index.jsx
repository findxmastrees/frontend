import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'
import { setActiveUser } from '../../store/slices/authSlice'

// CSS
import './index.css'

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
    <div className={'loginContainer'}>
      <div className={'loginBox'}>
        <span>어쩔트리와 추억을 공유하시려면 <br/>로그인을 해주세요.</span>

        <form>
          <div className={'loginButton'} onClick={handleSignin}>
            <img src={'/icon/ico-google.png'} alt={'google icon'} />
            <span>Google로 로그인</span>
          </div>
          {/*<button onClick={handleSignin}>Google로 로그인</button>*/}
        </form>
      </div>

    </div>
  )
}
