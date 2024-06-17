import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./search.css";

const SearchComponent = () => {
    return (
        <div className="d-sm-flex justify-content-center mt-2 p-2">
            <div className="d-sm-flex align-items-center">
                <label className="m-1"><small>Having Trouble?</small></label>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="search-bar-icon d-flex align-items-center">
                        <label className="search-icon"><FontAwesomeIcon icon={faSearch} /></label>
                        <input className="form-control m-1 shadow-sm border-0" type="search" placeholder="Search for service..."/>
                    </div>
                    <button className="btn btn-warning m-1 d-flex align-items-center shadow-sm fw-bold text-white" >
                        <span className="m-1">Search</span>    
                    </button>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <button className="btn btn-light shadow-sm m-1">
                    Account
                </button>
                <button className="d-flex align-items-center btn btn-light shadow-sm m-1">
                    <FontAwesomeIcon icon={faShoppingBasket}/>
                    <span className="m-1">Cart</span>    
                </button>
            </div>
        </div>
    )
}

export default SearchComponent