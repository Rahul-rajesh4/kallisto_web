import React from 'react'
import './home.css'
import imgcard from './imgvid/p1.jpg'
export default function Imgdiv() {
  return (
    <>
      <div className='container'>
        <div className='cont'>
          <div className='img'>

            <img src={imgcard}></img>
          </div>
          <div className='textcontent'>
            <h1 className='heddingggg1'>THE STORY <br></br>BEHIND US</h1>
            <p className='peradesign'>Welcome to KALLISTO, where elegance meets innovation in the world of fashion.
              Immerse yourself in a realm of timeless style and curated sophistication. At KALLISTO, we redefine trends,
              blending luxury with contemporary allure. Explore our meticulously crafted collections that embody the essence of
              refined fashion. Step into a journey of sartorial excellence, where each piece tells a story of individuality
              and grace. Indulge in the allure of KALLISTO - where your style journey begins.
            </p>
            <h1 className='heddingggg1'>VISION</h1>
            <p className='peradesign'>our vision is to transcend fashion boundaries, inspiring confidence
              and individual expression. We aspire to be the epitome of timeless sophistication, redefining the narrative
              of contemporary elegance with each design. Through innovation and artistry, we envision empowering individuals
              to embrace their unique style and make a statement in the world of fashion.
            </p>
            <h1 className='heddingggg1'>MISSION</h1>
            <p className='peradesign'> our mission is to seamlessly blend creativity with craftsmanship, offering fashion
              aficionados meticulously curated collections that embody luxury, quality, and a distinct sense of style.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
