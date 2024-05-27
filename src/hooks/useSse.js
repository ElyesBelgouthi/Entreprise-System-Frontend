import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotification, addUser, deleteUser, toggleNotificationIsRead, updateUser } from '@/redux/actions';

const EventTypes = {
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  USER_DELETED: 'user.deleted',
  POST_CREATED: 'post.created',
};

const useSse = (url, userId, role) => {
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();

  const addUserHandler = useCallback((user) => dispatch(addUser(user)), [dispatch]);
  const updateUserHandler = useCallback((user) => dispatch(updateUser(user)), [dispatch]);
  const deleteUserHandler = useCallback((user) => dispatch(deleteUser(user)), [dispatch]);
  const addNotificationHandler = useCallback((post) => 
    {
      dispatch(addNotification(post))
      dispatch(toggleNotificationIsRead());
    }
  , [dispatch]);

  const handleEvent = useCallback((event) => {
    console.log('event', event);
    switch (event.type) {
      case EventTypes.USER_CREATED:
        addUserHandler(event.data);
        break;
      case EventTypes.USER_UPDATED:
        updateUserHandler(event.data);
        break;
      case EventTypes.USER_DELETED:
        deleteUserHandler(event.data);
        break;
      case EventTypes.POST_CREATED:
        addNotificationHandler(event);
        break;
      default:
        console.error('Unknown event type:', event.type);
    }
  }, [addUserHandler, updateUserHandler, deleteUserHandler, addNotificationHandler]);

  useEffect(() => {
    if (!userId || !role) return;

    console.log('Initializing SSE connection with userId:', userId, 'and role:', role);

    const eventSource = new EventSource(`${url}?userId=${userId}&role=${role}`);

    eventSource.onopen = () => {
      console.log('EventSource connection opened');
    };

    eventSource.onmessage = (event) => {
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
  }, [url, userId, role, handleEvent]);

  return events;
};

export default useSse;
