import React from "react";

function SearchButton () {
    return (

            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Search..."></input>
            </div>



    );
}

export default SearchButton;
