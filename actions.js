exports.getActions = function () {
	return {
		// Standardaktionen hier einfügen, falls vorhanden

		'input_to_aux': {
			name: 'Route Input to AUX (On/Off)',
			options: [
				{
					type: 'number',
					label: 'Input Channel (1–128)',
					id: 'inputChannel',
					default: 1,
					min: 1,
					max: 128,
					required: true
				},
				{
					type: 'number',
					label: 'Mono AUX (1–62)',
					id: 'auxMix',
					default: 1,
					min: 1,
					max: 62,
					required: true
				},
				{
					type: 'dropdown',
					label: 'State',
					id: 'state',
					default: 'on',
					choices: [
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
				},
			],
		},
	}
}
