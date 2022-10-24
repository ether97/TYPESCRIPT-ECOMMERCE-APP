import { Row, Col, Container } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

type StoreProps = {
  name: string;
  itemInfo: any[];
};

export function Store({ name, itemInfo }: StoreProps) {
  return (
    <>
      <Container className="mw-80 d-flex align-items-center justify-content-center p-0 flex-column mb-5">
        <h1 className="m-5">{name}</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {itemInfo.map((item) => (
            <Col>
              <StoreItem key={item.id} {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
