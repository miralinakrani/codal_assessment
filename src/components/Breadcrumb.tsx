import React from 'react'

const Breadcrumb = () => {
    return (
        <div className="text-sm text-gray-600 mb-4">
            <span>Browse Categories</span> &gt; <span>Lubricants</span> &gt;{' '}
            <span className="font-bold text-black">Hydraulic Fluids</span>
        </div>
    )
}

export default Breadcrumb