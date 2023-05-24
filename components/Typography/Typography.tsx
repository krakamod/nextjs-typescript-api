import clsx from "clsx";

enum Variant {
  H1 = "h1",
  H2 = "h2",
}

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: `${Variant}`;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant,
}) => {
  switch (variant) {
    case Variant.H1:
      return (
        <h1 className={clsx(className, "text-4xl font-bold text-center text-gray-900")}>
          {children}
        </h1>
      );
    case Variant.H2:
      return (
        <h2 className={clsx(className, "text-xl font-semibold")}>
          {children}
        </h2>
      );
    default:
      return (
        <p className={className}>
          {children}
        </p>
      )
  }
};

export default Typography;
