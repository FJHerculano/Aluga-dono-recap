import React from 'react'
import bannerImg from '../../assets/bannerImg4.jpg';
import FormSearch from '../FormSearch/FormSearch';
import "./styles.css";

const Banner = () => {
  return (
    <section>
        
        <div className="position-father">
            <img className="banner-img" src={bannerImg} alt="" />

            <div className="container-fluid position-son">
                <div className="row d-flex">

                    <div className="text-center col-md-12 col-lg-7">
                        <h1 className="text-info fw-bold">A alegria de estar bem hospedado</h1>
                        <h3 className="text-info fw-bold">Para apaixonados por animais de estimação</h3>
                        
                        <div className="col-12 text-center">
                            <button className="btn btn-info text-white mb-4"> Sobre nós</button>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-5">
                        <div className="pe-lg-5">
                            <FormSearch/>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

    </section>
  )
}

export default Banner