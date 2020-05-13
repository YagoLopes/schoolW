import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAdministrator } from '../../services/auth';
import { logout } from '../../services/auth';
import Styles from './styles';

export default function Nav() {
 return (
  <Styles>
   <nav className="navbar navbar-default navbar-top">
    <div className="container-fluid">
     <div className="navbar-header">
      <button
       type="button"
       className="navbar-toggle"
       data-toggle="collapse"
       data-target="#myNavbar"
      >
       <span className="icon-bar" />
       <span className="icon-bar" />
       <span className="icon-bar" />
      </button>
      <p className="navbar-brand">LS-Educação</p>
     </div>
     <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
       {isAdministrator() ? null : (
        <li>
         <NavLink exact activeStyle={{ color: '#337ab7' }} to="/dash">
          Painel
         </NavLink>
        </li>
       )}
       {isAdministrator() ? (
        <li>
         <NavLink exact activeStyle={{ color: '#337ab7' }} to="/jobs">
          Empresas
         </NavLink>
        </li>
       ) : null}
       {isAdministrator() ? (
        <li>
         <NavLink exact activeStyle={{ color: '#337ab7' }} to="/users">
          Usuarios
         </NavLink>
        </li>
       ) : null}
      </ul>
      <ul className="nav navbar-nav navbar-right">
       <li>
        <a href="##" onClick={logout}>
         <span className="glyphicon glyphicon-log-in" /> Sair
        </a>
       </li>
      </ul>
     </div>
    </div>
   </nav>
  </Styles>
 );
}
