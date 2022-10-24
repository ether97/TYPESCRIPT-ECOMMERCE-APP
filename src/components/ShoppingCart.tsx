import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "./../utilities/formatCurrency";
import storeItems from "../data/items2.json";
import { formatStoreItems } from "./../utilities/formatStoreItems";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  var array: any = storeItems[0].Women;
  let renderItems: any[] = formatStoreItems({ array });
  const newRenderItems = renderItems.flat(Infinity);
  array = storeItems[1].Men;
  let renderItems2: any[] = formatStoreItems({ array });
  const newRenderItems2 = renderItems2.flat(Infinity);
  for (let i = 0; i < newRenderItems2.length; i++) {
    const item = newRenderItems2[i];
    newRenderItems.push(item);
  }
  console.log("2", newRenderItems);
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = newRenderItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
