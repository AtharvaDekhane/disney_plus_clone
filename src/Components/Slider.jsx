import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
function Slider() {
    const [movieList,setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    },[])

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const sliderRight = () => {
      if (elementRef.current) {
          elementRef.current.scrollLeft += screenWidth;
      }
  };
  const sliderLeft = () => {
    if (elementRef.current) {
        elementRef.current.scrollLeft -= screenWidth;
    }
};
  return (
    <div className='relative'>

      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer z-10' 
      onClick={sliderLeft}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 z-10' 
      onClick={sliderRight}/>

      
      <div className='flex overflow-x-auto w-full py-4 scrollbar-none scroll-smooth scroll-snap-x snap-mandatory' ref={elementRef}
      style={{ scrollSnapType: "x mandatory" }}>
        {movieList.map((item,index) =>(
          <img key={index} src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-top-left snap-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
      ))}
      </div>
    </div>
  )
}

export default Slider
