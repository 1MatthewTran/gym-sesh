"use client"
import { useEffect, useState } from "react"
import React from "react"
import './workoutPage.css'

const page = () => {
  const [ workout, setWorkout] = useState<any>(null)

  const getworkout =async () => {
    let data: any = {
        type: 'Chest',
        imageUrl: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 30,
        exercises: [
            {
                exercise: 'Bench Press',
                videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                sets: 3,
                reps: 10,
                rest: 60,
                description: 'Lorem ipsum dolor sit amet sonsectetur'
            },
            {
                exercise: 'Cable Press',
                videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                sets: 3,
                reps: 10,
                rest: 60,
                description: 'Lorem ipsum dolor sit amet sonsectetur'
            },
            {
                exercise: 'incline bench press',
                videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                sets: 3,
                reps: 10,
                rest: 60,
                description: 'Lorem ipsum dolor sit amet sonsectetur'
            }
        ]
    }
    setWorkout(data)
  }
  useEffect(()=>{
    getworkout()
  }, [])

  return (
    <div className="workout">
      <h1 className="mainhead1">{workout?.type} Day</h1>
      <div className="workout__exercises">
        {
            workout?.exercises.map((item:any, index:number)=>{
              return (
                <div className={
                    index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse' 
                }>
                    <h3>{index+1}</h3>
                    <div className="workout__exercise__image"> 
                        <img src={item.videoUrl} alt=""/>
                    </div>
                    <div className="workout__exercise__content"> 
                        <h2>{item.exercise}</h2>
                        <span>{item.sets} sets X {item.reps} reps</span>
                        <p>{item.description}</p>
                    </div>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default page
