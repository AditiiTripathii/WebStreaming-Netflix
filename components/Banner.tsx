import { InformationCircleIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../contants/movie"
import { Movie } from "../typings"
import {FaPlay} from "react-icons/fa"

interface Props {
    netflixOriginals: Movie[]
}
function Banner({netflixOriginals}: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    useEffect(() =>{
    setMovie(
        netflixOriginals[Math.floor(Math.random()* netflixOriginals.length)]
    )},
    [netflixOriginals])
    console.log(movie)

  return (
    <div className="flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-15">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-3 w-3 text-black md:h-5 md:w-6" />
          Play
        </button>
 
        <button
          className="bannerButton bg-[gray]/70"
          // onClick={() => {
          //   setCurrentMovie(movie)
          //   setShowModal(true)
          // }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-7 md:w-6" /> More Info
        </button>
      </div>
    </div>
  )
}

export default Banner
