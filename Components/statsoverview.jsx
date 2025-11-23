import { Coins, Trophy, Calendar, Target } from "lucide-react";

export default function StatsOverview({ user }) {
  const getProgressPercentage = () => {
    return (user.totalGold / user.monthlyTarget) * 100;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-yellow-100 text-sm">Total Emas</p>
            <p className="text-3xl font-bold">{user.totalGold.toFixed(2)}g</p>
            <p className="text-yellow-100 text-xs">
              ≈ Rp {user.totalValue.toLocaleString("id-ID")}
            </p>
          </div>
          <Coins className="w-12 h-12 text-yellow-200" />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Level Saat Ini</p>
            <p className="text-2xl font-bold text-gray-800">{user.level}</p>
            <p className="text-gray-500 text-xs">
              {user.badges.length} badges terkumpul
            </p>
          </div>
          <Trophy className="w-12 h-12 text-yellow-500" />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Streak Hari</p>
            <p className="text-2xl font-bold text-gray-800">
              {user.currentStreak}
            </p>
            <p className="text-green-600 text-xs font-medium">🔥 Hot streak!</p>
          </div>
          <Calendar className="w-12 h-12 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Target Bulan Ini</p>
            <p className="text-2xl font-bold text-gray-800">
              {getProgressPercentage().toFixed(0)}%
            </p>
            <p className="text-gray-500 text-xs">
              {user.monthlyTarget}g target
            </p>
          </div>
          <Target className="w-12 h-12 text-blue-500" />
        </div>
      </div>
    </div>
  );
}



