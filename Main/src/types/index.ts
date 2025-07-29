export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  conditions: ('diabetes' | 'hypertension' | 'cardiac')[];
  emergencyContact: EmergencyContact;
  profileImage?: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  condition: 'diabetes' | 'hypertension' | 'cardiac';
  startDate: string;
  endDate?: string;
  instructions: string;
  sideEffects?: string[];
}

export interface VitalReading {
  id: string;
  type: 'blood_sugar' | 'blood_pressure' | 'heart_rate' | 'weight';
  value: number | { systolic: number; diastolic: number };
  unit: string;
  timestamp: string;
  notes?: string;
}

export interface MedicationReminder {
  id: string;
  medicationId: string;
  scheduledTime: string;
  taken: boolean;
  takenAt?: string;
  skipped: boolean;
  notes?: string;
}

export interface Appointment {
  id: string;
  title: string;
  doctorName: string;
  date: string;
  time: string;
  type: 'routine' | 'follow-up' | 'emergency';
  notes?: string;
}