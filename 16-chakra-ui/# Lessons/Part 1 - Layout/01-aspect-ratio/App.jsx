/*
  Aspect Ratio
  - <AspectRatio> component is used to embed responsive videos and maps, etc.

    # ratio={1} -> 1:1 ratio
    # ratio={4/3} -> 4:3 ratio
    # ratio={16/9} -> 16:9 ratio


*/

import { AspectRatio, Image } from '@chakra-ui/react'

function App() {
  return (
    // Pass the maxWidth prop to AspectRatio to control the width of the content.
    // This video will have equal sides
    <>
      <AspectRatio maxW='560px' ratio={1}>
        <Image
          src='https://bit.ly/naruto-sage'
          alt='naruto'
          objectFit='cover'
        />
      </AspectRatio>
      <AspectRatio maxW='560px' ratio={16 / 9}>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng' />
      </AspectRatio>
    </>
  )
}

export default App
