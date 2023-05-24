import Typography from "@/components/Typography";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  children,
}) => (
  <Typography variant="h1">
    {children}
  </Typography>
);

export default Title;
