import sizes from 'src/styles/variables/sizes';

const devices = {
  media_mobile: `screen and (min_width: ${sizes.mobile_min_width}) and (max_width: ${sizes.mobile_max_width})`,
  media_tablet: `screen and (min_width: ${sizes.tablet_min_width}) and (max_width: ${sizes.tablet_max_width})`,
  media_desktop: `screen and (min_width: ${sizes.desktop_min_width})`,
  media_mobile_tablet: `screen and (min_width: ${sizes.mobile_min_width}) and (max_width: ${sizes.tablet_max_width})`,
};
export default devices;
