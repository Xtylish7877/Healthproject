import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const trends = [
  {
    name: 'Blood Sugar',
    current: 120,
    previous: 135,
    unit: 'mg/dL',
    trend: 'down',
    percentage: 11
  },
  {
    name: 'Systolic BP',
    current: 135,
    previous: 140,
    unit: 'mmHg',
    trend: 'down',
    percentage: 4
  },
  {
    name: 'Weight',
    current: 165,
    previous: 168,
    unit: 'lbs',
    trend: 'down',
    percentage: 2
  }
];

export const VitalTrends: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Trends</h3>
      
      <div className="space-y-4">
        {trends.map((trend) => (
          <div key={trend.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">{trend.name}</h4>
              <p className="text-sm text-gray-600">
                Current: {trend.current} {trend.unit}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className={`flex items-center space-x-1 ${
                trend.trend === 'down' ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend.trend === 'down' ? (
                  <TrendingDown className="w-4 h-4" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">{trend.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};