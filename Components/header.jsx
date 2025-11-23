import { Sparkles, Bell, Share2 } from "lucide-react";

export default function Header({ user }) {
  return (
    <header className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">HRTA Gold</h1>
              <p className="text-yellow-100 text-sm">
                Nabung emas otomatis dari belanja harian
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 cursor-pointer hover:text-yellow-200" />
            <Share2 className="w-6 h-6 cursor-pointer hover:text-yellow-200" />
            <div className="text-right">
              <p className="text-sm text-yellow-100">Halo,</p>
              <p className="font-semibold">{user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



