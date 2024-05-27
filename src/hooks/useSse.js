import { addUser, deleteUser, updateUser } from '@/redux/actions';
import store from '@/redux/store/store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const EventTypes = {
    USER_CREATED: 'user.created',
    USER_UPDATED: 'user.updated',
    USER_DELETED: 'user.deleted',
};

const useSse = (url) => {
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();


  const AddUser = (user) => {
    dispatch(addUser(user));
  }

  const UpdateUser = (user) => {
    dispatch(updateUser(user));
  }

  const RemoveUser = (user) => {
    dispatch(deleteUser(user));
  }

  const handleEvent = (event) => {
    console.log('event', event);
    switch (event.type) {
      case EventTypes.USER_CREATED:
        AddUser(event.data);
        break;
      case EventTypes.USER_UPDATED:
        UpdateUser(event.data);
        break;
      case EventTypes.USER_DELETED:
        RemoveUser(event.data);
        break;
      default:
        console.error('Unknown event type:', event.type);
    }
  }



  useEffect(() => {
    const token = store.getState().mainReducer.userToken;
    const userId = store.getState().mainReducer.userData.id;
    const role = store.getState().mainReducer.userData.role;

    console.log('Initializing SSE connection with token:', token);
    console.log('User ID:', userId);

    // Create EventSource with token and userId in query parameters
    const eventSource = new EventSource(`${url}?userId=${userId}&role=${role}`);

    eventSource.onopen = () => {
      console.log('EventSource connection opened');
    };

    eventSource.onmessage = (event) => {
      console.log('event', event);
      const newEvent = JSON.parse(event.data);

        console.log('newEvent', newEvent);
        handleEvent(newEvent);
     



      setEvents((prevEvents) => [...prevEvents, newEvent]);
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [url]);

  return events;
};

export default useSse;
