import { useShoppingCart } from "./../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgURL}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <div className="d-flex flex-column" style={{ width: "250px" }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex mt-auto me-1" style={{ width: "150px" }}>
            {`${item.name} `}
            {quantity > 1 && (
              <span
                className="text-muted align-items-center mt-auto ms-1 h-100 mb-1"
                style={{ fontSize: "1rem", textAlign: "center" }}
              >
                x{quantity}
              </span>
            )}
          </div>
          <Button
            onClick={() => removeFromCart(item.id)}
            size="sm"
            className="bg-danger"
            style={{
              border: "none",
              height: "30px",
              width: "70px",
            }}
          >
            REMOVE
          </Button>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
      </div>
    </Stack>
  );
}
