import { Button } from '@mui/material';
import { ButtonProps } from '../../types/types';

export const PrimaryButton = ({
    text,
    icon: Icon,
    onClick,
    sx = {},
    size = 'small',
    variant = "contained",
    fontWeight = 'semibold',
    color = "primary",

}: ButtonProps) => {
    return (
        <Button

            color={color}
            variant={variant}
            size={size}
            sx={{
                textTransform: 'none',
                fontWeight: fontWeight,
                ...sx,
            }}
            onClick={onClick}
            endIcon={<Icon sx={{ fontWeight, fontSize: '2rem' }} />}
        >
            {text || null}
        </Button>
    );
};
