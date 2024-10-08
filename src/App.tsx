import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/navigation-bar/navigation-bar.component';
import { CardContainer } from './components/card-container/card-container.component';


const App: React.FC = () => {
    const [searchField, setSearchField] = useState<String>("");
    const [searchResults, setSearchResults] = useState<

    const searchFieldHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchField(event.target.value);
    }



    // https://api.edamam.com/search?=%{searchString}&app_id=66d0e66d&app_key=ddeef5a08126631a82d20f893dc9bae5

    return (
        <Router>
            <Routes>
                <Route path='/' element={<NavigationBar searchFieldHandler={searchFieldHandler}/>}>
                    <Route index element={<CardContainer searchField={searchField}/>} />
                    <Route path='/hello' element={<h1>hello</h1>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
