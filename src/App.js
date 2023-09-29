import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './components/Sign';
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' exact element={<Sign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
