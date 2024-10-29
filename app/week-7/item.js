export default function Item({ name, quantity, category }) {
  return (
    <li className="text-lg m-5 border-2 border-blue-400 rounded w-fit p-3 cursor-pointer">
      <div className="font-semibold text-xl ">
        Name: <span className="italic text-yellow-400">{name}</span>
      </div>
      <div className="font-semibold text-xl ">
        Quantity: <span className="italic text-blue-400">{quantity}</span>
      </div>
      <div className="font-semibold text-xl ">
        Category: <span className="italic text-green-400">{category}</span>
      </div>
    </li>
  );
}