import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '~/services/api';

import { Container, Content } from './styles';

function Atualizar() {
  const [entrega, setEntrega] = useState([]);
  const [motoristas, setMotoristas] = useState([]);
  const { register, handleSubmit, reset } = useForm({});

  const params = useParams();

  useEffect(() => {
    api.get(`entregas/${params.id}`).then(response => {
      setEntrega(response.data);
      console.log(response.data)
      reset({
        data_entrega: entrega.data_entrega,
        sucata: entrega.sucata,
        motorista_id: entrega.motorista.id,
      });
    }).catch(err => console.log(err));

    api.get('motoristas').then(response => {
      setMotoristas(response.data);
    });
  }, [params.id]);

  const onSubmit = async (data, e) => {
    const { data_entrega, motorista_id, sucata } = data;

    await api.put(`entregas/${entrega.id}`, {
      data_entrega,
      motorista_id,
      sucata,
    });
    e.target.reset();
  };

if(Object.keys(entrega).length ===0 ) return <h1>Loading...</h1>;

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="datetime-local"
            nome="data_entrega"
            placeholder="Título do conteúdo"
            ref={register}
          />

          <input
            type="text"
            nome="comprador"
            value={entrega.comprador.nome}
            disabled
          />
          <input
            type="text"
            nome="fornecedor"
            value={entrega.fornecedor.nome}
            disabled
          />

          <input
            type="textarea"
            nome="sucata"
            placeholder="Informe a sucata"
            ref={register}
          />

          <select nome="motorista_id" ref={register}>
            <option value="" disabled selected>
              Informe o motorista
            </option>
            {motoristas.map(motorista => (
              <option key={motorista.id} value={motorista.id}>
                {`${motorista.nome}`}
              </option>
            ))}
          </select>

          <button type="submit">Atualizar</button>
          <Link to="/">Voltar</Link>
        </form>
      </Content>
    </Container>
  );
}

export default Atualizar;
