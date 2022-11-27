import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from '../components/RequireAuth'
import { LandingPage, MainPage, MapPage, MyPage, SignIn, TreePage } from '../pages'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route element={<RequireAuth />}>
          <Route path='/my' element={<MyPage />} />
          <Route path='/tree' element={<TreePage />} />
        </Route>
      </Routes>
    </div>
  )
}
export default Router
