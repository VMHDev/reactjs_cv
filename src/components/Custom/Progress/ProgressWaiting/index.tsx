import React, { useEffect, useState } from 'react';
import colors from 'src/styles/variables/colors';
import { ProgressVisualFullStyled, ProgressVisualPartStyled } from './styled';

interface VisualPartsProps {
  percentage: number;
  color?: string;
}

interface ProgressLineProps {
  visualParts: Array<VisualPartsProps>;
}

const ProgressLine = (props: ProgressLineProps) => {
  const {
    visualParts = [
      {
        percentage: 0,
        color: colors.color_green,
      },
    ],
  } = props;

  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <ProgressVisualFullStyled>
      {visualParts.map((item, index) => {
        // Map each part into separate div and each will be animated
        // because of the "transition: width 2s;" css in class "progressVisualPart"
        // and because of the new width ("widths[index]", previous one was 0)
        return (
          <ProgressVisualPartStyled
            // There won't be additional changes in the array so the index can be used
            key={index}
            style={{
              width: `${widths[index]}%`,
              // Setting the actual color of bar part
              backgroundColor: item.color,
            }}
          />
        );
      })}
    </ProgressVisualFullStyled>
  );
};

export default ProgressLine;
