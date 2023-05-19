import './App.css'
import BlogContainer from './Blog-Container/Blog-container'
import Header from './Header/Header'

function App() {
  return (
    <div className='container'>
      <Header />
      <section>
        <BlogContainer/>
      </section>
    </div>
  )
}

export default App
