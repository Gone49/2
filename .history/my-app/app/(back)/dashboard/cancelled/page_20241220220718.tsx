import React from 'react';

type CancelledAppointment = {
  id: number;
  name: string;
  cancellationReason: string;
  appointmentDate: string;
};

const cancelledAppointmentsData: CancelledAppointment[] = [
  {
    id: 1,
    name: 'John Doe',
    cancellationReason: 'Doctor unavailable',
    appointmentDate: '2024-12-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    cancellationReason: 'Patient requested reschedule',
    appointmentDate: '2024-12-16',
  },
  {
    id: 3,
    name: 'Emily Davis',
    cancellationReason: 'Emergency at hospital',
    appointmentDate: '2024-12-17',
  },
];

export default function Page() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Cancelled Appointments</h1>
      {cancelledAppointmentsData.length === 0 ? (
        <p className="text-gray-500">No cancelled appointments at the moment.</p>
      ) : (
        <div className="grid gap-4">
          {cancelledAppointmentsData.map((appointment) => (
            <div
              key={appointment.id}
              className="border p-4 rounded shadow flex flex-col"
            >
              <h2 className="font-bold text-lg">{appointment.name}</h2>
              <p className="text-sm text-gray-600">
                Appointment Date: {appointment.appointmentDate}
              </p>
              <p className="text-gray-800">
                Reason for Cancellation: {appointment.cancellationReason}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
