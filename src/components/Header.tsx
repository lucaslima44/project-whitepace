import { Menu } from "lucide-react";

export function Header() {
  return (
    <div className="bg-primary w-full h-[63px] flex items-center border-b border-gray-100">
      <div className="w-full mx-auto px-6 flex items-center justify-between">
        <img src="/logo-mobile.png" alt="Logo whitepace" />
        <Menu className="text-white" />
      </div>
    </div>
  );
}
