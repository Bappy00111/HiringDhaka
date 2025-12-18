import {
  FaSearch,
  FaGraduationCap,
  FaBuilding,
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
  FaCalendarAlt,   // NEW
  FaServer,        // NEW
  FaUsersCog,      // NEW
  FaHandshake,
       // REQUIRED for Contact Section
} from "react-icons/fa";

import { HiChatBubbleLeftRight, HiOutlineBuildingOffice } from "react-icons/hi2";

const ICON_MAP = {
  // ---- Services Icons ----
  search: FaSearch,
  graduation: FaGraduationCap,
  building: HiOutlineBuildingOffice,

  // ---- Event & IT & HR (NEW) ----
  calendar: FaCalendarAlt,
  server: FaServer,
  usersCog: FaUsersCog,

  // ---- Contact Section Icon (IMPORTANT) ----
  handshake: FaHandshake,

  // ---- Features ----
  users: FaUsers,
  bolt: FaBolt,
  certificate: FaCertificate,
  chartLine: FaChartLine,

  // ---- Stats ----
  stopwatch: FaStopwatch,
  thumbsUp: FaThumbsUp,

  // ---- Recruitment Process ----
  chat: HiChatBubbleLeftRight,
  check: FaCheckCircle,
  plusUser: FaUserPlus,

  // ---- Social Icons ----
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
};

export default function IconMapper({ name, className = "", size }) {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`⚠️ Icon "${name}" not found in ICON_MAP`);
    }
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
