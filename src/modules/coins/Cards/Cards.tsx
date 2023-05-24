import Grid from '@/components/Grid';

interface CardsProps {
  children: React.ReactNode;
}

const Cards: React.FC<CardsProps> = ({
  children,
}) => (
  <Grid container gap={4} sm={2} md={3}>
    {children}
  </Grid>
);

export default Cards;
