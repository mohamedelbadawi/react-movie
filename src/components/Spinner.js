import React from 'react'

const Spinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center ' style={{ width: '100%', marginTop: '10rem' }}>

            <div className="spinner-border text-primary" style={{ fontSize: '20rem', width: '10rem', height: '10rem' }} role="status">
                {/* <span className="sr-only">Loading...</span> */}
            </div>
        </div>
    )
}

export default Spinner