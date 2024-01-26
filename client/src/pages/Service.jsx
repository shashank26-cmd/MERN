import ServiceCard from './ServiceCard';
import { useAuth } from '../store/auth';

function Service() {
  const { services } = useAuth();
  console.log("services", services);

  return (
    <div className="flex flex-wrap justify-center gap-10 p-8">
      {services && services.map((p) => 
        <ServiceCard
          service={p.service}
          key={p._id}
          price={p.price}
          description={p.description}
          provider={p.provider}
        />
      )}
    </div>
  );
}

export default Service;
