import { Suspense, useEffect, useState } from "react";

import "./App.css";

import { Item } from "./components/Item";
import { Section } from "./components/Section";
import { Menu, MenuItemOptionSet } from "./types";

function App() {
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
    fetch(
      "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json",
    )
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => new Error(error.message));
  }, []);

  return (
    <main className="flex flex-col">
      <h1 className="mb-8 text-4xl">Menu</h1>
      <Suspense fallback={<h2>Loading Menu...</h2>}>
        {menu &&
          menu.MenuSections.map((section) => {
            return (
              <Section key={section.MenuSectionId} section={section}>
                {section.MenuItems.map((item) => {
                  const standalone: MenuItemOptionSet | undefined =
                    item.MenuItemOptionSets.find(
                      (option: MenuItemOptionSet) => option.IsMasterOptionSet,
                    );

                  if (standalone) {
                    return standalone.MenuItemOptionSetItems.map((option) => (
                      <Item
                        key={option.PublicId}
                        name={`${item.Name} (${option.Name})`}
                        description={item.Description}
                        price={option.Price}
                        imageUrl={
                          option.ImageUrl ? option.ImageUrl : item.ImageUrl
                        }
                      />
                    ));
                  }

                  return (
                    <Item
                      key={item.PublicId}
                      name={item.Name}
                      description={item.Description}
                      price={item.Price}
                      imageUrl={item.ImageUrl}
                    />
                  );
                })}
              </Section>
            );
          })}
      </Suspense>
    </main>
  );
}

export default App;
