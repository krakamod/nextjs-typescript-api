import clsx from 'clsx';

type Gap = 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridSize = 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  className?: string;
  children: React.ReactNode;
  container?: boolean;
  gap?: Gap;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
}

const Grid: React.FC<GridProps> = ({
  className,
  children,
  container,
  gap,
  xs = 1,
  sm,
  md,
}) => (
  <div className={clsx(
    className,
    {
      grid: container,
      [`grid-cols-${xs}`]: container, 
      [`gap-${gap}`]: gap, 
      [`sm:grid-cols-${sm}`]: sm,
      [`md:grid-cols-${md}`]: md,
    }
  )}>
    {children}
  </div>
);

export default Grid;
