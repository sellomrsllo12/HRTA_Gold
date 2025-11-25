"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dailyData = [
  { day: "Sen", price: 1210000 },
  { day: "Sel", price: 1213000 },
  { day: "Rab", price: 1208000 },
  { day: "Kam", price: 1220000 },
  { day: "Jum", price: 1224000 },
  { day: "Sab", price: 1221000 },
  { day: "Min", price: 1230000 },
];

export default function GoldDailyChart() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#2A2A2A]">
        Harga Emas per Hari
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={dailyData}>
            <XAxis dataKey="day" stroke="#8B8B8B" />
            <YAxis stroke="#8B8B8B" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#D4AF37"
              strokeWidth={3}
              dot={{ r: 4, fill: "#D4AF37" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
