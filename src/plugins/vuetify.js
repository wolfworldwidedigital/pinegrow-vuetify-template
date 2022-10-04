// Styles
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
	icons: {
		defaultSet: 'class',
		aliases: Object.keys(aliases).reduce((obj, key) => {
			obj[key] = `mdiSvg:${aliases[key]}`
			return obj
		}, {}),
		sets: {
			mdiSvg
		}
	}
})
