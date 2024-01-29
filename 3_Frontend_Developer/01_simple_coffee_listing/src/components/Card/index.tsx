import * as C from "./style";
import { IconStarFill } from "../icons/IconStarFill";
import { IData } from "../../types/data";
import { IconStar } from "../icons/IconStar";
import { convertCoin, formatRating } from "../../lib/utils";

const Card = ({
  image,
  price,
  rating,
  reviews,
  title,
  badges,
  stock,
}: IData) => {
  return (
    <C.Container>
      <C.ImageContainer>
        {badges.length > 0 && <C.Tag>{badges}</C.Tag>}
        <C.Image src={image} alt={title} />
      </C.ImageContainer>
      <C.Content>
        <C.Header>
          <C.Title>{title}</C.Title>
          <C.Price>{convertCoin(price)}</C.Price>
        </C.Header>

        <C.Footer>
          <C.Avaliable>
            {rating ? (
              <>
                <IconStarFill />
                <p>
                  {formatRating(rating)} <span>({reviews} votes)</span>
                </p>
              </>
            ) : (
              <>
                <IconStar />
                <span className="no_ratings">No ratings</span>
              </>
            )}
          </C.Avaliable>
          {stock === 0 && <C.NotStock>Sold out</C.NotStock>}
        </C.Footer>
      </C.Content>
    </C.Container>
  );
};

export default Card;
