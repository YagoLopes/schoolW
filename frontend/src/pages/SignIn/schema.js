import React from 'react';
import * as Yup from 'yup';
import Message from '../../components/message';

const schema = Yup.object().shape({
 email: Yup.string().required(
  <Message message="Email é um campo obrigatório" variant="error" />
 ),
 password: Yup.string().required(
  <Message message="Senha é um campo obrigatório" variant="error" />
 ),
});

export default schema;
