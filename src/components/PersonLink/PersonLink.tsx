import { Link } from 'react-router-dom';
import { Person } from '../../types';
import classNames from 'classnames';

type Props = {
  personObject: Person;
};

export const PersonLink: React.FC<Props> = ({ personObject }) => {
  return (
    <Link
      to={`${personObject.slug}`}
      className={classNames({
        'has-text-danger': personObject.sex === 'f',
      })}
    >
      {personObject.name}
    </Link>
  );
};
