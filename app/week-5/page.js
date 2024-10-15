import NewItem from "./new-item";

const item1 = {
  name: "Milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};

function Page() {
  return (
    <main>
      <NewItem />
    </main>
  );
}

export default Page;
