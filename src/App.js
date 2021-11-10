import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine 
    height="100vh"
    projectID="a03a9f33-d0bb-4dde-a806-285609940975"
    userName="abir"
    userSecret="123123"
    renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
    />

  )
}

export default App;
