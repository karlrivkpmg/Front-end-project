import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { ReviewHolder } from './components/ReviewHolder';

function App() {
  return (
    <div className="App">
     <Header/>
     <ReviewHolder/>
    </div>
  );
}

export default App;
