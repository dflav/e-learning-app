import { BiBookBookmark } from 'react-icons/bi'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { IoIosPaper } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineInfoCircle, AiOutlineHome } from 'react-icons/ai'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const SidebarData = [
  { id: 0, title: 'Home', path: '/', icon: <AiOutlineHome /> },
  {
    id: 1,
    title: 'Μαθήματα',
    path: '/lessons',
    icon: <BiBookBookmark />,
    iconClosed: <RiArrowDownSLine />,
    iconOpen: <RiArrowUpSLine />,
    dropdown: [
      { id: 2, title: 'Κεφάλαιο 1', path: '/lessons/IT1', icon: <IoIosPaper /> },
      { id: 3, title: 'Κεφάλαιο 2', path: '/lessons/IT2', icon: <IoIosPaper /> },
      { id: 4, title: 'Κεφάλαιο 3', path: '/lessons/IT3', icon: <IoIosPaper /> },
      { id: 5, title: 'Κεφάλαιο 4', path: '/lessons/IT4', icon: <IoIosPaper /> },
    ],
  },
  {
    id: 6,
    title: 'Quiz',
    path: '/quiz',
    icon: <HiOutlinePencilAlt />,
    iconClosed: <RiArrowDownSLine />,
    iconOpen: <RiArrowUpSLine />,
    dropdown: [
      { id: 7, title: 'Κεφάλαιο 1', path: '/quiz/IT1', icon: <HiOutlinePencilAlt /> },
      { id: 8, title: 'Κεφάλαιο 2', path: '/quiz/IT2', icon: <HiOutlinePencilAlt /> },
      { id: 9, title: 'Κεφάλαιο 3', path: '/quiz/IT3', icon: <HiOutlinePencilAlt /> },
      { id: 10, title: 'Κεφάλαιο 4', path: '/quiz/IT4', icon: <HiOutlinePencilAlt /> },
      { id: 11, title: 'Επαναληπτικό', path: '/quiz/rivision', icon: <HiOutlinePencilAlt /> },
    ],
  },
  { id: 12, title: 'Προφίλ', path: '/profile', icon: <CgProfile /> },
  { id: 13, title: 'Εγχειρίδιο', path: '/guide', icon: <AiOutlineInfoCircle /> },
]

export default SidebarData
