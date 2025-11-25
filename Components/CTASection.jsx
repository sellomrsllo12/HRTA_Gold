import { useState } from "react";
import { Gift, Users } from "lucide-react";
import InvitePopup from "./InvitePopup";

export default function CTASection({ user }) {
  const [isInvitePopupOpen, setIsInvitePopupOpen] = useState(false);

  const handleInviteClick = () => {
    setIsInvitePopupOpen(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-2xl p-8 text-center">
        <Gift className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
        <h2 className="text-2xl font-bold mb-2">
          Undang Teman, Dapat Emas Gratis!
        </h2>
        <p className="text-yellow-100 mb-6">
          Setiap teman yang join, kamu dan dia dapat bonus 0.01g emas
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleInviteClick}
            className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Share ke WhatsApp
          </button>
          <button
            onClick={handleInviteClick}
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Copy Link Referral
          </button>
        </div>
      </div>

      <InvitePopup
        isOpen={isInvitePopupOpen}
        onClose={() => setIsInvitePopupOpen(false)}
        user={user}
      />
    </>
  );
}



