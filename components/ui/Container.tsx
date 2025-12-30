import { ReactNode, memo } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl'
} as const;

/**
 * Container component with responsive padding and max-width
 * Memoized for performance optimization
 */
export const Container = memo<ContainerProps>(({ children, className = '', size = 'lg' }) => {
  return (
    <div className={`mx-auto w-full ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';
