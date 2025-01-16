import { Button } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { SvgIconComponent } from '@mui/icons-material';

interface Props {
    text?: string; // Ahora es opcional
    icon: SvgIconComponent;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    size?: "small" | "medium" | "large";
    variant?: "contained" | "outlined" | "text";
    fontWeight?: string;
    color?: "error" | "info" | "inherit" | "primary" | "secondary" | "success" | "warning";

}

export const PrimaryButton = ({
    text,
    icon: Icon,
    onClick,
    sx = {},
    size = 'small',
    variant = "contained",
    fontWeight = 'semibold',
    color = "primary",

}: Props) => {
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
