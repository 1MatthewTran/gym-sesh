import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './HomeBanner2.css';

import { Pagination } from 'swiper/modules';

const HomeBanner2 = () => {
  const [workouts, setWorkouts] = useState<any[] | null>(null)
  const getworkouts = async () =>{
    let data: any = [{
      type: 'Chest',
      imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    },
    {
      type: 'Abs',
      imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    },
    {
      type: 'Shoulder',
      imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    },
    {
      type: 'Back',
      imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    },
    {
      type: 'Biceps',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1664528917209-be9e9f962ad0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    },
    {
      type: 'Triceps',
      imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    },
    {
      type: 'Legs',
      imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    },
    {
      type: 'Forearms',
      imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      durationInMin: 90
    }]
    setWorkouts(data)
  }
  useEffect(()=>{
    getworkouts()
  }, [])
  return (
    <div>
      <h1 className='mainhead1'>Workouts</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          workouts && workouts.map((item, index) => {
            return(
              <SwiperSlide key={index}>
                <div className='swiper-slide'
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                  onClick={()=>{
                    window.location.href = `/workout/${item.type}`
                  }}
                  >
                    <div className='swiper-slide-content'>
                      <h2>{item.type}</h2>
                      <p>{item.durationInMin}</p>
                    </div>

                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default HomeBanner2
