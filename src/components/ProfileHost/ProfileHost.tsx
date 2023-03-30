import './profile.css'
import DataProfileOne from './DataProfileOne'
import DataProfileTwo from './DataProfileTwo'
import DataProfileThree from './DataProfileThree'
import DataProfileFour from './DataProfileFour'

const ProfileHost = () => {
  return (
    <div className="container-fluid">

      <div className="row d-flex mt-5 ">
        {/* Dados perfil 1  */}
        <div className="col-lg-3 col-sm-12 campo1 d-flex justify-content-center area-campo1">
          <DataProfileOne/>
        </div>

        {/* Dados perfil 2 */}
        <div className="d-flex justify-content-center align-items-center col-lg-6 col-md-12 campo2 col-sm-12 area-campo1">
          <DataProfileTwo/>
        </div> 

        {/* Dados perfil 3 */}
        <div className="col-lg-3 col-md-12 campo3 area-campo1 mb-5">
          <DataProfileThree/>
        </div>

        <div className="col-lg-9 col-md-12 campo4 col-md-12 " > 
          <DataProfileFour/>
        </div>

      </div>      


       
       {/* Ainda falta o campo avaliações */}
      
    </div>
  )
}

export default ProfileHost