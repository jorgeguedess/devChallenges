import * as C from "./styles/App.styles";
import { useMemo, useState } from "react";
import Gallery from "./components/Gallery";
import useData from "./hooks/useData";

type IButton = "allProducts" | "availableNow";

const App = () => {
  const { data } = useData();
  const [activeButton, setActiveButton] = useState<IButton>("allProducts"); //

  const handleButtonClick = (buttonId: IButton) => {
    setActiveButton(buttonId);
  };

  const newData = useMemo(() => {
    return activeButton === "availableNow"
      ? data.filter((item) => item.reviews > 0 && item.stock > 0)
      : data;
  }, [activeButton, data]);

  return (
    <C.Container>
      <C.ImageMain />
      <C.ContainerMain>
        <C.Header>
          <C.Title>Our Collection</C.Title>
          <C.Description>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </C.Description>
          <C.ButtonContainer>
            <C.Button
              onClick={() => handleButtonClick("allProducts")}
              active={activeButton === "allProducts"}
            >
              All Products
            </C.Button>
            <C.Button
              onClick={() => handleButtonClick("availableNow")}
              active={activeButton === "availableNow"}
            >
              Available Now
            </C.Button>
          </C.ButtonContainer>
        </C.Header>
        <Gallery data={newData} />
      </C.ContainerMain>
    </C.Container>
  );
};

export default App;
