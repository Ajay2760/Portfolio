import React, { useEffect, useRef, ReactNode, useState } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  customSize?: boolean;
}

const glowColorMap = {
  blue:   { h: 217, s: 91, l: 60 },
  purple: { h: 271, s: 81, l: 60 },
  green:  { h: 142, s: 76, l: 45 },
  red:    { h: 0,   s: 84, l: 60 },
  orange: { h: 27,  s: 96, l: 55 },
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerenter', handleEnter);
    card.addEventListener('pointerleave', handleLeave);

    return () => {
      card.removeEventListener('pointermove', handleMove);
      card.removeEventListener('pointerenter', handleEnter);
      card.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  const { h, s, l } = glowColorMap[glowColor];
  const spotSize = 300;
  const borderOpacity = isHovered ? 1 : 0;
  const bgOpacity = isHovered ? 0.08 : 0;

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 ${isHovered ? 'shadow-xl' : ''} ${customSize ? 'w-full' : ''} ${className}`}
      style={{ isolation: 'isolate' }}
    >
      {/* Subtle background tint on hover */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          zIndex: 0,
          pointerEvents: 'none',
          background: `radial-gradient(${spotSize}px ${spotSize}px at ${pos.x}px ${pos.y}px,
            hsl(${h} ${s}% ${l}% / ${bgOpacity}),
            transparent 70%
          )`,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Glowing border — uses mask to only paint the border area */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          zIndex: 0,
          pointerEvents: 'none',
          padding: '2px',
          background: `radial-gradient(${spotSize}px ${spotSize}px at ${pos.x}px ${pos.y}px,
            hsl(${h} ${s}% ${l}% / ${borderOpacity}),
            transparent 70%
          )`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Content layer */}
      <div className="relative flex flex-col h-full" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export { GlowCard };
