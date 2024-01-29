import { IData } from "../../types/data";
import Card from "../Card";
import * as C from "./style";

interface GalleryProps {
  data: IData[];
}

const Gallery = ({ data }: GalleryProps) => {
  return (
    <C.Gallery>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </C.Gallery>
  );
};

export default Gallery;
