import { createContext, useState } from "react";

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


const AuthContextProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
    const [token, setToken] = useState<string | null>('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJyb2xlIjoxLCJpYXQiOjE3MjUxOTQ5MjcsImV4cCI6MTcyNTI4MTMyN30.VjMGNLjh-sQfVuav0OIfl0LtMqfnqcwcHvsTNBdAYvY');

    const contextValue = {
        token,
        setToken,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;