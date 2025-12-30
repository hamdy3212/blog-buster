import { memo } from 'react';
import type { CSSProperties } from 'react';
import type { BackgroundCircleProps } from './HeroSection.constants';

/**
 * Background circle decoration component
 * Memoized for optimal performance
 */
export const BackgroundCircle = memo<BackgroundCircleProps>(({ 
  top, 
  bottom, 
  left, 
  right, 
  size, 
  color, 
  opacity, 
  centered 
}) => {
  const style: CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    ...(top && { top }),
    ...(bottom && { bottom }),
    ...(left && { left }),
    ...(right && { right }),
    ...(centered && { transform: "translate(-50%, -50%)" }),
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(circle, rgba(${color}, ${opacity}), transparent 70%)`,
    filter: "blur(80px)",
    zIndex: 0,
  };

  return <div style={style} aria-hidden="true" />;
});

BackgroundCircle.displayName = 'BackgroundCircle';
