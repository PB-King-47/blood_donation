import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const DonorDashboard = () => {
  const donationHistory = [
    { date: '13 Dec 2020', units: 120 },
    { date: '28 Nov 2020', units: 20 },
    { date: '04 Nov 2020', units: 40 },
    { date: '15 Oct 2020', units: 310 },
  ];

  const userInfo = {
    name: 'Dinoy Raj K',
    email: 'dinoykraj@gamil.com',
    district: 'Kozhikode',
    phone: '7306185390',
    pincode: '673014',
    age: 21,
    bloodGroup: 'o +ve',
    address: 'Karuvally Reenugeetham House...',
    lastDonationDate: '11 - 10 - 2021',
  };

  const [calendarValue, setCalendarValue] = React.useState(dayjs('2020-12-18'));

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <header className="flex items-center justify-between bg-white px-8 py-4 shadow rounded-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="font-semibold underline underline-offset-4">Find Blood</a>
            <a href="#" className="hover:underline">Register Now</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-5 h-5 bg-red-200 rounded-full" />
          <button className="bg-white border rounded-md px-4 py-2 text-sm shadow">Log Out</button>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">{userInfo.name}</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-5 h-5 bg-gray-300 rounded-full" />
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm">Edit Profile</button>
            </div>
          </div>
          <table className="w-full text-sm border-t border-gray-200">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold w-1/3">Full Name</td>
                <td className="py-2">{userInfo.name}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold">Email</td>
                <td className="py-2">{userInfo.email}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold">District</td>
                <td className="py-2">{userInfo.district}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold">Phone Number</td>
                <td className="py-2">{userInfo.phone}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold">Pincode</td>
                <td className="py-2">{userInfo.pincode}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold">Age</td>
                <td className="py-2">{userInfo.age}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold">Blood Group</td>
                <td className="py-2">{userInfo.bloodGroup}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 font-semibold">Address</td>
                <td className="py-2">{userInfo.address}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Last Donation Date</td>
                <td className="py-2">{userInfo.lastDonationDate}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-md font-semibold mb-2">Donations</h3>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left font-medium">Date</th>
                  <th className="text-left font-medium">Blood Units</th>
                </tr>
              </thead>
              <tbody>
                {donationHistory.map((item, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-1.5">{item.date}</td>
                    <td className="py-1.5">{item.units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={calendarValue}
                onChange={(newValue) => setCalendarValue(newValue)}
                defaultCalendarMonth={dayjs('2020-12-01')}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
