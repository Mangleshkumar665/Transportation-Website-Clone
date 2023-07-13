import img1 from "../assets/images/5.jpg"
import img2 from "../assets/images/6.jpg"


const FrontPage = () => {
    return (
        <>
            <div className=' frontpage-wrapper '>

                <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel ">
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>



            </div>

            <div className='overlay d-flex justify-content-center align-items-center flex-column '>
                <h1> Supply Chain Automation</h1>
                <h2> using the world’s most intuitive AI-powered Transportation Platform</h2>

                <button> Contact Us  </button>
            </div>




        </>
    )
}

export default FrontPage
