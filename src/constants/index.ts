import { Topic, Video } from '../types';
import { BrainIcon, BookIcon, UsersIcon } from '../components/icons/TopicIcons';
import ronenThumbnail from '../assets/ronenThumbnail-CNN.jpg';
import ecommerceEventThumbnail from '../assets/ecommerce-event-with-ai.jpg';

export const TOPICS: Topic[] = [
  {
    icon: BrainIcon,
    title: "בינה מלאכותית",
    description: "מומחה בהנגשת טכנולוגיות AI מתקדמות לקהלים מגוונים, כולל יישומים מעשיים בכלי בינה מלאכותית כמו יצירת שירים, הנפשת תמונות, יצירת קטעי וידאו ועד סביבות פיתוח"
  },
  {
    icon: BookIcon,
    title: "חווית לקוח",
    description: "מוביל תחום Customer Experience במיקרוסופט, התמחות ב-CRM ושיווק דיגיטלי מתקדם"
  },
  {
    icon: UsersIcon,
    title: "הרצאות וסדנאות",
    description: "ניסיון עשיר בהעברת תכנים מורכבים באופן מעניין ונגיש, שילוב ייחודי של טכנולוגיה ובידור"
  }
];

export const VIDEOS: Video[] = [
  {
    title: "סטוריטלינג בעידן הדיגיטלי",
    url: "https://www.youtube.com/embed/NnN2rIhe6ps",
    thumbnail: ronenThumbnail,
    description: "הרצאה מרתקת על סטוריטלינג והעברת מסרים בצורה אפקטיבית"
  },
  {
    title: "עתיד המסחר האלקטרוני",
    url: "https://www.youtube.com/embed/vO_Fprisci4",
    thumbnail: ecommerceEventThumbnail,
    description: "הרצאה בכנס GOeCommerce על עתיד המסחר האלקטרוני וחווית הלקוח"
  }
]; 