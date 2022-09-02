import React from 'react'

function Pagination({ usersPerPage, totalUsers, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const buttons = pageNumbers.map(page => {
        return <button key={page} className="btn px-6 py-4" onClick={() => paginate(page)}> {page} </button>
    })

    return (
        <div className='flex gap-4 my-5'>{buttons}</div>
    )
}

export default Pagination