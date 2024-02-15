import React, { useState } from 'react';

function useUploadImageHover() {
  const [isHovered, setIsHovered] = useState<boolean[]>([]);

  const handleMouseEnter = (index: number) => {
    setIsHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index + 1] = true;
      return updatedHovered;
    });
  };

  const handleMouseLeave = (index: number) => {
    setIsHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index + 1] = false;
      return updatedHovered;
    });
  };

  return { isHovered, handleMouseEnter, handleMouseLeave };
}

export default useUploadImageHover;
