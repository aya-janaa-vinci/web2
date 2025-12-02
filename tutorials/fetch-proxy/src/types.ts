interface Pizza {
  id: number;
  title: string;
  content: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  title: string;
  image: string;
  volume: string;
  price: string;
}

interface PizzeriaContext {
  pizzas : Pizza[];
  setPizzas : (pizzas : Pizza[]) => void;
  actionToBePerformed: boolean;
  setActionToBePerformed: (actionToBePerformed: boolean) => void;
  clearActionToBePerformed: () => void;
  drinks: Drink[];
  addPizza: (newPizza: NewPizza) => Promise<void>; //C'est une Promise qui est retournée par la fonction addPizza.
}

export type { Pizza, NewPizza, Drink, PizzeriaContext };
