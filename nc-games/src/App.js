import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { ReviewHolder } from './components/ReviewHolder';
import {Route, Routes} from 'react-router-dom';
import { SingleReview } from './components/SingleReview';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
         <Route path="/" element={<ReviewHolder/>} />
         <Route path="/reviews/:review_id" element={<SingleReview/>} />
        </Routes>
    </div>
  );
}

export default App;
