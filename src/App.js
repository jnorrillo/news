import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');

  //state para guardar las noticias de las consulta a la api
  const [noticias, guardarNoticias] = useState([]);

  const str = 'NjhkZjQzZGNjNjhjNDYzODk4MTU1ZDBiNjZmYTBmZTk=';
  const decoded = atob(str);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${decoded}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria, decoded]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      ></Header>

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}></Formulario>
        <ListadoNoticias noticias={noticias}></ListadoNoticias>
      </div>
    </Fragment>
  );
}

export default App;
