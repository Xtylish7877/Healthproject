import React from 'react';
import { Activity, Heart, Droplet, Weight } from 'lucide-react';

const stats = [
  {
    name: 'Blood Sugar',
    value: '120 mg/dL',
    status: 'normal',
    icon: Droplet,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    name: 'Blood Pressure',
    value: '135/85 mmHg',
    status: 'elevated',
    icon: Activity,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    name: 'Heart Rate',
    value: '72 bpm',
    status: 'normal',
    icon: Heart,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    name: 'Weight',
    value: '165 lbs',
    status: 'stable',
    icon: Weight,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }
];

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className={`${stat.bgColor} ${stat.borderColor} border rounded-xl p-6 hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm font-medium mt-1 capitalize ${
                  stat.status === 'normal' ? 'text-green-600' :
                  stat.status === 'elevated' ? 'text-yellow-600' : 'text-blue-600'
                }`}>
                  {stat.status}
                </p>
              </div>
              <div className={`${stat.color} ${stat.bgColor} p-3 rounded-lg`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};