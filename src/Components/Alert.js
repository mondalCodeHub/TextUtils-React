import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <>
            <div className="alertContainer" style={{height : '40px'}}>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                </div>}
            </div>
        </>

    )
}
export default Alert
// bg-dark text-light
{/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button> */}
            
//ARUP MONDAL (@mondalCodeHub)