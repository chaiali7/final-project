import './App.css';
import TextInput from './TextInput';
import TopAppBar from './TopAppBar';
import CommunityCard from './CommunityCard';
import PetitionCard from "./PetitionCard";
import PoliticianCard from "./PoliticianCard";
//import SuperfundMap from './SuperfundMap';

function App() {
  return (
    <div className="App">
      <header className="Header">
      </header>
      <TopAppBar/>
      <TextInput/>
      
      <CommunityCard/>
      <PetitionCard/>
      <PoliticianCard/>
    </div>
  );
}

export default App;
