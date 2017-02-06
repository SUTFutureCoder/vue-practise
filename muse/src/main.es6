/**
 * Created by lin on 17-2-4.
 */
import Vue from '/vue'
import MuseUI from '/muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI);

var museExample = new Vue({
    el: '#testMuse',
    data: {
        message: 'testtesttest'
    }
});