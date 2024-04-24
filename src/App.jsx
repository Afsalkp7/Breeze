import './App.css'
import DetailDiv from './components/DetailDiv'
import Sky from './components/Sky'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <div className='h-1/2 bg-sky-200'>
        <Sky />
      </div>
      <div className='h-1/2 bg-gradient-to-b from-sky-200 to-white'>
        <DetailDiv />
      </div>
    </div>
  )
}

export default App
