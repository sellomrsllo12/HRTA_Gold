import { Settings } from "lucide-react";


export default function RoundUpSettings({ user, roundUpOptions } ) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-gray-600" />
        <h3 className="text-xl font-semibold text-black">Pengaturan Auto Round-Up</h3>
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
                className={`p-3 rounded-lg border text-center transition-all ${
                  user.roundUpSetting === amount
                    ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="font-semibold text-black">
                  Rp {amount.toLocaleString("id-ID")}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Connected Apps
          </label>
          <div className="space-y-2">
            {partnerApps.map((app) => (
              <div
                key={app.name}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 text-black"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{app.icon}</span>
                  <span className="font-medium">{app.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



