import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { IImageScrollViewProps } from '../../interfaces/interfaces';

export const ImageScrollView: React.FC<IImageScrollViewProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full items-center justify-center">
      <div className="mx-auto flex max-h-[768px] max-w-[1024px] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.image_url}
            alt={`Image ${index}`}
            className={`scroll-image mx-auto transition-transform duration-300 ease-in-out ${index === currentIndex ? 'transform translate-x-0' : 'transform -translate-x-full'
              }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={(e) => {
              const touchStartX = e.touches[0].clientX;
              e.currentTarget.ontouchend = (endEvent) => {
                const touchEndX = endEvent.changedTouches[0].clientX;
                if (touchStartX - touchEndX > 50) {
                  handleSwipe('left');
                } else if (touchEndX - touchStartX > 50) {
                  handleSwipe('right');
                }
              };
            }}
          />
        ))}
      </div>
      <div className='absolute left-0 top-1/2 hidden w-full -translate-y-1/2 transform flex-row text-gray-600 sm:flex'>
        <div className='flex w-1/2 items-start justify-start pl-5'>
          <button
            onClick={handlePrev}
            className="nav-button items-center justify-center rounded-full bg-gray-300/55 p-1">
            <div className='h-8 w-8'>
              <IonIcon className='-ml-1' size='large' icon={chevronBackOutline} />
            </div>
          </button>
        </div>

        <div className='flex w-1/2 items-center justify-end pr-5'>
          <button
            onClick={handleNext}
            className="nav-button items-center justify-center rounded-full bg-gray-300/55 p-1">
            <div className='h-8 w-8'>
              <IonIcon className='-mr-1' size='large' icon={chevronForwardOutline} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
