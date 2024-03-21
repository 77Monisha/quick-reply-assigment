import React from "react";
import Toast from "../component/Toast";

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["default", "notification"],
    },
    icon: {
      control: {
        type: "select",
      },
      options: ["delete", "notification", "warning", "tick", "error"],
    },
    editText: {
      control: "text",
    },
    divider: {
      control: {
        type: "boolean",
      },
    },
    actionButton: {
      control: {
        type: "boolean",
      },
    },
    closeAction: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const Type = Template.bind({});
Type.args = {
  type: "default", // Default type selected
};

export const Icons = Template.bind({});
Icons.args = {
  icon: "notification",
};

export const EditText = Template.bind({});
EditText.args = {
  type: "default",
  editText: "Message here",
};

export const Divider = Template.bind({});
Divider.args = {
  type: "default",
  divider: true, // set to true
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  type: "default",
  actionButton: true, // setting to true
};

export const CloseAction = Template.bind({});
CloseAction.args = {
  type: "default",
  closeAction: true, // setting to true
};
