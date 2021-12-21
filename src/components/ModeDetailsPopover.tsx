import { Popover } from "react-bootstrap";

const ModeDetailsPopover = (props: ModeDetailsPopoverProps) => {
  const { header, body } = props;

  return (
    <Popover id='popover'>
      <Popover.Header>{header}</Popover.Header>
      <Popover.Body>{body}</Popover.Body>
    </Popover>
  );
};

export default ModeDetailsPopover;

export interface ModeDetailsPopoverProps {
  header: string;
  body: string;
};