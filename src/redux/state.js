const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi, how are you?", likesCount: 5 },
        { message: "You're jaba!", likesCount: 69 },
      ],
      newPostText: 'Some unchangeable text',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Angelina", src: 'https://bipbap.ru/wp-content/uploads/2017/09/5114e7b13c84a77355cbec162ca7ff45.jpg' },
        { id: 2, name: "Egor", src: 'https://images.squarespace-cdn.com/content/v1/55ba71f7e4b00dce923b869f/1537373326578-TDLG0GNBULQ1K9H9JKKE/jcsvourw.jpeg?format=1500w' },
        { id: 3, name: "Jaba", src: 'https://i.pinimg.com/564x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg' },
        { id: 4, name: "Ivan", src: 'https://avatars.mds.yandex.net/get-zen_doc/4460346/pub_6085d3c1e2c7114111efc2a2_6085e4803b735b52f85124ce/scale_1200' },
      ],
      messages: [
        { id: 1, message: "Hello", src: 'https://bipbap.ru/wp-content/uploads/2017/09/5114e7b13c84a77355cbec162ca7ff45.jpg' },
        { id: 2, message: "Go away", src: 'https://i.pinimg.com/564x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg' },
        { id: 3, message: "Blablabla", src: 'https://bipbap.ru/wp-content/uploads/2017/09/5114e7b13c84a77355cbec162ca7ff45.jpg' },
      ],
      newMessText: "some text :(",
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  addMess() {
    let newMess = {
      id: 4,
      message: this._state.dialogsPage.newMessText,
      scr: 'https://i.pinimg.com/564x/a0/1e/b9/a01eb920157d569f0c214bc48ef1dec4.jpg',
    };
    this._state.dialogsPage.messages.push(newMess);
    this._state.profilePage.newMessText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessText(newText) {
    this._state.newMessText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) { // action is a object
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }  else if (action.type === UPDATE_NEW_POST_TEXT) { 
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default store
window.store = store