import React from 'react';
import { Phone, MapPin, AlertTriangle, Heart } from 'lucide-react';
import { EmergencyContact } from '../../types';

interface EmergencyPanelProps {
  emergencyContact: EmergencyContact;
}

export const EmergencyPanel: React.FC<EmergencyPanelProps> = ({ emergencyContact }) => {
  const emergencyNumbers = [
    { name: 'Emergency Services', number: '911', color: 'bg-red-600 hover:bg-red-700' },
    { name: 'Poison Control', number: '1-800-222-1222', color: 'bg-orange-600 hover:bg-orange-700' },
    { name: 'Primary Care', number: '(555) 123-4567', color: 'bg-blue-600 hover:bg-blue-700' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <AlertTriangle className="w-6 h-6 text-red-600" />
        <h3 className="text-lg font-semibold text-gray-900">Emergency Contacts</h3>
      </div>
      
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="w-5 h-5 text-red-600" />
            <span className="font-medium text-red-800">Emergency Contact</span>
          </div>
          <p className="text-sm text-red-700">
            {emergencyContact.name} ({emergencyContact.relationship})
          </p>
          <button className="mt-2 flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            <Phone className="w-4 h-4" />
            <span>Call {emergencyContact.phone}</span>
          </button>
        </div>
        
        <div className="space-y-3">
          {emergencyNumbers.map((contact) => (
            <button
              key={contact.name}
              className={`w-full flex items-center justify-between p-3 text-white rounded-lg transition-colors ${contact.color}`}
            >
              <span className="font-medium">{contact.name}</span>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contact.number}</span>
              </div>
            </button>
          ))}
        </div>
        
        <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          <MapPin className="w-4 h-4" />
          <span>Find Nearest Hospital</span>
        </button>
      </div>
    </div>
  );
};