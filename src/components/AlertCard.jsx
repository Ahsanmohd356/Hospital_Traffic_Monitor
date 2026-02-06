export default function AlertCard({ message, level }) {
    const colors = {
      high: "bg-red-100 text-red-700",
      medium: "bg-yellow-100 text-yellow-700",
      low: "bg-green-100 text-green-700",
    };
  
    return (
      <div className={`p-3 rounded-lg ${colors[level]}`}>
        ⚠️ {message}
      </div>
    );
  }
  