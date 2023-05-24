interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
}) => (
  <li>
    {children}
  </li>
);

export default ListItem;
