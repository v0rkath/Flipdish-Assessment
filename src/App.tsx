import "./App.css";

import { useQuery } from "@tanstack/react-query";

import { MenuItem } from "./components/MenuItem";
import { Menu, MenuItemOptionSet } from "./types";

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["menuData"],
    queryFn: fetchAPIData,
  });

  if (isPending) return <p>Loading Menu...</p>;
  if (error) return <p>An error has occurred: ${error.message}</p>;

  return (
    <main className="flex flex-col">
      <h1 className="mb-8 text-4xl">Menu</h1>
        {data.MenuSections.map((section) => {
          return (
            <div className="mt-12 text-left" key={section.MenuSectionId}>
              <h2 className="mb-6 text-xl font-semibold">{section.Name}</h2>
              {section.MenuItems.map((item) => {
                const standalone: MenuItemOptionSet | undefined =
                  item.MenuItemOptionSets.find(
                    (option: MenuItemOptionSet) => option.IsMasterOptionSet,
                  );

                if (standalone) {
                  return standalone.MenuItemOptionSetItems.map((option) => (
                    <MenuItem
                      key={option.PublicId}
                      name={`${item.Name} (${option.Name})`}
                      description={item.Description}
                      price={option.Price}
                      imageUrl={option.ImageUrl || item.ImageUrl}
                    />
                  ));
                }

                return (
                  <MenuItem
                    key={item.PublicId}
                    name={item.Name}
                    description={item.Description}
                    price={item.Price}
                    imageUrl={item.ImageUrl}
                  />
                );
              })}
            </div>
          );
        })}
    </main>
  );
}

async function fetchAPIData(): Promise<Menu> {
  const res = await fetch(
    "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json",
  );
  return res.json();
}

export default App;
