import { GoChevronRight } from 'react-icons/go';
interface BreadCrumbProps {
  list?: string[];
}

const BreadCrumb = ({ list }: BreadCrumbProps) => {
  const lastItem = list?.[list.length - 1];

  return (
    <div className="flex flex-wrap items-center w-full py-4 text-xs">
      {list?.map((item, i) => {
        const isLastItem = item === lastItem;
        return (
          <div key={`${item}-${i}`} className="flex items-center">
            <span
              className={`text-gray-400 cursor-pointer ${
                isLastItem ? 'font-bold' : 'font-light'
              }`}
            >
              {item}
            </span>
            {!isLastItem && (
              <span className="flex self-center text-gray-500">
                <GoChevronRight size={16} className="text-gray-400" />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
