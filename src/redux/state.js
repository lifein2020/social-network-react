let dialogs = [
    { id: 1, name: "Sveta" }, // dialog
    { id: 2, name: "Pasha" }, // dialog
    { id: 3, name: "Olya" }, // dialog
    { id: 4, name: "Serge" }, // dialog
    { id: 5, name: "Kolya" }, // dialog
  ];
  
  let messages = [
    { id: 1, message: "Hi!" }, // message
    { id: 2, message: "How are you?" }, // message
    { id: 3, message: "How is your course?" }, // message
    { id: 4, message: "Yo" }, // message
    { id: 5, message: "Yo" }, // message
  ];
  
  let posts = [
    {id: 1, message: 'Hello! How are you?', likesCount: 7},
    {id: 2, message: 'It\'s time to go snowboarding! Who goes with me?', likesCount: 9},
    {id: 3, message: 'Aloha! I\'m on Havai!', likesCount: 7},
  ];
  
  let state = {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello! How are you?', likesCount: 7},
        {id: 2, message: 'It\'s time to go snowboarding! Who goes with me?', likesCount: 9},
        {id: 3, message: 'Aloha! I\'m on Havai!', likesCount: 7},
      ],
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Sveta" }, // dialog
        { id: 2, name: "Pasha" }, // dialog
        { id: 3, name: "Olya" }, // dialog
        { id: 4, name: "Serge" }, // dialog
        { id: 5, name: "Kolya" }, // dialog
      ],
      messages: [
          { id: 1, message: "Hi!" }, // message
          { id: 2, message: "How are you?" }, // message
          { id: 3, message: "How is your course?" }, // message
          { id: 4, message: "Yo" }, // message
          { id: 5, message: "Yo" }, // message
        ],
    }
  }

  export default state;