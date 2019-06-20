import { animateScroll as scroll } from 'react-scroll';

export function scrollTop() {
  scroll.scrollToTop({
    duration: 400,
    smooth: 'easeInQuad',
  });
}
