interface DetailProductSkeletonProps {
  isMobile: boolean;
}
const DetailProductSkeleton = ({ isMobile }: DetailProductSkeletonProps) => (
  <div
    data-testid="skeleton-details-product"
    className={`flex w-full animate-pulse h-full gap-2 ${
      isMobile ? 'flex-col gap-6' : 'flex-row'
    } `}
  >
    <div className="flex flex-col w-full h-full ">
      <div className="flex items-center justify-center w-full">
        <div className="self-center w-5/6 rounded-lg h-[20rem] bg-slate-300" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-2/5 h-6 mt-6 rounded-xl bg-slate-300"></div>
        <div className="w-full h-2 rounded-lg bg-slate-300"></div>
        <div className="w-full h-2 rounded-lg bg-slate-300"></div>
        <div className="w-full h-2 rounded-lg bg-slate-300"></div>
        <div className="w-full h-2 rounded-lg bg-slate-300"></div>
        <div className="w-full h-2 rounded-lg bg-slate-300"></div>
        <div className="w-full h-2 rounded-lg bg-slate-300"></div>
      </div>
    </div>
    <div className={`flex flex-col w-4/12 ${isMobile ? 'w-full' : 'w-6/12'}`}>
      <div className="w-2/6 h-2 mb-2 rounded-lg bg-slate-300"></div>
      <div className="flex flex-col gap-2">
        <div className="w-5/6 h-4 rounded-lg bg-slate-300"></div>
        <div className="w-5/6 h-4 rounded-lg bg-slate-300"></div>
        <div className="w-5/6 h-4 rounded-lg bg-slate-300"></div>
      </div>
      <div>
        <div className="w-4/5 h-12 mt-8 rounded-md bg-slate-300"></div>
        <div className="w-full h-8 mt-8 rounded-md bg-slate-300"></div>
      </div>
    </div>
  </div>
);

export default DetailProductSkeleton;
