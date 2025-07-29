import { Patient, Medication, VitalReading, MedicationReminder, Appointment } from '../types';

export const mockPatient: Patient = {
  id: '1',
  name: 'Sarah Johnson',
  dateOfBirth: '1965-03-15',
  conditions: ['diabetes', 'hypertension'],
  emergencyContact: {
    name: 'Michael Johnson',
    relationship: 'Spouse',
    phone: '+1 (555) 123-4567'
  }
};

export const mockMedications: Medication[] = [
  {
    id: '1',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    times: ['08:00', '20:00'],
    condition: 'diabetes',
    startDate: '2024-01-15',
    instructions: 'Take with food to reduce stomach upset',
    sideEffects: ['Nausea', 'Diarrhea', 'Metallic taste']
  },
  {
    id: '2',
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    times: ['08:00'],
    condition: 'hypertension',
    startDate: '2024-01-15',
    instructions: 'Take at the same time each day',
    sideEffects: ['Dry cough', 'Dizziness', 'Fatigue']
  },
  {
    id: '3',
    name: 'Insulin Glargine',
    dosage: '20 units',
    frequency: 'Once daily',
    times: ['22:00'],
    condition: 'diabetes',
    startDate: '2024-01-15',
    instructions: 'Inject subcutaneously, rotate injection sites'
  }
];

export const mockVitalReadings: VitalReading[] = [
  {
    id: '1',
    type: 'blood_sugar',
    value: 120,
    unit: 'mg/dL',
    timestamp: '2024-01-20T08:00:00Z',
    notes: 'Fasting'
  },
  {
    id: '2',
    type: 'blood_pressure',
    value: { systolic: 135, diastolic: 85 },
    unit: 'mmHg',
    timestamp: '2024-01-20T08:15:00Z'
  },
  {
    id: '3',
    type: 'heart_rate',
    value: 72,
    unit: 'bpm',
    timestamp: '2024-01-20T08:20:00Z'
  },
  {
    id: '4',
    type: 'weight',
    value: 165,
    unit: 'lbs',
    timestamp: '2024-01-20T08:00:00Z'
  }
];

export const mockReminders: MedicationReminder[] = [
  {
    id: '1',
    medicationId: '1',
    scheduledTime: '2024-01-20T08:00:00Z',
    taken: true,
    takenAt: '2024-01-20T08:05:00Z'
  },
  {
    id: '2',
    medicationId: '2',
    scheduledTime: '2024-01-20T08:00:00Z',
    taken: false,
    skipped: false
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    title: 'Diabetes Check-up',
    doctorName: 'Dr. Emily Chen',
    date: '2024-01-25',
    time: '10:00',
    type: 'routine',
    notes: 'Bring recent blood work results'
  },
  {
    id: '2',
    title: 'Cardiology Consultation',
    doctorName: 'Dr. Robert Martinez',
    date: '2024-02-02',
    time: '14:30',
    type: 'follow-up'
  }
];