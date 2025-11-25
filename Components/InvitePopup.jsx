import { useState } from "react";
import { X, Copy, Check, Users, Gift } from "lucide-react";

export default function InvitePopup({ isOpen, onClose, user }) {
  const [copied, setCopied] = useState(false);
  const [copyText, setCopyText] = useState("Salin Link");

  const referralLink = `https://hrtagold.com/referral/${user.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;
  const referralCode = `GOLD${user.name.substring(0, 3).toUpperCase()}${Math.floor(Math.random() * 1000)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setCopyText("Tersalin! ✅");
      setTimeout(() => {
        setCopied(false);
        setCopyText("Salin Link");
      }, 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setCopyText("Gagal menyalin");
      setTimeout(() => setCopyText("Salin Link"), 2000);
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 transform transition-all">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Undang Teman</h3>
              <p className="text-sm text-gray-600">
                Dapatkan bonus emas gratis!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Bonus Info */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-yellow-600" />
            <span className="font-semibold text-yellow-800">
              Bonus Referral
            </span>
          </div>
          <div className="text-sm text-yellow-700 space-y-1">
            <p>
              🎁 <strong>Kamu:</strong> 0.01 gram emas untuk setiap teman yang
              join
            </p>
            <p>
              🎁 <strong>Temanmu:</strong> 0.005 gram emas gratis saat daftar
            </p>
          </div>
        </div>

        {/* Referral Link */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Link Undangan
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                }`}
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copyText}
              </button>
            </div>
          </div>

          {/* Referral Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kode Referral
            </label>
            <div
              onClick={handleCopyCode}
              className="p-3 border border-gray-300 rounded-lg bg-gray-50 text-center cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl font-bold text-yellow-600 tracking-wider">
                {referralCode}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Klik untuk menyalin kode
            </p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <button className="p-3 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
            WhatsApp
          </button>
          <button className="p-3 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
            Telegram
          </button>
          <button className="p-3 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
            Lainnya
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total teman diundang:</span>
            <span className="font-semibold">12 orang</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">Bonus yang didapat:</span>
            <span className="font-semibold text-yellow-600">
              0.12 gram emas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}



