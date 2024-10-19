import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export default function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  console.log("cabins", cabins);
  return { isLoading, cabins, error };
}
