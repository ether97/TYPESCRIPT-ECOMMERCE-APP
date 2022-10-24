type formatArrayProps = {
  array: any;
  component: JSX.Element;
  variant: string;
  background: string;
  margin: string;
  sex: string;
};

export function formatArray({
  array,
  component,
  variant,
  background,
  margin,
  sex,
}: formatArrayProps) {
  const newArray = Object.getOwnPropertyNames(array);
  let renderItems = [];
  for (let i = 0; i < newArray.length; i++) {
    let navigation = `/${sex}/${newArray[i]}`;
    renderItems.push(
      <component.type
        key={i}
        href={navigation}
        size="lg"
        variant={variant}
        style={{
          outline: "none",
          color: "white",
          width: "150px",
          margin: `${margin}`,
          backgroundColor: `${background}`,
        }}
      >
        {newArray[i]}
      </component.type>
    );
  }
  return renderItems;
}
