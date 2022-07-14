
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
};

const chatBarReducer = (state = initialState, action) =>
{
    return state;
}

export default chatBarReducer;
