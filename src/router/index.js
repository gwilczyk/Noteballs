import { createRouter, createWebHashHistory } from 'vue-router'

import EditNoteView from '@/views/EditNoteView.vue'
import NotesView from '@/views/NotesView.vue'
import StatsView from '@/views/StatsView.vue'

const routes = [
	{
		path: '/',
		name: 'notes',
		component: NotesView,
	},
	{
		path: '/editNote/:noteId',
		name: 'edit-note',
		component: EditNoteView,
	},
	{
		path: '/stats',
		name: 'stats',
		component: StatsView,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
