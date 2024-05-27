import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "../app/ui/card";
import { Label } from "../app/ui/label";
import { Input } from "../app/ui/input";
import { Button } from "../app/ui/button";
import { useFormik } from 'formik';
import AuthService from "@/services/auth.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserToken } from "@/redux/actions";


const LoginPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {

    const data = {
      username: values.email,
      password: values.password
    };
    
    AuthService.login(data)
    .then((response) => {
      console.log(response.data);
      dispatch(setUserToken({
        userToken: response.data.access_token,
        userData: response.data.userData
      }));
      navigate("/");
    }).catch((error) => {
      console.log("Error");
      console.log(error);
    });

  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log("Form submitted");
      console.log(values);
      handleSubmit(values);
    },
  });

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={formik.handleSubmit}>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a
                  className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                  href="#"
                >
                  Forgot your password
                </a>
              </div>
              <Input id="password" required type="password" 
                      onChange={formik.handleChange}
                      value={formik.values.password}
              />
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <div className="flex items-center justify-center gap-2">
            <LockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400">
              You have been provided an account to access this enterprise
              system.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
