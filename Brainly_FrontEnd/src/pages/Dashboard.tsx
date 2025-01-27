import { SignOutButton, useUser } from "@clerk/clerk-react";

function Dashboard() {
  const { isLoaded, user } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  console.log("user", user);

  return (
    <div className="mt-64">
      HEllo From Dashboard {user?.fullName}
      {/* <SignedOut /> */}
      <SignOutButton />
    </div>
  );
}

export default Dashboard;
