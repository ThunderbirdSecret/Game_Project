import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '@/components/header/Header'
import { AppStore } from '@/store/store'

import listRoutes from '@/utils/routesMapping'

// import { useAppDispatch } from './store'
// import { fetchUser } from './store/user/user.action'

import style from './styles/index.module.scss'


type AppProps = {
  store: AppStore
}

function App({ store }: AppProps) {
  return (
    <div className={style.app}>
    <Provider store={store}>
        <Header />
        <Routes>
          {listRoutes.map(route => {
            const { loader: _, path, Element } = route

            return <Route key={path} path={path} element={<Element/>} />
          })}
        </Routes>
    </Provider>
    </div>
  )
}

/*       {/* <h1>This is SSR</h1> */
/* 
          <Route
            path="*"
            element={<Navigate to={ROUTES.ERROR_404} replace />}
          />

        */
export default App
