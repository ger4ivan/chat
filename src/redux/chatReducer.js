const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    ChatHistory:
        {
            Messages:
                [
                    {
                        id: 1,
                        date: '01/01/22',
                        time: '14:30',
                        message: 'Hi Aiden, how are you? How is the project coming along?'
                    },
                    {id: 2, date: '01/02/22', time: '14:30', message: 'Are we meeting today?'},
                    {
                        id: 3,
                        date: '01/02/22',
                        time: '14:30',
                        message: 'Project has been already finished and I have results to show you.'
                    },


                ],
            NewMessage: 'Type you text here'
        },
}

const chatReducer = (state = initialState, action) =>
{

    switch (action.type) {
        case SEND_MESSAGE:

            let body = state.ChatHistory.NewMessage;
            state.NewMessage = '';
            state.ChatHistory.Messages.push({
                id: 99,
                date: '01/01/22',
                time: '14:30',
                message: body,
            });

            return state;
        case UPDATE_NEW_MESSAGE_BODY:

            state.ChatHistory.NewMessage = action.body;
            return state;
        default:
            return state;
    }
}
export const AddMessageCreator = () => ({type: SEND_MESSAGE})
export const onTypeTextMessage = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body})

export default chatReducer;
