import {  } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/navigation-bar/navigation-bar.component';
import { CardContainer } from './components/card-container/card-container.component';


const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<NavigationBar />}>
                    <Route index element={<CardContainer />} />
                    <Route path='/hello' element={<h1>hello</h1>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
