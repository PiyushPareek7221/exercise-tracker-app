import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EditExercises from "./components/EditExercises";
import ExerciseList from "./components/ExerciseList";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br/>
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id' exact component={EditExercises} />
        <Route path='/create' exact component={CreateExercise} />
        <Route path='/user' exact component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;