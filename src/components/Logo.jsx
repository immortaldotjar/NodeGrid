import React, { useEffect, useRef } from 'react';

const Logo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = Array.from(
      containerRef.current.querySelectorAll(
        '.svg-animated path, .svg-animated circle, .svg-animated rect, .svg-animated ellipse, .svg-animated polygon, .svg-animated polyline, .svg-animated line, .svg-animated g'
      )
    );

    const svg = containerRef.current.querySelector('.svg-animated svg');
    if (!svg) return;

    const svgRect = svg.getBoundingClientRect();
    const centerX = svgRect.width / 2;
    const centerY = svgRect.height / 2;

    elements.sort((a, b) => {
      const rA = a.getBoundingClientRect();
      const rB = b.getBoundingClientRect();
      const dA = Math.hypot((rA.left + rA.width / 2) - centerX, (rA.top + rA.height / 2) - centerY);
      const dB = Math.hypot((rB.left + rB.width / 2) - centerX, (rB.top + rB.height / 2) - centerY);
      return dA - dB;
    });
    elements.forEach((el, i) => {
      const delay = 0 + i * 0.1;
      el.style.animationDelay = `${delay}s`;
      el.style.transformOrigin = 'center';
    });
  }, []);

  return (
    <div ref={containerRef} style={{ width: '30px', height: '100%' }}>
      <style>{`
        @keyframes rippleIn {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }

        .svg-animated path,
        .svg-animated circle,
        .svg-animated rect,
        .svg-animated ellipse,
        .svg-animated polygon,
        .svg-animated polyline,
        .svg-animated line,
        .svg-animated g {
          animation: rippleIn 2s cubic-bezier(0.785, 0.135, 0.15, 0.86) both 1 normal;
        }
      `}</style>
      <div className="svg-animated" style={{ width: '100%', height: '100%' }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 48 48"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 1.5,
          }}
        >
          <g>
            <path
              d="M15,4.324l0,9.353c0,0.73 -0.593,1.324 -1.324,1.324l-9.353,0c-0.73,0 -1.324,-0.593 -1.324,-1.324l0,-9.353c0,-0.73 0.593,-1.324 1.324,-1.324l9.353,0c0.73,0 1.324,0.593 1.324,1.324Z"
              style={{ fill: '#363837', stroke: '#363837', strokeWidth: '0.83px' }}
            />
            <path
              d="M15,19.324l0,9.353c0,0.73 -0.593,1.324 -1.324,1.324l-9.353,0c-0.73,0 -1.324,-0.593 -1.324,-1.324l0,-9.353c0,-0.73 0.593,-1.324 1.324,-1.324l9.353,0c0.73,0 1.324,0.593 1.324,1.324Z"
              style={{ fill: 'none', stroke: '#363837', strokeWidth: '0.83px' }}
            />
            <path
              d="M15,34.324l0,9.353c0,0.73 -0.593,1.324 -1.324,1.324l-9.353,0c-0.73,0 -1.324,-0.593 -1.324,-1.324l0,-9.353c0,-0.73 0.593,-1.324 1.324,-1.324l9.353,0c0.73,0 1.324,0.593 1.324,1.324Z"
              style={{ fill: 'none', stroke: '#363837', strokeWidth: '0.83px' }}
            />
          </g>
          <g>
            <path
              d="M33.035,43.676l0,-9.353c0,-0.73 0.593,-1.324 1.324,-1.324l9.353,0c0.73,0 1.324,0.593 1.324,1.324l0,9.353c0,0.73 -0.593,1.324 -1.324,1.324l-9.353,0c-0.73,0 -1.324,-0.593 -1.324,-1.324Z"
              style={{ fill: '#363837', stroke: '#363837', strokeWidth: '0.83px' }}
            />
            <path
              d="M33.035,28.676l0,-9.353c0,-0.73 0.593,-1.324 1.324,-1.324l9.353,0c0.73,0 1.324,0.593 1.324,1.324l0,9.353c0,0.73 -0.593,1.324 -1.324,1.324l-9.353,0c-0.73,0 -1.324,-0.593 -1.324,-1.324Z"
              style={{ fill: 'none', stroke: '#363837', strokeWidth: '0.83px' }}
            />
            <path
              d="M33.035,13.676l0,-9.353c0,-0.73 0.593,-1.324 1.324,-1.324l9.353,0c0.73,0 1.324,0.593 1.324,1.324l0,9.353c0,0.73 -0.593,1.324 -1.324,1.324l-9.353,-0c-0.73,0 -1.324,-0.593 -1.324,-1.324Z"
              style={{ fill: 'none', stroke: '#363837', strokeWidth: '0.83px' }}
            />
          </g>
          <path
            d="M30,19.324l0,9.353c0,0.73 -0.593,1.324 -1.324,1.324l-9.353,0c-0.73,0 -1.324,-0.593 -1.324,-1.324l0,-9.353c0,-0.73 0.593,-1.324 1.324,-1.324l9.353,0c0.73,0 1.324,0.593 1.324,1.324Z"
            style={{ fill: '#363837', stroke: '#363837', strokeWidth: '0.83px' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Logo;