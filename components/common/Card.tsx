const Card = ({ title, image, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80 transition hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};