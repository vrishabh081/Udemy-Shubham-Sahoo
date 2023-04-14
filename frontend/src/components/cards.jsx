import React from 'react'

const cards = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
    {
      id: 6,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
    {
      id: 7,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
    {
      id: 8,
      img: "https://media.istockphoto.com/id/1253884318/photo/dewey-beach-fishing-pier.jpg?b=1&s=170667a&w=0&k=20&c=thjyoF80QA-mbzN2cmHhCkJmeT601YUN1xsIjhwC5co=",
      students: 1000,
      time: "1h 13m",
      title: "YouTube Success: Script, Shoot & Edit with MKBHD",
      subTitle: "Marques Brownlee"
    },
  ]

  
  const Cards = () => {
    return (
      <div id='cards'>
        {
            cards.map(el=><div key={el.id}>
                <img src={el.img} alt="" />
                <div>
                    <p>{el.students} students</p>
                    <p>{el.time}</p>
                </div>
                <h3>{el.title}</h3>
                <p>{el.subTitle}</p>
            </div>)
        }
      </div>
    )
  }
  
  export default Cards
  