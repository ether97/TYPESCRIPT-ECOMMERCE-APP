import { Card } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useShoppingCart } from "./../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgURL: string;
};

export function StoreItem({ id, name, price, imgURL }: StoreItemProps) {
  const [itemAmount, setItemAmount] = useState(0);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const handleClick = (operation: string): void => {
    if (operation === "add") {
      console.log("add");
      let temp = itemAmount;
      temp += 1;
      setItemAmount(temp);
    } else {
      if (itemAmount !== 0) {
        console.log("sub");
        setItemAmount((prev) => prev - 1);
      }
    }
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgURL}
        height="500px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div
          className="d-flex justify-content-between"
          style={{ height: "38px" }}
        >
          <div className="mt-auto">
            <Button
              onClick={(event) => {
                increaseCartQuantity(id, itemAmount);
                setItemAmount(0);
              }}
            >
              Add to Cart
            </Button>
          </div>
          <div className="d-flex" style={{ height: "38px" }}>
            <div
              className="h-100 d-flex justify-content-center align-items-center fs-2"
              style={{ width: "50px" }}
            >
              {itemAmount}
            </div>
            <div className="h-100">
              <div className="h-100 d-flex flex-column">
                <Button
                  onClick={(event) => {
                    handleClick("add");
                  }}
                  size="sm"
                  className="h-50 bg-success d-flex align-items-center justify-content-center mb-1"
                >
                  <div>+</div>
                </Button>
                <Button
                  onClick={() => handleClick("subtract")}
                  size="sm"
                  className="h-50 bg-danger d-flex align-items-center justify-content-center"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <div>-</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
