import { AuthView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Auth() {
  const { pathname } = useParams();
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <AuthView pathname={pathname} />
      </div>
    </div>
  );
}
