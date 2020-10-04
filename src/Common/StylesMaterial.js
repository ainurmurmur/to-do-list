import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';


export const ButtonStyled = withStyles({

    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export const ButtonDeleteStyled = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'red',
    },
})(DeleteIcon);

export const TextFieldStyled = withStyles({
    root: {
        margin: '10px',
        '& label.Mui-focused': {
            color: 'red',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);