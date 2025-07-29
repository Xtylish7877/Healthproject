import React from 'react';
import { 
  Home, 
  Pill, 
  Activity, 
  Calendar, 
  BookOpen, 
  AlertTriangle,
  Heart,
  Droplet,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'dashboard', name: 'Dashboard', icon: Home },
  { id: 'medications', name: 'Medications', icon: Pill },
  { id: 'vitals', name: 'Vital Signs', icon: Activity },
  { id: 'appointments', name: 'Appointments', icon: Calendar },
  { id: 'education', name: 'Health Tips', icon: BookOpen },
  { id: 'alerts', name: 'Alerts', icon: AlertTriangle },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 min-h-screen">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span className="font-medium">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="mt-8 px-4">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-semibold text-gray-800">Health Score</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
            </div>
            <span className="text-sm font-medium text-gray-700">85%</span>
          </div>
          <p className="text-xs text-gray-600 mt-2">Great job maintaining your health!</p>
        </div>
      </div>
    </aside>
  );
};