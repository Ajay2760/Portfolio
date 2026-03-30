import React, { useEffect, useRef, ReactNode, useState } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  customSize?: boolean;
}

const glowColorMap = {
  blue:   { h: 220, s: 100, l: 60 },
  purple: { h: 280, s: 100, l: 65 },
  green:  { h: 140, s: 100, l: 50 },
  red:    { h: 0,   s: 100, l: 60 },
  orange: { h: 30,  s: 100, l: 55 },
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
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
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
  const spotSize = 280;
  const opacity = isHovered ? 0.9 : 0;
  const bgOpacity = isHovered ? 0.06 : 0;

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl overflow-hidden shadow-lg ${customSize ? 'w-full' : ''} ${className}`}
      style={{ isolation: 'isolate' }}
    >
      {/* Border glow layer — sits behind content via z-index */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          zIndex: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.15s ease',
          /* Glow on border using box-shadow inset trick + pseudo via background on the wrapper */
          background: `radial-gradient(${spotSize}px ${spotSize}px at ${pos.x}px ${pos.y}px,
            hsl(${h} ${s}% ${l}% / ${bgOpacity}),
            transparent 70%
          )`,
        }}
      />
      {/* Actual glowing border */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          zIndex: 0,
          pointerEvents: 'none',
          padding: '1.5px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          background: `radial-gradient(${spotSize}px ${spotSize}px at ${pos.x}px ${pos.y}px,
            hsl(${h} ${s}% ${l}% / ${opacity}),
            transparent 70%
          )`,
          transition: 'opacity 0.15s ease',
        }}
      />
      {/* Content */}
      <div className="relative flex flex-col h-full" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export { GlowCard };
