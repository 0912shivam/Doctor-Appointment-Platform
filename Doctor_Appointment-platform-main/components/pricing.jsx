"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Always free",
      credits: "2 Credits",
      features: [
        "2 video consultations",
        "Access to all specialties",
        "Secure video calls",
        "Basic support"
      ],
      buttonText: "Current Plan",
      isActive: true,
      highlighted: false,
    },
    {
      name: "Standard",
      price: "$100",
      period: "/month",
      credits: "10 Credits",
      features: [
        "Get 10 Credits for up-to 5 Consultations with our Doctors",
        "Access to all verified doctors",
        "HD video consultations",
        "Priority support",
        "Appointment reminders",
        "Medical history storage"
      ],
      buttonText: "Subscribe",
      isActive: false,
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$200",
      period: "/month",
      credits: "24 Credits",
      features: [
        "Get 24 Credits for up-to 12 Consultations with our Doctors",
        "All Standard features",
        "Unlimited consultations",
        "24/7 priority support",
        "Personal health dashboard",
        "Family accounts (up to 4)",
        "Prescription management"
      ],
      buttonText: "Subscribe",
      isActive: false,
      highlighted: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`relative border ${
            plan.highlighted
              ? "border-emerald-600 shadow-lg shadow-emerald-900/50 scale-105"
              : "border-emerald-900/30"
          } bg-gradient-to-b from-card to-transparent hover:border-emerald-800/50 transition-all duration-300`}
        >
          {plan.highlighted && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white border-0">
              Most Popular
            </Badge>
          )}
          {plan.isActive && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-900/80 text-emerald-400 border-emerald-700">
              Active
            </Badge>
          )}
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-white mb-2">
              {plan.name}
            </CardTitle>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{plan.period === "Always free" ? plan.period : "Only billed monthly"}</p>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4 text-emerald-400">
                <Check className="h-5 w-5" />
                <span className="font-semibold">{plan.credits}</span>
              </div>
              {plan.name === "Standard" && (
                <div className="flex items-center gap-2 mb-4 text-emerald-400">
                  <Check className="h-5 w-5" />
                  <span className="font-semibold">10 Credits</span>
                </div>
              )}
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${
                plan.highlighted
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : plan.isActive
                  ? "bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-700"
                  : "bg-card hover:bg-emerald-900/20 text-white border border-emerald-900/50"
              }`}
              disabled={plan.isActive}
            >
              {plan.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Pricing;
