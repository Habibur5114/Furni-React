import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Testimonials () {
  const [index, setIndex] = useState(0)

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  return (
    <div className='habib'>
      <h3 className='text-center mt-5 pt-5'>Testimonials</h3>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Carousel.Caption>
            <p>
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
          </Carousel.Caption>
          <div className='text-center person'>
            <img src='img/person-1.png' alt='' />
            <h5 className='mt-3'>Maria Jones</h5>
            <p>CEO, Co-Founder, XYZ Inc.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <p>
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
          </Carousel.Caption>
           <div className='text-center person'>
            <img src='img/person-1.png' alt='' />
            <h5 className='mt-3'>Maria Jones</h5>
            <p>CEO, Co-Founder, XYZ Inc.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <p>
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
          </Carousel.Caption>
           <div className='text-center person'>
            <img src='img/person-1.png' alt='' />
            <h5 className='mt-3'>Maria Jones</h5>
            <p>CEO, Co-Founder, XYZ Inc.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Testimonials
