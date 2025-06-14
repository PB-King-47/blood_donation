import { Routes, Route } from 'react-router-dom'
import 'src/App.css'
import HomePage from './page/HomePage'
import Master from 'src/page/layouts/Master'
import RegisterPage from './page/RegisterPage'
import RegisterOrgPage from './page/RegisterOrgPage'
import FindBlood from './page/FindBlood'
import OtpVerification from './page/OtpVerification'
import RegisterVerify from './page/RegisterVerify'
import OTPVerifySuccess from './page/OTPVerifySuccess'
import BloodBank from './page/layouts/BloodBank'
import AdminLayout from './page/layouts/AdminLayout'
import Dashboard from './page/Admin/Dashboard'
import Profile from './page/Admin/Profile'
import DonorDashboard from './page/DonorDashboard'

function App() {

  return (
    <Routes>
      <Route element={<Master />}>
        <Route path={"*"} element={<HomePage/>} />
        <Route path={"/registerdoner"} element={<RegisterPage />} />
        <Route path={"/registerorg"} element={<RegisterOrgPage />} />
        <Route path={"/findblood"} element={<FindBlood />} />
        <Route path={"/otp-verify"} element={<OtpVerification />} />
        <Route path={"/otp-reg-verify"} element={<RegisterVerify />} />
        <Route path={"/otp-verify-success"} element={<OTPVerifySuccess />} />
        <Route path={"/blood-bank"} element={<BloodBank />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path={"/admin/dashboard"} element={<Profile />} />
        <Route path={"/admin/donordashboard"} element={<DonorDashboard />} />
      </Route>
    </Routes>
  )
}

export default App
