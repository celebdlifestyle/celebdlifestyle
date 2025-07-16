import CartItems from "@/components/CartItems";

export default function Cart() {
  return (
    <>
      <h1 className="mx-8 my-5 text-2xl font-semibold tracking-widest">
        SHOPPING BAG
      </h1>
      <div className="flex px-8">
        <div className="cart-items w-[70%] ">
          <CartItems />
        </div>
        <div className="bill-details w-[30%] bg-blue-300">Bill Details</div>
      </div>
    </>
  );
}
