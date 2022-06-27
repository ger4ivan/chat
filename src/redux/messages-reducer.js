
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    Chats: [
        {
            id: 1,
            avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            name: 'Vincent Porter',
            status: 'left 7 mins ago'
        },
        {
            id: 2,
            avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png',
            name: 'Vincent Porter2',
            status: 'left 2 mins ago'
        },
        {
            id: 3,
            avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png',
            name: 'Vincent Porter3',
            status: 'left 1 mins ago'
        },
        {
            id: 4,
            avatar: 'https://bootdey.com/img/Content/avatar/avatar4.png',
            name: 'Vincent Porter4',
            status: 'left 1 mins ago'
        },
        {
            id: 5,
            avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png',
            name: 'Vincent Porter5',
            status: 'online'
        }
    ],
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

const messagesReducer = (state = initialState, action) =>
{

    switch (action.type) {
        case "ADD-MESSAGE":

            let body = state.ChatHistory.NewMessage;
            state.NewMessage = '';
            state.ChatHistory.Messages.push({
                id: 99,
                date: '01/01/22',
                time: '14:30',
                message: body,
            });

            return state;
        case 'UPDATE-MESSAGE':

            state.ChatHistory.NewMessage = action.body;
            return state;
        default:
            return state;
    }
}
export const AddMessageCreator = () => ({type: SEND_MESSAGE})
export const onTypeTextMessage = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body})

export default messagesReducer;
