import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { RequireAuth } from '../components/RequireAuth'
import {
  BookmarkPage,
  LandingPage,
  MainPage,
  MapPage,
  MyPage,
  SignIn,
  TreePage,
  WriteReviewPage,
} from '../pages'
import { SearchPage } from '../pages/SearchPage'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<MainPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/tree' element={<TreePage />} />
          {/* 즐겨찾기: 인가권한이 필요한 페이지이나 개발시 번거롭지않도록 우선 일반 라우터로만 추가합니다 */}
          <Route path='/bookmark' element={<BookmarkPage />} />
          <Route element={<RequireAuth />}>
            <Route path='/my' element={<MyPage />} />
          </Route>
          <Route path='/review-write' element={<WriteReviewPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  )
}
export default Router
