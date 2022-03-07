import { Route } from "wouter";

import './App.css'
import FeedVideos from './components/FeedVideos'
import Upload from "./pages/Upload";


function App() {
  return (
    <div className="App">
      <main>

        <Route path='/'>
          <FeedVideos />
        </Route>

        <Route path='/upload'>
          <Upload />
        </Route>

      </main>
    </div>
  )
}

export default App
