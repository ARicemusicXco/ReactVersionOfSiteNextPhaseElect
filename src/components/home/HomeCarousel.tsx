import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

// Carousel container that spans full width
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 60vh;
    min-height: 400px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 50vh;
    min-height: 350px;
  }
`;

// Slide container
const SlideContainer = styled.div<{ $active: boolean; $index: number; $total: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $active }) => ($active ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  z-index: ${({ $active }) => ($active ? '1' : '0')};
`;

// Image with overlay
const SlideImage = styled.div<{ $backgroundImage: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
`;

// Text overlay container
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 1000px;
  z-index: 2;
`;

// Main headline
const Headline = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 700;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: calc(${({ theme }) => theme.fontSizes.xlarge} * 1.2);
  }
`;

// Subheadline
const Subheadline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: white;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    max-width: 90%;
  }
`;

// Navigation dots container
const DotsContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 3;
`;

// Individual navigation dot
const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $active, theme }) => ($active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: white;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

// Color bars container
const ColorBars = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Red bar (brand primary color)
const RedBar = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

// Black bar (brand secondary color)
const BlackBar = styled.div`
  height: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

// Light gray/white bar
const LightBar = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

// Carousel images
const carouselImages = [
  '/NextPhaseElectMediaLibrary/AdobeStock_164972173.jpeg',
  '/NextPhaseElectMediaLibrary/AdobeStock_187018505.jpeg',
  '/NextPhaseElectMediaLibrary/AdobeStock_214337983.jpeg'
];

// Preload images function
const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const HomeCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Preload images on component mount
  useEffect(() => {
    preloadImages(carouselImages);
    setImagesLoaded(true);
  }, []);
  
  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
  }, []);
  
  // Function to go to previous slide
  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  }, []);
  
  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left, go to next slide
      nextSlide();
    }
    
    if (touchStart - touchEnd < -100) {
      // Swipe right, go to previous slide
      prevSlide();
    }
    
    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds per slide
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <>
      <CarouselContainer 
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {imagesLoaded && carouselImages.map((image, index) => (
          <SlideContainer 
            key={index} 
            $active={index === activeIndex}
            $index={index}
            $total={carouselImages.length}
          >
            <SlideImage 
              $backgroundImage={image} 
              role="img" 
              aria-label={`Slide ${index + 1}`} 
            />
          </SlideContainer>
        ))}
        
        <TextOverlay>
          <Headline>Professionalism. Quality. Service.</Headline>
          <Subheadline>
            Next Phase Electric is revolutionizing commercial and residential energy systems across California, one project at a time.
          </Subheadline>
        </TextOverlay>
        
        <DotsContainer>
          {carouselImages.map((_, index) => (
            <Dot 
              key={index} 
              $active={index === activeIndex} 
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </DotsContainer>
      </CarouselContainer>
      
      <ColorBars>
        <RedBar />
        <BlackBar />
        <LightBar />
      </ColorBars>
    </>
  );
};

export default HomeCarousel; 