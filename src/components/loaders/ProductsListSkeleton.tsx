const ProductsListSkeleton = () => (
  <div
    className="flex justify-center w-full h-40 py-3 border-b cursor-pointer animate-pulse"
    aria-hidden
  >
    <div className="w-32 h-32 rounded-lg bg-slate-300" />
    <div className="flex flex-col w-full px-4">
      <div className="flex flex-col gap-2 my-2">
        <div className="w-2/12 h-5 rounded-xl bg-slate-300"></div>
        <div className="w-3/5 h-3 rounded-lg bg-slate-300"></div>
        <div className="w-1/12 h-3 rounded-lg bg-slate-300"></div>
      </div>
    </div>
    <div className="flex w-1/5 h-2 pt-4 pr-2 tracking-tighter text-gray-500 rounded-lg bg-slate-300"></div>
  </div>
);

export default ProductsListSkeleton;
