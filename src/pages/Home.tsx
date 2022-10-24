import { Button, Container } from "react-bootstrap";

const img: string = "/imgs/pexels-marcelo-chagas-2229490.jpg";

export function Home() {
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
          backgroundPosition: "top",
        }}
        className="d-flex justify-content-center align-items-center h-100 w-100"
      >
        <Button
          href="/women"
          size="lg"
          variant="none"
          style={{
            backgroundColor: "pink",
            outline: "none",
            color: "white",
            margin: "20px",
          }}
        >
          Shop Women's
        </Button>
        <Button
          href="/men"
          size="lg"
          variant="none"
          style={{
            color: "white",
            backgroundColor: "turquoise",
            margin: "20px",
          }}
        >
          Shop Men's
        </Button>
      </div>
    </Container>
  );
}
