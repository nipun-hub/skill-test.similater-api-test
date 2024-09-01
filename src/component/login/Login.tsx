import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../service/service";

interface AuthContextType {
  email: string | null;
  password: string | null;
}

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthContextProvider");
  }

  const { token, setToken } = authContext;

  const [formData, setFormData] = useState<AuthContextType | null>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      loginUser(formData)
        .then(response => {
          if (response.status) {
            setToken(response.data.accessToken);
          }
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-10 rounded-md">
      <div className="flex h-fit flex-col items-center justify-center">
        <div className="max-h-auto mx-auto max-w-xl">
          <div className="mb-8 space-y-3">
            <p className="text-xl font-semibold">Login</p>
            <p className="text-gray-500">Enter your email, and we'll send a code to your inbox. <br />No need for passwords -- like magic!</p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-10 space-y-3">
              <div className="space-y-1">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                  <input
                    onChange={handleInputChange}
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2"
                    id="email"
                    placeholder="mail@example.com"
                    name="email"
                    value={formData?.email || ''}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
                  <input
                    onChange={handleInputChange}
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2"
                    id="password"
                    placeholder="********"
                    name="password"
                    type="password"
                    value={formData?.password || ''}
                  />
                </div>
              </div>
              <button
                className="bg-black text-white flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-black/90"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center"> No account? <a className="text-blue-500" href="#">Create one</a> </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
