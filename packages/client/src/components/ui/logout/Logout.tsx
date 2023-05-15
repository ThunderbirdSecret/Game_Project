import { authService } from "@/services/auth.service";
import React from "react";
import { Link } from "react-router-dom";

interface LogoutProps {
    styles?: string;
}

const Logout: React.FC = ({styles}:LogoutProps) => {
  const handleLogout = () => {
    authService.logout()
  };

  return (
    <div>
        <Link to="/" 
            onClick={handleLogout} 
            className={styles}
        >
          Logout
        </Link>
    </div>
  );
};

export default Logout;
