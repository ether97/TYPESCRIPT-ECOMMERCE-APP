type formatStoreItemsProps = {
  array: any[];
};

export function formatStoreItems({ array }: formatStoreItemsProps) {
  const newArray = Object.getOwnPropertyNames(array);
  let renderItems: any[] = [];
  for (let i = 0; i < newArray.length; i++) {
    let { ...items } = array;
    const entries = Object.entries(items);
    console.log("3", entries[i][1]);
    renderItems.push(entries[i][1]);
  }
  console.log("4", renderItems);
  return renderItems;
}

export default formatStoreItems;
