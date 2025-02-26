import Hello from './Hello.jsx'
import Contact from './Contact.jsx'
import Counter from './Counter.jsx' 

function App() {
  const helloData = [
    { name : 'Anirach', message: 'Hi There'},
    { name : 'Tom', message: 'Hello'}
  ];


  return(
    <div className = "App">
      <Counter />

      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Anirach@gmail.com" phone = "0843787654"/>
  
    </div>  
  )
}

export default App
