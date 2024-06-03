import styles from './TitleDescription.module.sass';

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
  <div className={className ?? styles.TitleDescription}>
    <h2 className={classNameTitle ?? styles.TitleDescription__title}>
      {title}
    </h2>
    <span
      className={classNameDescription ?? styles.TitleDescription__description}
    >
      {description}
    </span>
  </div>
);

export default TitleDescription;
