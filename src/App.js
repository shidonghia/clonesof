import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from './pages/login'
import SignUp from './pages/signup'
import HomePage from './pages/home'
import NewPost from './pages/newPost'
import User from './pages/user'
import TopicPage from './pages/topic'

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={HomePage} />
                <Route path="/ask-question" component={NewPost} />
                <Route path="/log-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/user" component={User} />
                <Route path="/topic-page" component={TopicPage} />
            </div>
        </Router>

    );
}

export default App;
