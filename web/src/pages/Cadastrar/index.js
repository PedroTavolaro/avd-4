import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '~/services/api';

import { Container, Content } from './styles';

function Cadastrar() {
  const [compradores, setCompradores] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);
  const [motoristas, setMotoristas] = useState([]);
  const [telefones, setTelefones] = useState(null);
  const [valorSelecionado, setValorSelecionado] = useState(null);
  const { register, handleSubmit } = useForm({});

  useEffect(() => {
    api.get('compradores').then((response) => {
      setCompradores(response.data);
    });
    api.get('fornecedores').then((response) => {
      setFornecedores(response.data);
    });
    api.get('motoristas').then((response) => {
      setMotoristas(response.data);
    });
  }, []);

  const handleSelected = useCallback(async (e) => {
    setValorSelecionado(e.target.value);
    console.log(valorSelecionado)
  }, [valorSelecionado]);

  useEffect(() => {
    api.get(`compradores/${valorSelecionado}`).then((response) => {
      const telefoneSelecionado = response.data.telefone;
      setTelefones(telefoneSelecionado)
    })
  }, [valorSelecionado])

  const onSubmit = async (data, e) => {
    const { data_entrega, comprador_id, fornecedor_id, motorista_id, sucata } = data;

    await api.post('entregas', {
      data_entrega, comprador_id, fornecedor_id, motorista_id, sucata
    });
    e.target.reset();
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="datetime-local" name="data_entrega" placeholder="Título do conteúdo" ref={register} />

          <select name="comprador_id" onChange={handleSelected} ref={register}>
            <option value="" disabled selected>
              Informe o comprador
          </option>
            {compradores.map((comprador) => (
              <option key={comprador.id} value={comprador.id}>
                {`${comprador.nome}`}
              </option>
            ))}
          </select>

          <input type="textarea" placeholder={telefones} />
          <input type="textarea" name="sucata" placeholder="Informe a sucata" ref={register}/>

          <select name="fornecedor_id" ref={register}>
            <option value="" disabled selected>
              Informe o fornecedor
          </option>
            {fornecedores.map((fornecedor) => (
              <option key={fornecedor.id} value={fornecedor.id}>
                {`${fornecedor.nome}`}
              </option>
            ))}
          </select>

          <select name="motorista_id" ref={register}>
            <option value="" disabled selected>
              Informe o motorista
          </option>
            {motoristas.map((motorista) => (
              <option key={motorista.id} value={motorista.id}>
                {`${motorista.nome}`}
              </option>
            ))}
          </select>



          <button type="submit">Cadastrar</button>
          <Link to="/">
            Voltar
          </Link>
        </form>
      </Content>
    </Container>
  );
}

export default Cadastrar;
