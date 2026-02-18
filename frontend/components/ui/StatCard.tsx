interface StatCardProps {
  title: string;
  value: string;
  bg: string;
}

export default function StatCard({ title, value, bg }: StatCardProps) {
  return (
    <div
      className={`flex-1 p-6 rounded-xl text-white shadow ${bg}`}
    >
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
