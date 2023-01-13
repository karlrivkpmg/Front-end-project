import './App.css';
import { Header } from './components/Header';
import { ReviewHolder } from './components/ReviewHolder';
import {Route, Routes} from 'react-router-dom';
import { SingleReview } from './components/SingleReview';
import { NavBarCategories } from './components/NavBarCategories';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
         <Route path="/reviews" element={<ReviewHolder/>} />
         <Route path="/reviews/:review_id" element={<SingleReview/>} />
         <Route path="/reviews/category/:slug" element={<ReviewHolder/>} />
        </Routes>
    </div>
  );
}

export default App;
