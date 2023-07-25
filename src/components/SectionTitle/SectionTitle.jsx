import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => <p>{title}</p>;

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
