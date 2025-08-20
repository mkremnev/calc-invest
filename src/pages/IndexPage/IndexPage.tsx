import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Slider } from "@/components/slider";
import { TrendingUp, DollarSign, Calendar, Percent } from "lucide-react";
import { clearMonths, clearNotANumber } from "@/helpers/numbers.ts";

function IndexPage() {
  const [initialCapital, setInitialCapital] = useState<string>("100000");
  const [monthlyContribution, setMonthlyContribution] = useState<string>("10000");
  const [monthlyRate, setMonthlyRate] = useState<number[]>([1.5]);
  const [months, setMonths] = useState<string>("12");
  const [result, setResult] = useState<number>(0);

  // Функция расчета сложного процента с ежемесячными пополнениями
  const calculateInvestment = () => {
    const principal = parseFloat(initialCapital) || 0;
    const monthlyPmt = parseFloat(monthlyContribution) || 0;
    const rate = monthlyRate[0] / 100; // конвертируем проценты в десятичную дробь
    const periodsCount = parseInt(months) || 0;

    if (rate === 0) {
      return principal + monthlyPmt * periodsCount;
    }

    // Формула для сложного процента с регулярными пополнениями
    const futureValuePrincipal = principal * Math.pow(1 + rate, periodsCount);
    const futureValueAnnuity = monthlyPmt * ((Math.pow(1 + rate, periodsCount) - 1) / rate);

    return futureValuePrincipal + futureValueAnnuity;
  };

  useEffect(() => {
    setResult(calculateInvestment());
  }, [initialCapital, monthlyContribution, monthlyRate, months]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalInvested =
    (parseFloat(initialCapital) || 0) + (parseFloat(monthlyContribution) || 0) * (parseInt(months) || 0);
  const profit = result - totalInvested;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Заголовок */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-emerald-800">Калькулятор инвестиций</h1>
          <p className="text-emerald-600">Рассчитайте доходность ваших вложений</p>
        </div>

        {/* Форма ввода */}
        <Card className="border-emerald-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Параметры инвестиций
            </CardTitle>
            <CardDescription className="text-emerald-50">Введите данные для расчета</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            {/* Стартовый капитал */}
            <div className="space-y-2">
              <Label htmlFor="initial-capital" className="flex items-center gap-2 text-emerald-700">
                <DollarSign className="w-4 h-4" />
                Стартовый капитал (₽)
              </Label>
              <Input
                id="initial-capital"
                type="text"
                value={initialCapital}
                onChange={(e) => setInitialCapital(clearNotANumber(e.target.value))}
                className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                placeholder="100000"
              />
            </div>

            {/* Ежемесячные пополнения */}
            <div className="space-y-2">
              <Label htmlFor="monthly-contribution" className="flex items-center gap-2 text-emerald-700">
                <Calendar className="w-4 h-4" />
                Ежемесячные пополнения (₽)
              </Label>
              <Input
                id="monthly-contribution"
                type="text"
                value={monthlyContribution}
                onChange={(e) => {
                  setMonthlyContribution(clearNotANumber(e.target.value));
                }}
                className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                placeholder="10000"
              />
            </div>

            {/* Процентная ставка */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-emerald-700">
                <Percent className="w-4 h-4" />
                Ожидаемая доходность в месяц: {monthlyRate[0]}%
              </Label>
              <div className="px-2">
                <Slider
                  value={monthlyRate}
                  onValueChange={setMonthlyRate}
                  max={15}
                  min={0.1}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-emerald-600 mt-1">
                  <span>0.1%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            {/* Период инвестирования */}
            <div className="space-y-2">
              <Label htmlFor="months" className="flex items-center gap-2 text-emerald-700">
                <Calendar className="w-4 h-4" />
                Период инвестирования (месяцев)
              </Label>
              <Input
                id="months"
                type="text"
                value={months}
                onChange={(e) => setMonths(clearMonths(e.target.value))}
                className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                placeholder="12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Результаты */}
        <Card className="border-emerald-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Результат расчета
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Итоговая сумма */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200">
                <div className="text-center">
                  <p className="text-sm text-emerald-600 mb-1">Итоговая сумма</p>
                  <p className="text-3xl font-bold text-emerald-800">{formatCurrency(result)}</p>
                </div>
              </div>

              {/* Детали */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-600">Инвестировано</p>
                  <p className="font-semibold text-blue-800">{formatCurrency(totalInvested)}</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-xs text-green-600">Прибыль</p>
                  <p className="font-semibold text-green-800">{formatCurrency(profit)}</p>
                </div>
              </div>

              {/* Доходность */}
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-center">
                <p className="text-xs text-yellow-600">Общая доходность</p>
                <p className="font-semibold text-yellow-800">
                  {totalInvested > 0 ? ((profit / totalInvested) * 100).toFixed(1) : 0}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Дисклеймер */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <p className="text-xs text-orange-700 text-center">
              ⚠️ Расчеты носят информационный характер. Реальная доходность может отличаться от прогнозируемой.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export { IndexPage };
