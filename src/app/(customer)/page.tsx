import { providerServices } from "@/services/provider.services";
import PrimeMeal from "./(root)/page";

export const dynamic = "force-dynamic";

export default async function Page() {
  const result = await providerServices.getProviderOwnOrders();

  console.log(result);
  return (
    <>
      <PrimeMeal />
    </>
  );
}
