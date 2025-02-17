export function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4" />
      <p className="text-gray-600">Loading...</p>
    </div>
  )
}