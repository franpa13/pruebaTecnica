
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
interface Props {
    text: string
}
export const ErrorText = ({ text }: Props) => {
    return (
        <div role="alert" aria-live="assertive" aria-atomic="true" className="text-center flex gap-2 justify-center font-semibold t items-center py-5 md:text-xl text-customBlue dark:text-warningYellow">
            <span aria-label={text}>

                {text}.
            </span>
            <InfoOutlinedIcon></InfoOutlinedIcon>
        </div>
    )
}
