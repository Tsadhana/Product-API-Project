import React from 'react'

import './ProductDetailsShimmer.css'

export const ProductDetailsShimmer = () => {
    return (
        <div className='country-details-container detailsContainer'>

            <div className='country-details shimmer-details'>
                <div className='image-shimmer' ></div>

                <div className='info'>
                    <div className='heading-shimmer'></div>
                    <div className='ShimmerLeftRightInfo '>
                        <div className='InnerInfo'>
                            {
                                Array.from({ length: 4 }).map((el, i) => {
                                    return <div key={i} className='innerText-shimmer'></div>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
