import React from 'react';
import { apiReset } from '../../services/api';
import { withRouter } from 'react-router-dom';
import Styles from './styles';
import { Form, Input } from '@rocketseat/unform';
import { useAlert } from 'react-alert';
function Password(props) {
 const alert = useAlert();
 async function handleSubmit(data) {
  const { password, password_confirmation } = data;
  if (password == null || password_confirmation == null) {
   alert.error('Preencha todos os campos para continuar!');
  } else {
   try {
    await apiReset.put('/passwords', { password, password_confirmation });
    props.history.push('/');
   } catch (err) {
    alert.error(
     'Não foi possível restaurar sua senha, verifique se você está cadastrardo corretamente!'
    );
   }
  }
 }
 return (
  <Styles>
   <div className="form-gap" />
   <div className="container">
    <div className="row">
     <div className="col-md-4 col-md-offset-4">
      <div className="panel panel-default">
       <div className="panel-body">
        <div className="text-center">
         <h3>
          <i className="fa fa-lock fa-4x" />
         </h3>
         <h2 className="text-center">Nova Senha</h2>
         <p>Enviamos uma nova senha para o seu e-mail</p>
         <div className="panel-body">
          <Form autoComplete="off" className="form" onSubmit={handleSubmit}>
           <div className="form-group">
            <div className="input-group">
             <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock color-blue" />
             </span>
             <Input
              placeholder="Nova Senha"
              className="form-control"
              type="password"
              name="password"
              required
             />
            </div>
           </div>
           <div className="form-group">
            <div className="input-group">
             <span className="input-group-addon">
              <i className="glyphicon glyphicon-info-sign color-blue" />
             </span>
             <Input
              placeholder="Confirme a nova senha"
              className="form-control"
              type="password"
              name="password_confirmation"
              required
             />
            </div>
           </div>
           <div className="form-group">
            <input
             name="recover-submit"
             className="btn btn-lg btn-primary btn-block"
             value="Alterar"
             type="submit"
            />
           </div>
          </Form>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Styles>
 );
}
export default withRouter(Password);
