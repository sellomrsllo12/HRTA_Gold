"use client";

import { useState } from "react";
import Header from "../Components/header";
import StatsOverview from "../Components/statsoverview";
import WeeklyNotification from "../Components/weeklyinsight";
import ProgressChart from "../Components/progresschart";
import TargetPieChart from "../Components/TargetPieChart";
import RoundUpSettings from "../Components/RoundUpSettings.jsx";
import RecentTransactions from "../Components/RecentTransaction";
import ActiveChallenges from "../Components/ActiveChallenges";
import BadgesAchievements from "../Components/BadgesAchievments";
import CTASection from "../Components/CTASection";

export default function AutoRoundUpGold() {
  const [user] = useState({
    name: "Andi Pratama",
    level: "Gold Explorer",
    totalGold: 2.47,
    totalValue: 3456780,
    currentStreak: 23,
    monthlyTarget: 5.0,
    badges: ["First Purchase", "Week Warrior", "Social Saver"],
    roundUpSetting: 10000,
  });

  const [transactions] = useState([
    {
      date: "2024-11-20",
      merchant: "Indomaret",
      amount: 47500,
      roundUp: 2500,
      goldAdded: 0.001,
    },
    {
      date: "2024-11-19",
      merchant: "Grab Food",
      amount: 83200,
      roundUp: 6800,
      goldAdded: 0.003,
    },
    {
      date: "2024-11-18",
      merchant: "Shopee",
      amount: 156700,
      roundUp: 3300,
      goldAdded: 0.002,
    },
    {
      date: "2024-11-17",
      merchant: "Starbucks",
      amount: 65000,
      roundUp: 5000,
      goldAdded: 0.002,
    },
  ]);

  const [goldPriceHistory] = useState([
    { week: "Minggu 1", gold: 0.3, value: 420000 },
    { week: "Minggu 2", gold: 0.7, value: 980000 },
    { week: "Minggu 3", gold: 1.2, value: 1680000 },
    { week: "Minggu 4", gold: 2.0, value: 2800000 },
    { week: "Minggu 5", gold: 2.47, value: 3456780 },
  ]);

  const [challenges] = useState([
    {
      name: "30 Hari Beruntun",
      progress: 23,
      target: 30,
      reward: "0.01 gram emas",
      active: true,
    },
    {
      name: "Nabung Bareng Keluarga",
      progress: 3,
      target: 5,
      reward: "Badge spesial",
      active: true,
    },
    {
      name: "Weekly Spender",
      progress: 7,
      target: 7,
      reward: "Extra 0.005 gram",
      completed: true,
    },
  ]);

  const [partnerApps] = useState([
    { name: "BCA Mobile", connected: true, icon: "💙" },
    { name: "GoPay", connected: true, icon: "🟢" },
    { name: "DANA", connected: false, icon: "🔵" },
    { name: "OVO", connected: false, icon: "🟣" },
    { name: "Blu by BCA", connected: true, icon: "🔷" },
    { name: "LinkAja", connected: false, icon: "🔴" },
  ]);

  const roundUpOptions = [5000, 10000, 20000, 50000];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <Header user={user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsOverview user={user} />
        <WeeklyNotification user={user} />

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <ProgressChart goldPriceHistory={goldPriceHistory} user={user} />
          <TargetPieChart user={user} />
        </div>

        <RoundUpSettings
          user={user}
          roundUpOptions={roundUpOptions}
          partnerApps={partnerApps}
        />

        <div className="mt-8">
          <RecentTransactions transactions={transactions} />
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <ActiveChallenges challenges={challenges} />
          <BadgesAchievements user={user} />
        </div>

        <div className="mt-8">
          <CTASection />
        </div>
      </main>
    </div>
  );
}


