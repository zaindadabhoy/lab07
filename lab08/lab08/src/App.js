
import './App.css';
import Profile from './components/profile';

function App() {
  return (
  <div>
  <h1></h1>
  {/* Passing props to the child component */}
  <Profile name="Zain" age={20} occupation={" CS student"} Location=" Nazimabad"/>

  </div>
  );
}
export default App;
