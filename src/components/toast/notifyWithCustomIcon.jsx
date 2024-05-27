import React from 'react';
import { toast } from 'react-toastify';
import { MdOutlineMessage } from "react-icons/md";

const CustomToastIcon = () => (
  <MdOutlineMessage style={{ width: '24px', height: '24px' }} />
);

export const notifyWithCustomIcon = (message) => {
  toast(message, {
    icon: <CustomToastIcon />,
    position: "bottom-right"
  });
};
