import React from 'react';

interface BreadCrumbProps {
  list: string[];
}

const BreadCrumb = ({ list }: BreadCrumbProps) => {
  const lastItem = list[list.length - 1];

  return (
    <div className="w-full flex flex-wrap">
      {list.map((item, i) => {
        const isLastItem = item === lastItem;
        return (
          <div key={`${item}-${i}`} className="flex">
            <span
              className={`text-gray-500 text-sm ${
                isLastItem ? 'font-bold' : 'font-normal'
              }`}
            >
              {item}
            </span>
            {!isLastItem && (
              <span className="text-gray-500 text-sm">{' > '}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
