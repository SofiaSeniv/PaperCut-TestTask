import PropTypes from 'prop-types';

const DimensionInput = ({ label, value, onChange }) => {
    return (
        <label>
            {label}:
            <input
                type="number"
                min="1"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
            />
        </label>
    );
};

DimensionInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default DimensionInput; 