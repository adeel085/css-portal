import { Button } from "@mui/material";

const SecondaryButton = ({Icon, Text, OnClickCallback, ...props}) => {
    return (
        <>
            <Button 
            sx={{
                backgroundColor: '#4aaad5',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: '#2996c7',
                },
            }}
            {...props}
            startIcon={Icon ? <Icon /> : ""}
            onClick={() => {
                OnClickCallback();
            }}>{Text}</Button>
        </>
    );
}

export default SecondaryButton;