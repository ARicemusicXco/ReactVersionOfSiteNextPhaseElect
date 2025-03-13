import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

// Full-screen container that will hold both the carousel and header
const FullScreenContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  margin-top: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 60vh;
    min-height: 450px;
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
  max-width: 1200px;
  z-index: 2;
  padding-top: 0;
`;

interface AnimatedProps {
  $visible: boolean;
  $delay?: number;
}

// Animated container for text elements
const AnimatedText = styled.div<AnimatedProps>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: ${({ $delay }) => ($delay ? `${$delay}ms` : '0ms')};
`;

// Main headline
const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.5px;
  line-height: 1.1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

// Subheadline
const Subheadline = styled.p`
  font-size: 1.25rem;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
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
  background-color: ${({ $active }) => ($active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
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

const IntegratedHeader: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Preload images on component mount
  useEffect(() => {
    preloadImages(carouselImages);
    setImagesLoaded(true);
    
    // Trigger text animation after a short delay
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
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
      <FullScreenContainer 
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
          <AnimatedText $visible={textVisible}>
            <Headline>Professionalism. Quality. Service.</Headline>
          </AnimatedText>
          <AnimatedText $visible={textVisible} $delay={300}>
            <Subheadline>
              Next Phase Electric is revolutionizing commercial and residential energy systems across California, one project at a time.
            </Subheadline>
          </AnimatedText>
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
      </FullScreenContainer>
    </>
  );
};

export default IntegratedHeader;