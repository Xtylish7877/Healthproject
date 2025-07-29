import React from 'react';
import { Activity, Droplet, Heart, Weight } from 'lucide-react';
import { VitalReading } from '../../types';

interface VitalCardProps {
  reading: VitalReading;
}

const vitalIcons = {
  blood_sugar: Droplet,
  blood_pressure: Activity,
  heart_rate: Heart,
  weight: Weight
};

const vitalColors = {
  blood_sugar: 'text-blue-600 bg-blue-50',
  blood_pressure: 'text-red-600 bg-red-50',
  heart_rate: 'text-green-600 bg-green-50',
  weight: 'text-purple-600 bg-purple-50'
};

export const VitalCard: React.FC<VitalCardProps> = ({ reading }) => {
  const Icon = vitalIcons[reading.type];
  const colorClass = vitalColors[reading.type];
  
  const displayValue = typeof reading.value === 'number' 
    ? `${reading.value} ${reading.unit}`
    : `${reading.value.systolic}/${reading.value.diastolic} ${reading.unit}`;
  
  const vitalName = reading.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-xs text-gray-500">
          {new Date(reading.timestamp).toLocaleDateString()}
        </span>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{vitalName}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">{displayValue}</p>
        {reading.notes && (
          <p className="text-sm text-gray-600 mt-2">{reading.notes}</p>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Add New Reading
        </button>
      </div>
    </div>
  );
};