import { useGetCo2DataQuery } from '@store/api';
import { API_BASE } from '@utils/constants';

export const Spinner = () => {
  const { isLoading } = useGetCo2DataQuery(`${API_BASE}/owid-co2-data.json`);

  return (
    <section className="flex h-80 items-center justify-center">
      <div className="relative h-16 w-16">
        <div
          className={`absolute h-full w-full rounded-full border-4 border-gray-200 border-t-blue-500 ${
            isLoading ? 'animate-spin' : ''
          }`}
          role="status"
          aria-label={isLoading ? 'Loading...' : 'Loaded'}
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/90">
          <span className="font-bold text-blue-500">
            {isLoading ? 'Loading...' : 'Ready'}
          </span>
        </div>
      </div>
    </section>
  );
};
