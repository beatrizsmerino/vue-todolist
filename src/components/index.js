import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrash, faCheckCircle, faPlusCircle, faTimes, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEdit, faTrash, faCheckCircle, faPlusCircle, faTimes, faInfo);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);
