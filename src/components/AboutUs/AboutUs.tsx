import "./styles.css";
import bannerImg from "../../assets/bannerImg7.jpg"

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex">

        <h1 className="text-center mb-5">Sobre Nós</h1>

        <div className="imgAboutflex col-md-6 col-sm-12 order-sm-2 order-md-1">
          <img className="img-about rounded-4" src={bannerImg} alt="" />        
        </div>

        <div className="imgAboutBlock col-md-6 col-sm-12 mt-5 order-sm-1 order-md-2">
          <h3>Bem vindo, somos a Aluga Dono!</h3>
          <p>
            Somos uma empresa destinada a hospedagem de
            animais de estimação, visando o problema de
            evitar diferentes comportamentos no animal relacionado
            a sentimentos de abandono, temos nossos anfitriões 
            preparados para dar muito amor ao seu pet.
          </p>
        </div>

      </div>
    </div>
  )
}

export default AboutUs