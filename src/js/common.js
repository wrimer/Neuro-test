import components from './components';
import svg4everybody from 'svg4everybody';
import { DOC, BODY, NO_TOUCH, LOADED } from './constants';
import { isTouch } from './utils';

DOC.ready(components);
svg4everybody();

if (!isTouch()) BODY.addClass(NO_TOUCH);
BODY.addClass(LOADED);
