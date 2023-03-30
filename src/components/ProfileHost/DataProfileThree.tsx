import OptionsProfile from "./OptionsProfile"

const DataProfileThree = () => {
  return (
    <div className="mt-3">
        <h4 className="text-center">Curiosidades sobre o anfitrião:</h4>

      <div className="row d-lg-block d-md-flex align-items-center justify-content-center">
          {/* Quarto campo de dados */}
          <div className="mb-4 col-lg-12 col-md-6 col-sm-12">
            <div className="shadow-sm bg-white rounded-4 p-2 card-custom" >
              <h5 className="text-center">Aceita hospedar:</h5>
              <OptionsProfile
                title="Editar perfil"
                nameTag="Apenas 1 animal"
                background="info"
                color="dark"
              />
              <OptionsProfile
                title="Editar perfil"
                nameTag="Apenas 2 animal"
                background="secondary"
                color="white"
              />
              <OptionsProfile
                title="Editar perfil"
                nameTag="Apenas 3 animal"
                background="secondary"
                color="white"
              />
              <OptionsProfile
                title="Editar perfil"
                nameTag="Mais de 4 animal"
                background="secondary"
                color="white"
              />
            </div>
          </div>
          
          {/* Quinto campo de dados */}
          <div className="mb-4 col-lg-12 col-md-6 col-sm-12">
            <div className="shadow-sm bg-white rounded-4 p-2 card-custom" >

              <h5 className="text-center">Já possui animais:</h5>
              <OptionsProfile
                title="Editar perfil"
                nameTag="Sim, animal pequeno"
                background="info"
                color="dark"
              />
              <OptionsProfile
                title="Editar perfil"
                nameTag="Sim, animal grande"
                background="secondary"
                color="white"
              />
              <OptionsProfile
                title="Editar perfil"
                nameTag="Sim, pequeno e grande"
                background="secondary"
                color="white"
              />
              <OptionsProfile
                title="Editar perfil"
                nameTag="Não possuo nenhum"
                background="secondary"
                color="white"
              />
            </div>
          </div>

          {/* Sexto campo de dados */}
          <div className="mb-4 col-lg-12 col-md-6 col-sm-12">
            <div className="shadow-sm bg-white rounded-4 p-2 card-custom" >

              <h5 className="text-center">Animal castrado:</h5>
                <OptionsProfile
                  title="Editar perfil"
                  nameTag="Apenas castrado"
                  background="secondary"
                  color="white"
                />
                <OptionsProfile
                  title="Editar perfil"
                  nameTag="Macho apenas castrado"
                  background="info"
                  color="white"
                /> 
                <OptionsProfile
                  title="Editar perfil"
                  nameTag="Femêa apenas castrada"
                  background="secondary"
                  color="white"
                />
                <OptionsProfile
                    title="Editar perfil"
                    nameTag="Todos"
                    background="secondary"
                    color="white"
                  />
            </div>
          </div>

          {/* Setimo campo de dados */}
          <div className="mb-4 col-lg-12 col-md-6 col-sm-12">
        <div className="shadow-sm bg-white rounded-4 p-2 card-custom" >

          <h5 className="text-center mt-5">Saúde do animal:</h5>
          <OptionsProfile
            title="Editar perfil"
            nameTag="Aceito apenas vacinado"
            background="secondary"
            color="white"
          />
          <OptionsProfile
            title="Editar perfil"
            nameTag="Aceito todos"
            background="info"
            color="white"
          />
        </div>
          </div>
      </div>
    </div>
  )
}

export default DataProfileThree