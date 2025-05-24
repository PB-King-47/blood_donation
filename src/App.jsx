import { Routes, Route } from 'react-router-dom'
import 'src/App.css'
import HomePage from './page/HomePage'
import Master from 'src/page/layouts/Master'
import RegisterPage from './page/RegisterPage'
import RegisterOrgPage from './page/RegisterOrgPage'

function App() {

  return (
    <Routes>
      <Route element={<Master />}>
        <Route path={"*"} element={<HomePage/>} />
        <Route path={"/registerdoner"} element={<RegisterPage />} />
        <Route path={"/registerorg"} element={<RegisterOrgPage />} />
      
      </Route>
    </Routes>
  )
}

export default App
