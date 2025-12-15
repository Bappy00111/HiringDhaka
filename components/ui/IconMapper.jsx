// src/components/ui/IconMapper.jsx

import {
  FaUsers,
  FaBolt,
  FaCertificate,
  FaChartLine,
  FaStopwatch,
  FaThumbsUp,
  FaUserPlus,
  FaCheckCircle,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

/**
 * Central icon registry
 * ---------------------
 * Rule:
 * - key = UI agnostic (camelCase)
 * - value = React Icon Component
 */
const ICON_MAP = {
  // Features
  users: FaUsers,
  bolt: FaBolt,
  certificate: FaCertificate,
  chartLine: FaChartLine,

  // Stats
  stopwatch: FaStopwatch,
  thumbsUp: FaThumbsUp,

  // Recruitment Process
  chat: HiChatBubbleLeftRight,
  check: FaCheckCircle,
  plusUser: FaUserPlus,


  // icon
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
};

export default function IconMapper({
  name,
  className = "",
  size,
}) {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`⚠️ Icon "${name}" not found in ICON_MAP`);
    }
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
