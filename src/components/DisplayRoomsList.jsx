import { HashIcon } from '@/app/ui/icons';
import { appendMessagesToMessagesList, setSelectedConversation } from '@/redux/actions';
import MainService from '@/services/main.service';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function DisplayRoomsList() {

    const roomsList = useSelector((state) => state.mainReducer.roomsList);
    const currentUserId = useSelector((state) => state.mainReducer.userData.id);
    const dispatch = useDispatch();

    const fetchConversations = (room) => {
        dispatch(setSelectedConversation({...room, 
            type: 'room'}));
    
    
        MainService.getRoomMessages(room.id, currentUserId)
          .then((response) => {
            console.log("useful resp", response);
            dispatch(appendMessagesToMessagesList(response));
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
  return (
    <nav className="space-y-2">
    {roomsList && roomsList.map((room, i) => {
      return (
        <a
          key={i}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-50"
          onClick={() => {
            fetchConversations(room);
          }}
        >
          <HashIcon className="h-4 w-4 text-gray-700 dark:text-gray-50" />
          {room.name}
        </a>
      );
    })}
  </nav>
  )
}

export default DisplayRoomsList