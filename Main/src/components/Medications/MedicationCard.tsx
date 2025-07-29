import React from 'react';
import { Clock, AlertTriangle, Info } from 'lucide-react';
import { Medication } from '../../types';

interface MedicationCardProps {
  medication: Medication;
}

const conditionColors = {
  diabetes: 'bg-blue-50 border-blue-200 text-blue-700',
  hypertension: 'bg-red-50 border-red-200 text-red-700',
  cardiac: 'bg-purple-50 border-purple-200 text-purple-700'
};

export const MedicationCard: React.FC<MedicationCardProps> = ({ medication }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{medication.name}</h3>
          <p className="text-sm text-gray-600">{medication.dosage} • {medication.frequency}</p>
        </div>
        
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${conditionColors[medication.condition]}`}>
          {medication.condition}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            Times: {medication.times.join(', ')}
          </span>
        </div>
        
        <div className="flex items-start space-x-2">
          <Info className="w-4 h-4 text-blue-500 mt-0.5" />
          <p className="text-sm text-gray-700">{medication.instructions}</p>
        </div>
        
        {medication.sideEffects && medication.sideEffects.length > 0 && (
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
            <div>
              <p className="text-sm text-gray-700">Side effects:</p>
              <p className="text-xs text-gray-600">{medication.sideEffects.join(', ')}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 flex space-x-3">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Set Reminder
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          Edit
        </button>
      </div>
    </div>
  );
};