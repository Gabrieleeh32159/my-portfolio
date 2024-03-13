/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
					"0%": {
				  		width: "0%",
				  		visibility: "hidden"
					},
					"100%": {
				  		width: "100%"
					}  
			  	},
			  	blink: {
					"50%": {
				  		borderColor: "transparent"
					},
					"100%": {
				  		borderColor: "white"
					}  
			  	},
				appone: {
					"0%,32%": {
						visibility: "visible",
						height: "100%",
						width: "100%"
					},
					"33%, 100%": {
						// display: "none"
						visibility: "hidden",
						height: "0",
						width: "0"
					}
				},
				apptwo: {
					"0%,33%": {
						visibility: "hidden",
						height: "0",
						width: "0"
					},
					"34%,66%": {
						visibility: "visible",
						height: "100%",
						width: "100%"
					},
					"66%,100%": {
						visibility: "hidden",
						height: "0",
						width: "0"
					}
				},
				appthree: {
					"0%,66%": {
						visibility: "hidden",
						height: "0",
						width: "0"
					},
					"67%,100%": {
						visibility: "visible",
						height: "100%",
						with: "100%"
					}
				},
			},
			animation: {
			  	appone: "appone 12s infinite, typing 2s steps(36) infinite alternate, blink .7s infinite",
				apptwo: "apptwo 12s infinite, typing 2s steps(36) infinite alternate, blink .7s infinite",
			  	appthree: "appthree 12s infinite, typing 2s steps(36) infinite alternate, blink .7s infinite"
			}
		},
	},
	plugins: [], // , typing 2s steps(36) infinite alternate, blink .7s infinite
}
