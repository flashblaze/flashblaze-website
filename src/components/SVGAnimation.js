import React, { useEffect, useState, useRef } from 'react';
import { Spring } from 'react-spring/renderprops';

const SVGAnimation = ({ strokeColor }) => {
  console.log(strokeColor);
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setOffset(ref.current.getTotalLength());
  }, [offset]);

  return (
    <div>
      {offset ? (
        <Spring
          from={{ x: offset }}
          to={{ x: 0 }}
          config={{ duration: 2000, easing: (t) => Math.pow(2, 10 * t - 10) }}
        >
          {(props) => (
            <svg
              strokeDashoffset={props.x}
              strokeDasharray={offset}
              width="250"
              height="248.76"
              version="1.1"
              viewBox="0 0 81.522 81.12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(386.03 295.9)">
                <path
                  d="m-357.06-215.88h24.32m-28.867-4.7809h33.063m-37.236-5.1158h41.409m-46.78-5.4432h52.15m-57.443-5.7673h62.24m-66.596-6.0347h70.952m-73.192-6.2119h75.432m-77.317-5.9074a39.663 39.663 0 0 1 39.663-39.663 39.663 39.663 0 0 1 39.663 39.663"
                  style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2.1962,
                    stroke: strokeColor,
                  }}
                  ref={ref}
                />
              </g>
            </svg>
          )}
        </Spring>
      ) : (
        <svg
          width="250"
          height="248.76"
          version="1.1"
          viewBox="0 0 81.522 81.12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(386.03 295.9)">
            <path
              d="m-357.06-215.88h24.32m-28.867-4.7809h33.063m-37.236-5.1158h41.409m-46.78-5.4432h52.15m-57.443-5.7673h62.24m-66.596-6.0347h70.952m-73.192-6.2119h75.432m-77.317-5.9074a39.663 39.663 0 0 1 39.663-39.663 39.663 39.663 0 0 1 39.663 39.663"
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2.1962,
                stroke: strokeColor,
              }}
              ref={ref}
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default SVGAnimation;
