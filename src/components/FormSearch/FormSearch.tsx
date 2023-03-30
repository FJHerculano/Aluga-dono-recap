import React from 'react'
import "./styles.css";

const FormSearch = () => {
  return (
    <div className="">
      <div className="p-3 border border-1 rounded-4 shadow bg-light">
        <h3 className="text-center mb-5">Busque por hospedagem</h3>

        <h6 className="text-center fs-5">Localização</h6>
        <input type="text" className="form-control border-bottom border-5 border-primary" />
        <hr />

        <h6 className="text-center fs-5">Animal portador de nescessidades especiais?</h6>
        <select className="form-select border-bottom border-5 border-primary">
          <option >Primeira opção</option>
          <option>Segunda opção</option>
          <option>Terceira opção</option>
        </select>
        <hr />

        <h6 className="text-center fs-5">Especie</h6>
        <select className="form-select border-bottom border-5 border-primary">
          <option >Primeira opção</option>
          <option>Segunda opção</option>
          <option>Terceira opção</option>
        </select>
        <hr />

        <h6 className="text-center fs-5">Porte</h6>
        <select className="form-select border-bottom border-5 border-primary">
          <option >Primeira opção</option>
          <option>Segunda opção</option>
          <option>Terceira opção</option>
        </select>
        <hr />
        
        <h6 className="text-center fs-5">Idade</h6>
        <select className="form-select border-bottom border-5 border-primary">
          <option >Primeira opção</option>
          <option>Segunda opção</option>
          <option>Terceira opção</option>
        </select>

        <div className="mt-3 d-flex justify-content-center">
          <button className="btn btn-info text-white">Procurar</button>
        </div>
      </div>
    </div>
  )
}

export default FormSearch