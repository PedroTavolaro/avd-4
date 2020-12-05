import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Entregas from '../pages/Entregas';
import Cadastrar from '../pages/Cadastrar';
import Atualizar from '~/pages/Atualizar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Entregas} />
      <Route path="/cadastrar" component={Cadastrar} />
      <Route path="/atualizar/:id" component={Atualizar} />
    </Switch>
  );
}
