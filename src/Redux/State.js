let store = {
    _state: {

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
        ChatHistory: [
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
            }

        ],
        NewMessage: 'Type you text here'
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 99,
                date: '01/01/22',
                time: '14:30',
                message: this._state.NewMessage,
            };
            this._state.ChatHistory.push(newMessage);
            this._state.NewMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-MESSAGE') {
            this._state.NewMessage = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;