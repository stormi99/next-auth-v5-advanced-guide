"use client";

import React, { useState, useEffect } from "react";

const foodNames = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Burger", emoji: "🍔" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Taco", emoji: "🌮" },
  { name: "Burrito", emoji: "🌯" },
  { name: "Sandwich", emoji: "🥪" },
  { name: "Salad", emoji: "🥗" },
  { name: "Fries", emoji: "🍟" },
  { name: "Breakfast", emoji: "🍳" },
  { name: "Egg", emoji: "🥚" },
  { name: "Pancakes", emoji: "🥞" },
  { name: "Rice", emoji: "🍚" },
  { name: "Noodles", emoji: "🍜" },
  { name: "Soup", emoji: "🍲" },
  { name: "Fish", emoji: "🐟" },
  { name: "Shrimp", emoji: "🍤" },
  { name: "Chicken", emoji: "🍗" },
  { name: "Turkey", emoji: "🦃" },
  { name: "Bacon", emoji: "🥓" },
];

export default function ChangingFoodName() {
  const [foodName, setFoodName] = useState<string>("Pizza");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * foodNames.length);
      setFoodName(
        `${foodNames[randomIndex].name} ${foodNames[randomIndex].emoji}`
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="bg-amber-100 rounded-sm p-1 text-amber-800">
      {foodName}
    </span>
  );
}
