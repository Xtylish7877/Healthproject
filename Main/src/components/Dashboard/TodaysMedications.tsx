import React from 'react';
import { Clock, Check, AlertCircle } from 'lucide-react';
import { Medication, MedicationReminder } from '../../types';

interface TodaysMedicationsProps {
  medications: Medication[];
  reminders: MedicationReminder[];
}

export const TodaysMedications: React.FC<TodaysMedicationsProps> = ({ medications, reminders }) => {
  const todaysSchedule = medications.flatMap(med => 
    med.times.map(time => ({
      medication: med,
      time,
      reminder: reminders.find(r => r.medicationId === med.id && r.scheduledTime.includes(time))
    }))
  ).sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Today's Medications</h3>
        <span className="text-sm text-gray-500">
          {todaysSchedule.filter(item => item.reminder?.taken).length} of {todaysSchedule.length} taken
        </span>
      </div>
      
      <div className="space-y-4">
        {todaysSchedule.map((item, index) => {
          const isTaken = item.reminder?.taken;
          const isOverdue = !isTaken && new Date().getHours() > parseInt(item.time.split(':')[0]);
          
          return (
            <div
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-lg border transition-colors ${
                isTaken
                  ? 'bg-green-50 border-green-200'
                  : isOverdue
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className={`p-2 rounded-full ${
                isTaken
                  ? 'bg-green-100 text-green-600'
                  : isOverdue
                  ? 'bg-red-100 text-red-600'
                  : 'bg-blue-100 text-blue-600'
              }`}>
                {isTaken ? (
                  <Check className="w-5 h-5" />
                ) : isOverdue ? (
                  <AlertCircle className="w-5 h-5" />
                ) : (
                  <Clock className="w-5 h-5" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{item.medication.name}</h4>
                  <span className="text-sm text-gray-500">{item.time}</span>
                </div>
                <p className="text-sm text-gray-600">{item.medication.dosage} • {item.medication.instructions}</p>
              </div>
              
              {!isTaken && (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Mark Taken
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};