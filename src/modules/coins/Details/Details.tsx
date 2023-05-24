import Image from "next/image";
import Grid from "@/components/Grid";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import Link from "@/components/Link";
import Typography from "@/components/Typography";
import getCurrencyName from "@/modules/coins/utils/getCurrencyName";
import { Market } from "../Coin";

interface DetailsProps {
  market: Market;
}

const Details: React.FC<DetailsProps> = ({
  market,
}) => (
  <Grid className="bg-white p-4 rounded flex flex-col items-start gap-4">
    <div className="flex flex-col gap-1">
      <Typography variant="h2">
        {market.name}
      </Typography>
      <List>
        <ListItem>
          Current Price: {market.price} {getCurrencyName(market.currency)}
        </ListItem>
        <ListItem>
          All time high price: {market.allTimeHighPrice} {getCurrencyName(market.currency)}
        </ListItem>
        <ListItem>
          Market Cap: {market.marketCap} {getCurrencyName(market.currency)}
        </ListItem>
        <ListItem>
          Market Cap Rank: {market.marketCapRank}
        </ListItem>
      </List>
    </div>
    <Link href="/">
      Back
    </Link>
  </Grid>
);

export default Details;
