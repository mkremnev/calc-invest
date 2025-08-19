import { FC } from "react";
import { TrendingUp } from "lucide-react";

export const Header: FC = () => {
  return (
    <header className="text-center space-y-2">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
        <TrendingUp className="w-8 h-8 text-white" />
      </div>
      <div>Калькулятор инвестиций</div>
      <div>Рассчитайте доходность ваших вложений</div>
    </header>
  );
};
