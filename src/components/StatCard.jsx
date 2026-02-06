export default function StatCard({ title, value, status }) {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-2">{value}</h2>
        {status && (
          <span className="text-xs text-red-600 font-medium">
            {status}
          </span>
        )}
      </div>
    );
  }
  