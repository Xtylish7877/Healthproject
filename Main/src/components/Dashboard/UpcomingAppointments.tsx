import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Appointment } from '../../types';

interface UpcomingAppointmentsProps {
  appointments: Appointment[];
}

export const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({ appointments }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>
      
      <div className="space-y-4">
        {appointments.slice(0, 3).map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
              <Calendar className="w-5 h-5" />
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{appointment.title}</h4>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{appointment.doctorName}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(appointment.date).toLocaleDateString()} at {appointment.time}</span>
                </div>
              </div>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              appointment.type === 'routine'
                ? 'bg-green-100 text-green-700'
                : appointment.type === 'follow-up'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {appointment.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};