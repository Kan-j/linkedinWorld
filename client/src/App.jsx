import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Connections from './Pages/Connections'
import Followers from './Pages/Followers'
import Following from './Pages/Following'
import ForgotPassword from './Pages/ForgotPassword'
import Groups from './Pages/Groups'
import Home from './Pages/Home'
import Invitations from './Pages/Invitations'
import MyNetwork from './Pages/MyNetwork'
import MyProfile from './Pages/MyProfile'
import OtherProfile from './Pages/OtherProfile'
import ProfilePageLast from './Pages/ProfilePageLast'
import ProfilePageStep1 from './Pages/ProfilePageStep1'
import ProfilePageStep2 from './Pages/ProfilePageStep2'
import ProfilePageStep3 from './Pages/ProfilePageStep3'
import ProfilePageStep4 from './Pages/ProfilePageStep4'
import SignIn from './Pages/SignIn'
import Signup from './Pages/SignUp'
import MainLayout from './Pages/layout/MainLayout'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  >
        
        <Route path='/' element={<MainLayout/>} >
            <Route path='home' index element={<Home/>}></Route>
            <Route path='my-network' element={<MyNetwork/>}></Route>
            <Route path='invitations' element={<Invitations/>}></Route>
            <Route path='connections' element={<Connections/>}></Route>
            <Route path='groups' element={<Groups/>}></Route>
            <Route path='my-profile' element={<MyProfile/>}></Route>
            <Route path='followers' element={<Followers/>}></Route>
            <Route path='following' element={<Following/>}></Route>
            <Route path='profile/:id' element={<OtherProfile/>}></Route>

        </Route>

        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>

        <Route path='onboard/1' element={<ProfilePageStep1/>}/>
        <Route path='onboard/2' element={<ProfilePageStep2/>}/>
        <Route path='onboard/3' element={<ProfilePageStep3/>}/>
        <Route path='onboard/4' element={<ProfilePageStep4/>}/>
        <Route path='onboard/5' element={<ProfilePageLast/>}/>

       
      </Route>
    )
    
  )

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
    
  )
}

export default App
