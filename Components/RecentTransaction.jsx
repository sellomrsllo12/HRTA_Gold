import { CreditCard } from "lucide-react";

export default function RecentTransactions({ transactions }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-5 h-5 text-purple-600" />
        <h3 className="text-xl font-semibold text-black">Transaksi Terbaru</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-sm font-medium text-gray-600">
                Tanggal
              </th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">
                Merchant
              </th>
              <th className="text-right py-3 text-sm font-medium text-gray-600">
                Transaksi
              </th>
              <th className="text-right py-3 text-sm font-medium text-gray-600">
                Round-Up
              </th>
              <th className="text-right py-3 text-sm font-medium text-gray-600">
                Emas +
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 text-sm text-black">{tx.date}</td>
                <td className="py-3 text-sm font-medium text-black">{tx.merchant}</td>
                <td className="py-3 text-sm text-right text-black">
                  Rp {tx.amount.toLocaleString("id-ID")}
                </td>
                <td className="py-3 text-sm text-right text-green-600">
                  +Rp {tx.roundUp.toLocaleString("id-ID")}
                </td>
                <td className="py-3 text-sm text-right font-bold text-yellow-600">
                  +{tx.goldAdded.toFixed(3)}g
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}