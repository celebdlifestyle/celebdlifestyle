"use client";

import {
  useAuth,
  useUser,
  RedirectToSignIn,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { ShieldAlert, LogOut } from "lucide-react";

export default function RouteProtector({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded: authLoaded, isSignedIn, signOut } = useAuth();
  const { isLoaded: userLoaded, user } = useUser();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (authLoaded && userLoaded) {
      setIsChecking(false);
    }
  }, [authLoaded, userLoaded]);

  // Loading state
  if (isChecking || !authLoaded || !userLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Not signed in
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  // Check if user is admin via publicMetadata
  const isAdmin = user?.publicMetadata?.role === "admin";

  // Not an admin
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-black">
        <div className="w-full max-w-md p-8 bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl">
          {/* User Button */}
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gray-800 border border-gray-700 rounded-full">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-12 h-12",
                  },
                }}
              />
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-full">
              <ShieldAlert className="w-12 h-12 text-red-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-3 text-2xl font-bold text-center text-white">
            Access Denied
          </h1>

          {/* Message */}
          <p className="mb-6 text-center text-gray-400">
            Hey{" "}
            <span className="font-semibold text-orange-500">
              {user?.fullName || user?.firstName || "there"}
            </span>
            ! You don't have the required permissions to access this admin area.
          </p>

          {/* Divider */}
          <div className="h-px mb-6 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* User Info */}
          <div className="p-4 mb-6 space-y-2 bg-gray-800 border border-gray-700 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Email</span>
              <span className="font-medium text-gray-200">
                {user?.primaryEmailAddress?.emailAddress}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Role</span>
              <span className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded-full">
                User
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => signOut({ redirectUrl: "/" })}
            className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-all duration-200 bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 active:scale-[0.98] shadow-lg hover:shadow-red-500/50"
          >
            <LogOut size={18} />
            Sign Out
          </button>

          {/* Footer Note */}
          <p className="mt-6 text-xs text-center text-gray-500">
            If you believe this is an error, please contact your administrator
          </p>
        </div>
      </div>
    );
  }

  // User is admin - render protected content
  return <SignedIn>{children}</SignedIn>;
}
