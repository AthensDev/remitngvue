export default {
	baseUrl: import.meta.env.VITE_API_BASE_URL ||  'https://remitng-be.herokuapp.com/api/v1',
	org_id: import.meta.env.VITE_ENAIRA_SECRET || '20114', //20114 18976
	socket_url: import.meta.env.VITE_ENAIRA_KEY || 'ws://iotbridge.owattspay.net',
	socket_token:import.meta.env.VITE_ENAIRA_API_URL || 'Dxej1z3x.QTWfcxoITEF0u7A/IwkwHYBiqZkRdUbFsZ4uEGDttdFK',
}