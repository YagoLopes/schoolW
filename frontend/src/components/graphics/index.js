/*Precisa Refatorar para React Hooks*/

import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export function Barra() {
 const [barra] = useState({
  data: {
   labels: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
   ],
   datasets: [
    {
     label: 'Matriculas 2019',
     data: [22, 19, 9, 5, 2, 3, 10, 14],
     backgroundColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(155, 100, 64, 1)',
      'rgba(255, 130, 87, 1)',
     ],
     borderWidth: 1,
    },
   ],
  },
 });

 return (
  <div className="chart">
   <Bar
    data={barra.data}
    options={{
     maintainAspectRatio: false,
    }}
   />
  </div>
 );
}

export function Linhas() {
 const [linhas] = useState({
  data: {
   labels: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
   ],
   datasets: [
    {
     label: 'Matriculas 2019',
     data: [12, 19, 3, 5, 2, 3, 8, 7, 3],
     backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
     ],
     borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
     ],
     borderWidth: 1,
    },
   ],
  },
 });

 return (
  <div className="chart">
   <Line
    data={linhas.data}
    options={{
     maintainAspectRatio: false,
    }}
   />
  </div>
 );
}

export function Pizza() {
 const [pizza] = useState({
  data: {
   labels: ['Janeiro', 'Fevereiro', 'Março'],
   datasets: [
    {
     label: 'Matriculas 2019',
     data: [12, 19, 20],
     backgroundColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
     ],
     borderWidth: 1,
    },
   ],
  },
  options: {
   scales: {
    yAxes: [
     {
      ticks: {
       beginAtZero: true,
      },
     },
    ],
   },
  },
 });
 return (
  <div className="chart">
   <Pie
    data={pizza.data}
    options={{
     maintainAspectRatio: false,
    }}
   />
  </div>
 );
}
