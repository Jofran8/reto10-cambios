
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    NavLink
  } from 'react-router-dom';
import Gift from '../assets/gift-icon.svg'

const JuegosGratuitos = () => {
    return (
        <section>
            <div className="container-fluid  bg-free rounded mt-4 px-4">

                <div className="row">

                    <div className="col">

                        <div className="row py-3">

                            <div className="col-8 d-flex justify-content-start">

                                <div>
                                    <span className="gift-icon">
                                       <img src={Gift} />
                                    </span>
                                
                                </div>
                                <h2 className=" mt-1 px-3 text-light">
                                   Juegos gratuitos temporales
                                </h2>
                           

                            </div>

                            <div className="col">

                                <div className=" float-end">
                                
                                   <NavLink to="/free" className="btn btn-outline-light">Ver Mas</NavLink>
                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-6 col-md-3">

                                <div className="card ">
                                    <img className="card-img" src="https://i.postimg.cc/SN6fgq8W/Assassins-Creed.jpg" />
                                    
                                    <div className="card-footer rounded-bottom bg-primary d-flex flex-row justify-content-center">
                                        <small className="text-light">GRATIS AHORA</small>
                                    </div>
                                    <div className="mt-3">
                                        <small className="text-dark">Assassin's CreedValhalla</small>
                                        <p className="text-muted">Gratis hasta el 07 abr a la(s) 10:00</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-6 col-md-3">

                                <div className="card">
                                    <img className="card-img" src="https://i.postimg.cc/JzRcggcS/fallout76.jpg" />
                                    <div className="card-footer rounded-bottom bg-primary d-flex flex-row justify-content-center">
                                        <small className=" text-light">GRATIS AHORA</small>
                                    </div>
                                    <div className="mt-3">
                                        <small className="text-dark">Fallout 76</small>
                                        <p className="text-muted">Gratis hasta el 07 abr a la(s) 10:00</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-md-3">

                                <div className="card">
                                    <img src="https://i.postimg.cc/hjh0s5RT/brothers.jpg" className="card-img border-radius rounded-top" />
                                    <div className="card-footer rounded-bottom bg-black d-flex flex-row justify-content-center">
                                        <small className="text-light">Próximamente</small>
                                    </div>
                                    <div className="mt-3">
                                       <small className="text-dark">Brothers: A Tale of Two Sons</small>
                                       <p className="text-muted">Gratis del 07 abr al 14 abr</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-md-3">

                                <div className="card">
                                    <img src="https://i.postimg.cc/SxV7prgR/vanishing.jpg" class="card-img border-radius rounded-top" />
                                    <div className="card-footer rounded-bottom bg-black d-flex flex-row justify-content-center">
                                        <small className="text-light">Próximamente</small>
                                    </div>
                                    <div class="mt-3">
                                        <small className="text-dark">The Vanishing of Ethan Carter</small>
                                        <p className="text-muted">Gratis del 07 abr al 14 abr</p>
                                    </div>
                                </div>

                            </div>
                        

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
 
export default JuegosGratuitos;