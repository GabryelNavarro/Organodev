import { use, useState } from 'react';
import Banner from './componentes/banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {


  const times =[
    {
      nome: 'Programação',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(191, 216, 153)'
    },
       {
      nome: 'Front-end',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(217, 247, 233)'
    },
       {
      nome: 'Data Science',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(247, 217, 217)'
    },
       {
      nome: 'Devops',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(243, 247, 217)'
    },
       {
      nome: 'UX e Design',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(217, 245, 247)'
    },
       {
      nome: 'Mobile',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(222, 217, 247)'
    },
       {
      nome: 'Inovação e Gestão',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(237, 217, 247)'
    },
       {
      nome: 'Back-end',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(247, 234, 217)'
    },
       {
      nome: 'Full-Stack',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(247, 217, 217)'
    },
       {
      nome: 'CEO',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(246, 247, 217)'
    },
       {
      nome: 'Marketing',
      corPrimaria: 'rgba(98, 120, 247, 0.78)',
      corSegundaria: 'rgb(217, 221, 247)'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdcionado = (colaborador) => {
 
    setColaboradores([...colaboradores, colaborador])
    
  }




  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)}></Formulario>
      
      {times.map(time => <Time 
      key={time.nome}
       nome = {time.nome} 
       corPrimaria = {time.corPrimaria} 
       corSegundaria ={time.corSegundaria}
       colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}>
        
       </Time>)}


      

    </div>
  );
}

export default App;

