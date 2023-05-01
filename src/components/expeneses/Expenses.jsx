import { useContext } from "react";
import { ExpensesCard } from "../expensesCard/ExpensesCard";
import { AuthContext } from "../../store/AuthContext";

export const Expenses = () => {
  const context = useContext(AuthContext);
  const { product } = context;
  console.log(context);
  return (
    <div>
      {product.map((item) => {
        return <ExpensesCard el={item} />;
      })}
    </div>
  );
};
