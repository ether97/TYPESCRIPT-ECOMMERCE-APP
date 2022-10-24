import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import storeItems from "../data/items2.json";
import { formatStoreItems } from "./../utilities/formatStoreItems";

type DropdownComponentProps = {
  sex: string;
  color: string;
};

function DropdownComponent({ sex, color }: DropdownComponentProps) {
  let href = `/${sex.toLocaleLowerCase()}`;
  let array: any;
  if (sex === "Women") {
    array = storeItems[0].Women;
  } else {
    array = storeItems[1].Men;
  }
  const newArray = Object.getOwnPropertyNames(array);
  let renderItems = [];
  for (let i = 0; i < newArray.length; i++) {
    let navigation = `/${sex.toLocaleLowerCase()}/${newArray[i]}`;
    renderItems.push(
      <Dropdown.Item key={i} href={navigation}>
        {newArray[i]}
      </Dropdown.Item>
    );
  }
  return (
    <Dropdown
      as={ButtonGroup}
      style={{ marginLeft: "auto", marginRight: "auto", border: `${color}` }}
    >
      <Button variant="none" href={href}>
        {sex}
      </Button>

      <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />

      <Dropdown.Menu>{renderItems}</Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;
