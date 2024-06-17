import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
    return (
      <header className="d-sm-flex align-items-center justify-content-between shadow-sm">
        <div className="m-2">
            <h1 className="m-1">JK Online Services</h1>
        </div>
        <div className="d-flex m-2">
            <Link className="btn btn-primary btn-sm shadow m-1" to="/">Home</Link>
            <a href="tel:+254728532000" className="d-flex align-items-center btn btn-danger btn-sm shadow m-1">
              <FontAwesomeIcon icon={faPhone} className="m-1" size="sm"/>
              <span className="fw-bold">0728 532 000</span> 
            </a>
            <Link className="btn btn-primary btn-sm shadow m-1" to="/services">Services</Link>
            <Link className="btn btn-primary btn-sm shadow m-1" to="/shop">Shop</Link>
            <Link className="btn btn-secondary btn-sm shadow m-1" to="/about-us">About Us</Link>
        </div>
      </header>
    )
}

export default HeaderComponent