import { Zap } from "lucide-react";

export default function WeeklyNotification({ user }) {
  const calculateWeeklyProgress = () => {
    const thisWeekGold = 0.12; 
    return thisWeekGold;
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mb-8 shadow-lg">
      <div className="flex items-start gap-4">
        <Zap className="w-8 h-8 text-green-200 mt-1" />
        <div>
          <h3 className="text-lg font-bold mb-2">Weekly Gold Insights</h3>
          <p className="text-green-100">
            Minggu ini kamu udah kumpulin{" "}
            <span className="font-bold">{calculateWeeklyProgress()}g emas</span>{" "}
            dari belanja! Tetap semangat, target bulanan tinggal{" "}
            <span className="font-bold">
              {(user.monthlyTarget - user.totalGold).toFixed(2)}g
            </span>{" "}
            lagi.
          </p>
        </div>
      </div>
    </div>
  );
}



