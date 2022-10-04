import { BiBookBookmark } from 'react-icons/bi'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { IoIosPaper } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineInfoCircle, AiOutlineHome } from 'react-icons/ai'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const SidebarData = [
  { id: 0, title: 'Home', path: '/e-learning-app', icon: <AiOutlineHome /> },
  {
    id: 1,
    title: 'Μαθήματα',
    path: '#',
    icon: <BiBookBookmark />,
    dropdownClose: <RiArrowDownSLine />,
    dropdownOpen: <RiArrowUpSLine />,
    subNav: [
      { id: 2, title: 'Κεφάλαιο 1', path: '/e-learning-app/lessons/IT1', icon: <IoIosPaper /> },
      { id: 3, title: 'Κεφάλαιο 2', path: '/e-learning-app/lessons/IT2', icon: <IoIosPaper /> },
      { id: 4, title: 'Κεφάλαιο 3', path: '/e-learning-app/lessons/IT3', icon: <IoIosPaper /> },
      { id: 5, title: 'Κεφάλαιο 4', path: '/e-learning-app/lessons/IT4', icon: <IoIosPaper /> },
    ],
  },
  {
    id: 6,
    title: 'Quiz',
    path: '#',
    icon: <HiOutlinePencilAlt />,
    dropdownClose: <RiArrowDownSLine />,
    dropdownOpen: <RiArrowUpSLine />,
    subNav: [
      { id: 7, title: 'Κεφάλαιο 1', path: '/e-learning-app/quiz/IT1', icon: <HiOutlinePencilAlt /> },
      { id: 8, title: 'Κεφάλαιο 2', path: '/e-learning-app/quiz/IT2', icon: <HiOutlinePencilAlt /> },
      { id: 9, title: 'Κεφάλαιο 3', path: '/e-learning-app/quiz/IT3', icon: <HiOutlinePencilAlt /> },
      { id: 10, title: 'Κεφάλαιο 4', path: '/e-learning-app/quiz/IT4', icon: <HiOutlinePencilAlt /> },
      { id: 11, title: 'Επαναληπτικό', path: '/e-learning-app/quiz/rev', icon: <HiOutlinePencilAlt /> },
    ],
  },
  { id: 12, title: 'Προφίλ', path: '/e-learning-app/profile', icon: <CgProfile /> },
  { id: 13, title: 'Εγχειρίδιο', path: '/e-learning-app/guide', icon: <AiOutlineInfoCircle /> },
]

export default SidebarData
