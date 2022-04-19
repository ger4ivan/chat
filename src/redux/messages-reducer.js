const messagesReducer = (state, action) =>
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
export const AddMessageCreator = () => ({type: 'ADD-MESSAGE'})
export const onTypeTextMessage = (body) => ({type: 'UPDATE-MESSAGE', body:body})

export default messagesReducer;
