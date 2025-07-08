import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    children: {
      control: "text",
    },
  },
  args: {
    variant: "default",
    size: "default",
    children: "Click me",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};
export const Icon: Story = {
  args: {
    size: "icon",
    children: "Icon",
  },
};
export const AsChild: Story = {
  args: {
    asChild: true,
    children: "As Child",
  },
  render: (args: ComponentProps<typeof Button>) => (
    <Button {...args}>
      <span>As Child</span>
    </Button>
  ),
};
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
export const Loading: Story = {
  args: {
    children: "Loading",
  },
};
export const FullWidth: Story = {
  args: {
    children: "Full Width",
  },
  render: (args: ComponentProps<typeof Button>) => (
    <div style={{ width: "200px" }}>
      <Button {...args} />
    </div>
  ),
};
