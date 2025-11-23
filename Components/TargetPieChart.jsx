import { Target } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";


export default function TargetPieChart({ user }) {
  const pieData = [
    { name: "Terkumpul", value: user.totalGold, color: "#FBBF24" },
    {
      name: "Target Sisa",
      value: user.monthlyTarget - user.totalGold,
      color: "#374151",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-semibold text-black">Target vs Achievement</h3>
      </div>

      <div className="h-[200px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value.toFixed(2)}g`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-4">
        <p className="text-2xl font-bold text-gray-800">
          {user.totalGold.toFixed(2)}g
        </p>
        <p className="text-gray-600">dari target {user.monthlyTarget}g</p>
      </div>
    </div>
  );
}



