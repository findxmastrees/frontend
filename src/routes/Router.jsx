import { Routes, Route } from 'react-router-dom'
import { LandingPage, MainPage, MapPage, MyPage, SignIn, TreePage } from '../pages'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/my' element={<MyPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/tree' element={<TreePage />} />
      </Routes>
    </div>
  )
}
export default Router
