import React from 'react'
import './App.css'
import Main from './component/main'
// REDUX
import { Provider } from 'react-redux'
import store from './store/store'
// const COLORS = {
//   Psychic: '#f8a5c2',
//   Fighting: '#f0932b',
//   Fairy: '#c44569',
//   Normal: '#f6e58d',
//   Grass: '#badc58',
//   Metal: '#95afc0',
//   Water: '#3dc1d3',
//   Lightning: '#f9ca24',
//   Darkness: '#574b90',
//   Colorless: '#FFF',
//   Fire: '#eb4d4b',
// }

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div className="App">
          <div>
            <Main />
          </div>
        </div>
      </React.StrictMode>
    </Provider>
  )
}

export default App
