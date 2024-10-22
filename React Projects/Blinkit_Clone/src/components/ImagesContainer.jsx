import React from 'react'
import './ImageContainer.css'

function ImagesContainer() {
    return (
        <div className='w-full'>
            <div>
                <a href=""><img src="src\assets\Paan_corner.webp" alt="" /></a>
            </div>
            <div className='flex items-center gap-6 p-3'>
                <a href=""><img className='w-80' src="src\assets\pharmacy.png" alt="" /></a>
                <a href=""><img className='w-80' src="src\assets\Pet-Care.png" alt="" /></a>
                <a href=""><img className='w-80' src="src\assets\babycare.png" alt="" /></a>
            </div>
            <div className='py-5'>
                <div className='items-images py-1 flex'>
                    <a href=""><img src="src\assets\img1.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img2.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img3.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img4.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img5.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img6.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img7.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img8.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img9.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img10.avif" alt="" /></a>
                </div>
                <div className='items-images py-1 flex'>
                    <a href=""><img src="src\assets\img11.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img12.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img13.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img14.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img15.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img16.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img17.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img18.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img19.avif" alt="" /></a>
                    <a href=""><img src="src\assets\img20.avif" alt="" /></a>
                </div>
            </div>
        </div>

    )
}

export default ImagesContainer