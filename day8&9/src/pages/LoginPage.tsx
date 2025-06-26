import Form from "../components/formComponents/Form"
import FormFooter from "../components/formComponents/FormFooter"
import FormLogo from "../components/formComponents/FormLogo"
import RightImage from "../components/formComponents/RightImage"

const LoginPage = () => {
  return (
    <div className="sm:flex sm:flex-col-reverse overflow-scroll lg:flex lg:flex-row h-screen ">
      <div className="w-1/2">
        <FormLogo />
        <Form />
        <FormFooter />
      </div>
      <div className="w-1/2 bg-blue-800 m-4 rounded-3xl">
        <RightImage />
      </div>
    </div>
  )
}

export default LoginPage