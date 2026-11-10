
function ImageCard({ image }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={image.url}
        alt={image.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-slate-800">
          {image.title}
        </h2>

        <p className="text-sm text-slate-600">
          {image.description}
        </p>
      </div>

    </div>
  );
}

export default ImageCard;

