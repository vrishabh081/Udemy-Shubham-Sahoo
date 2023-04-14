import React from 'react'
import Cards from '../components/cards'

const courseBtn = [
  {id: 1, title: "Featured"},
  {id: 2, title: "Music"},
  {id: 3, title: "Drawing & Painting"},
  {id: 4, title: "Marketing"},
  {id: 5, title: "Animation"},
  {id: 6, title: "Social Media"},
  {id: 7, title: "UI/UX design"},
  {id: 8, title: "Creative Writing"},
  {id: 9, title: "Digital Illustration"},
  {id: 10, title: "Film & Video"},
  {id: 11, title: "Craft"},
  {id: 12, title: "Freelance & Enterpreneurship"},
  {id: 13, title: "Graphic Design"},
  {id: 14, title: "Photography"},
  {id: 15, title: "Productivity"},
]


const Course = () => {
  return (
    <div id='course'>
      <h1>Explore Inspiring Online Courses</h1>
      <button id='top-cornder-btn'>Get Started for Free</button>
      <div id='course-top-section'>
        {
          courseBtn.map(el=><button key={el.id}>{el.title}</button>)
        }
      </div>
      <Cards/>
    </div>
  )
}

export default Course
