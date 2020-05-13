import React from 'react';
import * as Yup from 'yup';

const schema = Yup.object().shape({
 email: Yup.string().required(
  <span class="message info">E-mail é um campo obrigatório!</span>
 ),
});

export default schema;
