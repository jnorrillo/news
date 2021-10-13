import React from 'react';
import style from '../module/Formulario.module.css'
import useSelect from '../hooks/useSelect';

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "bussines", label: "Negocios" },
    { value: "entertraiment", label: "Entretenimiento" },
    { value: "helpth", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "deport", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  //utilizar custom hooks
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  //cuando el usuario le de submit al form, pasar categoria al app.js
  const buscarNoticias = e => {
    e.preventDefault();

    guardarCategoria(categoria);
  }

  return (
    <div className={`${style.buscardor} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={style.heading}>Encuentra noticias por categorias</h2>
          <SelectNoticias></SelectNoticias>

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${style.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default Formulario;