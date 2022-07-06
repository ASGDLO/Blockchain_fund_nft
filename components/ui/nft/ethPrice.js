import { useEthPrice, COURSE_PRICE } from "components/hooks/useEthPrice.js";
import { Loader } from "components/ui/common";
import Image from "next/image";

export default function EthRates() {
  const { eth } = useEthPrice();

  return (
    <div className="flex flex-col xs:flex-row text-center">
      <div className="p-6 border drop-shadow rounded-md mr-2">
        <div className="flex items-center justify-center">
          {eth.data ? (
            <>
              <Image
                layout="fixed"
                height="35"
                width="35"
                src="/images/small-eth.webp"
              />
              <span className="text-xl font-bold">= {eth.data}$</span>
            </>
          ) : (
            <div className="w-full flex justify-center">
              <Loader size="md" />
            </div>
          )}
        </div>
        <p className="text-lg text-gray-500">Base on Current eth Price</p>
      </div>
    </div>
  );
}
