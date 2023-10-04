import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/mainLayout/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route path='/Relevance'></Route>
              <Route path='/Brands'></Route>
            </Route>
            <Route path="page/:page" element="resultpage"></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
