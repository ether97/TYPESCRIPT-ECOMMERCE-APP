import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import "../Styles/FontStyles.css";
import DropdownComponent from "./DropdownComponent";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-lg">
      <Container>
        <Nav className="w-100">
          <NavbarBs.Brand href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{
                height: "25px",
                width: "25px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <path d="M484.4 294.4c1.715 6.402 .6758 12.89-2.395 18.21s-8.172 9.463-14.57 11.18l-31.46 8.43l32.96 19.03C480.4 357.8 484.4 372.5 477.8 384s-21.38 15.41-32.86 8.783l-32.96-19.03l8.43 31.46c3.432 12.81-4.162 25.96-16.97 29.39s-25.96-4.162-29.39-16.97l-20.85-77.82L280 297.6v84.49l56.97 56.97c9.375 9.375 9.375 24.56 0 33.94C332.3 477.7 326.1 480 320 480s-12.28-2.344-16.97-7.031L280 449.9V488c0 13.25-10.75 24-24 24s-24-10.75-24-24v-38.06l-23.03 23.03c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94L232 382.1V297.6l-73.17 42.25l-20.85 77.82c-3.432 12.81-16.58 20.4-29.39 16.97s-20.4-16.58-16.97-29.39l8.43-31.46l-32.96 19.03C55.61 399.4 40.85 395.5 34.22 384s-2.615-26.16 8.859-32.79l32.96-19.03l-31.46-8.43c-12.81-3.432-20.4-16.58-16.97-29.39s16.58-20.4 29.39-16.97l77.82 20.85L208 255.1L134.8 213.8L57.01 234.6C44.2 238 31.05 230.4 27.62 217.6s4.162-25.96 16.97-29.39l31.46-8.432L43.08 160.8C31.61 154.2 27.6 139.5 34.22 128s21.38-15.41 32.86-8.785l32.96 19.03L91.62 106.8C88.18 93.98 95.78 80.83 108.6 77.39s25.96 4.162 29.39 16.97l20.85 77.82L232 214.4V129.9L175 72.97c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L232 62.06V24C232 10.75 242.8 0 256 0s24 10.75 24 24v38.06l23.03-23.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L280 129.9v84.49l73.17-42.25l20.85-77.82c3.432-12.81 16.58-20.4 29.39-16.97c6.402 1.715 11.5 5.861 14.57 11.18s4.109 11.81 2.395 18.21l-8.43 31.46l32.96-19.03C456.4 112.6 471.2 116.5 477.8 128s2.615 26.16-8.859 32.78l-32.96 19.03l31.46 8.432c12.81 3.432 20.4 16.58 16.97 29.39s-16.58 20.4-29.39 16.97l-77.82-20.85L304 255.1l73.17 42.25l77.82-20.85C467.8 273.1 480.1 281.6 484.4 294.4z" />
            </svg>{" "}
            RetroWalk
          </NavbarBs.Brand>
          <DropdownComponent sex="Women" color="pink" />
          <DropdownComponent sex="Men" color="turquoise" />
        </Nav>
        {cartQuantity !== 0 && (
          <Button
            onClick={openCart}
            style={{ width: "40px", height: "40px", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center pt-1"
              style={{
                color: "white",
                width: "1.3rem",
                height: "1.3rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
