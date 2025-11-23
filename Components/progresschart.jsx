import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProgressChart({ goldPriceHistory, user }) {
  const getProgressPercentage = () => {
    return (user.totalGold / user.monthlyTarget) * 100;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-yellow-600" />
        <h3 className="text-xl font-semibold text-black">Progress Nabung Emas</h3>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={goldPriceHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="week" style={{ fontSize: "12px" }} />
            <YAxis style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FEF3C7",
                border: "1px solid #F59E0B",
                borderRadius: "8px",
              }}
              formatter={(value, name) => [
                name === "gold"
                  ? `${value}g`
                  : `Rp ${value.toLocaleString("id-ID")}`,
                name === "gold" ? "Emas" : "Nilai",
              ]}
            />
            <Line
              type="monotone"
              dataKey="gold"
              stroke="#F59E0B"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Progress Target Bulanan</span>
          <span className="font-bold text-yellow-600">
            {getProgressPercentage().toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
          <div
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(getProgressPercentage(), 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}



