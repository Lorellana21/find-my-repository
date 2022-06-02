import { Button as MaterialButton} from '@mui/material';

const getButtonVariant = (secondary, tertiary) => {
    if (secondary) return "outlined";
    if(tertiary) return "text";
    return "contained"
}



const MyButton = ({//elijo pasarle estas props
    size, 
    secondary,
    tertiary,
    disabled,
    ...otherProps
}) => {
    const variant = getButtonVariant (secondary, tertiary);
    return (
        <MaterialButton
        disableElevation
        size={size}
        variant={variant}
        disabled={disabled}
        {...otherProps}
        />
    );
};

// MyButton.propTypes = {
//     size: PropTypes.string,
//     secondary: PropTypes.bool,
//     tertiary: PropTypes.bool,
//     disabled: PropTypes.bool

// }

export default MyButton;