import { Container } from "react-bootstrap";
import storeItems from "../data/items2.json";
import { formatArray } from "./../utilities/formatArray";

const img: string = "/imgs/pexels-cottonbro-8441586.jpg";

type WomensProps = {
  sex: string;
  component: JSX.Element;
};

export function Women({ sex, component }: WomensProps) {
  let array = storeItems[0].Women;
  const margin = "0px 50px 0px 50px";
  let variant = "none";
  let background = "pink";
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
      className="mw-100 d-flex align-items-center justify-content-center p-0"
      style={{ height: "94.4vh" }}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        className="d-flex justify-content-center align-items-center h-100 w-100"
      >
        {renderItems}
      </div>
    </Container>
  );
}
