import { Container } from "react-bootstrap";
import storeItems from "../data/items2.json";
import { formatArray } from "./../utilities/formatArray";

const img: string = "/imgs/andrew-neel-HqtYwlY9dxs-unsplash.jpg";

type MensProps = {
  sex: string;
  component: JSX.Element;
};

export function Men({ sex, component }: MensProps) {
  let array = storeItems[1].Men;
  let variant = "secondary";
  let background = "";
  const margin = "0px 50px 0px 50px";
  let renderItems = formatArray({
    array,
    component,
    variant,
    background,
    margin,
    sex,
  });

  return (
    <Container
      className="mw-100 d-flex align-items-center justify-content-center p-0 flex-column"
      style={{ height: "94.4vh" }}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="d-flex justify-content-center align-items-center h-100 w-100"
      >
        {renderItems}
      </div>
    </Container>
  );
}
