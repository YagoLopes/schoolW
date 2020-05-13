import React, { useState, useEffect } from 'react';
import Styles from './styles';
import { api } from '../../services/api';
import Usuario from '../../components/usuario';
import { Form, Input } from '@rocketseat/unform';
import Modal from 'react-responsive-modal';
import Nav from '../../components/nav';
import { useAlert } from 'react-alert';

export default function CRUDUsers() {
 const [modal, setModal] = useState(false);
 const [users, setUsers] = useState([]);

 const [infoUsers, setInfoUsers] = useState({});
 const [page, setPage] = useState(1);
 const alert = useAlert();

 useEffect(() => {
  listUsers();
 }, []);

 async function listUsers(page = 1) {
  const response = await api.get(`/users?page=${page}`);
  const { data, ...infoUsuarios } = response.data;
  setUsers(data);
  setInfoUsers(infoUsuarios);
  setPage(page);
 }
 function OpenOrCloseModal() {
  setModal(!modal);
 }

 function prevPage() {
  if (page === 1) return;

  const pageNumber = page - 1;
  listUsers(pageNumber);
 }
 function nextPage() {
  if (page === infoUsers.pages) return;
  const pageNumber = page + 1;
  listUsers(pageNumber);
 }

 async function handleSubmit(data) {
  const { username, email, password, password_confirmation } = data;
  if (!username || !email || !password || !password_confirmation) {
   alert.error('Preencha todos os campos para continuar!');
  }
  if (password !== password_confirmation) {
   alert.error('Confirmação de senha não confere!');
  } else {
   try {
    await api.post('/usersModerator', data);
    listUsers();
    OpenOrCloseModal();
    alert.info('Usuario adicionado com sucesso!');
   } catch (err) {
    alert.error(
     'Houve um problema com o cadastro, verifique se todos os dados estão corretos.'
    );
   }
  }
 }

 return (
  <Styles>
   <Modal open={modal} onClose={OpenOrCloseModal} center>
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4 id="titulo">Dados do Usuario</h4>
     </div>
     <div className="panel-body">
      <Form onSubmit={handleSubmit}>
       <div className="row">
        <div className="input-group">
         <span className="input-group-addon">
          {' '}
          <i className="glyphicon glyphicon-user"> </i>
         </span>
         <Input
          name="username"
          type="text"
          className="form-control"
          placeholder="Digite seu nome..."
          required
         />
        </div>
        <br />
        <div className="input-group">
         <span className="input-group-addon">
          {' '}
          <i className="glyphicon glyphicon-user"> </i>
         </span>
         <Input
          name="email"
          type="email"
          className="form-control"
          placeholder="Digite um email valido..."
          required
         />
        </div>
        <br />
        <div className="input-group">
         <span className="input-group-addon">
          {' '}
          <i className="glyphicon glyphicon-lock"> </i>
         </span>
         <Input
          id="password"
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required
         />
        </div>
        <br />
        <div className="input-group">
         <span className="input-group-addon">
          {' '}
          <i className="glyphicon glyphicon-info-sign"> </i>
         </span>
         <Input
          id="passwordConfirmation"
          type="password"
          className="form-control"
          name="password_confirmation"
          placeholder="Confirmação"
          required
         />
        </div>
        <br />
       </div>

       <div className="actions">
        <p data-placement="top" data-toggle="tooltip" title="Guardar Registro">
         <button type="submit" className="btn btn-primary">
          <span className="glyphicon glyphicon-ok" /> Salvar
         </button>
        </p>
       </div>
      </Form>
     </div>
    </div>
   </Modal>
   <Nav />
   <br />
   <div className="form-gap" />
   <div className="container">
    <div className="row">
     <div className="col-md-12">
      <div className="panel panel-default">
       <div className="panel-heading">
        <div className="col-8 ">
         <div className="row">
          <div className="col-sm-4">
           <form>
            <div className="input-group">
             <input
              type="text"
              className="form-control"
              placeholder="CNPJ ou Razão Social"
             />
             <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
               <i className="glyphicon glyphicon-search" />
              </button>
             </div>
            </div>
           </form>
          </div>
          <div className="col-sm-2">
           <p
            data-placement="top"
            data-toggle="tooltip"
            title="Adicionar Usuario">
            <button
             className="btn btn-primary btn-circle"
             onClick={OpenOrCloseModal}>
             <span className="glyphicon glyphicon-plus" /> Adicionar Novo
            </button>
           </p>
          </div>
         </div>
        </div>
       </div>

       <div className="panel-body">
        <div className="text-left">
         <div className="table-responsive">
          <table className="table table-hover">
           <thead>
            <tr>
             <th>Nome</th>
             <th>Email</th>
            </tr>
           </thead>
           <tbody>
            {users.map(user => {
             return <Usuario key={user.id} usuario={user} />;
            })}
           </tbody>
          </table>
         </div>
        </div>
       </div>
       <div className="panel-footer">
        <ul className="pager">
         <li className="previous">
          <a onClick={prevPage}>Anterior</a>
         </li>
         <li className="next">
          <a onClick={nextPage}>Próximo</a>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Styles>
 );
}
