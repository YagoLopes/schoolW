import React from 'react';
export default function ViewError() {
 return (
  <div className="container">
   <br />
   <br />
   <br />
   <br />
   <div className="row">
    <div className="col-md-2" />
    <div className="col-md-8">
     <div className="panel panel-danger">
      <div className="panel-heading">
       <h3 className="text-center">
        <span
         className="glyphicon glyphicon-exclamation-sign"
         aria-hidden="true"
        />{' '}
        Oops:
        <small>
         Página não encontrada - <b>Erro 404</b>
        </small>
       </h3>
      </div>
      <div className="panel-body">
       <p>
        A página que você está procurando pode ter sido removida, mudado de
        nome, ou está temporariamente indisponível. Tente o seguinte:
       </p>
       <ul className="list-group">
        <li className="list-group-item">
         Certifique-se de que o endereço do site exibido na barra de endereços
         do seu navegador está escrito e formatado corretamente.
        </li>
        <li className="list-group-item">
         Se você chegou a esta página clicando em um link,
         <a href="https://www.facebook.com/lsinformaticaaraguarimg/?__tn__=%2Cd%2CP-R&eid=ARDtGW6TDhu11cBxJQe-erfS-eqozUM0RGJPpSfLt34Xa3SbdPXwoc9bjfs0OeeYbo6kokE1YhiCAZb6">
          <b>contate-nos</b>
         </a>{' '}
         para nos alertar que o link está formatado incorretamente.
        </li>
        <li className="list-group-item">
         Esqueça que isso aconteceu, e vá para{' '}
         <a href="/">
          sua <b>Página Inicial</b>
         </a>{' '}
         :)
        </li>
       </ul>
      </div>
     </div>
    </div>
    <div className="col-md-2" />
   </div>
   <p>
    <a href="https://lsinformatica.com.br/?pg=contato">LS Informática.</a>
   </p>
  </div>
 );
}
