import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { DashboardStats } from './components/Dashboard/DashboardStats';
import { TodaysMedications } from './components/Dashboard/TodaysMedications';
import { UpcomingAppointments } from './components/Dashboard/UpcomingAppointments';
import { VitalTrends } from './components/Dashboard/VitalTrends';
import { MedicationCard } from './components/Medications/MedicationCard';
import { VitalCard } from './components/Vitals/VitalCard';
import { EmergencyPanel } from './components/Emergency/EmergencyPanel';
import { 
  mockPatient, 
  mockMedications, 
  mockVitalReadings, 
  mockReminders, 
  mockAppointments 
} from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TodaysMedications medications={mockMedications} reminders={mockReminders} />
              <UpcomingAppointments appointments={mockAppointments} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <VitalTrends />
              </div>
              <EmergencyPanel emergencyContact={mockPatient.emergencyContact} />
            </div>
          </div>
        );
      
      case 'medications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">My Medications</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Medication
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockMedications.map((medication) => (
                <MedicationCard key={medication.id} medication={medication} />
              ))}
            </div>
          </div>
        );
      
      case 'vitals':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Vital Signs</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Reading
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockVitalReadings.map((reading) => (
                <VitalCard key={reading.id} reading={reading} />
              ))}
            </div>
          </div>
        );
      
      case 'appointments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Appointment
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="space-y-4">
                {mockAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.title}</h3>
                      <p className="text-sm text-gray-600">{appointment.doctorName}</p>
                      <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                        Reschedule
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Health Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Managing Diabetes</h3>
                <p className="text-sm text-gray-600 mb-4">Learn about blood sugar management, diet tips, and lifestyle changes.</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Read More →</button>
              </div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Heart Health</h3>
                <p className="text-sm text-gray-600 mb-4">Tips for maintaining cardiovascular health and preventing complications.</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Read More →</button>
              </div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Blood Pressure Control</h3>
                <p className="text-sm text-gray-600 mb-4">Understanding hypertension and effective management strategies.</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Read More →</button>
              </div>
            </div>
          </div>
        );
      
      case 'alerts':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Health Alerts</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800">Blood Pressure Elevated</h3>
                <p className="text-sm text-yellow-700">Your latest reading of 135/85 mmHg is above normal. Consider consulting your doctor.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800">Medication Reminder</h3>
                <p className="text-sm text-blue-700">Don't forget to take your evening Metformin at 8:00 PM.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800">Great Progress!</h3>
                <p className="text-sm text-green-700">Your blood sugar levels have been consistently in the normal range this week.</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header patient={mockPatient} unreadNotifications={3} />
      
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;