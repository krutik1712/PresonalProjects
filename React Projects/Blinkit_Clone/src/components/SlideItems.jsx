import React, { useRef } from 'react';
import { ImStopwatch } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import '../components/SlideItems.css';

export default function SlideItems() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -700,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 700,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='relative flex flex-col gap-6 px-4 w-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-extrabold'>Dairy, Bread & Eggs</h1>
                <a href="#" className='text-[#0C831F] text-xl font-medium'>see all</a>
            </div>

            <div className='relative'>
                <button
                    onClick={scrollLeft}
                    className='absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'>
                    <FaChevronLeft size={20} />
                </button>

                <div ref={scrollRef} className='flex gap-5 overflow-auto scrollbar-hide'>
                    {[
                        {
                            image: "src/assets/slide1.png",
                            title: "Amul Masti Curd",
                            weight: "400 gm",
                            price: "₹35",
                        },
                        {
                            image: "src/assets/slide2.avif",
                            title: "Chitale Full Cream Fresh Milk",
                            weight: "500 ml",
                            price: "₹36",
                        },
                        {
                            image: "src/assets/slide3.avif",
                            title: "Amul Taaza Toned Fresh Milk",
                            weight: "500 ml",
                            price: "₹28",
                        },
                        {
                            image: "src/assets/slide4.avif",
                            title: "Yojana Poultry Power White Eggs - 6 pcs",
                            weight: "6 pieces",
                            price: "₹52",
                        },
                        {
                            image: "src/assets/slide5.avif",
                            title: "Amul Salted Butter",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide6.avif",
                            title: "Amul Salted Butter",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide7.avif",
                            title: "Amul Masti Curd",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide8.avif",
                            title: "Modern Sandwich Bread",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide9.avif",
                            title: "Amul Cheese Cubes",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide10.avif",
                            title: "Amul Gold Full Cream Fresh Milk",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide11.avif",
                            title: "Amul Cow Fresh Milk",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide12.avif",
                            title: "Amul Tazza Homogenised Toned..",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide13.avif",
                            title: "Amul Tazza Toned Milk",
                            weight: "100 gm",
                            price: "₹60",
                        },
                        {
                            image: "src/assets/slide14.avif",
                            title: "Yojana Poultry Power White Eggs - 12 pcs",
                            weight: "12 pieces",
                            price: "₹104",
                        },
                        {
                            image: "src/assets/slide15.avif",
                            title: "Mother Dairy Classic Curd",
                            weight: "100 gm",
                            price: "₹60",
                        },
                    ].map((item, index) => (
                        <div key={index} className='box border-gray-100 shadow-md shadow-zinc-200 border-2 rounded-lg w-[216px] px-4 py-2 flex-shrink-0'>
                            <div className='img-container'>
                                <img src={item.image} alt={item.title} className='' />
                            </div>
                            <a href='#' className='cursor-pointer flex flex-col gap-5'>
                                <div className='h-16'>
                                    <span className='flex items-center text-[9px] p-1 bg-zinc-100 font-semibold w-fit rounded-md'>
                                        <ImStopwatch />
                                        <p>10 MINS</p>
                                    </span>
                                    <h2 className='font-semibold'>{item.title}</h2>
                                </div>
                                <p className='text-sm font-thin'>{item.weight}</p>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <h4 className='font-semibold text-xs'>{item.price}</h4>
                                    </div>
                                    <button className='py-1 px-4 text-[#0C831F] text-sm border-[#0C831F] border-[1px] rounded-lg bg-[#F7FFF9]'>ADD</button>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className='absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md'>
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    )
}