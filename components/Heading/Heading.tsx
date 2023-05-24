interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  children,
}) => (
  <div className="bg-white pt-8 pb-6">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm flex flex-col gap-4">
      {children}
    </div>
  </div>
);

export default Heading;
