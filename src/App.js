import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SearchForm />} />
          <Route path="/:category/:id" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
