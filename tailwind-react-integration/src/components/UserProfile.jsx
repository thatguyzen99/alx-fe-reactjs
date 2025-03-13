function UserProfile() {
  return (
    <div className="bg-gray-100 p-2 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-8 sm:my-12 md:my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-16 sm:w-24 md:w-36 h-16 sm:h-24 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-base sm:text-lg md:text-xl text-blue-800 my-2 sm:my-3 md:my-4 hover:text-blue-500">John Doe</h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;