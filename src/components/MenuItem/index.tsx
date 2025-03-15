type Props = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export function MenuItem({ name, description, price, imageUrl }: Props) {
  const priceFormat = Intl.NumberFormat("en", {
    style: "currency",
    currency: "GBP",
  }).format(price);

  return (
    <div className="cursor-pointer rounded border-b border-b-slate-300 p-4 hover:bg-slate-100">
      <div className="flex justify-between">
        <div className="flex">
          <img className="h-20 w-20 rounded-xl object-cover" src={imageUrl} />
          <div className="ml-4 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 text-right">
          <p className="text-lg font-semibold text-blue-500">{priceFormat}</p>
        </div>
      </div>
    </div>
  );
}
