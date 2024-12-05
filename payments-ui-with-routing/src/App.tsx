import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransactionPage from './components/AddTransactionPage/AddTransactionPage';
import FindTransactionPage from './components/FindTransactionPage/FindTransactionPage';
import Home from './components/pageHeader/Home';
import Page404 from './components/pageHeader/Page404';

function App() {

    const[user, setuser]=useState<User>({id:1, name:'x', role:'admin'})
    
    return (
        
        <BrowserRouter>
        <Home />
            <Routes>
                <Route path="/add" element={<AddTransactionPage />} />
                <Route path="/find" element={<FindTransactionPage />} />
                <Route path="/find" element={<FindTransactionPage />} />
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </BrowserRouter>
       
    );
}

export default App;
