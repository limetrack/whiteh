import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import questionMarkCircleFill from '@iconify/icons-eva/question-mark-circle-fill';
// routes
import { PATH_DASHBOARD, PATH_FAQS } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'FAQs',
    path: PATH_FAQS.root,
    icon: <Icon icon={questionMarkCircleFill} {...ICON_SIZE} />
  },
  { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
