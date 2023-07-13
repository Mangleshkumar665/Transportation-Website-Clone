import vid from "../../assets/svg/1.webm"


const LayerOne = () => {
    return (
        <>

            <div className='layer1-w row'>

                <div className=' col  layer1-text d-flex flex-column justify-content-center align-items-start  '>

                    <h1 className=""> Automate your Supply Chain Profitably</h1 >
                    <p className="">Our easy-to-use, intuitive multi-modal logistics platform deploys the power of data science and advanced machine learning intelligence to enable double-digit cost savings for your company.</p>

                    <ul className="">
                        <h3> Platform Overview</h3>

                        <li>
                           <strong>GoTrack </strong>  <br />
                            Obtain real-time multimodal visibility across all your shipment.
                        </li>
                        <li>
                            <strong>GoProcure</strong>  <br />
                            Get the best freight rates every single time
                        </li>
                        <li>
                            <strong>GoInvoice</strong>  <br />
                            Enable error-free freight invoicing
                        </li>
                        <li>
                            <strong>External link</strong>  <br />
                            Effortlessly map the progress of your shipment

                        </li>



                    </ul>


                </div>

                <div className=' col  layer1-video d-flex justify-content-center align-items-center'>
                    <video width="320" height="240"  autoPlay loop>
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
                


            </div>

        </>
    )
}

export default LayerOne
