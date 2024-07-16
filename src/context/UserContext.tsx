import { createContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface UserContextType {
  email: string;
  setEmail: (email: string) => void;
}

// Create the context with an initial value
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>('');

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};
