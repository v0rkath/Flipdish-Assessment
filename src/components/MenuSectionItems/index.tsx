import { MenuItem } from "@/types";

export function MenuSectionItems({
  Name,
  Description,
  ImageUrl,
  Price,
  MenuItemOptionSets
}: MenuItem) {
  const standalone = MenuItemOptionSets.length > 0 ? MenuItemOptionSets[0].IsMasterOptionSet : false;

  if (standalone) {
    const standaloneElements = MenuItemOptionSets[0].MenuItemOptionSetItems.map((item) => {
      return <div key={item.PublicId} className="flex justify-between border-b border-b-slate-300 pb-4 mt-4">
        <div className="flex">
          <img className="w-20 h-20 rounded-xl object-cover" src={item.ImageUrl ? item.ImageUrl : ImageUrl} />
          <div className="flex flex-col ml-4 justify-center">
            <h3 className="text-xl font-semibold">{standalone ? `${Name} (${item.Name})` : Name}</h3>
            <p className="text-sm text-slate-600">{Description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 text-right">
          <p className="font-semibold text-lg text-blue-500">
            ${item.Price.toFixed(2)}
          </p>
          <button className="bg-emerald-600 px-3 py-[0.5rem] rounded-full text-lg font-semibold text-white hover:bg-emerald-700 cursor-pointer">
            +
          </button>
        </div>
      </div>
    })
    return standaloneElements;
  }

  return (
    <div className="flex justify-between border-b border-b-slate-300 pb-4 mt-4">
      <div className="flex">
        <img className="w-20 h-20 rounded-xl object-cover" src={ImageUrl} />
        <div className="flex flex-col ml-4 justify-center">
          <h3 className="text-xl font-semibold">{Name}</h3>
          <p className="text-sm text-slate-600">{Description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-right">
        <p className="font-semibold text-lg text-blue-500">
          ${Price.toFixed(2)}
        </p>
        <button className="bg-emerald-600 px-3 py-[0.5rem] rounded-full text-lg font-semibold text-white hover:bg-emerald-700 cursor-pointer">
          +
        </button>
      </div>
    </div>
  );
}
