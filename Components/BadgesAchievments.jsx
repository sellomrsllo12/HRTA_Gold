import { Award, Users } from "lucide-react";

export default function BadgesAchievements({ user }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-5 h-5 text-purple-600" />
        <h3 className="text-xl font-semibold text-black">Badge Collection</h3>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {user.badges.map((badge, index) => (
          <div
            key={index}
            className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg"
          >
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-xs font-medium text-yellow-800">{badge}</p>
          </div>
        ))}

        {/* Locked badges */}
        <div className="text-center p-4 bg-gray-100 rounded-lg opacity-50">
          <div className="text-3xl mb-2">🔒</div>
          <p className="text-xs font-medium text-gray-600">Master Saver</p>
        </div>

        <div className="text-center p-4 bg-gray-100 rounded-lg opacity-50">
          <div className="text-3xl mb-2">🔒</div>
          <p className="text-xs font-medium text-gray-600">Gold Hunter</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6" />
          <div>
            <h4 className="font-semibold">Nabung Bareng Teman</h4>
            <p className="text-sm text-purple-100">
              Ajak 3 teman dan dapatkan bonus emas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



