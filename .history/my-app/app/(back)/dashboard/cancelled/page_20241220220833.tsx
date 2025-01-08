import React from 'react';

type CancelledAppointment = {
  id: number;
  UPIN: string;
  cancellationReason: string;
  appointmentDate: string;
};

const cancelledAppointmentsData: CancelledAppointment[] = [
  {
    id: 1,
    UPIN: 'UPIN12345',
    cancellationReason: 'Doctor unavailable',
    appointmentDate: '2024-12-15',
  },
  {
    id: 2,
    UPIN: 'UPIN67890',
    cancellationReason: 'Patient requested reschedule',
    appointmentDate: '2024-12-16',
  },
  {
    id: 3,
    UPIN: 'UPIN54321',
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
              <p className="font-bold text-lg">UPIN: {appointment.UPIN}</p>
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
