
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
//import HookForm from './components/HookForm/HookForm'
//import RefForm from './components/RefForm/RefForm'
//import StateFullForm from './components/StateFullForm/StateFullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  const handleSignUpSubmit = data => {
    console.log('sign up data',data);
  };


  const handleUpdateprofile=data=>{
    console.log('Update profile data',data);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please sign up</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile update'} handleSubmit={handleUpdateprofile} 
      submitBtnText='Update'></ReusableForm>
    </>
  )
}

export default App
