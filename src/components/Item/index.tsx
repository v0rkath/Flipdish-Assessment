import { MenuItem, MenuItemOptionSet } from "@/types";

type Props = {
  item: MenuItem;
};

export function Item({ item }: Props) {
  const masterOpts = item.MenuItemOptionSets.filter(
    (set) => set.IsMasterOptionSet,
  );
  const options = item.MenuItemOptionSets.filter(
    (set) => !set.IsMasterOptionSet,
  );

  if (masterOpts.length === 1) {
    return masterOpts[0].MenuItemOptionSetItems.map((option) => (
      <div className="border-b border-b-slate-300">
        <div className="mt-4 flex justify-between pb-4" key={option.PublicId}>
          <div className="flex">
            <img
              className="h-20 w-20 rounded-xl object-cover"
              src={option.ImageUrl ? option.ImageUrl : item.ImageUrl}
            />
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold">
                {item.Name} ({option.Name})
              </h3>
              <p className="text-sm text-slate-600">{item.Description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 text-right">
            <p className="text-lg font-semibold text-blue-500">
            £{option.Price.toFixed(2)}
            </p>
            <button className="cursor-pointer rounded-full bg-emerald-600 px-3 py-[0.5rem] text-lg font-semibold text-white hover:bg-emerald-700">
              +
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          {options.map((set: MenuItemOptionSet) =>
            set.MenuItemOptionSetItems.map((item) => <p>{item.Name}</p>),
          )}
        </div>
      </div>
    ));
  }

  return (
    <div className="border-b border-b-slate-300">
      <div className="mt-4 flex justify-between pb-4">
        <div className="flex">
          <img
            className="h-20 w-20 rounded-xl object-cover"
            src={item.ImageUrl}
          />
          <div className="ml-4 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">{item.Name}</h3>
            <p className="text-sm text-slate-600">{item.Description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 text-right">
          <p className="text-lg font-semibold text-blue-500">
          £{item.Price.toFixed(2)}
          </p>
          <button className="cursor-pointer rounded-full bg-emerald-600 px-3 py-[0.5rem] text-lg font-semibold text-white hover:bg-emerald-700">
            +
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {options.map((set: MenuItemOptionSet) =>
          set.MenuItemOptionSetItems.map((item) => <p>{item.Name}</p>)
        )}
      </div>
    </div>
  );
}
