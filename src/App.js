import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    { 
      id: uuidv4(),
      nome: 'Back-End',
      cor: '#d9f7e9' 
    },
    { 
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#e8f8ff'
    },
    { 
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#f0f8e2'
    },
    { 
      id: uuidv4(),
      nome: 'Dev Ops',
      cor: '#fde7e8'
    },
    { 
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#fae9f5'
    },
    { 
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#fff5d9'
    },
    { 
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ffeedf'
    }
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, {...colaborador, id: uuidv4()}]);
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const mudarCor = (cor, id) => {
    setTimes(times.map(time => 
      time.id === id ? { ...time, cor } : time
    ));
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map(colaborador =>
      colaborador.id === id ? { ...colaborador, favorito: !colaborador.favorito } : colaborador
    ));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCriarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={aoNovoColaboradorAdicionado}
      />
      {times.map((time) => (
        <Time
          key={time.id}
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCor}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;