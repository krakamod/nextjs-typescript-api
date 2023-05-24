import clsx from "clsx";

enum Size {
  Lg = "lg",
  Sm = "sm",
}

interface ContainerProps {
  children: React.ReactNode;
  size?: `${Size}`;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = Size.Lg,
}) => (
  <div className={clsx(
    "container mx-auto px-4 sm:px-6 lg:px-8 py-8",
    { "max-w-3xl": Size.Sm === size },
  )}>
    {children}
  </div>
);

export default Container;
