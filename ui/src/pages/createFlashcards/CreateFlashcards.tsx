import SystemAppBar from "../../components/systemAppBar/SystemAppBar";
import { useForm, SubmitHandler } from "react-hook-form"
import Box from '@mui/material/Box';
import { Typography, Button, TextField } from "@mui/material";

type Inputs = {
    question: string
    answer: string
}

const CreateFlashcards = () => {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <>
        <SystemAppBar />
            <Box sx={{ 'display': 'flex', 'align-items': 'center',
            'justify-content': 'center', 'height': '100vh'  }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography>Question</Typography>
                    <TextField
                        {...register("question")}
                    />
                    <Typography>Answer</Typography>
                    <TextField {...register("answer")} />

                    <Button type="submit">Create card</Button>
                </form>
            </Box>
        </>
    )
};

export default CreateFlashcards;