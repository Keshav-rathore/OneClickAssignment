import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { ROUTES } from './routes'

import Home from './pages/landing/Landing'
import ApiSetup from './pages/saveApi/ApiKeySetupPage'
import GenerateResponse from './pages/generateResponse/AssignmentGeneratorPage'
import ResponseEditor from './pages/responseEditor/ResponseEditor'
import ThankYou from './pages/thankyou/ThankyouPage'

function App() {

  return (
    <>
      <Header />


      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.API_SETUP} element={<ApiSetup />} />
        <Route path={ROUTES.GENERATE_RESPONSE} element={<GenerateResponse />} />
        <Route path={ROUTES.RESPONSE_EDITOR} element={<ResponseEditor />} />
        <Route path={ROUTES.THANK_YOU} element={<ThankYou />} />
      </Routes>
    </>
  )
}

export default App
