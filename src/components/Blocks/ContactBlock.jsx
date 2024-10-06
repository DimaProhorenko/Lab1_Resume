import React from "react";
import InputWithIcon from "../Inputs/InputWithIcon";
import {
  PhoneIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactBlock = () => {
  return (
    <ul className="space-y-4">
      <InputWithIcon Icon={PhoneIcon} value="+38(093)-211-04-92" />
      <InputWithIcon Icon={EnvelopeIcon} value="dimaprokhorenko@gmail.com" />
      <InputWithIcon Icon={ComputerDesktopIcon} value="dima-portfolio.com" />
      <InputWithIcon Icon={MapPinIcon} value="Ukraine, Odessa" />
    </ul>
  );
};

export default ContactBlock;
