

import { Settings } from "lucide-react";
import { useState } from "react";

export default function RoundUpSettings({
  user,
  roundUpOptions,
  onRoundUpChange,
}) {
  const [selectedAmount, setSelectedAmount] = useState(user.roundUpSetting);

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    if (onRoundUpChange) {
      onRoundUpChange(amount);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-black">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-gray-600" />
        <h3 className="text-xl font-semibold">Pengaturan Auto Round-Up</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Nominal Pembulatan
          </label>
          <div className="grid grid-cols-2 gap-3">
            {roundUpOptions.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountChange(amount)}
                className={`p-3 rounded-lg border text-center transition-all hover:scale-105 ${
                  selectedAmount === amount
                    ? "border-yellow-500 bg-yellow-50 text-yellow-700 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="font-semibold">
                  Rp {amount.toLocaleString("id-ID")}
                </span>
              </button>
            ))}
          </div>
          {selectedAmount !== user.roundUpSetting && (
            <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                ✅ Pengaturan berhasil diubah ke Rp{" "}
                {selectedAmount.toLocaleString("id-ID")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



