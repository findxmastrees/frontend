import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { RequireAuth } from '../components/RequireAuth'
import { LandingPage, MainPage, MapPage, MyPage, SignIn, TreePage } from '../pages'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/tree' element={<TreePage />} />
          <Route element={<RequireAuth />}>
            <Route path='/my' element={<MyPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default Router
