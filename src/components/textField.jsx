export default function TextField({ label, idLabel, fieldType, placeholder }) {
  return (
    <div className="flex flex-col pt-4">
      <label htmlFor={idLabel} className="text-lg">
        {label}
      </label>
      <input
        type={fieldType}
        id={idLabel}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}
