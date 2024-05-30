interface TitleDescriptionProps {
  title: string;
  description: string;
  className?: string;
  classNameTitle?: string;
  classNameDescription?: string;
}

const TitleDescription = ({
  title,
  description,
  className,
  classNameTitle,
  classNameDescription,
}: TitleDescriptionProps) => (
  <div className={className ?? 'flex flex-col gap-4'}>
    <h2 className={classNameTitle ?? 'text-xl font-normal text-gray-900'}>
      {title}
    </h2>
    <span className={classNameDescription ?? 'text-[12px] text-gray-500'}>
      {description}
    </span>
  </div>
);

export default TitleDescription;
