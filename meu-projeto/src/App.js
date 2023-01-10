 import './App.css';
 import HelloWorld from './components/HelloWorld';
 import Frase from './components/Frase';
 import SayMyName from './components/SayMyName';
 import Pessoa from './components/Pessoa';
 import List from './components/List'

function App() {

  const nome = "Maria"

  function sum(a, b){
    return a + b;
  }
  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMyName nome = "Thiago"/>
      <SayMyName nome = {nome}/>
      <Pessoa nome="Thiago" idade="22" profissao="Suporte" foto="https://via.placeholder.com/150"/>
      <List/>

    </div>
  );
}

export default App;
