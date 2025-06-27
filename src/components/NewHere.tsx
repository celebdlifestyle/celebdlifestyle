export default function NewHere() {
  return (
    <div className="relative md:p-20">
      <img
        src="https://cdn.shopify.com/s/files/1/2185/2813/files/00_NewToAlo_Hero_Desktop_f9ccd18c-2759-4e46-a29f-dbdf833522e9_2000x2000.jpg?v=1746056193"
        alt="banner-image"
      />

      <div className="absolute bottom-[20%] left-[25%] md:bottom-[40%] md:left-[36%]">
        <h1 className="text-2xl font-bold text-white md:text-5xl">
          NEW TO CELEBD?
        </h1>
        <div className="px-6 py-2 mt-1 font-bold text-center text-black bg-white cursor-pointer md:mt-16 text-nowrap md:px-10 md:py-3">
          START HERE
        </div>
      </div>
    </div>
  );
}
