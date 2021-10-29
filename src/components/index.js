import Vue from 'vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
	faTrash,
	faCheckCircle,
	faPlusCircle,
	faTimes
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faTrash, faCheckCircle, faPlusCircle, faTimes);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
