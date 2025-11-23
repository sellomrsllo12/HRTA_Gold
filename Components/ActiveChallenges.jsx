import { Trophy, Award } from "lucide-react";

export default function ActiveChallenges({ challenges }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-black">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-orange-600" />
        <h3 className="text-xl font-semibold">Tantangan Aktif</h3>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              challenge.completed
                ? "border-green-200 bg-green-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{challenge.name}</h4>
              {challenge.completed && (
                <Award className="w-5 h-5 text-green-600" />
              )}
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                Progress: {challenge.progress}/{challenge.target}
              </span>
              <span>Reward: {challenge.reward}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  challenge.completed ? "bg-green-500" : "bg-orange-500"
                }`}
                style={{
                  width: `${(challenge.progress / challenge.target) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



