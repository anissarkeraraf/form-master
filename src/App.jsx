import './App.css'
import Grandpa from './Componants/GrandPa/GrandPa'
// import ReuseableForm from './Componants/ReuseableForm/ReuseableForm'
// import HookForm from './Componants/Hook/HookForm'
// import RefForm from './Componants/RefForm/RefForm'
// import SimpleForm from './Componants/SimpleForm/SimpleForm'
// import StatefullForm from './Componants/StatefullForm/StatefullForm'

function App() {


//   const handleSignUpSubmited = data =>{
//     console.log('Sign Up data', data);
// }

// const handleUpdateProfile = data =>{
//   console.log('Update Profile', data);
// }

  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     {/* <ReuseableForm formTitle={'Sign Up'} handleSubmited={handleSignUpSubmited}>
      <div>
        <h2>Sign Up</h2>
        <p>Please sign up right now</p>
      </div>
     </ReuseableForm>
     <ReuseableForm formTitle={'Profile Update'} handleSubmited={handleUpdateProfile} submitBtnText='Update'>
      <div>
        <h2>Update Profile</h2>
        <p>Always keep your profile update</p>
      </div>
     </ReuseableForm> */}
    </>
  )
}

export default App
