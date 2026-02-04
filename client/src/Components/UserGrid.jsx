import Card from "../Components/Card";
import Loader from "../Components/Loader";

function UserGrid({ loading, users, error }) {
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <Loader key={i} />
        ))}
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center mt-20 
                    text-gray-500 dark:text-gray-400
                    animate-fade-in"
      >
        <div className="text-5xl mb-4">🔍</div>
        <p className="text-lg font-medium">No users found</p>
        <p className="text-sm mt-1">Try a different search</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500 dark:text-red-400">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          location={user.address.city}
          phone={user.phone}
          website={user.website}
          company={user.company.name}
        />
      ))}
    </div>
  );
}

export default UserGrid;
