/**@jsx jsx */
import { useEffect, useState, useRef } from 'react';
import { jsx, useColorMode } from 'theme-ui';
import { Spring } from 'react-spring/renderprops';

const SVGAnimation = () => {
  const [offset, setOffset] = useState(null);
  const ref = useRef();
  const [colorMode] = useColorMode();

  useEffect(() => {
    setOffset(ref.current.getTotalLength());
  }, []);

  return (
    <div sx={{ margin: 'auto' }}>
      {offset ? (
        <Spring
          from={{
            x: offset,
            fill: colorMode === 'default' ? '#1d1d1d' : '#ffffff',
            strokeColor: '#308fff',
          }}
          to={{
            x: 0,
            fill: '#308fff',
            strokeColor: colorMode === 'default' ? '#ffffff' : '#1d1d1d',
          }}
          config={{
            mass: 100,
            tension: 80,
            friction: 52,
            clamp: true,
          }}
        >
          {(props) => (
            <svg
              strokeDasharray={offset}
              strokeDashoffset={props.x}
              fill={props.fill}
              stroke={props.strokeColor}
              {...props}
              strokeWidth={1}
              width="180"
              version="1.1"
              viewBox="0 0 66.146 84.433"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(-64.105 -117)">
                <path
                  d="m64.105 198.39v-81.385l57.269 62.563v-59.462h8.8765v81.332l-57.269-61.868v58.82z"
                  ref={ref}
                />
              </g>
            </svg>
          )}
        </Spring>
      ) : (
        <svg
          width="180"
          version="1.1"
          viewBox="0 0 66.146 84.433"
          xmlns="http://www.w3.org/2000/svg"
          style={{ strokeWidth: 1, stroke: 'none', fill: 'none' }}
        >
          <g transform="translate(-64.105 -117)">
            <path
              d="m64.105 198.39v-81.385l57.269 62.563v-59.462h8.8765v81.332l-57.269-61.868v58.82z"
              ref={ref}
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default SVGAnimation;
