import { Store } from "../pages/Store";
import { Route } from "react-router-dom";

type formatRoutesProps = {
  array: any;
  sex: string;
};

export function formatRoutes({ array, sex }: formatRoutesProps) {
  const newArray = Object.getOwnPropertyNames(array);
  let renderItems = [];
  for (let i = 0; i < newArray.length; i++) {
    let { ...items } = array;
    const entries = Object.entries(items);
    let name = entries[i][0];
    let path = `/${sex}/${entries[i][0]}`;
    renderItems.push(
      <Route
        path={path}
        element={<Store name={name} itemInfo={entries[i][1]} />}
      />
    );
  }
  return renderItems;
}
