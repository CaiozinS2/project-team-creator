import { useState } from 'react';
import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('#000000');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('form enviado', nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time
    });
    setNome('');
    setCargo('');
    setImagem(null);
    setTime('');
};

  const criarNovoTime = (evento) => {
    evento.preventDefault();
    console.log('time criado com sucesso', nomeTime, corTime);
    aoCriarTime({
      nome: nomeTime,
      cor: corTime
    });
    setNomeTime('');
    setCorTime('#000000');
  };

  return (
    <section className="formulario-container">
      <form className='formulario' onSubmit={aoSalvar}>
        <h2>Formulário</h2>
        <Campo 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Campo 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <Campo 
          obrigatorio={true}
          tipo='file'
          label="Imagem" 
          placeholder="Escolha a imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
      <form className='formulario' onSubmit={criarNovoTime}>
        <h2>Criar Time</h2>
        <Campo 
          obrigatorio
          tipo="text"
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Campo 
          obrigatorio
          tipo="color"
          label="Cor"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao>
          Criar um novo time
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;