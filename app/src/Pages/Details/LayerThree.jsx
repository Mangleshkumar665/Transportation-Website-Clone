import i1 from "../../assets/images/layer3/1.webp"
import i2 from "../../assets/images/layer3/2.webp"

const LayerThree = () => {
    return (
        <div className="layer3 row">
            <div className=" layer3-text col">
                <h2>Two groundbreaking solutions
                    unveiled to boost your ROI</h2>


                <button> Get A Demo <i className="fa-solid fa-forward fa-beat-fade " style={{ color: "#ffffff" }}></i>
                </button>
            </div>

            <div className="layer3-img col ">

                <div id="carouselExampleAutoplaying1" className="carousel slide " data-bs-ride="carousel ">
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src={i1} className="d-block w-100" alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h3>D&D IQ: Advanced Detention and Demurrage Tracker</h3>

                            </div>

                        </div>
                        <div className="carousel-item">
                            <img src={i2} className="d-block w-100" alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h3>D&D IQ: Advanced ajoidvodmdspopa poame poa </h3>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={i1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>D&D IQ: Advanced Detention and Demurrage Tracker</h3>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>




            </div>
        </div>
    )
}

export default LayerThree
