import Typography from "@/components/Typography";

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({
  children,
}) => (
  <Typography className="text-xl text-center text-gray-600">
    {children}
  </Typography>
);

export default Subtitle;
