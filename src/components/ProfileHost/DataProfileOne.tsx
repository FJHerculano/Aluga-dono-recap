import { faDog, faHouse, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './profile.css'
import IconProfile from './IconProfile'

const DataProfileOne = () => {
  return (
    <div className="mt-3 area-campo1">

        {/* componente dados 1 */}
            <h4 className="text-center ">Informações importantes: </h4>

            <div className="d-lg-block d-md-flex align-items-center justify-content-center">

                {/* Primeiro Campo */}
                <div className="p-2">
                    <div className="">
                        <div className="bg-white shadow-sm rounded-4 p-2 mini-card-custom">
                            <h6 className="text-center">Medicamentos:</h6>
                            <div className="d-flex align-items-center mt-4">
                                <FontAwesomeIcon className="bg-danger p-1 me-2 rounded-circle text-white" icon={faStethoscope}/>
                                <span >experiencia em aplicar qualquer medicamento </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segundo campo de dados */}
                <div className="p-2">
                    <div className="">
                        <div className="bg-white shadow-sm rounded-4 p-2 mini-card-custom">
                            <h6 className="text-center fw-bold">Porte aceito:</h6>
                            
                            <div className='text-center text-danger'>
                                <span>Esse campo altera a ser clicado</span>
                            </div>

                            <div className="d-flex align-items-center justify-content-center">
                                <IconProfile
                                    size="6"
                                    name={faDog}
                                    color="secondary"
                                />
                                <IconProfile
                                    size="4"
                                    name={faDog}
                                    color="secondary"
                                />
                                <IconProfile
                                    size="3"
                                    name={faDog}
                                    color="success"
                                />
                                <IconProfile
                                    size="1"
                                    name={faDog}
                                    color="success"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terceiro campo de dados */}
                <div className="p-2">
                    <div className="">
                        <div className="bg-white shadow-sm rounded-4 p-2 mini-card-custom">
                            <h6 className="text-center fw-bold">Tipo de estabelecimento:</h6>
                            <div className='text-center text-danger'>
                                <span>Esse campo altera a ser clicado</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <IconProfile
                                    size="4"
                                    name={faHouse}
                                    color="secondary"
                                />
                                <IconProfile
                                    size="3"
                                    name={faHouse}
                                    color="secondary"
                                />
                                <IconProfile
                                    size="1"
                                    name={faHouse}
                                    color="success"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DataProfileOne