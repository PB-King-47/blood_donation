import { Routes, Route } from 'react-router-dom'
import 'src/App.css'
import HomePage from './page/HomePage'
import Master from 'src/page/layouts/Master'

function App() {

  return (
    <Routes>
      <Route element={<Master />}>
        <Route path={"*"} element={<HomePage/>} />
      
      </Route>
    </Routes>
  )
}

export default App
