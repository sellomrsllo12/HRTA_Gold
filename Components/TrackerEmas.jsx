import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Makan & Minuman', value: 1450000 },
  { name: 'Belanja', value: 890000 },
  { name: 'Transport', value: 1200000 },
  { name: 'Tagihan', value: 750000 },
  { name: 'Hiburan', value: 380000 },
  {name: 'Lainnya', value: 150000 }
];

const COLORS = ['#D4AF37', '#B8860B', '#F7E7A9', '#E8D18D'];

export default function GoldExpenseTracker() {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md w-full mb-10">
      <h2 className="text-xl font-bold text-[#2A2A2A] mb-4">
        Tracker Pengeluaran Emas
      </h2>

      <PieChart width={280} height={280}>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={120}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <p className="mt-2 text-[#2A2A2A]">Total: Rp 4.850.000</p>
    </div>
  );
}
