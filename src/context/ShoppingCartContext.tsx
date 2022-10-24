import { createContext, useContext, ReactNode, useState } from "react";
import { ShoppingCart } from "./../components/ShoppingCart";
import { useLocalStorage } from "./../hooks/useLocalStorage";

type ShoppingCardProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number, amount?: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCardContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCardContext);
}

export function ShoppingCartProvider({ children }: ShoppingCardProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number, amount?: number) {
    var check: number = 1;
    if (amount) {
      check = amount;
    }
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: check }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + check };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id != id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <ShoppingCardContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCardContext.Provider>
  );
}
