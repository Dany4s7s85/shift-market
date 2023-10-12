import { StyledGrid } from './Grid.styles';

function Grid({ children, xs, sm, md, lg, xl, xxl, xlarge, gap, rowGap, colGap, colWidth, ...props }) {
  return (
    <StyledGrid
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      xlarge={xlarge}
      gap={gap}
      rowGap={rowGap}
      colGap={colGap}
      colWidth={colWidth}
      {...props}>
      {children}
    </StyledGrid>
  );
}

export default Grid;
