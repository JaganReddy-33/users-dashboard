function Card({ name, username, email, location, phone, website, company }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
  ];

  const colorIndex = name.length % colors.length;
  const avatarColor = colors[colorIndex];

  return (
    <div
      role="article"
      className="
        rounded-xl p-6
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        shadow-sm
        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
        transition-all duration-300 ease-out
        focus-within:ring-2 focus-within:ring-blue-400
        focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`h-10 w-10 rounded-full ${avatarColor} text-white
          flex items-center justify-center font-semibold text-base`}
        >
          {initials}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{username}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-1 text-sm">
        <a
          href={`mailto:${email}`}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          📧 {email}
        </a>
        <p className="text-gray-600 dark:text-gray-300">📞 {phone}</p>
        <p className="text-gray-500 dark:text-gray-400">📍 {location}</p>
        <p className="text-gray-500 dark:text-gray-400">🏢 {company}</p>

        <a
          href={`https://${website}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          🔗 {website}
        </a>
      </div>
    </div>
  );
}

export default Card;
