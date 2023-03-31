import React from 'react'

const SpecificationsTitles = () => {
  return (
    <div>
        <div className="row justify-content-center align-items-center border-bottom border-3">
            <h5 className="text-center">Esses dados enriquecerão o seu perfil</h5>
            <h6 className="text-center fw-bold">Observações:</h6>
            <span className="text-danger text-center">1° Você poderá pular uma opção ou todas sem responder.</span>
            <span className="text-danger text-center">2° As respostas não são obrigatorias, seja sincero na escolha.</span>
            <span className="text-danger text-center mb-2">3° Ao optar por não escolher o campo padrão é o "NÃO".</span>
        </div>
    </div>
  )
}

export default SpecificationsTitles