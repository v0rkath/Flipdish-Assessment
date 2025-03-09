type Props = {
  children: React.ReactNode;
  name: string;
};

export function MenuSection({ children, name }: Props) {
  return (
    <div className="text-left mt-12">
      <h2 className="text-xl font-semibold mb-6">{name}</h2>
      {children}
    </div>
  );
}
