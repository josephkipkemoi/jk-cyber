import kraData from "../../data/kra.json"
import "./services.css"

const ServicesMainComponent = () => {
    return (
        <div className="container">
            <KRAServices/>
        </div>
    )
}

const KRAServices = () => {
    return (
        <div>
            <div className="card card-header border-0 bg-danger rounded-3">
                <h5 className="text-white">Kenya Revenue Authority (K.R.A.) Services</h5>
            </div>
            <div className="d-sm-flex justify-content-around m-2">
                {kraData.data.map((d,i) => {
                    return (
                        <div key={i+d.image_url} className="card m-2 border-0">
                            <div className="card card-body border-0">
                                <img className="img-fluid" src={d?.image_url} alt="KRA Logo"/>
                                    <div className="card card-header rounded-0 border-0">
                                        <h5 className="text-center text-primary fw-bold">{d?.service_name}</h5>
                                    </div>
                                    <div className="mt-2">
                                        <p>Government Fee: {d?.government_fee}</p>
                                        <p>Service Fee: {d?.service_charge}</p>
                                        <p>Duration: {d?.duration}</p>
                                        <p>Service Type: {d?.service_type} </p>
                                    </div>
                            </div>
                            <div className="card card-footer border-0 d-flex justify-content-between flex-row"> 
                                <button className="btn btn-dark m-1">Requirements</button>
                                <button className="btn btn-primary m-1">Apply Now</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesMainComponent