import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className='absolute text-white w-full h-full bg-gradient-to-r from-[rgb(0,0,0,0.7)] to-[rgb(0,0,0,0.1)] px-20 py-20'>
      <div className='w-1/3 space-y-8'>
      <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
        <button className='bg-[#FF3811] hover:bg-transparent border border-transparent hover:border hover:border-white px-4 py-2 font-medium rounded'>Discover More</button>
        <button className='border border-white hover:bg-[#FF3811] hover:border-transparent px-4 py-2 font-medium rounded'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-1">❮</a> 
      <a href="#slide2" className="btn btn-circle ml-1">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className='absolute text-white w-full h-full bg-gradient-to-r from-[rgb(0,0,0,0.7)] to-[rgb(0,0,0,0.1)] px-20 py-20'>
      <div className='w-1/3 space-y-8'>
      <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
        <button className='bg-[#FF3811] hover:bg-transparent border border-transparent hover:border hover:border-white px-4 py-2 font-medium rounded'>Discover More</button>
        <button className='border border-white hover:bg-[#FF3811] hover:border-transparent px-4 py-2 font-medium rounded'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-1">❮</a> 
      <a href="#slide3" className="btn btn-circle ml-1">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className='absolute text-white w-full h-full bg-gradient-to-r from-[rgb(0,0,0,0.7)] to-[rgb(0,0,0,0.1)] px-20 py-20'>
      <div className='w-1/3 space-y-8'>
      <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
        <button className='bg-[#FF3811] hover:bg-transparent border border-transparent hover:border hover:border-white px-4 py-2 font-medium rounded'>Discover More</button>
        <button className='border border-white hover:bg-[#FF3811] hover:border-transparent px-4 py-2 font-medium rounded'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-1">❮</a> 
      <a href="#slide4" className="btn btn-circle ml-1">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className='absolute text-white w-full h-full bg-gradient-to-r from-[rgb(0,0,0,0.7)] to-[rgb(0,0,0,0.1)] px-20 py-20'>
      <div className='w-1/3 space-y-8'>
      <h1 className='text-6xl font-bold leading-[70px]'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
        <button className='bg-[#FF3811] hover:bg-transparent border border-transparent hover:border hover:border-white px-4 py-2 font-medium rounded'>Discover More</button>
        <button className='border border-white hover:bg-[#FF3811] hover:border-transparent px-4 py-2 font-medium rounded'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-1">❮</a> 
      <a href="#slide1" className="btn btn-circle ml-1">❯</a>
    </div>
  </div> 
  
</div>
    );
};

export default Banner;