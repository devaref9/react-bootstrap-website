import React from "react";
import { Stack } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import SocailIcon from "../../components/SocialIcon/SocailIcon";

const SocialNav = () => {
  return (
    <Stack direction="horizontal" gap={2}>
      <SocailIcon Element={FaTwitter} />
      <SocailIcon Element={FaInstagram} />
      <SocailIcon Element={FaFacebookF} />
      <SocailIcon Element={FaLinkedinIn} />
    </Stack>
  );
};

export default SocialNav;
