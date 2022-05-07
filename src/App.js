
import './App.css';
import PersonalDetails from './Components/PersonalDetails';
import RepositoriesMain from './Components/RepositiriesMain';


function App() {
  return (
    <div className="App">
      <div>
        <PersonalDetails></PersonalDetails>
      </div>
      <div>
        <RepositoriesMain></RepositoriesMain>
      </div>
    </div>
  );
}

export default App;
