import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import CreateQuestion from './Components/CreateQuestion';
import Questionnaire from './Components/Questionnaire';
import SideNav from './Components/SideNav';
import Logo from './Components/Logo';
import Dashboard from './Components/Dashboard';
import WelcomePage from './Components/WelcomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="app-">
      <Logo/>
      <SideNav/>
        </div> 
      <Routes>
        <Route path="/" element={<WelcomePage />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="create" element={<CreateQuestion/>} />
      </Routes>
      </BrowserRouter>
  );
}


export default App;
