import React, { useMemo, useState } from 'react';

const BorderGlow = ({
  children,
  edgeSensitivity = 30,
  glowColor = '18 32 96',
  backgroundColor = '#040816',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#020617', '#0f172a', '#1e3a8a']
}) => {
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false, edgeStrength: 0 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const distanceToEdge = Math.min(
      event.clientX - rect.left,
      rect.right - event.clientX,
      event.clientY - rect.top,
      rect.bottom - event.clientY
    );

    const edgeStrength = Math.max(0, Math.min(1, (edgeSensitivity - distanceToEdge) / edgeSensitivity));

    setPointer({ x, y, active: true, edgeStrength });
  };

  const handlePointerLeave = () => {
    setPointer((current) => ({ ...current, active: false, edgeStrength: 0 }));
  };

  const wrapperStyle = useMemo(() => {
    const activeStrength = pointer.active ? Math.max(pointer.edgeStrength, 0.18) : 0.18;
    const glowAlpha = Math.min(0.55, activeStrength * glowIntensity * 0.55);
    const fillColor = backgroundColor;
    const borderGradient = `linear-gradient(135deg, ${colors.join(', ')})`;
    const glowGradient = `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(${glowColor} / ${glowAlpha}) 0%, rgba(${glowColor} / ${glowAlpha * 0.45}) ${glowRadius}%, transparent ${Math.min(100, glowRadius + coneSpread)}%)`;

    return {
      '--bg': fillColor,
      '--radius': `${borderRadius}px`,
      '--glow-border': borderGradient,
      '--glow-gradient': glowGradient,
      '--glow-opacity': pointer.active ? 1 : 0.75,
      background: `${glowGradient}, ${fillColor}`,
      borderRadius: `${borderRadius}px`
    };
  }, [backgroundColor, borderRadius, coneSpread, colors, glowColor, glowIntensity, glowRadius, pointer.active, pointer.edgeStrength, pointer.x, pointer.y]);

  return (
    <div
      className={`border-glow-shell ${animated ? 'is-animated' : ''}`}
      style={wrapperStyle}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="border-glow-border" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
};

export default BorderGlow;