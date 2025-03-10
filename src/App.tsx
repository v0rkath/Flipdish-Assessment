import { useEffect, useState } from "react";

import "./App.css";

import { Item } from "./components/Item";
import { Section } from "./components/Section";
import { Menu } from "./types";
import { sortByOrder } from "./utils/sorting";

function App() {
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
    fetch(
      "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json",
    )
      .then((res) => res.json())
      .then((data) => {
        sortByOrder(data);
        setMenu(data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <main className="flex flex-col">
      <h1 className="mb-8 text-2xl">Menu</h1>
      {menu &&
        menu.MenuSections.map((section) => {
          return (
            <Section key={section.MenuSectionId} section={section}>
              {section.MenuItems.map((item) => (
                <Item key={item.PublicId} item={item} />
              ))}
            </Section>
          );
        })}
    </main>
  );
}

export default App;
