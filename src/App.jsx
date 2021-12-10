import Header from './Header'
import './App.css'

if (import.meta.hot) {
  import.meta.hot.accept((newMod) => {
    console.log('import.meta.hot: App.jsx is updated', newMod)
  })
  import.meta.hot.accept('./Header.jsx', (newMod) => {
    console.log('import.meta.hot: Header.jsx is updated', newMod)
  })
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">This is body222</div>
    </div>
  )
}

export default App
