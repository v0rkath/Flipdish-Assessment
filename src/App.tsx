import { useEffect, useState } from "react";
import "./App.css";
import { MenuSection } from "./components/MenuSection";
import { Menu } from "./types";
import { MenuSectionItems } from "./components/MenuSectionItems";
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
      <h1 className="text-2xl mb-8">Menu</h1>
      {menu &&
        menu.MenuSections.map((section) => {
          return (
            <MenuSection key={section.MenuSectionId} name={section.Name}>
              {section.MenuItems.map((item) => {
                return <MenuSectionItems key={item.MenuItemId} {...item} />;
              })}
            </MenuSection>
          );
        })}
    </main>
  );
}

export default App;
