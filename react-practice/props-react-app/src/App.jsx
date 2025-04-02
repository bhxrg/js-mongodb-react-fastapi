import Student from './Student';
// props = read-only properties that are shared between components
// A parent component can send data to a child component
// <Component key=value/>

function App() {
  return (
    <>
    <Student name = "Bhargavi" age={21} isStudent={true}/>
    <Student name = "Jihyo" age={28} isStudent={false}/>
    <Student name = "Taehyun" age={24} isStudent={true}/>
    </>
  )
}

export default App
