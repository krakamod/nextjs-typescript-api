import Link, { LinkProps } from "next/link";

interface DetailsProps {
  children: React.ReactNode;
  href: LinkProps['href'];
  as?: string;
}

const Details: React.FC<DetailsProps> = ({
  children,
  href,
  as,
}) => (
  <Link
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    href={href}
    as={as}
  >
    {children}
  </Link>
);

export default Details;
