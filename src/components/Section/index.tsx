import { MenuSection } from "@/types/types";

type Props = {
  children: React.ReactNode;
  section: MenuSection;
};

export function Section({ children, section }: Props) {
  return (
    <div className="mt-12 text-left">
      <h2 className="mb-6 text-xl font-semibold">{section.Name}</h2>
      {children}
    </div>
  );
}
