import Image from "next/image";
import Grid from "@/components/Grid";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import Link from "@/components/Link";
import Typography from "@/components/Typography";
import getCurrencyName from "@/modules/coins/utils/getCurrencyName";
import { Market } from "../Coin";

interface CardProps {
  market: Market;
}

const Card: React.FC<CardProps> = ({
  market,
}) => (
  <Grid className="bg-white p-4 rounded flex flex-col">
    <Image
      src={market.imageSrc}
      alt={`${market.name} logo`}
      width={200}
      height={200}
      className="object-cover object-center"
    />
    <div className="flex-1 p-4">
      <Typography variant="h2">
        {market.name}
      </Typography>
      <List>
        <ListItem>
          Current Price: {market.price} {getCurrencyName(market.currency)}
        </ListItem>
        <ListItem>
          24h High: {market.high24hPrice} {getCurrencyName(market.currency)}
        </ListItem>
        <ListItem>
          24h Low: {market.low24hPrice} {getCurrencyName(market.currency)}
        </ListItem>
      </List>
    </div>
    <div className="p-4">
      <Link href={`/currency/${market.id}`}>
        More
      </Link>
    </div>
  </Grid>
);

export default Card;
